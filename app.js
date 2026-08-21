/**
 * VHSL Scholastic Bowl practice app.
 *
 * Round structure (see academic-team.md research note):
 *   Period 1  — 15 toss-ups, pyramidal, buzz-in
 *   Directed  — 10 bounce-back questions, single non-pyramidal clue, no buzzing
 *   Period 2  — 15 toss-ups, pyramidal, buzz-in
 *
 * Questions come from questions.js, which exposes BANKS: a list of
 * difficulty-tiered sets, each a full 30 toss-ups + 10 directed questions.
 * Periods split a bank's toss-ups in half, so a 30-toss-up bank yields the
 * regulation 15 + 10 + 15. Smaller banks still work; periods just shrink.
 *
 * Buzzing is bound to both the spacebar and an on-screen BUZZ button so the
 * app is usable on phones and tablets.
 */

const TOSSUP_ANSWER_SECONDS = 8;
const DIRECTED_ANSWER_SECONDS = 15;

const el = (id) => document.getElementById(id);

const screens = {
  home: el("screen-home"),
  question: el("screen-question"),
  summary: el("screen-summary"),
};

const ui = {
  scoreCorrect: el("scoreCorrect"),
  scoreTotal: el("scoreTotal"),
  timerToggle: el("timerToggle"),
  speedSelect: el("speedSelect"),
  bankNote: el("bankNote"),
  bankGrid: el("bankGrid"),
  countPeriod1: el("count-period1"),
  countDirected: el("count-directed"),
  countPeriod2: el("count-period2"),
  resetScoreBtn: el("resetScoreBtn"),
  roundLabel: el("roundLabel"),
  categoryLabel: el("categoryLabel"),
  qCounter: el("qCounter"),
  timerWrap: el("timerWrap"),
  timerBarFill: el("timerBarFill"),
  timerText: el("timerText"),
  clueText: el("clueText"),
  buzzHint: el("buzzHint"),
  buzzBtn: el("buzzBtn"),
  answerArea: el("answerArea"),
  answerInput: el("answerInput"),
  revealBtn: el("revealBtn"),
  answerReveal: el("answerReveal"),
  answerText: el("answerText"),
  bounceNote: el("bounceNote"),
  gradeCorrectBtn: el("gradeCorrectBtn"),
  gradeIncorrectBtn: el("gradeIncorrectBtn"),
  nextBtn: el("nextBtn"),
  quitRoundBtn: el("quitRoundBtn"),
  summaryTitle: el("summaryTitle"),
  summaryStat: el("summaryStat"),
  summarySub: el("summarySub"),
  homeBtn: el("homeBtn"),
};

// ---- Bank selection ----------------------------------------------------

let currentBankId =
  (typeof DEFAULT_BANK_ID !== "undefined" && BANKS.some((b) => b.id === DEFAULT_BANK_ID))
    ? DEFAULT_BANK_ID
    : BANKS[0].id;

let pools = {};

function currentBank() {
  return BANKS.find((b) => b.id === currentBankId);
}

function buildPools(bank) {
  const half = Math.ceil(bank.tossups.length / 2);
  return {
    period1: bank.tossups.slice(0, half).map((q) => ({ ...q, type: "tossup" })),
    period2: bank.tossups.slice(half).map((q) => ({ ...q, type: "tossup" })),
    directed: bank.directed.map((q) => ({ ...q, type: "directed" })),
  };
}

function renderBankGrid() {
  ui.bankGrid.innerHTML = "";
  BANKS.forEach((bank) => {
    const btn = document.createElement("button");
    btn.className = "bank-card" + (bank.id === currentBankId ? " selected" : "");
    btn.dataset.bank = bank.id;
    btn.setAttribute("aria-pressed", String(bank.id === currentBankId));
    btn.innerHTML = `
      <span class="bank-card-top">
        <span class="bank-name"></span>
        <span class="difficulty-badge difficulty-${bank.id}"></span>
      </span>
      <span class="bank-blurb"></span>
      <span class="bank-counts"></span>`;
    btn.querySelector(".bank-name").textContent = bank.name;
    btn.querySelector(".difficulty-badge").textContent = bank.difficulty;
    btn.querySelector(".bank-blurb").textContent = bank.blurb;
    btn.querySelector(".bank-counts").textContent =
      `${bank.tossups.length} toss-ups · ${bank.directed.length} directed`;
    btn.addEventListener("click", () => selectBank(bank.id));
    ui.bankGrid.appendChild(btn);
  });
}

