/**
 * VHSL-style practice question banks.
 *
 * Each bank is a full regulation-length set: 30 toss-ups (15 per period)
 * + 10 directed questions, with categories weighted to NAQT's HS subject
 * distribution (see academic-team.md, step 1).
 *
 * TOSSUPS: pyramidal — `clues` runs hardest-clue-first, giveaway last
 * (steps 3-5). DIRECTED: single, non-pyramidal clue (step 6).
 * `answerLine` follows step 9 — alternates, prompts, and rejections.
 *
 * Difficulty tiers follow the hsquizbowl/PACE convention referenced in the
 * note: Novice → Regular → Regular-Plus → Higher.
 *
 * No answer repeats across any of the four banks.
 */

// ---------------------------------------------------------------------------
// BANK 1 — NOVICE (Introductory)
// ---------------------------------------------------------------------------

const BANK_NOVICE_TOSSUPS = [
  {
    category: "Literature",
    clues: [
      "In this play, Friar Laurence gives a sleeping potion that is mistaken for real death.",
      "Mercutio is killed by Tybalt in this play, prompting the hero's revenge and banishment.",
      "One of its most famous scenes has the heroine speaking from a balcony at night.",
      "It concerns the feuding Montague and Capulet families of Verona.",
      "For 10 points—name this Shakespeare tragedy about two star-crossed lovers."
    ],
    answer: "Romeo and Juliet",
    answerLine: "Romeo and Juliet"
  },
  {
    category: "Literature",
    clues: [
      "The title character of this novel stares at a green light across the bay at the end of Daisy Buchanan's dock.",
      "It is narrated by Nick Carraway, who rents a small house next door to a mansion.",
      "Lavish parties are thrown in the fictional community of West Egg on Long Island.",
      "Its title character was born James Gatz and reinvented himself to win back a lost love.",
      "For 10 points—name this F. Scott Fitzgerald novel of the Jazz Age."
    ],
    answer: "The Great Gatsby",
    answerLine: "The Great Gatsby"
  },
  {
    category: "Literature",
    clues: [
      "One of this author's novels opens \"It was the best of times, it was the worst of times.\"",
      "He created a miser visited by three spirits on Christmas Eve.",
      "An orphan in one of his novels asks a workhouse master, \"Please, sir, I want some more.\"",
      "He published most of his novels in monthly serial installments in Victorian England.",
      "For 10 points—name this English author of Oliver Twist and A Christmas Carol."
    ],
    answer: "Charles Dickens",
    answerLine: "Charles Dickens"
  },
  {
    category: "Literature",
    clues: [
      "Entries in this book are addressed to an imaginary friend named \"Kitty.\"",
      "Its author hid with seven others in a concealed annex behind a bookcase in Amsterdam.",
      "The group was betrayed in 1944 and deported to concentration camps.",
      "Its author died at Bergen-Belsen; her father Otto published the book after the war.",
      "For 10 points—name this diary kept by a Jewish teenager hiding during the Holocaust."
    ],
    answer: "The Diary of a Young Girl",
    answerLine: "The Diary of a Young Girl (accept The Diary of Anne Frank or Anne Frank's diary; prompt on \"Anne Frank\" alone)"
  },
  {
    category: "Literature",
    clues: [
      "This author wrote about a boy who tricks his friends into whitewashing a fence for him.",
      "He created a character who rafts down the Mississippi River with an escaped slave named Jim.",
      "He was born Samuel Langhorne Clemens and took his pen name from a riverboat term for water depth.",
      "His novels include The Adventures of Huckleberry Finn.",
      "For 10 points—name this American author of The Adventures of Tom Sawyer."
    ],
    answer: "Mark Twain",
    answerLine: "Mark Twain (accept Samuel Langhorne Clemens)"
  },
  {
    category: "Science",
    clues: [
      "This substance's molecules are polar, giving it high surface tension and making it an excellent solvent.",
      "Unlike most substances, it becomes less dense when it freezes, which is why its solid form floats.",
      "At sea level it boils at 100 degrees Celsius and freezes at 0 degrees Celsius.",
      "Its chemical formula is H2O.",
      "For 10 points—name this compound that covers about 71 percent of Earth's surface."
    ],
    answer: "Water",
    answerLine: "water (accept H2O)"
  },
  {
    category: "Science",
    clues: [
      "This organ has four chambers: two upper atria and two lower ventricles.",
      "Valves inside it prevent backflow, producing the characteristic \"lub-dub\" sound.",
      "It sits in the chest slightly left of center, protected by the rib cage.",
      "It pumps blood through the circulatory system.",
      "For 10 points—name this muscular organ that beats about 100,000 times a day."
    ],
    answer: "The heart",
    answerLine: "the heart"
  },
  {
    category: "Science",
    clues: [
      "This element makes up roughly 21 percent of Earth's atmosphere by volume.",
      "Its triatomic allotrope forms a layer in the stratosphere that blocks ultraviolet radiation.",
      "Plants release it as a byproduct when they make food from sunlight.",
      "It has atomic number 8 and the symbol O.",
      "For 10 points—name this element that humans need to breathe."
    ],
    answer: "Oxygen",
    answerLine: "oxygen (accept O2; prompt on \"ozone\" only before that clue is read)"
  },
  {
    category: "Science",
    clues: [
      "This object generates energy by fusing hydrogen into helium in its core.",
      "Its light takes roughly eight minutes and twenty seconds to reach Earth.",
      "Astronomers classify it as a G-type main sequence star, sometimes called a yellow dwarf.",
      "Earth and seven other planets orbit it.",
      "For 10 points—name this star at the center of our solar system."
    ],
    answer: "The Sun",
    answerLine: "the Sun (accept Sol)"
  },
  {
    category: "Science",
    clues: [
      "The rate of this phenomenon's flow is measured in amperes, while the potential driving it is measured in volts.",
      "Ohm's law states that the potential difference equals this quantity times resistance.",
      "Benjamin Franklin investigated its natural form with a famous kite experiment.",
      "It flows easily through conductors like copper but not through insulators like rubber.",
      "For 10 points—name this flow of electric charge that powers most modern devices."
    ],
    answer: "Electricity",
    answerLine: "electricity (accept electric current)"
  },
  {
    category: "Math",
    clues: [
      "Dividing any number by this number is undefined.",
      "It is the additive identity, meaning adding it to any number leaves that number unchanged.",
      "The Indian mathematician Brahmagupta wrote some of the first rules for using it as a number.",
      "It sits between negative one and one on the number line.",
      "For 10 points—name this number that represents nothing at all."
    ],
    answer: "Zero",
    answerLine: "zero (accept 0)"
  },
  {
    category: "Math",
    clues: [
      "Each term in this sequence is the sum of the two terms before it.",
      "The ratio between consecutive terms approaches the golden ratio, about 1.618.",
      "Its spirals appear in sunflower heads and pinecones.",
      "It begins 1, 1, 2, 3, 5, 8, 13, 21.",
      "For 10 points—name this sequence named for an Italian mathematician."
    ],
    answer: "The Fibonacci sequence",
    answerLine: "the Fibonacci sequence (accept Fibonacci numbers)"
  },
  {
    category: "History",
    clues: [
      "This explorer's three ships were the Niña, the Pinta, and the Santa María.",
      "His voyage was funded by Ferdinand and Isabella after Portugal turned him down.",
      "He made landfall in the Bahamas in October 1492, believing he had reached the Indies.",
      "He made four voyages across the Atlantic for Spain.",
      "For 10 points—name this Italian explorer often credited with opening the Americas to Europe."
    ],
    answer: "Christopher Columbus",
    answerLine: "Christopher Columbus (accept Cristoforo Colombo or Cristóbal Colón)"
  },
  {
    category: "History",
    clues: [
      "This man led a surprise crossing of the Delaware River on Christmas night in 1776.",
      "He presided over the Constitutional Convention in Philadelphia in 1787.",
      "His Farewell Address warned against political parties and permanent foreign alliances.",
      "He commanded the Continental Army and lived at Mount Vernon in Virginia.",
      "For 10 points—name this first President of the United States."
    ],
    answer: "George Washington",
    answerLine: "George Washington"
  },
  {
    category: "History",
    clues: [
      "This conflict began with the shelling of Fort Sumter in South Carolina in April 1861.",
      "Its single bloodiest day came at the Battle of Antietam in Maryland.",
      "It effectively ended when Robert E. Lee surrendered at Appomattox Court House in Virginia.",
      "It was fought between the Union and the Confederacy.",
      "For 10 points—name this American conflict over slavery and secession, fought from 1861 to 1865."
    ],
    answer: "The American Civil War",
    answerLine: "the American Civil War (accept the Civil War; prompt on \"the War Between the States\")"
  },
  {
    category: "History",
    clues: [
      "This leader crossed the Rubicon River in 49 BC, reportedly saying \"the die is cast.\"",
      "He wrote commentaries describing his conquest of Gaul.",
      "He summarized a swift victory with the phrase \"veni, vidi, vici.\"",
      "He was stabbed to death by senators on the Ides of March in 44 BC.",
      "For 10 points—name this Roman general and dictator."
    ],
    answer: "Julius Caesar",
    answerLine: "Julius Caesar (accept Gaius Julius Caesar; prompt on \"Caesar\" alone)"
  },
  {
    category: "History",
    clues: [
      "This conflict began in Europe when Germany invaded Poland in September 1939.",
      "The United States entered it after the attack on Pearl Harbor in December 1941.",
      "Allied forces landed at Normandy on D-Day in June 1944.",
      "It ended after atomic bombs were dropped on Hiroshima and Nagasaki.",
      "For 10 points—name this global conflict fought from 1939 to 1945."
    ],
    answer: "World War II",
    answerLine: "World War II (accept the Second World War or WWII)"
  },
  {
    category: "History",
    clues: [
      "Participants in this event disguised themselves as Mohawk people before acting.",
      "They dumped 342 chests of cargo belonging to the East India Company into a harbor.",
      "It protested the Tea Act and the principle of taxation without representation.",
      "Britain responded by passing the Coercive, or Intolerable, Acts.",
      "For 10 points—name this 1773 protest in a Massachusetts harbor."
    ],
    answer: "The Boston Tea Party",
    answerLine: "the Boston Tea Party"
  },
  {
    category: "Fine Arts",
    clues: [
      "This artist filled notebooks with mirror writing and sketches of flying machines and tanks.",
      "He painted a deteriorating mural of the Last Supper on a monastery wall in Milan.",
      "His anatomical study of a man inscribed in a circle and square is called Vitruvian Man.",
      "He was an Italian Renaissance polymath.",
      "For 10 points—name this artist who painted the Mona Lisa."
    ],
    answer: "Leonardo da Vinci",
    answerLine: "Leonardo da Vinci (accept Leonardo; do not accept \"da Vinci\" alone as it is not a surname, but prompt on it)"
  },
  {
    category: "Fine Arts",
    clues: [
      "This composer was a child prodigy who toured European courts performing for royalty by age six.",
      "His operas include The Magic Flute and The Marriage of Figaro.",
      "He died at 35, leaving his Requiem unfinished.",
      "He was an Austrian composer of the Classical era.",
      "For 10 points—name this composer whose first names were Wolfgang Amadeus."
    ],
    answer: "Wolfgang Amadeus Mozart",
    answerLine: "Wolfgang Amadeus Mozart"
  },
  {
    category: "Fine Arts",
    clues: [
      "This group's 1964 arrival in New York helped launch the \"British Invasion.\"",
      "Their later albums include Abbey Road and Sgt. Pepper's Lonely Hearts Club Band.",
      "Its members were John Lennon, Paul McCartney, George Harrison, and Ringo Starr.",
      "They formed in Liverpool, England and broke up in 1970.",
      "For 10 points—name this rock band that recorded \"Hey Jude\" and \"Let It Be.\""
    ],
    answer: "The Beatles",
    answerLine: "the Beatles"
  },
  {
    category: "Geography",
    clues: [
      "This river flows generally eastward across Brazil before emptying into the Atlantic Ocean.",
      "It discharges more water by volume than any other river on Earth.",
      "It runs through the world's largest tropical rainforest, which shares its name.",
      "It begins in the Andes of Peru.",
      "For 10 points—name this South American river."
    ],
    answer: "The Amazon River",
    answerLine: "the Amazon River"
  },
  {
    category: "Geography",
    clues: [
      "About 70 percent of the world's fresh water is locked in this landmass's ice sheet.",
      "A 1959 treaty reserves it for peaceful scientific research and bans military activity.",
      "It contains the geographic South Pole.",
      "It has no permanent human population, only rotating research station crews.",
      "For 10 points—name this southernmost and coldest continent."
    ],
    answer: "Antarctica",
    answerLine: "Antarctica"
  },
  {
    category: "Current Events",
    clues: [
      "This agency was created in 1958, largely in response to the Soviet launch of Sputnik.",
      "Its Apollo program landed twelve people on the Moon between 1969 and 1972.",
      "It currently operates the James Webb Space Telescope and rovers on Mars.",
      "Its Artemis program aims to return astronauts to the Moon.",
      "For 10 points—name this United States space agency."
    ],
    answer: "NASA",
    answerLine: "NASA (accept the National Aeronautics and Space Administration)"
  },
  {
    category: "Current Events",
    clues: [
      "Systems in this field are often built using machine learning trained on very large data sets.",
      "A program of this type defeated world champion Lee Sedol at the board game Go in 2016.",
      "Recent examples include chatbots and image generators that respond to written prompts.",
      "Debates about it center on job displacement, bias, and regulation.",
      "For 10 points—name this field of computer science concerned with machines performing tasks that normally require human reasoning."
    ],
    answer: "Artificial intelligence",
    answerLine: "artificial intelligence (accept AI; prompt on \"machine learning\")"
  },
  {
    category: "Mythology",
    clues: [
      "This hero performed twelve labors as penance for killing his own family in a fit of madness.",
      "He strangled the Nemean lion and afterward wore its impenetrable skin.",
      "One labor required him to clean the Augean stables in a single day.",
      "He was the son of Zeus and a mortal woman, and his Greek name was Heracles.",
      "For 10 points—name this strongest hero of Greek mythology, better known by his Roman name."
    ],
    answer: "Hercules",
    answerLine: "Hercules (accept Heracles or Herakles)"
  },
  {
    category: "Social Science",
    clues: [
      "This document's Fifth entry protects against self-incrimination and double jeopardy.",
      "Its First entry protects freedom of speech, religion, press, assembly, and petition.",
      "It was drafted largely by Virginian James Madison to satisfy Anti-Federalist objections.",
      "It consists of the first ten amendments to the U.S. Constitution.",
      "For 10 points—name this set of amendments ratified in 1791."
    ],
    answer: "The Bill of Rights",
    answerLine: "the Bill of Rights (prompt on \"the Constitution\" or \"amendments\")"
  },
  {
    category: "Theology/Philosophy",
    clues: [
      "This religion's founder achieved enlightenment while meditating under a bodhi tree.",
      "It teaches the Four Noble Truths, the first of which concerns the existence of suffering.",
      "Its Eightfold Path is a guide to escaping the cycle of rebirth called samsara.",
      "Its founder was born Siddhartha Gautama in what is now Nepal.",
      "For 10 points—name this religion whose adherents seek to reach nirvana."
    ],
    answer: "Buddhism",
    answerLine: "Buddhism (accept Buddhist)"
  },
  {
    category: "Pop Culture / Sports",
    clues: [
      "The winner of this event receives the Vince Lombardi Trophy.",
      "Its halftime show is regularly among the most-watched broadcasts in the United States.",
      "Its editions are traditionally numbered with Roman numerals.",
      "It is the championship game of the National Football League.",
      "For 10 points—name this annual American football title game."
    ],
    answer: "The Super Bowl",
    answerLine: "the Super Bowl"
  },
  {
    category: "Misc/General Knowledge",
    clues: [
      "This structure was a gift from France, dedicated in 1886.",
      "It was designed by Frédéric Bartholdi, with an internal iron framework by Gustave Eiffel.",
      "Its pedestal bears Emma Lazarus's poem \"The New Colossus.\"",
      "Its copper surface has weathered to a green patina; it holds a torch and a tablet.",
      "For 10 points—name this statue standing on an island in New York Harbor."
    ],
    answer: "The Statue of Liberty",
    answerLine: "the Statue of Liberty (accept Liberty Enlightening the World)"
  }
];

