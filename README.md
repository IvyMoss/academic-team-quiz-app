# VHSL Scholastic Bowl Practice

A static browser app for individual practice with progressive toss-up clues,
buzzing, optional answer timers, answer reveals, and self-scoring.

Open `index.html` directly in a browser, or preview over HTTP:

```sh
python3 -m http.server 5173 --bind 127.0.0.1
```

Then visit http://127.0.0.1:5173.

## Question pools and runs

Each of the four levels—Novice, Regular Season, Regionals, and State
Championship—has 60 toss-ups and 20 directed questions: 320 questions total.
The October 2026 expansion adds 30 toss-ups and 10 directed questions per level.

Every start draws a fresh random selection, including consecutive runs at the
same level. Individual toss-up periods use 15 questions, directed rounds use
10, and full matches use 15 toss-ups + 10 directed + 15 toss-ups. Full matches
preserve the original toss-up category counts; the regular-season mix uses two
arts and two sports questions while other levels use three arts and one sports
question. Directed questions are sampled uniformly from the level's directed
pool. No question repeats within a full match. Questions can recur in later
runs; there is no saved question history.

The new toss-ups have four clues progressing toward a giveaway. Answer lines
include accepted alternatives and useful prompts or rejections. Difficulty
labels are editorial estimates rather than tournament-tested calibrations.

Question content lives in `questions.js`; random selection lives in
`round-selection.js`; presentation and session behavior live in `app.js`.
Increment the asset query versions in `index.html` when updating deployed files.

## Checks

```sh
node --test tests/question-banks.test.js
```

Tests check bank sizes, question fields, globally unique canonical answer
labels, 800 sampled full matches, within-match uniqueness, toss-up category
counts, reachability of every question, source-bank immutability, and fresh
selection when starting each round type again.

## Reference spot checks for the expansion

These sources support selected factual clues, not an exhaustive source audit
of all original and added questions:

- [NASA: planets](https://science.nasa.gov/solar-system/planets/) — solar-system context.
- [National Park Service: Saratoga surrender](https://www.nps.gov/places/saratoga-surrender-site.htm) — Burgoyne's surrender and the French alliance.
- [National Gallery: The Ambassadors](https://www.nationalgallery.org.uk/paintings/hans-holbein-the-younger-the-ambassadors) — sitters, broken lute string, and distorted skull.
- [Nobel Prize: physics history](https://www.nobelprize.org/prizes/themes/the-nobel-prize-in-physics-1901-2000/) — photoelectric effect and Pauli exclusion principle.
- [IPCC: history](https://www.ipcc.ch/about/history/) — founding organizations and year.
- [WTO: the GATT years](https://www.wto.org/english/theWTO_e/whatis_e/tif_e/fact4_e.htm) — GATT and the WTO's establishment.
- [African Union: overview](https://www.au.int/en/overview) — succession to the OAU and 2002 launch.
- [IMF: special drawing rights](https://www.imf.org/en/topics/special-drawing-right) — the IMF's international reserve asset.
- [Nobel Prize: Peace Prize 2005](https://www.nobelprize.org/prizes/peace/2005/summary/%26lang%3Den/) — the award to the IAEA and Mohamed ElBaradei.
