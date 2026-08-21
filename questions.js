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
  },
  {
    category: "Literature",
    clues: [
      "This novel's protagonist rejects a marriage proposal from her cousin, the obsequious clergyman Mr. Collins.",
      "A militia officer named George Wickham elopes with the youngest of five sisters in this novel.",
      "The protagonist initially despises a wealthy man after he calls her \"tolerable, but not handsome enough to tempt me\" at a ball.",
      "That man, Mr. Darcy, later proposes to her despite their difference in social class.",
      "For 10 points—name this novel by Jane Austen about Elizabeth Bennet and Mr. Darcy."
    ],
    answer: "Pride and Prejudice",
    answerLine: "Pride and Prejudice"
  },
  {
    category: "Literature",
    clues: [
      "This author's narrator hides a corpse under floorboards but is undone by the sound of a still-beating heart in one short story.",
      "In another of his works, a raven repeatedly answers the narrator's questions with the word \"Nevermore.\"",
      "He pioneered detective fiction with his C. Auguste Dupin stories, including \"The Murders in the Rue Morgue.\"",
      "He wrote \"The Tell-Tale Heart\" and \"The Raven.\"",
      "For 10 points—name this American writer of Gothic horror and macabre poetry who died in Baltimore in 1849."
    ],
    answer: "Edgar Allan Poe",
    answerLine: "Edgar Allan Poe"
  },
  {
    category: "Science",
    clues: [
      "This process's light-dependent reactions occur in the thylakoid membrane and split water molecules, releasing oxygen as a byproduct.",
      "Its light-independent stage, the Calvin cycle, uses the enzyme RuBisCO to fix carbon dioxide.",
      "It takes place primarily in chloroplasts, using the pigment chlorophyll to absorb light.",
      "It converts carbon dioxide and water into glucose and oxygen using light energy.",
      "For 10 points—name this process by which plants make their own food using sunlight."
    ],
    answer: "Photosynthesis",
    answerLine: "photosynthesis"
  },
  {
    category: "Science",
    clues: [
      "Erwin Chargaff's rules state that the amount of adenine in this molecule always equals the amount of thymine.",
      "James Watson and Francis Crick determined its double helix structure in 1953, aided by Rosalind Franklin's X-ray images.",
      "It is composed of nucleotides made of a sugar, phosphate group, and one of four nitrogenous bases.",
      "It carries the genetic instructions for all known living organisms.",
      "For 10 points—name this double-helix molecule that stores hereditary information in cells."
    ],
    answer: "DNA",
    answerLine: "DNA (accept deoxyribonucleic acid)"
  },
  {
    category: "Math",
    clues: [
      "This theorem is proved by the \"bride's chair\" diagram in Euclid's Elements.",
      "Its converse can be used to determine whether a triangle is a right triangle given three side lengths.",
      "It's often demonstrated with 3-4-5 or 5-12-13 triangles.",
      "It relates the lengths of the two legs and the hypotenuse of a right triangle.",
      "For 10 points—name this theorem stating that a-squared plus b-squared equals c-squared."
    ],
    answer: "The Pythagorean theorem",
    answerLine: "Pythagorean theorem"
  },
  {
    category: "Math",
    clues: [
      "The Sieve of Eratosthenes is a method for finding all of these numbers up to a given limit.",
      "Euclid proved there are infinitely many of these numbers using a proof by contradiction.",
      "The Fundamental Theorem of Arithmetic states every integer greater than 1 can be uniquely factored into a product of these numbers.",
      "2 is the only even example of one of these numbers.",
      "For 10 points—name these numbers greater than 1 that are divisible only by themselves and 1."
    ],
    answer: "Prime numbers",
    answerLine: "prime numbers (accept primes)"
  },
  {
    category: "History",
    clues: [
      "This conflict began after the assassination of Archduke Franz Ferdinand in Sarajevo in 1914.",
      "It saw the first large-scale use of trench warfare and poison gas on the Western Front.",
      "The United States entered this conflict in 1917 partly due to the Zimmermann Telegram.",
      "It ended with the Treaty of Versailles in 1919.",
      "For 10 points—name this global conflict fought from 1914 to 1918."
    ],
    answer: "World War I",
    answerLine: "World War I (accept the First World War or the Great War)"
  },
  {
    category: "History",
    clues: [
      "This period's art was patronized heavily by the Medici family of Florence.",
      "It saw the development of linear perspective by artists like Filippo Brunelleschi.",
      "It began in Italy in the 14th century and later spread throughout Europe.",
      "Figures associated with this period include Leonardo da Vinci and Michelangelo.",
      "For 10 points—name this era of renewed interest in classical learning and art that followed the Middle Ages."
    ],
    answer: "The Renaissance",
    answerLine: "the Renaissance"
  },
  {
    category: "History",
    clues: [
      "This leader organized the Montgomery Bus Boycott alongside Rosa Parks in 1955.",
      "He wrote a famous letter while imprisoned in an Alabama jail defending nonviolent civil disobedience.",
      "He delivered a famous speech from the steps of the Lincoln Memorial in 1963.",
      "He was assassinated in Memphis, Tennessee in 1968.",
      "For 10 points—name this Baptist minister and civil rights leader who delivered the \"I Have a Dream\" speech."
    ],
    answer: "Martin Luther King Jr.",
    answerLine: "Martin Luther King Jr. (accept MLK)"
  },
  {
    category: "Fine Arts",
    clues: [
      "This composer continued writing music after going almost completely deaf, including a choral setting of Schiller's \"Ode to Joy.\"",
      "His Third Symphony, the Eroica, was originally dedicated to Napoleon Bonaparte before he angrily withdrew the dedication.",
      "His Fifth Symphony opens with a famous four-note motif often described as \"fate knocking at the door.\"",
      "He composed nine symphonies despite losing his hearing.",
      "For 10 points—name this German composer of the Ninth Symphony."
    ],
    answer: "Ludwig van Beethoven",
    answerLine: "Ludwig van Beethoven"
  },
  {
    category: "Geography",
    clues: [
      "This mountain straddles the border between Nepal and the Tibet Autonomous Region of China.",
      "Edmund Hillary and Tenzing Norgay were the first climbers confirmed to reach its summit, in 1953.",
      "It is part of the Himalayan mountain range.",
      "It is the tallest mountain above sea level on Earth.",
      "For 10 points—name this mountain, the world's highest peak."
    ],
    answer: "Mount Everest",
    answerLine: "Mount Everest"
  },
  {
    category: "Current Events",
    clues: [
      "This organization's Security Council has five permanent members who hold veto power: the US, UK, France, Russia, and China.",
      "It was founded in 1945 after its predecessor, the League of Nations, failed to prevent World War II.",
      "Its headquarters is located in New York City along the East River.",
      "It replaced the League of Nations as the primary international peacekeeping body.",
      "For 10 points—name this international organization currently led by Secretary-General António Guterres."
    ],
    answer: "The United Nations",
    answerLine: "United Nations (accept UN)"
  },
  {
    category: "Current Events",
    clues: [
      "This organization's common currency, adopted by most but not all of its members, is the euro.",
      "The United Kingdom formally departed from this organization in a process nicknamed \"Brexit,\" completed in 2020.",
      "It grew out of earlier bodies including the European Coal and Steel Community.",
      "It is a political and economic union of European countries.",
      "For 10 points—name this union of 27 member states headquartered in Brussels."
    ],
    answer: "The European Union",
    answerLine: "European Union (accept EU)"
  },
  {
    category: "Social Science",
    clues: [
      "This economic model's curves intersect at a point called market equilibrium.",
      "A rightward shift in one of this model's curves, holding the other constant, generally raises the equilibrium price if it's the demand curve.",
      "It describes the relationship between how much of a good producers offer and how much consumers want to buy at various prices.",
      "It's a foundational concept in microeconomics.",
      "For 10 points—name this economic model describing the relationship between the availability of a good and desire for it."
    ],
    answer: "Supply and demand",
    answerLine: "supply and demand"
  },
  {
    category: "Theology/Philosophy",
    clues: [
      "This philosopher's method of teaching through repeated questioning is named for him.",
      "He was sentenced to death by an Athenian jury on charges of corrupting the youth and impiety.",
      "He left no writings of his own; most of what is known about him comes from his student Plato.",
      "He died by drinking hemlock.",
      "For 10 points—name this ancient Greek philosopher, teacher of Plato."
    ],
    answer: "Socrates",
    answerLine: "Socrates"
  },
  {
    category: "Pop Culture / Sports",
    clues: [
      "This quadrennial event's ancient version was held at Olympia in honor of Zeus.",
      "Its modern revival is credited to Baron Pierre de Coubertin in 1896.",
      "It features a torch relay culminating in the lighting of a cauldron at the opening ceremony.",
      "It alternates between Summer and Winter versions.",
      "For 10 points—name this international multi-sport event held every four years."
    ],
    answer: "The Olympic Games",
    answerLine: "the Olympic Games (accept Olympics)"
  },
  {
    category: "Pop Culture / Sports",
    clues: [
      "This athlete won 23 Grand Slam singles titles, an Open Era record, including one while pregnant at the 2017 Australian Open.",
      "She often competed against her older sister Venus in professional finals.",
      "She was coached for much of her career by her father, Richard Williams.",
      "She announced her retirement, which she called an \"evolution,\" in 2022.",
      "For 10 points—name this dominant American tennis player."
    ],
    answer: "Serena Williams",
    answerLine: "Serena Williams"
  },
  {
    category: "Misc/General Knowledge",
    clues: [
      "ARPANET, developed by the U.S. Department of Defense in the late 1960s, is considered a direct predecessor to this system.",
      "The TCP/IP protocol suite standardized how data is transmitted across this global network.",
      "Tim Berners-Lee built the World Wide Web on top of this pre-existing infrastructure in 1989.",
      "It connects billions of devices worldwide, allowing them to exchange data.",
      "For 10 points—name this global network of interconnected computer networks."
    ],
    answer: "The Internet",
    answerLine: "the Internet (prompt on \"the World Wide Web\" — it's a distinct service built on top of the Internet)"
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
  },
  {
    category: "Current Events",
    question: "What international treaty framework, adopted in Paris in 2015, commits countries to pledges limiting global temperature rise?",
    answer: "The Paris Agreement",
    answerLine: "the Paris Agreement (accept the Paris Climate Accord)"
  },
  {
    category: "Mythology",
    question: "In Norse mythology, what is the name of the immense world tree that connects the nine realms?",
    answer: "Yggdrasil",
    answerLine: "Yggdrasil"
  }
];
