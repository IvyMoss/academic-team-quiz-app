/** Select a fresh regulation-length match from a difficulty bank. */
const TOSSUP_CATEGORY_COUNTS = {
  Literature: 5,
  Science: 5,
  Math: 2,
  History: 6,
  "Fine Arts": 3,
  Geography: 2,
  "Current Events": 2,
  Mythology: 1,
  "Social Science": 1,
  "Theology/Philosophy": 1,
  "Pop Culture / Sports": 1,
  "Misc/General Knowledge": 1,
};

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildPools(bank) {
  const counts = { ...TOSSUP_CATEGORY_COUNTS };
  // Preserve the original regular-season mix: two arts and two sports questions.
  if (bank.id === "regular") {
    counts["Fine Arts"] = 2;
    counts["Pop Culture / Sports"] = 2;
  }
  const selected = Object.entries(counts).flatMap(([category, count]) =>
    shuffled(bank.tossups.filter((q) => q.category === category)).slice(0, count)
  );
  const tossups = shuffled(selected).map((q) => ({ ...q, type: "tossup" }));
  return {
    period1: tossups.slice(0, 15),
    period2: tossups.slice(15, 30),
    directed: shuffled(bank.directed).slice(0, 10).map((q) => ({ ...q, type: "directed" })),
  };
}
