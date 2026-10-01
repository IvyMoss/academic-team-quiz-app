// Interaction tests for buzzing (button + spacebar) and the answer timers.
// Runs app.js against a minimal fake DOM and a controllable fake clock, so
// timer behavior is checked deterministically without a real browser.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');

function fakeClock() {
  let now = 0;
  let nextId = 1;
  const timers = new Map();
  const add = (fn, ms, repeat) => {
    const id = nextId++;
    const delay = Number.isFinite(ms) && ms > 0 ? ms : 1;
    timers.set(id, { fn, at: now + delay, every: repeat ? delay : null });
    return id;
  };
  const clear = (id) => timers.delete(id);
  return {
    now: () => now,
    setInterval: (fn, ms) => add(fn, ms, true),
    setTimeout: (fn, ms) => add(fn, ms, false),
    clearInterval: clear,
    clearTimeout: clear,
    advance(ms) {
      const end = now + ms;
      for (;;) {
        let dueId = null;
        let due = null;
        for (const [id, t] of timers) {
          if (t.at <= end && (!due || t.at < due.at)) { dueId = id; due = t; }
        }
        if (!due) break;
        now = due.at;
        if (due.every) due.at += due.every; else timers.delete(dueId);
        due.fn();
      }
      now = end;
    },
  };
}

function fakeElement(doc, init = {}) {
  const listeners = {};
  const classes = new Set();
  const el = {
    hidden: false, textContent: '', innerHTML: '', value: '', checked: false,
    dataset: {}, style: {}, offsetWidth: 0,
    classList: {
      add: (...c) => c.forEach((x) => classes.add(x)),
      remove: (...c) => c.forEach((x) => classes.delete(x)),
      contains: (c) => classes.has(c),
    },
    setAttribute() {}, appendChild() {},
    querySelector: () => fakeElement(doc),
    getBoundingClientRect: () => ({ top: 0, bottom: 0 }),
    focus() { doc.activeElement = el; },
    addEventListener(type, fn) { (listeners[type] ||= []).push(fn); },
    dispatch(type, event = {}) {
      const e = { defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...event };
      (listeners[type] || []).forEach((fn) => fn(e));
      return e;
    },
    click() { return el.dispatch('click'); },
    ...init,
  };
  return el;
}

function loadApp() {
  const clock = fakeClock();
  const elements = new Map();
  const docListeners = {};
  const doc = {
    activeElement: null,
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, fakeElement(doc));
      return elements.get(id);
    },
    querySelectorAll(sel) {
      if (sel !== '.round-card') return [];
      return ['period1', 'directed', 'period2', 'full'].map((round) => {
        const card = fakeElement(doc, { dataset: { round } });
        elements.set(`round:${round}`, card);
        return card;
      });
    },
    createElement: () => fakeElement(doc),
    addEventListener(type, fn) { (docListeners[type] ||= []).push(fn); },
    keydown(event) {
      const e = { defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...event };
      (docListeners.keydown || []).forEach((fn) => fn(e));
      return e;
    },
  };
  doc.getElementById('speedSelect').value = '220';

  let seed = 42;
  const math = Object.create(Math);
  math.random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };

  const context = vm.createContext({
    Math: math,
    Date: { now: clock.now },
    document: doc,
    window: { innerHeight: 800, scrollBy() {} },
    setInterval: clock.setInterval,
    clearInterval: clock.clearInterval,
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
  });
  for (const file of ['questions.js', 'round-selection.js', 'app.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  }
  const $ = (id) => doc.getElementById(id);
  return {
    clock, doc, $,
    phase: () => vm.runInContext('phase', context),
    start: (round) => elements.get(`round:${round}`).click(),
    wordsShown: () => $('clueText').textContent.split(' ').filter(Boolean).length,
  };
}

test('BUZZ button stops the toss-up read and opens the answer area', () => {
  const app = loadApp();
  app.start('period1');
  assert.equal(app.phase(), 'reading');
  assert.equal(app.$('buzzBtn').hidden, false, 'button is shown while reading');

  app.clock.advance(2000);
  const shown = app.wordsShown();
  assert.ok(shown > 0, 'some words have been read');

  app.$('buzzBtn').click();
  assert.equal(app.phase(), 'answering');
  assert.equal(app.$('buzzBtn').hidden, true);
  assert.equal(app.$('answerArea').hidden, false);
  assert.equal(app.$('answerReveal').hidden, true, 'answer is not revealed on buzz');

  app.clock.advance(10000);
  assert.equal(app.wordsShown(), shown, 'reading stops at the buzz point');
});

test('spacebar buzzes while reading and does not hijack typing afterward', () => {
  const app = loadApp();
  app.start('period1');
  app.clock.advance(1500);

  const buzz = app.doc.keydown({ code: 'Space', key: ' ' });
  assert.ok(buzz.defaultPrevented, 'spacebar does not scroll the page');
  assert.equal(app.phase(), 'answering');

  // buzzIn focuses the answer input; spaces typed there must go through.
  assert.equal(app.doc.activeElement, app.$('answerInput'));
  const typing = app.doc.keydown({ code: 'Space', key: ' ' });
  assert.equal(typing.defaultPrevented, false);
});

test('BUZZ button is hidden and inert during directed questions', () => {
  const app = loadApp();
  app.start('directed');
  assert.equal(app.phase(), 'answering');
  assert.equal(app.$('buzzBtn').hidden, true);
  app.$('buzzBtn').click();
  assert.equal(app.phase(), 'answering', 'clicking does nothing outside a toss-up read');
  assert.equal(app.$('answerReveal').hidden, true);
});

test('an unbuzzed toss-up reads to the end and reveals the answer', () => {
  const app = loadApp();
  app.start('period1');
  app.clock.advance(120000);
  assert.equal(app.phase(), 'revealed');
  assert.equal(app.$('answerReveal').hidden, false);
});

test('timer off: a buzzed toss-up waits indefinitely for the player', () => {
  const app = loadApp();
  app.$('timerToggle').checked = false;
  app.start('period1');
  app.clock.advance(1000);
  app.$('buzzBtn').click();
  app.clock.advance(60000);
  assert.equal(app.phase(), 'answering');
  assert.equal(app.$('timerWrap').hidden, true);
});

test('timer on: a buzzed toss-up auto-reveals after 8 seconds', () => {
  const app = loadApp();
  app.$('timerToggle').checked = true;
  app.start('period1');
  app.clock.advance(1000);
  app.$('buzzBtn').click();
  assert.equal(app.$('timerWrap').hidden, false);

  app.clock.advance(7800);
  assert.equal(app.phase(), 'answering', 'not yet at 7.8s');
  app.clock.advance(400);
  assert.equal(app.phase(), 'revealed');
  assert.equal(app.$('timerText').textContent, "Time's up");
});

test('timer on: a directed question auto-reveals after 15 seconds', () => {
  const app = loadApp();
  app.$('timerToggle').checked = true;
  app.start('directed');
  app.clock.advance(14800);
  assert.equal(app.phase(), 'answering');
  app.clock.advance(400);
  assert.equal(app.phase(), 'revealed');
});

test('revealing early cancels the timer', () => {
  const app = loadApp();
  app.$('timerToggle').checked = true;
  app.start('directed');
  app.clock.advance(3000);
  app.$('revealBtn').click();
  assert.equal(app.phase(), 'revealed');
  app.clock.advance(20000);
  assert.notEqual(app.$('timerText').textContent, "Time's up");
});
