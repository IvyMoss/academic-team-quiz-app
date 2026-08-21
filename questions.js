/**
 * Sample VHSL-style practice question bank.
 *
 * TOSSUPS: pyramidal — `clues` is ordered hardest-clue-first, giveaway last,
 * per the methodology in the academic-team.md research note (steps 1-5).
 * DIRECTED: single, non-pyramidal clue per question (step 6).
 *
 * Expand these arrays with more questions (and more categories, weighted
 * per the NAQT HS distribution — see the research note step 1) as the
 * question bank grows. The app automatically adapts to however many
 * questions exist; it does not require exactly 15/10/15.
 */

const TOSSUPS = [
  {
    category: "Literature",
    clues: [
      "In this novel, a minor character named Justine Moritz is wrongly executed for a murder actually committed by the title creature.",
      "The creature in this novel secretly learns language by observing the De Lacey family through a chink in a hovel wall.",
      "The monster demands that its creator build it a female companion, a request that is ultimately refused and destroyed.",
      "This novel opens with a frame narrative of letters written by Arctic explorer Robert Walton.",
      "For 10 points—name this 1818 novel by Mary Shelley about a scientist who assembles a living being from dead tissue."
    ],
    answer: "Frankenstein",
    answerLine: "Frankenstein; or, The Modern Prometheus (accept The Modern Prometheus; prompt on \"the monster\" or \"the creature\")"
  },
  {
    category: "Literature",
    clues: [
      "In this epic, the title character blinds a Cyclops named Polyphemus, a son of Poseidon, earning that god's wrath.",
      "A witch named Circe turns this hero's men into pigs on the island of Aeaea.",
      "This hero is aided throughout by the goddess Athena and returns home disguised as a beggar.",
      "The hero's wife Penelope fends off suitors by unweaving a burial shroud each night.",
      "For 10 points—name this Homeric epic about Odysseus's ten-year journey home from the Trojan War."
    ],
    answer: "The Odyssey",
    answerLine: "The Odyssey (do not accept \"The Iliad\"; prompt on \"Odysseus\")"
  },
  {
    category: "Literature",
    clues: [
      "A reclusive neighbor named Boo Radley leaves small gifts in a tree knot for two children in this novel.",
      "Atticus Finch defends a Black man named Tom Robinson, who is falsely accused of rape, in this novel.",
      "The novel is narrated in retrospect by a young girl nicknamed Scout.",
      "Its events take place in the fictional town of Maycomb, Alabama during the Great Depression.",
      "For 10 points—name this 1960 novel by Harper Lee."
    ],
    answer: "To Kill a Mockingbird",
    answerLine: "To Kill a Mockingbird (accept clear-knowledge answers referencing the novel)"
  },
  {
    category: "Science",
    clues: [
      "This organelle contains its own circular DNA and is thought to descend from an engulfed bacterium under the endosymbiotic theory.",
      "The inner membrane of this organelle is folded into structures called cristae to increase surface area.",
      "This organelle is the site of the Krebs cycle and oxidative phosphorylation.",
      "It is often called the \"powerhouse of the cell.\"",
      "For 10 points—name this organelle that produces most of a cell's ATP."
    ],
    answer: "Mitochondria",
    answerLine: "mitochondria (accept mitochondrion)"
  },
  {
    category: "Science",
    clues: [
      "This element's most common isotope has 6 protons and 6 neutrons; its radioactive isotope-14 form is used in dating organic remains.",
      "It forms allotropes including diamond, graphite, and buckminsterfullerene.",
      "Every known organic compound contains this element bonded to hydrogen.",
      "It has atomic number 6 and symbol C.",
      "For 10 points—name this element that forms the structural backbone of all known life."
    ],
    answer: "Carbon",
    answerLine: "carbon"
  },
  {
    category: "Science",
    clues: [
      "This scientist's book Opticks used a prism to show that white light splits into a spectrum of colors.",
      "He engaged in a bitter priority dispute with Gottfried Leibniz over the invention of calculus.",
      "He formulated a law stating that force equals mass times acceleration.",
      "He is said to have been inspired by a falling apple.",
      "For 10 points—name this English physicist who described universal gravitation and wrote the Principia Mathematica."
    ],
    answer: "Isaac Newton",
    answerLine: "Sir Isaac Newton"
  },
  {
    category: "History",
    clues: [
      "This event's Reign of Terror was overseen by the Committee of Public Safety under Maximilien Robespierre.",
      "It began after the Estates-General convened and the Third Estate formed the Tennis Court Oath.",
      "It is traditionally dated from the storming of a fortress-prison on July 14, 1789.",
      "It overthrew the Bourbon monarchy of Louis XVI.",
      "For 10 points—name this late-18th-century upheaval in France that eventually led to Napoleon's rise to power."
    ],
    answer: "The French Revolution",
    answerLine: "French Revolution"
  },
  {
    category: "History",
    clues: [
      "This conflict's Cuban Missile Crisis of 1962 brought two superpowers to the brink of nuclear war.",
      "It featured a U.S. strategy of \"containment\" first articulated by diplomat George Kennan.",
      "Its most visible physical symbol was a wall built in Berlin in 1961.",
      "It was fought primarily between the United States and the Soviet Union.",
      "For 10 points—name this decades-long geopolitical standoff that never erupted into direct war between its two main powers."
    ],
    answer: "The Cold War",
    answerLine: "Cold War"
  },
  {
    category: "History",
    clues: [
      "This president suspended habeas corpus during a major internal conflict and delivered a famous address at a Pennsylvania battlefield.",
      "He issued the Emancipation Proclamation in 1863.",
      "He was assassinated by John Wilkes Booth at Ford's Theatre in 1865.",
      "He led the Union during the Civil War.",
      "For 10 points—name this 16th President of the United States."
    ],
    answer: "Abraham Lincoln",
    answerLine: "Abraham Lincoln"
  },
  {
    category: "Fine Arts",
    clues: [
      "This artist painted a swirling night sky over a village, dominated by a large cypress tree in the foreground.",
      "He famously severed part of his own ear during a mental health crisis in Arles, France.",
      "His works include Sunflowers and Café Terrace at Night.",
      "He was a Dutch Post-Impressionist painter who sold almost nothing during his lifetime.",
      "For 10 points—name this painter of The Starry Night."
    ],
    answer: "Vincent van Gogh",
    answerLine: "Vincent van Gogh (accept either name)"
  },
  {
    category: "Geography",
    clues: [
      "This river's White and Blue tributaries converge at Khartoum, Sudan.",
      "It flows north into the Mediterranean Sea through a large delta near Cairo.",
      "Ancient Egyptian civilization depended on this river's annual flooding to fertilize farmland.",
      "It is often cited as the longest river in Africa.",
      "For 10 points—name this river that flows through Egypt."
    ],
    answer: "The Nile River",
    answerLine: "Nile River"
  },
  {
    category: "Mythology",
    clues: [
      "This god swallowed his first wife, Metis, after a prophecy warned that her child would overthrow him.",
      "He took the form of a swan to seduce Leda and a bull to abduct Europa.",
      "He overthrew his father, Cronus, after being hidden from him as an infant on Crete.",
      "He rules from Mount Olympus and wields lightning bolts as his signature weapon.",
      "For 10 points—name this king of the Greek gods."
    ],
    answer: "Zeus",
    answerLine: "Zeus"
  }
];

