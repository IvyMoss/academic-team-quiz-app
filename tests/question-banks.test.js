const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');

function load() {
  let seed = 123456789;
  const math = Object.create(Math);
  math.random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const context = vm.createContext({ Math: math });
  for (const file of ['questions.js', 'round-selection.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  }
  return { context, ...vm.runInContext('({ BANKS, buildPools, TOSSUP_CATEGORY_COUNTS })', context) };
}

const normalize = (value) => JSON.parse(JSON.stringify(value));

test('all banks contain 60 toss-ups and 20 directed questions with unique answers', () => {
  const { BANKS } = load();
  const answers = new Set();
  for (const bank of BANKS) {
    assert.equal(bank.tossups.length, 60, bank.id);
    assert.equal(bank.directed.length, 20, bank.id);
    for (const q of [...bank.tossups, ...bank.directed]) {
      for (const field of ['category', 'answer', 'answerLine']) {
        assert.ok(typeof q[field] === 'string' && q[field].trim(), `${bank.id}: ${field}`);
      }
      const answer = q.answer.toLowerCase().replace(/[^a-z0-9]/g, '');
      assert.ok(!answers.has(answer), `duplicate answer: ${q.answer}`);
      answers.add(answer);
    }
    for (const q of bank.tossups) {
      assert.ok(q.clues.length >= 4, q.answer);
      assert.ok(q.clues.every((clue) => typeof clue === 'string' && clue.trim()), q.answer);
      assert.match(q.clues.at(-1), /For 10 points/i, q.answer);
    }
    for (const q of bank.directed) assert.ok(q.question.trim(), q.answer);
  }
  assert.equal(answers.size, 320);
});

// Two questions in the same bank can land in the same match, so one question's
// text must not name another's answer (e.g. a "Stravinsky" toss-up whose
// giveaway names The Rite of Spring, which is also an answer in that bank).
// Pairs below were reviewed and are only word overlaps, not giveaways.
const REVIEWED_OVERLAPS = new Set([
  'novice: Water -> Mark Twain', // "water depth" in the pen-name clue
  'novice: Water -> The Amazon River',
  'novice: Water -> Antarctica',
  'novice: Water -> Evaporation',
  'novice: The heart -> The Wonderful Wizard of Oz', // the Tin Man wants a heart
  'novice: Eight -> The Sun', // "eight minutes"; the directed question is about an octagon
  'regular: Carbon -> Photosynthesis', // "carbon dioxide"
  'regular: The Renaissance -> Langston Hughes', // "Harlem Renaissance"
  'regular: Three -> The Pythagorean theorem',
  'regular: Three -> Macbeth', // "three witches"; the directed answer is a basketball shot
  'regular: The nucleus -> The electron', // atomic nucleus vs. the cell organelle
  'regional: Beloved -> Don Quixote', // "a beloved named Dulcinea"
]);

test('no question names another answer from the same bank', () => {
  const { BANKS } = load();
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const leaks = [];
  for (const bank of BANKS) {
    const all = [...bank.tossups, ...bank.directed];
    for (const a of all) {
      const phrase = a.answer.replace(/^(the|a|an) /i, '').toLowerCase();
      if (phrase.length < 5 || /^\d/.test(phrase)) continue;
      const pattern = new RegExp(`\\b${escape(phrase)}\\b`);
      for (const o of all) {
        if (o === a) continue;
        const text = (o.clues ? o.clues.join(' ') : o.question).toLowerCase();
        const key = `${bank.id}: ${a.answer} -> ${o.answer}`;
        if (pattern.test(text) && !REVIEWED_OVERLAPS.has(key)) leaks.push(key);
      }
    }
  }
  assert.deepEqual(leaks, []);
});

test('random matches preserve lengths, toss-up subject mix, and source data', () => {
  const { BANKS, buildPools, TOSSUP_CATEGORY_COUNTS } = load();
  const before = JSON.stringify(BANKS);
  for (const bank of BANKS) {
    const counts = normalize(TOSSUP_CATEGORY_COUNTS);
    if (bank.id === 'regular') {
      counts['Fine Arts'] = 2;
      counts['Pop Culture / Sports'] = 2;
    }
    const seenTossups = new Set();
    const seenDirected = new Set();
    const signatures = new Set();
    for (let run = 0; run < 200; run += 1) {
      const pools = buildPools(bank);
      assert.equal(pools.period1.length, 15);
      assert.equal(pools.directed.length, 10);
      assert.equal(pools.period2.length, 15);
      const tossups = [...pools.period1, ...pools.period2];
      const all = [...tossups, ...pools.directed];
      assert.equal(new Set(all.map((q) => q.answer)).size, 40);
      const actualCounts = {};
      for (const q of tossups) {
        assert.equal(q.type, 'tossup');
        assert.ok(bank.tossups.some((source) => source.answer === q.answer));
        actualCounts[q.category] = (actualCounts[q.category] || 0) + 1;
        seenTossups.add(q.answer);
      }
      assert.deepEqual(actualCounts, counts);
      for (const q of pools.directed) {
        assert.equal(q.type, 'directed');
        assert.ok(bank.directed.some((source) => source.answer === q.answer));
        seenDirected.add(q.answer);
      }
      signatures.add(all.map((q) => q.answer).join('|'));
    }
    assert.equal(seenTossups.size, 60, `${bank.id}: every toss-up is reachable`);
    assert.equal(seenDirected.size, 20, `${bank.id}: every directed question is reachable`);
    assert.equal(signatures.size, 200, `${bank.id}: varied runs`);
  }
  assert.equal(JSON.stringify(BANKS), before, 'sampling does not mutate the source banks');
});

function element() {
  return {
    hidden: false, textContent: '', innerHTML: '', value: '', checked: false,
    dataset: {}, classList: { add() {}, remove() {} },
    setAttribute() {}, addEventListener() {}, appendChild() {},
    querySelector() { return element(); },
    scrollIntoView() {},
  };
}

test('starting every round samples again, including consecutive runs in the same bank', () => {
  const { context, BANKS } = load();
  const elements = new Map();
  context.document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, element());
      return elements.get(id);
    },
    querySelectorAll() { return []; },
    createElement() { return element(); },
    addEventListener() {},
  };
  context.setInterval = () => 1;
  context.clearInterval = () => {};
  context.setTimeout = () => 1;
  context.clearTimeout = () => {};
  vm.runInContext(fs.readFileSync(path.join(root, 'app.js'), 'utf8'), context);
  // Test queue construction independently of the word-reveal animation.
  vm.runInContext('loadCurrentQuestion = () => {};', context);
  for (const bank of BANKS) {
    vm.runInContext(`selectBank(${JSON.stringify(bank.id)})`, context);
    for (const [round, count] of [['period1', 15], ['directed', 10], ['period2', 15], ['full', 40]]) {
      const start = () => normalize(vm.runInContext(
        `startRound(${JSON.stringify(round)}); match.queue.map(e => ({ round: e.round, answer: e.question.answer }))`, context
      ));
      const first = start();
      const second = start();
      assert.equal(first.length, count);
      assert.equal(second.length, count);
      assert.notDeepEqual(first, second, `${bank.id} / ${round}: fresh selection`);
      if (round === 'full') {
        assert.ok(first.slice(0, 15).every((q) => q.round === 'period1'));
        assert.ok(first.slice(15, 25).every((q) => q.round === 'directed'));
        assert.ok(first.slice(25).every((q) => q.round === 'period2'));
      }
    }
  }
});