const BANK_NOVICE_DIRECTED = [
  {
    category: "Literature",
    question: "What British author wrote the seven-book Harry Potter fantasy series?",
    answer: "J.K. Rowling",
    answerLine: "J.K. Rowling (accept Joanne Rowling)"
  },
  {
    category: "Literature",
    question: "In what Lewis Carroll novel does a girl fall down a rabbit hole and meet the Cheshire Cat?",
    answer: "Alice's Adventures in Wonderland",
    answerLine: "Alice's Adventures in Wonderland (accept Alice in Wonderland)"
  },
  {
    category: "Science",
    question: "What planet in our solar system orbits closest to the Sun?",
    answer: "Mercury",
    answerLine: "Mercury"
  },
  {
    category: "Science",
    question: "What gas do humans exhale that plants take in to make their own food?",
    answer: "Carbon dioxide",
    answerLine: "carbon dioxide (accept CO2)"
  },
  {
    category: "Math",
    question: "How many degrees are in the sum of the interior angles of any triangle?",
    answer: "180 degrees",
    answerLine: "180 degrees"
  },
  {
    category: "History",
    question: "Who, in July 1969, became the first person to walk on the Moon?",
    answer: "Neil Armstrong",
    answerLine: "Neil Armstrong (do not accept \"Buzz Aldrin\")"
  },
  {
    category: "History",
    question: "What British passenger liner sank in the North Atlantic in April 1912 after striking an iceberg?",
    answer: "The Titanic",
    answerLine: "the Titanic (accept RMS Titanic)"
  },
  {
    category: "Fine Arts",
    question: "What keyboard instrument has 88 keys, made up of white and black keys?",
    answer: "The piano",
    answerLine: "the piano (accept pianoforte)"
  },
  {
    category: "Geography",
    question: "What is the largest and deepest of Earth's oceans?",
    answer: "The Pacific Ocean",
    answerLine: "the Pacific Ocean"
  },
  {
    category: "Misc/General Knowledge",
    question: "What city serves as the capital of the United States?",
    answer: "Washington, D.C.",
    answerLine: "Washington, D.C. (do not accept \"Washington\" the state)"
  }
];