function selectBank(id) {
  currentBankId = id;
  pools = buildPools(currentBank());
  renderBankGrid();
  updateBankInfo();
}

function updateBankInfo() {
  const bank = currentBank();
  const regulation =
    pools.period1.length === 15 && pools.directed.length === 10 && pools.period2.length === 15;
  ui.bankNote.textContent = regulation
    ? `${bank.name} (${bank.difficulty}): full regulation VHSL length — 15 + 10 + 15.`
    : `${bank.name} (${bank.difficulty}): ${bank.tossups.length} toss-ups + ${bank.directed.length} directed ` +
      `(a regulation round is 15 + 10 + 15 — periods are scaled to this bank).`;
  ui.countPeriod1.textContent = `${pools.period1.length} questions`;
  ui.countDirected.textContent = `${pools.directed.length} questions`;
  ui.countPeriod2.textContent = `${pools.period2.length} questions`;
}

const ROUND_LABELS = {
  period1: "Period 1 — Toss-Ups",
  directed: "Directed Round",
  period2: "Period 2 — Toss-Ups",
};

// ---- Session state ------------------------------------------------------

const session = { correct: 0, total: 0 };
let roundStats = { correct: 0, total: 0 };

const match = { queue: [], index: 0 };

let phase = "idle"; // 'reading' | 'answering' | 'revealed'
let readWords = [];
let revealCount = 0;
let readTimer = null;
let answerTimer = null;
let answerTimerStart = null;
let answerTimerDuration = 0;
let currentQ = null;
let currentRoundKey = null;
let currentRoundName = "";
let graded = false;

function updateScoreDisplay() {
  ui.scoreCorrect.textContent = session.correct;
  ui.scoreTotal.textContent = session.total;
}

function showScreen(name) {
  Object.values(screens).forEach((s) => (s.hidden = true));
  screens[name].hidden = false;
}

// ---- Starting / ending a round ----------------------------------------

function startRound(roundKey) {
  let queue;
  if (roundKey === "full") {
    queue = [
      ...pools.period1.map((q) => ({ round: "period1", question: q })),
      ...pools.directed.map((q) => ({ round: "directed", question: q })),
      ...pools.period2.map((q) => ({ round: "period2", question: q })),
    ];
    currentRoundName = "Full Match";
  } else {
    queue = pools[roundKey].map((q) => ({ round: roundKey, question: q }));
    currentRoundName = ROUND_LABELS[roundKey];
  }
  if (queue.length === 0) return;

  roundStats = { correct: 0, total: 0 };
  match.queue = queue;
  match.index = 0;
  showScreen("question");
  loadCurrentQuestion();
}

function endRound() {
  clearTimers();
  phase = "idle";
  showScreen("summary");
  const pct = roundStats.total ? Math.round((roundStats.correct / roundStats.total) * 100) : 0;
  ui.summaryTitle.textContent = `${currentRoundName} Complete`;
  ui.summaryStat.textContent = `${roundStats.correct} / ${roundStats.total} correct (${pct}%)`;
  ui.summarySub.textContent = `${currentBank().name} · ${currentBank().difficulty}`;
}

// ---- Loading / advancing questions ------------------------------------