const DIRECTED = [
  {
    category: "Literature",
    question: "What Shakespeare play features the Scottish general Macbeth being told by three witches that he will become king?",
    answer: "Macbeth",
    answerLine: "Macbeth"
  },
  {
    category: "Math",
    question: "What is the value of pi, rounded to two decimal places?",
    answer: "3.14",
    answerLine: "3.14"
  },
  {
    category: "Science",
    question: "What blood type is known as the \"universal donor\" for red blood cell transfusions?",
    answer: "O negative",
    answerLine: "O negative (accept O-)"
  },
  {
    category: "History",
    question: "In what year did the United States declare its independence from Great Britain?",
    answer: "1776",
    answerLine: "1776"
  },
  {
    category: "Fine Arts",
    question: "What Italian Renaissance artist painted the ceiling of the Sistine Chapel?",
    answer: "Michelangelo",
    answerLine: "Michelangelo (Buonarroti)"
  },
  {
    category: "Geography",
    question: "What is the capital city of Australia?",
    answer: "Canberra",
    answerLine: "Canberra (do not accept \"Sydney\")"
  },
  {
    category: "Social Science",
    question: "What term describes a system of government in which citizens elect representatives to make laws on their behalf?",
    answer: "Representative democracy",
    answerLine: "representative democracy (accept republic)"
  },
  {
    category: "Pop Culture / Sports",
    question: "In basketball, how many points is a shot worth if it's made from beyond the three-point line?",
    answer: "Three",
    answerLine: "three (3) points"
  }
];