// ---------------------------------------------------------------------------
// BANK 2 — REGULAR SEASON (Regular)
// ---------------------------------------------------------------------------

const BANK_REGULAR_TOSSUPS = [
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

const BANK_REGULAR_DIRECTED = [
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

// ---------------------------------------------------------------------------
// BANK 3 — REGIONALS (Regular-Plus)
// ---------------------------------------------------------------------------

const BANK_REGIONAL_TOSSUPS = [
  {
    category: "Literature",
    clues: [
      "This novel is preceded by an introductory sketch describing the narrator's job at a custom-house.",
      "A physician calling himself Roger Chillingworth spends years tormenting the man he suspects of adultery.",
      "The minister Arthur Dimmesdale conceals his guilt until confessing on a scaffold.",
      "Its heroine, Hester Prynne, is forced to wear an embroidered letter \"A.\"",
      "For 10 points—name this Nathaniel Hawthorne novel set in Puritan Boston."
    ],
    answer: "The Scarlet Letter",
    answerLine: "The Scarlet Letter"
  },
  {
    category: "Literature",
    clues: [
      "This novel's protagonist is haunted by the ghost of the daughter she killed to keep her from being returned to slavery.",
      "Much of it takes place at 124 Bluestone Road outside Cincinnati after the Civil War.",
      "Paul D arrives from Sweet Home, the plantation where the protagonist was enslaved.",
      "Its protagonist is named Sethe, and it won the 1988 Pulitzer Prize for Fiction.",
      "For 10 points—name this novel by Toni Morrison."
    ],
    answer: "Beloved",
    answerLine: "Beloved"
  },
  {
    category: "Literature",
    clues: [
      "Two characters in this play pass the time by exchanging hats and contemplating suicide with a belt.",
      "A tyrannical man named Pozzo drives his servant Lucky by a rope around the neck.",
      "At the end of each act, a boy arrives to say the title character will come tomorrow, not today.",
      "Its characters Vladimir and Estragon wait beside a bare tree.",
      "For 10 points—name this Samuel Beckett play of the Theatre of the Absurd."
    ],
    answer: "Waiting for Godot",
    answerLine: "Waiting for Godot (accept En attendant Godot)"
  },
  {
    category: "Literature",
    clues: [
      "This poet's nearly 1,800 poems were mostly discovered by a sister after this poet's death.",
      "This poet's work is marked by slant rhyme, unconventional capitalization, and heavy use of dashes.",
      "One poem begins \"Because I could not stop for Death— / He kindly stopped for me.\"",
      "This poet lived reclusively in Amherst, Massachusetts, rarely leaving home in later years.",
      "For 10 points—name this 19th-century American poet."
    ],
    answer: "Emily Dickinson",
    answerLine: "Emily Dickinson"
  },
  {
    category: "Literature",
    clues: [
      "This novel opens with a colonel facing a firing squad and remembering the day his father took him to discover ice.",
      "It chronicles seven generations of the Buendía family, many named Aureliano or José Arcadio.",
      "Its town of Macondo is finally destroyed by a windstorm as prophecies written by Melquíades are deciphered.",
      "It is the best-known work of magical realism in Latin American literature.",
      "For 10 points—name this novel by Gabriel García Márquez."
    ],
    answer: "One Hundred Years of Solitude",
    answerLine: "One Hundred Years of Solitude (accept Cien años de soledad)"
  },
  {
    category: "Science",
    clues: [
      "Ludwig Boltzmann related this quantity to the number of accessible microstates in the formula S equals k log W.",
      "The second law of thermodynamics states that this quantity never decreases in an isolated system.",
      "It appears in the Gibbs free energy equation multiplied by temperature.",
      "It is commonly described, somewhat loosely, as a measure of disorder.",
      "For 10 points—name this thermodynamic quantity denoted S."
    ],
    answer: "Entropy",
    answerLine: "entropy"
  },
  {
    category: "Science",
    clues: [
      "These molecules lower activation energy without being consumed in the reaction they facilitate.",
      "The induced-fit model refined an earlier \"lock and key\" model of how they bind their substrates.",
      "They denature and lose function outside a narrow range of pH and temperature.",
      "Examples include amylase, lactase, and catalase; most are proteins.",
      "For 10 points—name these biological catalysts."
    ],
    answer: "Enzymes",
    answerLine: "enzymes (accept enzyme)"
  },
  {
    category: "Science",
    clues: [
      "Alfred Wegener's theory of continental drift was an early precursor to this theory, though he could not explain a mechanism.",
      "Seafloor spreading at the Mid-Atlantic Ridge provided key evidence supporting it.",
      "Its boundaries are classified as divergent, convergent, or transform, the last including the San Andreas Fault.",
      "It explains the volcanic activity of the Pacific Ring of Fire.",
      "For 10 points—name this theory describing the movement of Earth's rigid lithospheric plates."
    ],
    answer: "Plate tectonics",
    answerLine: "plate tectonics (accept plate tectonic theory)"
  },
  {
    category: "Science",
    clues: [
      "These cells communicate across gaps called synapses by releasing chemical neurotransmitters.",
      "Signals travel faster along their myelinated projections through saltatory conduction between nodes of Ranvier.",
      "Their electrical signal follows an all-or-nothing principle once threshold is reached.",
      "Their main parts include dendrites, a cell body, and an axon.",
      "For 10 points—name these signal-transmitting cells of the nervous system."
    ],
    answer: "Neurons",
    answerLine: "neurons (accept neuron or nerve cells)"
  },
  {
    category: "Science",
    clues: [
      "August Kekulé claimed he conceived this compound's structure after dreaming of a snake biting its own tail.",
      "Its six carbon atoms share delocalized pi electrons above and below the ring, making it aromatic.",
      "It is often drawn as a hexagon with a circle inside rather than alternating double bonds.",
      "Its molecular formula is C6H6.",
      "For 10 points—name this simplest aromatic hydrocarbon."
    ],
    answer: "Benzene",
    answerLine: "benzene (accept C6H6)"
  },
  {
    category: "Math",
    clues: [
      "This operation is formally defined as the limit of a difference quotient as the change in x approaches zero.",
      "The chain rule handles this operation applied to composite functions.",
      "The power rule states that performing it on x to the n gives n times x to the n minus 1.",
      "Geometrically, it gives the slope of the line tangent to a curve at a point.",
      "For 10 points—name this calculus operation measuring instantaneous rate of change."
    ],
    answer: "The derivative",
    answerLine: "the derivative (accept differentiation or derivatives)"
  },
  {
    category: "Math",
    clues: [
      "This statistic is the square root of the variance.",
      "In a normal distribution, about 68 percent of the data falls within one of these of the mean.",
      "It is denoted by the lowercase Greek letter sigma for a population.",
      "A small value of it means data points cluster tightly around the average.",
      "For 10 points—name this measure of how spread out a data set is."
    ],
    answer: "Standard deviation",
    answerLine: "standard deviation"
  },
  {
    category: "History",
    clues: [
      "This document was sealed in a meadow at Runnymede in June 1215.",
      "Its clause 39 promised that no free man would be imprisoned except by lawful judgment of his peers, influencing later due process guarantees.",
      "Rebellious barons forced King John to agree to it, and the pope annulled it within months.",
      "Its name is Latin for \"Great Charter.\"",
      "For 10 points—name this English document limiting royal power."
    ],
    answer: "Magna Carta",
    answerLine: "Magna Carta (accept the Great Charter)"
  },
  {
    category: "History",
    clues: [
      "This period abolished the samurai class and the wearing of swords, provoking the Satsuma Rebellion.",
      "It ended the Tokugawa shogunate in 1868 and moved the capital to Edo, renamed Tokyo.",
      "Its leaders adopted Western industry, a conscript army, and a constitution modeled on Prussia's.",
      "Its name refers to restoring rule to a Japanese emperor.",
      "For 10 points—name this era of rapid Japanese modernization."
    ],
    answer: "The Meiji Restoration",
    answerLine: "the Meiji Restoration (accept Meiji Ishin; prompt on \"Meiji era\")"
  },
  {
    category: "History",
    clues: [
      "This gathering was dominated by the Austrian foreign minister Klemens von Metternich.",
      "It was interrupted by Napoleon's escape from Elba and the Hundred Days.",
      "It restored the Bourbon monarchy in France and redrew borders to create a balance of power.",
      "It met in the Austrian capital in 1814 and 1815.",
      "For 10 points—name this European diplomatic conference following Napoleon's defeat."
    ],
    answer: "The Congress of Vienna",
    answerLine: "the Congress of Vienna"
  },
  {
    category: "History",
    clues: [
      "This uprising was led first by Toussaint Louverture, who was captured and died in a French prison.",
      "Jean-Jacques Dessalines completed it and declared independence on January 1, 1804.",
      "Napoleon's failure to suppress it contributed to his decision to sell Louisiana to the United States.",
      "It is the only slave revolt in history to establish an independent state.",
      "For 10 points—name this revolution that founded the world's first Black republic."
    ],
    answer: "The Haitian Revolution",
    answerLine: "the Haitian Revolution"
  },
  {
    category: "History",
    clues: [
      "The Freedmen's Bureau was established during this period to aid formerly enslaved people.",
      "Radical Republicans in Congress impeached Andrew Johnson over his handling of it.",
      "The 13th, 14th, and 15th Amendments were ratified during it.",
      "It effectively ended with the Compromise of 1877, which withdrew federal troops from the South.",
      "For 10 points—name this period of rebuilding the United States after the Civil War."
    ],
    answer: "Reconstruction",
    answerLine: "Reconstruction (accept the Reconstruction Era)"
  },
  {
    category: "History",
    clues: [
      "The Han envoy Zhang Qian's missions to Central Asia helped open this network.",
      "Buddhism spread from India into China along it, as did the Black Death traveling west.",
      "The Mongol Empire's Pax Mongolica made travel along it relatively safe in the 13th century.",
      "It linked China to the Mediterranean world and is named for a valuable textile.",
      "For 10 points—name this network of overland trade routes across Eurasia."
    ],
    answer: "The Silk Road",
    answerLine: "the Silk Road (accept Silk Routes)"
  },
  {
    category: "Fine Arts",
    clues: [
      "This painting includes a screaming horse, a bull, and a light bulb inside an eye-shaped form.",
      "It was executed entirely in black, white, and gray for the Spanish Pavilion at the 1937 Paris World's Fair.",
      "It responds to the aerial bombing of a Basque town by German and Italian planes.",
      "It hung at New York's MoMA for decades before returning to Spain after Franco's death.",
      "For 10 points—name this mural-sized antiwar painting by Pablo Picasso."
    ],
    answer: "Guernica",
    answerLine: "Guernica"
  },
  {
    category: "Fine Arts",
    clues: [
      "This composer's ballet caused a near-riot at its 1913 Paris premiere with its pounding irregular rhythms.",
      "He wrote The Firebird and Petrushka for Sergei Diaghilev's Ballets Russes.",
      "He moved through neoclassical and, late in life, serial compositional styles.",
      "That riot-provoking ballet depicts a pagan sacrificial rite.",
      "For 10 points—name this Russian composer of The Rite of Spring."
    ],
    answer: "Igor Stravinsky",
    answerLine: "Igor Stravinsky"
  },
  {
    category: "Fine Arts",
    clues: [
      "This architect designed a Pennsylvania house cantilevered directly over a waterfall for the Kaufmann family.",
      "He developed the Prairie School style, emphasizing horizontal lines and integration with the landscape.",
      "He called his philosophy of harmony between building and site \"organic architecture.\"",
      "His last major work was a spiral-ramped museum on Fifth Avenue in New York.",
      "For 10 points—name this American architect of Fallingwater and the Guggenheim Museum."
    ],
    answer: "Frank Lloyd Wright",
    answerLine: "Frank Lloyd Wright"
  },
  {
    category: "Geography",
    clues: [
      "This body of water formed in a continental rift zone and is still widening.",
      "It holds roughly 20 percent of the world's unfrozen fresh surface water.",
      "It is home to the nerpa, the world's only exclusively freshwater seal.",
      "It lies in southern Siberia, north of Mongolia.",
      "For 10 points—name this deepest lake on Earth."
    ],
    answer: "Lake Baikal",
    answerLine: "Lake Baikal"
  },
  {
    category: "Geography",
    clues: [
      "This river passes through more countries than any other in the world.",
      "It flows past four national capitals, including Vienna, Bratislava, Budapest, and Belgrade.",
      "It rises in Germany's Black Forest and empties into the Black Sea through a delta in Romania.",
      "Johann Strauss II named a famous waltz after it.",
      "For 10 points—name this second-longest river in Europe."
    ],
    answer: "The Danube",
    answerLine: "the Danube River (accept Donau)"
  },
  {
    category: "Current Events",
    clues: [
      "This agency's smallpox eradication campaign succeeded in 1980, the only such success for a human disease.",
      "It maintains the International Classification of Diseases and an essential medicines list.",
      "It declared COVID-19 a pandemic in March 2020.",
      "It is a specialized agency of the United Nations headquartered in Geneva.",
      "For 10 points—name this global public health organization."
    ],
    answer: "The World Health Organization",
    answerLine: "the World Health Organization (accept WHO)"
  },
  {
    category: "Current Events",
    clues: [
      "This alliance's Article 5 declares an attack on one member an attack on all.",
      "That article has been invoked exactly once, following the September 11th attacks.",
      "Finland and Sweden abandoned longstanding neutrality to join it after Russia's 2022 invasion of Ukraine.",
      "It was founded in 1949 and is headquartered in Brussels.",
      "For 10 points—name this North Atlantic military alliance."
    ],
    answer: "NATO",
    answerLine: "NATO (accept the North Atlantic Treaty Organization)"
  },
  {
    category: "Mythology",
    clues: [
      "This deity weighed the hearts of the dead against the feather of Ma'at.",
      "He was said to have invented embalming when he mummified the body of Osiris.",
      "He guided souls through the underworld and is depicted with the head of a jackal.",
      "He was gradually displaced as chief god of the dead by Osiris.",
      "For 10 points—name this Egyptian god of mummification."
    ],
    answer: "Anubis",
    answerLine: "Anubis (accept Anpu or Inpw)"
  },
  {
    category: "Social Science",
    clues: [
      "This phenomenon is commonly measured using the Consumer Price Index.",
      "Its extreme form devastated Weimar Germany in 1923 and Zimbabwe in the late 2000s.",
      "Central banks typically combat it by raising interest rates to cool demand.",
      "When paired with high unemployment and stagnation it is called \"stagflation.\"",
      "For 10 points—name this general rise in prices that erodes purchasing power."
    ],
    answer: "Inflation",
    answerLine: "inflation (prompt on \"hyperinflation\" before that clue)"
  },
  {
    category: "Theology/Philosophy",
    clues: [
      "This philosopher credited David Hume with awakening him from his \"dogmatic slumber.\"",
      "He distinguished between the noumenal world of things-in-themselves and the phenomenal world we perceive.",
      "He wrote the Critique of Pure Reason and lived his whole life in Königsberg.",
      "His ethics center on acting only on maxims that could become universal law.",
      "For 10 points—name this German philosopher who proposed the categorical imperative."
    ],
    answer: "Immanuel Kant",
    answerLine: "Immanuel Kant"
  },
  {
    category: "Pop Culture / Sports",
    clues: [
      "The first edition of this tournament was held in 1930 and won by the host nation, Uruguay.",
      "Its trophy was stolen in 1966 and recovered by a dog named Pickles.",
      "Brazil has won it a record five times.",
      "It is organized by FIFA and held every four years.",
      "For 10 points—name this international championship tournament in soccer."
    ],
    answer: "The FIFA World Cup",
    answerLine: "the FIFA World Cup (accept World Cup)"
  },
  {
    category: "Misc/General Knowledge",
    clues: [
      "These awards were established by the will of a chemist who invented dynamite and regretted his legacy.",
      "One of their six categories is awarded in Oslo rather than the Swedish capital.",
      "Marie Curie became the first person to win two of them, in different sciences.",
      "The Economics award was added in 1968 by Sweden's central bank.",
      "For 10 points—name these prizes awarded annually in Stockholm."
    ],
    answer: "The Nobel Prize",
    answerLine: "the Nobel Prize (accept Nobel Prizes)"
  }
];

const BANK_REGIONAL_DIRECTED = [
  {
    category: "Literature",
    question: "What American poet wrote \"The Road Not Taken\" and \"Stopping by Woods on a Snowy Evening\"?",
    answer: "Robert Frost",
    answerLine: "Robert Frost"
  },
  {
    category: "Literature",
    question: "What Russian novelist wrote Crime and Punishment and The Brothers Karamazov?",
    answer: "Fyodor Dostoevsky",
    answerLine: "Fyodor Dostoevsky (accept Dostoyevsky)"
  },
  {
    category: "Science",
    question: "On the pH scale, what value indicates a neutral solution at 25 degrees Celsius?",
    answer: "7",
    answerLine: "7 (accept seven)"
  },
  {
    category: "Science",
    question: "What subatomic particle found in the nucleus carries no electric charge?",
    answer: "The neutron",
    answerLine: "neutron"
  },
  {
    category: "Math",
    question: "What is the slope of a line perpendicular to the line y equals 2x plus 3?",
    answer: "Negative one-half",
    answerLine: "negative one-half (accept -1/2 or -0.5)"
  },
  {
    category: "History",
    question: "What 1803 Supreme Court case established the principle of judicial review?",
    answer: "Marbury v. Madison",
    answerLine: "Marbury v. Madison"
  },
  {
    category: "History",
    question: "What Virginia settlement, founded in 1607, was the first permanent English colony in North America?",
    answer: "Jamestown",
    answerLine: "Jamestown (do not accept \"Plymouth\")"
  },
  {
    category: "Fine Arts",
    question: "What German Baroque composer wrote the Brandenburg Concertos and the Well-Tempered Clavier?",
    answer: "Johann Sebastian Bach",
    answerLine: "Johann Sebastian Bach (prompt on \"Bach\" alone if other Bachs are plausible)"
  },
  {
    category: "Geography",
    question: "What is the smallest country in the world by both area and population?",
    answer: "Vatican City",
    answerLine: "Vatican City (accept the Holy See)"
  },
  {
    category: "Social Science",
    question: "What economic measure represents the total monetary value of all finished goods and services produced within a country in a year?",
    answer: "Gross domestic product",
    answerLine: "gross domestic product (accept GDP)"
  }
];

// ---------------------------------------------------------------------------
// BANK 4 — STATE CHAMPIONSHIP (Higher)
// ---------------------------------------------------------------------------

const BANK_STATE_TOSSUPS = [
  {
    category: "Literature",
    clues: [
      "This novel's action unfolds over a single day in June as its title character prepares to host an evening party.",
      "A shell-shocked veteran named Septimus Warren Smith throws himself from a window rather than submit to Dr. Bradshaw.",
      "The protagonist recalls a youthful kiss from Sally Seton and a rejected suitor, Peter Walsh.",
      "It opens with the title character saying she will buy the flowers herself.",
      "For 10 points—name this stream-of-consciousness novel by Virginia Woolf."
    ],
    answer: "Mrs Dalloway",
    answerLine: "Mrs Dalloway (accept Mrs. Dalloway)"
  },
  {
    category: "Literature",
    clues: [
      "This novel's protagonist is exiled to his motherland of Mbanta after his gun accidentally kills a clansman.",
      "Its protagonist earlier participates in the killing of his adopted son Ikemefuna against an elder's advice.",
      "Its title is drawn from Yeats's poem \"The Second Coming.\"",
      "It ends with a District Commissioner planning a book about pacifying primitive tribes.",
      "For 10 points—name this novel about the Igbo man Okonkwo, by Chinua Achebe."
    ],
    answer: "Things Fall Apart",
    answerLine: "Things Fall Apart"
  },
  {
    category: "Literature",
    clues: [
      "This poem's sections include \"A Game of Chess\" and \"Death by Water.\"",
      "Its author dedicated it to Ezra Pound as \"il miglior fabbro\" after Pound heavily edited it.",
      "It closes with the repeated Sanskrit word \"Shantih\" and draws on the Fisher King legend.",
      "It famously opens by declaring April \"the cruellest month.\"",
      "For 10 points—name this fragmented 1922 modernist poem by T.S. Eliot."
    ],
    answer: "The Waste Land",
    answerLine: "The Waste Land"
  },
  {
    category: "Literature",
    clues: [
      "This author wrote of a penal colony machine that carves a prisoner's sentence into his flesh.",
      "In one of his novels, a land surveyor known only as K. can never gain access to the title structure.",
      "Another of his protagonists, Josef K., is arrested and executed by an inscrutable court.",
      "He asked his friend Max Brod to burn his unpublished manuscripts, an instruction Brod ignored.",
      "For 10 points—name this Prague-born author of The Metamorphosis."
    ],
    answer: "Franz Kafka",
    answerLine: "Franz Kafka"
  },
  {
    category: "Literature",
    clues: [
      "This novel's idealistic heroine marries a desiccated scholar laboring on a never-finished \"Key to All Mythologies.\"",
      "The ambitious doctor Tertius Lydgate is ruined by debt and his marriage to Rosamond Vincy.",
      "Its heroine, Dorothea Brooke, eventually marries Will Ladislaw against her uncle's wishes.",
      "It is subtitled \"A Study of Provincial Life.\"",
      "For 10 points—name this novel by George Eliot, the pen name of Mary Ann Evans."
    ],
    answer: "Middlemarch",
    answerLine: "Middlemarch"
  },
  {
    category: "Science",
    clues: [
      "This constant is approximately 6.022 times ten to the twenty-third.",
      "It was named for an Italian scientist who hypothesized that equal volumes of gases contain equal numbers of particles.",
      "Since the 2019 SI redefinition, it is fixed by definition rather than measured.",
      "It gives the number of particles in one mole of a substance.",
      "For 10 points—name this constant bridging atomic and macroscopic scales."
    ],
    answer: "Avogadro's number",
    answerLine: "Avogadro's number (accept Avogadro's constant)"
  },
  {
    category: "Science",
    clues: [
      "Crossing over occurs during this process's prophase I at structures called chiasmata.",
      "Independent assortment of homologous chromosomes during its metaphase I increases genetic variation.",
      "Nondisjunction during it can produce conditions such as Down syndrome.",
      "It halves chromosome number, producing four haploid daughter cells.",
      "For 10 points—name this cell division that produces gametes."
    ],
    answer: "Meiosis",
    answerLine: "meiosis (do not accept \"mitosis\")"
  },
  {
    category: "Science",
    clues: [
      "This theory's field equations relate the stress-energy tensor to the curvature of spacetime.",
      "It was confirmed by Arthur Eddington's 1919 observation of starlight bending during a solar eclipse.",
      "It explained the anomalous precession of Mercury's perihelion and predicts gravitational lensing.",
      "It describes gravity not as a force but as curvature caused by mass and energy.",
      "For 10 points—name this 1915 theory by Albert Einstein."
    ],
    answer: "General relativity",
    answerLine: "general relativity (accept the general theory of relativity; do not accept \"special relativity\")"
  },
  {
    category: "Science",
    clues: [
      "This phenomenon causes light from receding galaxies to shift toward longer wavelengths.",
      "That redshift, observed by Edwin Hubble, provided evidence that the universe is expanding.",
      "Weather radar uses it to detect the motion of precipitation and rotation within storms.",
      "It explains why a passing siren's pitch seems to drop as it goes by.",
      "For 10 points—name this change in observed frequency due to relative motion, named for an Austrian physicist."
    ],
    answer: "The Doppler effect",
    answerLine: "the Doppler effect (accept Doppler shift)"
  },
  {
    category: "Science",
    clues: [
      "This principle predicts that increasing pressure shifts a gaseous equilibrium toward the side with fewer moles of gas.",
      "It explains why removing product from a reversible reaction drives it forward.",
      "Industrial chemists apply it to maximize ammonia yield in the Haber process.",
      "It states that a system at equilibrium responds to a disturbance so as to counteract it.",
      "For 10 points—name this principle named for a French chemist."
    ],
    answer: "Le Châtelier's principle",
    answerLine: "Le Châtelier's principle"
  },
  {
    category: "Math",
    clues: [
      "This quantity was dismissed as \"fictitious\" by Descartes, who coined its dismissive name.",
      "Euler's identity relates it to pi, e, 1, and 0 in a single equation.",
      "Combining it with real numbers produces the complex numbers, plotted on the Argand plane.",
      "It is defined as the square root of negative one.",
      "For 10 points—name this number denoted by the letter i."
    ],
    answer: "The imaginary unit i",
    answerLine: "the imaginary unit (accept i or imaginary numbers)"
  },
  {
    category: "Math",
    clues: [
      "The first part of this theorem states that differentiating an integral with a variable upper limit recovers the original function.",
      "Its second part evaluates a definite integral as the antiderivative's difference at the endpoints.",
      "It establishes that two seemingly unrelated operations are inverses of one another.",
      "Newton and Leibniz are both credited with recognizing it.",
      "For 10 points—name this theorem linking derivatives and integrals."
    ],
    answer: "The Fundamental Theorem of Calculus",
    answerLine: "the Fundamental Theorem of Calculus"
  },
  {
    category: "History",
    clues: [
      "Thucydides wrote an unfinished history of this conflict, including a funeral oration by Pericles.",
      "A disastrous expedition to Sicily crippled one side, whose general Alcibiades defected to the enemy.",
      "It was interrupted by the Peace of Nicias before resuming.",
      "It ended in 404 BC after the naval defeat at Aegospotami forced Athens to surrender.",
      "For 10 points—name this war between Athens and Sparta."
    ],
    answer: "The Peloponnesian War",
    answerLine: "the Peloponnesian War"
  },
  {
    category: "History",
    clues: [
      "This rebellion's leader claimed to be the younger brother of Jesus Christ after failing the civil service exams.",
      "Its adherents established a \"Heavenly Kingdom of Great Peace\" with its capital at Nanjing.",
      "It was finally suppressed by regional armies and the Western-officered \"Ever Victorious Army.\"",
      "With perhaps 20 million dead, it may be the deadliest civil war in history.",
      "For 10 points—name this mid-19th-century uprising against China's Qing dynasty."
    ],
    answer: "The Taiping Rebellion",
    answerLine: "the Taiping Rebellion"
  },
  {
    category: "History",
    clues: [
      "This program was formally titled the European Recovery Program.",
      "Its namesake announced it in a 1947 commencement address at Harvard.",
      "Stalin pressured Eastern Bloc states, including Czechoslovakia, to refuse participation.",
      "It sent over 13 billion dollars to rebuild Western European economies.",
      "For 10 points—name this US aid initiative named for a Secretary of State."
    ],
    answer: "The Marshall Plan",
    answerLine: "the Marshall Plan (accept the European Recovery Program)"
  },
  {
    category: "History",
    clues: [
      "This uprising's leader denounced the colonial governor for refusing to authorize attacks on Native Americans.",
      "Its participants burned the colonial capital to the ground in September 1676.",
      "It collapsed after its leader died of dysentery, and Governor William Berkeley hanged the ringleaders.",
      "Historians link its aftermath to a hardening of racial slavery, as planters shifted from indentured servants.",
      "For 10 points—name this 1676 rebellion in colonial Virginia."
    ],
    answer: "Bacon's Rebellion",
    answerLine: "Bacon's Rebellion"
  },
  {
    category: "History",
    clues: [
      "The boundary drawn during this event is named for Cyril Radcliffe, who had never visited the region.",
      "It displaced perhaps 15 million people and killed hundreds of thousands in communal violence.",
      "Muhammad Ali Jinnah and Jawaharlal Nehru led the two resulting states.",
      "It divided Punjab and Bengal along religious lines in August 1947.",
      "For 10 points—name this division of British India into two independent nations."
    ],
    answer: "The Partition of India",
    answerLine: "the Partition of India (accept Partition of British India)"
  },
  {
    category: "History",
    clues: [
      "This ruler was known within his own empire as \"the Lawgiver\" for codifying its legal system.",
      "His chief architect Mimar Sinan built mosques across his capital.",
      "He failed to take Vienna in his 1529 siege, marking the limit of his westward expansion.",
      "His reign is generally considered the peak of the Ottoman Empire's power.",
      "For 10 points—name this sultan known in the West by a laudatory epithet."
    ],
    answer: "Suleiman the Magnificent",
    answerLine: "Suleiman the Magnificent (accept Suleiman I or Suleiman the Lawgiver)"
  },
  {
    category: "Fine Arts",
    clues: [
      "Only about 35 paintings are securely attributed to this artist.",
      "Scholars have argued he used a camera obscura to achieve his precise optical effects.",
      "His works include The Milkmaid and a luminous cityscape, View of Delft.",
      "He often depicted solitary women in domestic interiors lit from a left-hand window.",
      "For 10 points—name this Dutch Golden Age painter of Girl with a Pearl Earring."
    ],
    answer: "Johannes Vermeer",
    answerLine: "Johannes Vermeer (accept Jan Vermeer)"
  },
  {
    category: "Fine Arts",
    clues: [
      "This composer's orchestral prelude was inspired by a Mallarmé poem about a faun's afternoon.",
      "He employed whole-tone scales and parallel chords that broke from traditional harmony.",
      "His orchestral work La Mer depicts the sea in three movements.",
      "His Suite bergamasque contains the piano piece \"Clair de lune.\"",
      "For 10 points—name this French composer often labeled an Impressionist."
    ],
    answer: "Claude Debussy",
    answerLine: "Claude Debussy"
  },
  {
    category: "Fine Arts",
    clues: [
      "This artist laid unstretched canvas on the floor and worked from all four sides.",
      "A Life magazine profile asked whether he was the greatest living painter in the United States.",
      "His technique of pouring and flinging paint earned him the nickname \"Jack the Dripper.\"",
      "He was a leading figure of Abstract Expressionism and died in a 1956 car crash.",
      "For 10 points—name this American painter of drip works like No. 5, 1948."
    ],
    answer: "Jackson Pollock",
    answerLine: "Jackson Pollock"
  },
  {
    category: "Geography",
    clues: [
      "This semi-arid belt forms a transition zone between desert to its north and savanna to its south.",
      "Countries spanning it include Mauritania, Mali, Niger, and Chad.",
      "The Great Green Wall initiative aims to halt desertification along it.",
      "Its name comes from an Arabic word meaning \"coast\" or \"shore.\"",
      "For 10 points—name this African region bordering the southern Sahara."
    ],
    answer: "The Sahel",
    answerLine: "the Sahel"
  },
  {
    category: "Geography",
    clues: [
      "The Montreux Convention governs the passage of warships through this waterway.",
      "It connects the Black Sea to the Sea of Marmara, which leads on to the Dardanelles.",
      "Suspension bridges span it, linking two continents.",
      "Istanbul sits on both of its banks.",
      "For 10 points—name this strait separating Europe from Asia."
    ],
    answer: "The Bosporus",
    answerLine: "the Bosporus (accept Bosphorus; do not accept \"Dardanelles\")"
  },
  {
    category: "Current Events",
    clues: [
      "This body was established by the Rome Statute, which entered into force in 2002.",
      "It exercises jurisdiction only when national courts are unwilling or unable to prosecute.",
      "The United States, China, Russia, and India are not among its member states.",
      "It sits in The Hague and prosecutes genocide, war crimes, and crimes against humanity.",
      "For 10 points—name this permanent international tribunal."
    ],
    answer: "The International Criminal Court",
    answerLine: "the International Criminal Court (accept ICC; do not accept \"International Court of Justice\")"
  },
  {
    category: "Current Events",
    clues: [
      "This organization was founded in Baghdad in 1960 by five countries including Venezuela and Iran.",
      "Its 1973 embargo, launched during the Yom Kippur War, quadrupled prices and caused fuel shortages.",
      "An expanded grouping including Russia is known by this organization's name plus a \"+.\"",
      "Saudi Arabia is generally its most influential member.",
      "For 10 points—name this cartel that coordinates petroleum production."
    ],
    answer: "OPEC",
    answerLine: "OPEC (accept the Organization of the Petroleum Exporting Countries)"
  },
  {
    category: "Mythology",
    clues: [
      "This king was two-thirds divine and oppressed his people until the gods created a rival for him.",
      "He and his companion Enkidu killed the guardian Humbaba in the Cedar Forest.",
      "Grief over Enkidu's death drove him to seek immortality from Utnapishtim, who recounted surviving a great flood.",
      "He ruled the Sumerian city of Uruk and built its walls.",
      "For 10 points—name this hero of the oldest surviving major epic."
    ],
    answer: "Gilgamesh",
    answerLine: "Gilgamesh (accept the Epic of Gilgamesh)"
  },
  {
    category: "Social Science",
    clues: [
      "Leon Festinger developed this concept partly by infiltrating a UFO doomsday cult whose prophecy failed.",
      "A classic experiment found subjects paid only one dollar to lie rated a boring task as more enjoyable than those paid twenty.",
      "It is often resolved by changing one's attitude to match one's behavior rather than the reverse.",
      "It describes mental discomfort from holding contradictory beliefs at once.",
      "For 10 points—name this psychological concept."
    ],
    answer: "Cognitive dissonance",
    answerLine: "cognitive dissonance"
  },
  {
    category: "Theology/Philosophy",
    clues: [
      "This philosopher contrasted Apollonian and Dionysian impulses in The Birth of Tragedy.",
      "He attacked what he called \"slave morality\" in On the Genealogy of Morals.",
      "His sister edited his notes into The Will to Power, distorting his ideas for nationalist ends.",
      "He introduced the Übermensch and eternal recurrence in Thus Spoke Zarathustra.",
      "For 10 points—name this German philosopher who declared that \"God is dead.\""
    ],
    answer: "Friedrich Nietzsche",
    answerLine: "Friedrich Nietzsche"
  },
  {
    category: "Pop Culture / Sports",
    clues: [
      "The overall leader of this event wears the maillot jaune, or yellow jersey.",
      "Its King of the Mountains competition awards a polka-dot jersey on Alpine and Pyrenean stages.",
      "All seven of Lance Armstrong's titles in it were stripped for doping.",
      "It traditionally finishes on the Champs-Élysées in Paris.",
      "For 10 points—name this three-week cycling race."
    ],
    answer: "The Tour de France",
    answerLine: "the Tour de France"
  },
  {
    category: "Misc/General Knowledge",
    clues: [
      "This object was uncovered in 1799 by French soldiers during Napoleon's Egyptian campaign.",
      "It came into British hands after the Treaty of Alexandria and has been in the British Museum since 1802.",
      "It records a decree issued at Memphis in 196 BC in three scripts: hieroglyphic, Demotic, and Greek.",
      "Jean-François Champollion used it to decipher Egyptian hieroglyphs in 1822.",
      "For 10 points—name this granodiorite slab."
    ],
    answer: "The Rosetta Stone",
    answerLine: "the Rosetta Stone"
  }
];

const BANK_STATE_DIRECTED = [
  {
    category: "Literature",
    question: "What American poet included \"Song of Myself\" in his career-long collection Leaves of Grass?",
    answer: "Walt Whitman",
    answerLine: "Walt Whitman"
  },
  {
    category: "Literature",
    question: "What ancient Greek playwright wrote the Theban plays Oedipus Rex and Antigone?",
    answer: "Sophocles",
    answerLine: "Sophocles (do not accept \"Aeschylus\" or \"Euripides\")"
  },
  {
    category: "Science",
    question: "What enzyme unwinds the DNA double helix at the replication fork?",
    answer: "Helicase",
    answerLine: "helicase (accept DNA helicase)"
  },
  {
    category: "Science",
    question: "What is the SI unit of electrical resistance?",
    answer: "The ohm",
    answerLine: "ohm (accept ohms)"
  },
  {
    category: "Math",
    question: "What is the derivative of sine of x with respect to x?",
    answer: "Cosine of x",
    answerLine: "cosine of x (accept cos x)"
  },
  {
    category: "History",
    question: "What 1648 peace settlement ended the Thirty Years' War?",
    answer: "The Peace of Westphalia",
    answerLine: "the Peace of Westphalia (accept Treaty of Westphalia)"
  },
  {
    category: "History",
    question: "What Byzantine emperor commissioned the Hagia Sophia and a famous codification of Roman law?",
    answer: "Justinian I",
    answerLine: "Justinian I (accept Justinian the Great)"
  },
  {
    category: "Fine Arts",
    question: "What Mexican painter is known for vivid self-portraits including The Two Fridas?",
    answer: "Frida Kahlo",
    answerLine: "Frida Kahlo"
  },
  {
    category: "Geography",
    question: "What Central Asian sea, bordered by Kazakhstan and Uzbekistan, has largely dried up since Soviet irrigation projects began in the 1960s?",
    answer: "The Aral Sea",
    answerLine: "the Aral Sea"
  },
  {
    category: "Theology/Philosophy",
    question: "What English philosopher argued in Leviathan that life without government would be \"solitary, poor, nasty, brutish, and short\"?",
    answer: "Thomas Hobbes",
    answerLine: "Thomas Hobbes"
  }
];

// ---------------------------------------------------------------------------
// Bank registry — the app reads this.
// ---------------------------------------------------------------------------

const BANKS = [
  {
    id: "novice",
    name: "Novice Set",
    difficulty: "Novice",
    blurb: "Middle school and first-year players; core canon with generous giveaways.",
    tossups: BANK_NOVICE_TOSSUPS,
    directed: BANK_NOVICE_DIRECTED
  },
  {
    id: "regular",
    name: "Regular Season",
    difficulty: "Regular",
    blurb: "District and regular-season calibration — the standard VHSL difficulty.",
    tossups: BANK_REGULAR_TOSSUPS,
    directed: BANK_REGULAR_DIRECTED
  },
  {
    id: "regional",
    name: "Regionals",
    difficulty: "Regular-Plus",
    blurb: "Regional and Super-Regional level; deeper canon and harder lead-ins.",
    tossups: BANK_REGIONAL_TOSSUPS,
    directed: BANK_REGIONAL_DIRECTED
  },
  {
    id: "state",
    name: "State Championship",
    difficulty: "Higher",
    blurb: "Hardest tier — obscure lead-ins rewarding genuinely deep subject knowledge.",
    tossups: BANK_STATE_TOSSUPS,
    directed: BANK_STATE_DIRECTED
  }
];

const DEFAULT_BANK_ID = "regular";
