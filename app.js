/**
 * VHSL Scholastic Bowl practice app.
 *
 * Round structure (see academic-team.md research note):
 *   Period 1  — toss-ups, pyramidal, buzz-in with spacebar
 *   Directed  — bounce-back round, single non-pyramidal clue, no buzzing
 *   Period 2  — toss-ups, pyramidal, buzz-in with spacebar
 *
 * The real format is 15 + 10 + 15. This sample bank is smaller, so each
 * period simply uses half the toss-up bank (capped at 15) and the round
 * labels note the bank size — add more questions to questions.js to grow
 * toward full-length periods.
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
  answerArea: el("answerArea"),
  answerInput: el("answerInput"),
  revealBtn: el("revealBtn"),
  answerReveal: el("answerReveal"),
  answerText: el("answerText"),
  bounceNote: el("bounceNote"),
  gradeCorrectBtn: el("gradeCorrectBtn"),
  gradeIncorrectBtn: el("gradeIncorrectBtn"),
  nextBtn: el("nextBtn"),
  summaryTitle: el("summaryTitle"),
  summaryStat: el("summaryStat"),
  homeBtn: el("homeBtn"),
};

// ---- Round pools ------------------------------------------------------

function buildPools() {
  const half = Math.ceil(TOSSUPS.length / 2);
  const period1 = TOSSUPS.slice(0, half).map((q) => ({ ...q, type: "tossup" }));
  const period2 = TOSSUPS.slice(half).map((q) => ({ ...q, type: "tossup" }));
  const directed = DIRECTED.map((q) => ({ ...q, type: "directed" }));
  return { period1, directed, period2 };
}

const pools = buildPools();

ui.bankNote.textContent =
  `Sample bank: ${TOSSUPS.length} toss-ups + ${DIRECTED.length} directed questions ` +
  `(a real VHSL round is 15 + 10 + 15 — periods below are scaled to this demo bank).`;
ui.countPeriod1.textContent = `${pools.period1.length} question${pools.period1.length === 1 ? "" : "s"}`;
ui.countDirected.textContent = `${pools.directed.length} question${pools.directed.length === 1 ? "" : "s"}`;
ui.countPeriod2.textContent = `${pools.period2.length} question${pools.period2.length === 1 ? "" : "s"}`;

const ROUND_LABELS = {
  period1: "Period 1 — Toss-Ups",
  directed: "Directed Round",
  period2: "Period 2 — Toss-Ups",
};

// ---- Session state ------------------------------------------------------

const session = { correct: 0, total: 0 };

const match = {
  queue: [],       // [{ round, question }]
  index: 0,
  roundBreaks: {}, // index -> round label shown before that question
};

let phase = "idle"; // 'reading' | 'answering' | 'revealed'
let readWords = [];
let revealCount = 0;
let readTimer = null;
let answerTimer = null;
let answerTimerStart = null;
let answerTimerDuration = 0;
let currentQ = null;
let currentRoundKey = null;
let graded = false;

function updateScoreDisplay() {
  ui.scoreCorrect.textContent = session.correct;
  ui.scoreTotal.textContent = session.total;
}

function showScreen(name) {
  Object.values(screens).forEach((s) => (s.hidden = true));
  screens[name].hidden = false;
}

// ---- Starting a round ------------------------------------------------

function startRound(roundKey) {
  let queue;
  if (roundKey === "full") {
    queue = [
      ...pools.period1.map((q) => ({ round: "period1", question: q })),
      ...pools.directed.map((q) => ({ round: "directed", question: q })),
      ...pools.period2.map((q) => ({ round: "period2", question: q })),
    ];
  } else {
    queue = pools[roundKey].map((q) => ({ round: roundKey, question: q }));
  }

  match.queue = queue;
  match.index = 0;

  if (queue.length === 0) return;
  showScreen("question");
  loadCurrentQuestion();
}

let roundStats = { correct: 0, total: 0 };

function endRound() {
  showScreen("summary");
  const pct = roundStats.total ? Math.round((roundStats.correct / roundStats.total) * 100) : 0;
  ui.summaryTitle.textContent = "Round Complete";
  ui.summaryStat.textContent = `${roundStats.correct} / ${roundStats.total} correct (${pct}%)`;
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
  const fullText = currentQ.clues.join(" ");
  readWords = fullText.split(" ");
  revealCount = 0;
  ui.clueText.textContent = "";
  ui.buzzHint.textContent = "Press Space to buzz in";
  ui.buzzHint.classList.remove("dim");

  const speed = parseInt(ui.speedSelect.value, 10);
  const tick = () => {
    if (phase !== "reading") return;
    revealCount += 1;
    renderClueText();
    if (revealCount >= readWords.length) {
      clearInterval(readTimer);
      readTimer = null;
      // Nobody buzzed — question is "dead," go straight to reveal.
      enterAnswering(true);
      return;
    }
    const word = readWords[revealCount - 1];
    const extraPause = /[.,;:]$/.test(word) ? speed * 0.6 : 0;
    if (extraPause > 0) {
      clearInterval(readTimer);
      readTimer = setTimeout(() => {
        readTimer = setInterval(tick, speed);
      }, extraPause);
    }
  };
  readTimer = setInterval(tick, speed);
}

function renderClueText() {
  ui.clueText.textContent = readWords.slice(0, revealCount).join(" ");
}

function buzzIn() {
  if (phase !== "reading") return;
  clearReadTimer();
  renderClueText();
  ui.buzzHint.textContent = "BUZZ! Answer now.";
  ui.buzzHint.classList.remove("dim");
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
  ui.answerArea.hidden = false;
  ui.answerInput.focus();
  maybeStartAnswerTimer(DIRECTED_ANSWER_SECONDS);
}

// ---- Answering (post-buzz for toss-ups, immediate for directed) ------

function enterAnswering(noBuzz) {
  phase = "answering";
  ui.answerArea.hidden = false;
  ui.answerInput.focus();
  if (noBuzz) {
    ui.buzzHint.textContent = "End of question — no buzz. Here's the answer:";
    ui.buzzHint.classList.add("dim");
    revealAnswer();
    return;
  }
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
  // Force reflow so the transition below actually animates from 100%.
  void ui.timerBarFill.offsetWidth;
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

// ---- Event wiring ------------------------------------

document.querySelectorAll(".round-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    roundStats = { correct: 0, total: 0 };
    startRound(btn.dataset.round);
  });
});

ui.resetScoreBtn.addEventListener("click", () => {
  session.correct = 0;
  session.total = 0;
  updateScoreDisplay();
});

ui.revealBtn.addEventListener("click", revealAnswer);
ui.answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") revealAnswer();
});

ui.gradeCorrectBtn.addEventListener("click", () => grade(true));
ui.gradeIncorrectBtn.addEventListener("click", () => grade(false));
ui.nextBtn.addEventListener("click", advance);
ui.homeBtn.addEventListener("click", () => {
  clearTimers();
  phase = "idle";
  showScreen("home");
});

document.addEventListener("keydown", (e) => {
  if (screens.question.hidden) return;
  if (e.code === "Space" || e.key === " ") {
    if (phase === "reading") {
      e.preventDefault();
      buzzIn();
    } else if (document.activeElement !== ui.answerInput) {
      // Avoid hijacking spacebar from the answer input's normal typing.
      e.preventDefault();
    }
  }
});

updateScoreDisplay();