function loadCurrentQuestion() {
  clearTimers();
  const entry = match.queue[match.index];
  currentQ = entry.question;
  currentRoundKey = entry.round;
  graded = false;

  ui.roundLabel.textContent = ROUND_LABELS[currentRoundKey];
  ui.categoryLabel.textContent = currentQ.category;
  ui.qCounter.textContent = `Question ${match.index + 1} of ${match.queue.length}`;

  ui.answerArea.hidden = true;
  ui.answerReveal.hidden = true;
  ui.answerInput.value = "";
  ui.gradeCorrectBtn.classList.remove("selected");
  ui.gradeIncorrectBtn.classList.remove("selected");
  ui.nextBtn.hidden = true;
  ui.bounceNote.hidden = currentQ.type !== "directed";
  ui.timerWrap.hidden = true;

  if (currentQ.type === "tossup") {
    startTossupReading();
  } else {
    startDirectedQuestion();
  }
}

function advance() {
  match.index += 1;
  if (match.index >= match.queue.length) {
    endRound();
  } else {
    loadCurrentQuestion();
  }
}

// ---- Toss-up reading / buzzing ------------------------------------

function startTossupReading() {
  phase = "reading";
  readWords = currentQ.clues.join(" ").split(" ");
  revealCount = 0;
  ui.clueText.textContent = "";
  ui.buzzHint.textContent = "Reading… buzz the moment you know it.";
  ui.buzzHint.classList.add("dim");
  ui.buzzBtn.hidden = false;
  ui.buzzBtn.classList.remove("fired");

  const speed = parseInt(ui.speedSelect.value, 10);
  const tick = () => {
    if (phase !== "reading") return;
    revealCount += 1;
    renderClueText();
    if (revealCount >= readWords.length) {
      clearReadTimer();
      enterAnswering(true); // ran out of question — nobody buzzed
      return;
    }
    // Brief extra pause after punctuation, so the read sounds natural.
    const word = readWords[revealCount - 1];
    if (/[.,;:]$/.test(word)) {
      clearReadTimer();
      readTimer = setTimeout(() => {
        readTimer = setInterval(tick, speed);
      }, speed * 0.6);
    }
  };
  readTimer = setInterval(tick, speed);
}

function renderClueText() {
  ui.clueText.textContent = readWords.slice(0, revealCount).join(" ");
  keepReadingInView();
}

// As the question grows past the fold, follow it — otherwise a long toss-up
// scrolls its newest clues out of sight while the reader is trying to buzz.
function keepReadingInView() {
  const margin = 150; // leave room for the sticky BUZZ button
  const overflow = ui.clueText.getBoundingClientRect().bottom - (window.innerHeight - margin);
  if (overflow > 0) window.scrollBy(0, overflow);
}

function buzzIn() {
  if (phase !== "reading") return;
  clearReadTimer();
  renderClueText();
  ui.buzzHint.textContent = "BUZZ! Answer now.";
  ui.buzzHint.classList.remove("dim");
  ui.buzzBtn.classList.add("fired");
  ui.buzzBtn.hidden = true;
  enterAnswering(false);
}

function clearReadTimer() {
  if (readTimer) {
    clearInterval(readTimer);
    clearTimeout(readTimer);
    readTimer = null;
  }
}

// ---- Directed questions ------------------------------------

function startDirectedQuestion() {
  phase = "answering";
  ui.clueText.textContent = currentQ.question;
  ui.buzzHint.textContent = "No buzzing — this one's asked straight through.";
  ui.buzzHint.classList.add("dim");
  ui.buzzBtn.hidden = true;
  ui.answerArea.hidden = false;
  maybeStartAnswerTimer(DIRECTED_ANSWER_SECONDS);
}

// ---- Answering ------------------------------------

function enterAnswering(ranOut) {
  phase = "answering";
  ui.buzzBtn.hidden = true;
  ui.answerArea.hidden = false;
  if (ranOut) {
    ui.buzzHint.textContent = "End of question — no buzz. Here's the answer:";
    ui.buzzHint.classList.add("dim");
    revealAnswer();
    return;
  }
  ui.answerInput.focus();
  maybeStartAnswerTimer(TOSSUP_ANSWER_SECONDS);
}

// ---- Timer (answer phase) ------------------------------------

function maybeStartAnswerTimer(seconds) {
  if (!ui.timerToggle.checked) {
    ui.timerWrap.hidden = true;
    return;
  }
  ui.timerWrap.hidden = false;
  answerTimerDuration = seconds;
  answerTimerStart = Date.now();
  ui.timerBarFill.classList.remove("warning", "danger");
  ui.timerBarFill.style.transition = "none";
  ui.timerBarFill.style.width = "100%";
  void ui.timerBarFill.offsetWidth; // reflow so the transition animates from 100%
  ui.timerBarFill.style.transition = `width ${seconds}s linear`;
  ui.timerBarFill.style.width = "0%";

  updateTimerText();
  answerTimer = setInterval(() => {
    const remaining = answerTimerDuration - (Date.now() - answerTimerStart) / 1000;
    if (remaining <= 0) {
      clearAnswerTimer();
      ui.timerText.textContent = "Time's up";
      if (phase === "answering") revealAnswer();
      return;
    }
    updateTimerText(remaining);
    if (remaining <= seconds * 0.25) ui.timerBarFill.classList.add("danger");
    else if (remaining <= seconds * 0.5) ui.timerBarFill.classList.add("warning");
  }, 150);
}

function updateTimerText(remaining) {
  const r = remaining === undefined ? answerTimerDuration : remaining;
  ui.timerText.textContent = `${r.toFixed(1)}s`;
}

function clearAnswerTimer() {
  if (answerTimer) {
    clearInterval(answerTimer);
    answerTimer = null;
  }
}

function clearTimers() {
  clearReadTimer();
  clearAnswerTimer();
}

// ---- Reveal & grading ------------------------------------

function revealAnswer() {
  if (phase === "revealed") return;
  clearAnswerTimer();
  phase = "revealed";
  ui.answerText.textContent = currentQ.answerLine || currentQ.answer;
  ui.answerReveal.hidden = false;
}

function grade(isCorrect) {
  if (graded) return;
  graded = true;
  session.total += 1;
  roundStats.total += 1;
  if (isCorrect) {
    session.correct += 1;
    roundStats.correct += 1;
    ui.gradeCorrectBtn.classList.add("selected");
  } else {
    ui.gradeIncorrectBtn.classList.add("selected");
  }
  updateScoreDisplay();
  ui.nextBtn.hidden = false;
  ui.nextBtn.focus();
}

function goHome() {
  clearTimers();
  phase = "idle";
  ui.buzzBtn.hidden = true;
  showScreen("home");
}

// ---- Event wiring ------------------------------------

document.querySelectorAll(".round-card").forEach((btn) => {
  btn.addEventListener("click", () => startRound(btn.dataset.round));
});

ui.resetScoreBtn.addEventListener("click", () => {
  session.correct = 0;
  session.total = 0;
  updateScoreDisplay();
});

// Buzz button: the mobile/touch equivalent of the spacebar.
ui.buzzBtn.addEventListener("click", buzzIn);

ui.revealBtn.addEventListener("click", revealAnswer);
ui.answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") revealAnswer();
});

ui.gradeCorrectBtn.addEventListener("click", () => grade(true));
ui.gradeIncorrectBtn.addEventListener("click", () => grade(false));
ui.nextBtn.addEventListener("click", advance);
ui.quitRoundBtn.addEventListener("click", goHome);
ui.homeBtn.addEventListener("click", goHome);

document.addEventListener("keydown", (e) => {
  if (screens.question.hidden) return;
  if (e.code !== "Space" && e.key !== " ") return;
  if (phase === "reading") {
    e.preventDefault();
    buzzIn();
  } else if (document.activeElement !== ui.answerInput) {
    // Keep the spacebar from scrolling the page mid-question, but don't
    // interfere with typing an answer.
    e.preventDefault();
  }
});

// ---- Init ------------------------------------

renderBankGrid();
selectBank(currentBankId);
updateScoreDisplay();
