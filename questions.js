/**
 * VHSL-style practice question banks.
 *
 * Each bank contains 60 toss-ups and 20 directed questions. Each run samples
 * a regulation-length match of 30 toss-ups (15 per period) + 10 directed
 * questions, preserving the original full-match category counts.
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
      "He served Ludovico Sforza in Milan and died in France in 1519 as a guest of King Francis I.",
      "For 10 points—name this Italian Renaissance polymath from the town of Vinci."
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
      "This hero escapes the nymph Calypso after seven years and returns home disguised as a beggar.",
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
      "The 1947 Truman Doctrine pledged U.S. support to Greece and Turkey early in this conflict.",
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
      "Fighting on its Western Front ended with the armistice of November 11, 1918.",
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
      "Petrarch helped launch its humanist movement, and Machiavelli wrote The Prince during it.",
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
    question: "What Florentine artist sculpted the David and painted the ceiling of the Sistine Chapel?",
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
      "Late in life this composer adopted serial technique in works such as Agon and Threni.",
      "His neoclassical period includes Pulcinella, based on music then attributed to Pergolesi, and the Symphony of Psalms.",
      "He became a U.S. citizen in 1945 and was buried on the cemetery island of San Michele in Venice.",
      "He wrote Petrushka, about a puppet who comes to life, for Sergei Diaghilev's Ballets Russes.",
      "For 10 points—name this Russian-born composer of The Firebird."
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

// Additional practice questions: randomly sampled with the original questions.

BANK_NOVICE_TOSSUPS.push(...[
  {
    "category": "Literature",
    "clues": [
      "A company led by Thorin Oakenshield hires this book's hero as a burglar.",
      "Its hero wins a riddle contest against Gollum and finds a ring that makes him invisible.",
      "The dragon Smaug guards treasure inside the Lonely Mountain in this book.",
      "For 10 points—name this J. R. R. Tolkien novel about Bilbo Baggins."
    ],
    "answer": "The Hobbit",
    "answerLine": "The Hobbit"
  },
  {
    "category": "Literature",
    "clues": [
      "In this novel, Edmund betrays his siblings after being offered Turkish delight.",
      "Its villain makes a magical land endure winter without Christmas.",
      "Lucy Pevensie enters Narnia through a piece of furniture, and the lion Aslan helps defeat the White Witch.",
      "For 10 points—name this C. S. Lewis novel whose title ends with a wardrobe."
    ],
    "answer": "The Lion, the Witch and the Wardrobe",
    "answerLine": "The Lion, the Witch and the Wardrobe"
  },
  {
    "category": "Literature",
    "clues": [
      "Fern saves a runt pig from being killed at the beginning of this novel.",
      "Messages such as Some Pig appear above that pig's pen.",
      "A spider helps save Wilbur by writing words in her web.",
      "For 10 points—name this E. B. White children's novel named for that spider's creation."
    ],
    "answer": "Charlotte's Web",
    "answerLine": "Charlotte's Web"
  },
  {
    "category": "Literature",
    "clues": [
      "A worried fish objects to the visitor's behavior in this book.",
      "Thing One and Thing Two make a mess before the visitor cleans it up.",
      "Sally and her brother are entertained on a rainy day by an animal wearing a striped hat.",
      "For 10 points—name this rhyming children's book by Dr. Seuss."
    ],
    "answer": "The Cat in the Hat",
    "answerLine": "The Cat in the Hat"
  },
  {
    "category": "Literature",
    "clues": [
      "The heroine of this book wears silver shoes, unlike the ruby slippers in its famous film adaptation.",
      "Her companions seek a brain, a heart, and courage.",
      "Dorothy follows a yellow brick road with the Scarecrow, Tin Woodman, and Cowardly Lion.",
      "For 10 points—name this L. Frank Baum novel set in Oz."
    ],
    "answer": "The Wonderful Wizard of Oz",
    "answerLine": "The Wonderful Wizard of Oz (accept The Wizard of Oz)"
  },
  {
    "category": "Science",
    "clues": [
      "Olympus Mons, an enormous volcano, is located on this planet.",
      "Its two small moons are Phobos and Deimos.",
      "Its reddish appearance comes from iron minerals, and it is the fourth planet from the Sun.",
      "For 10 points—name this planet known as the Red Planet."
    ],
    "answer": "Mars",
    "answerLine": "Mars"
  },
  {
    "category": "Science",
    "clues": [
      "This force keeps natural satellites traveling around planets.",
      "Near Earth's surface it gives freely falling objects an acceleration of about 9.8 meters per second squared.",
      "It attracts objects with mass and keeps planets in orbit around the Sun.",
      "For 10 points—name this force that makes an unsupported apple fall."
    ],
    "answer": "Gravity",
    "answerLine": "gravity (accept gravitation)"
  },
  {
    "category": "Science",
    "clues": [
      "Robert Hooke used this term after examining cork under a microscope.",
      "Some organisms consist of only one of these units.",
      "Their membranes enclose cytoplasm, and many contain a nucleus.",
      "For 10 points—name the basic unit of living organisms."
    ],
    "answer": "The cell",
    "answerLine": "cell (accept cells)"
  },
  {
    "category": "Science",
    "clues": [
      "This process can cool a surface because more energetic molecules escape from it.",
      "It occurs at a liquid's surface even below the liquid's boiling point.",
      "It helps puddles disappear and changes liquid water into water vapor.",
      "For 10 points—name this surface process of a liquid becoming a gas."
    ],
    "answer": "Evaporation",
    "answerLine": "evaporation; do not accept boiling"
  },
  {
    "category": "Science",
    "clues": [
      "A compass needle aligns with a field associated with this phenomenon.",
      "Iron and nickel can respond strongly to it.",
      "Like poles repel, while opposite poles attract.",
      "For 10 points—name this phenomenon demonstrated by a bar magnet."
    ],
    "answer": "Magnetism",
    "answerLine": "magnetism (accept magnetic force)"
  },
  {
    "category": "Math",
    "clues": [
      "For a rectangle, this quantity equals twice the sum of its length and width.",
      "For a polygon, it is found by adding the lengths of all sides.",
      "It measures distance around a shape rather than the space inside it.",
      "For 10 points—name this boundary length of a plane figure."
    ],
    "answer": "The perimeter",
    "answerLine": "perimeter; do not accept area"
  },
  {
    "category": "Math",
    "clues": [
      "A zero value for this part makes an ordinary fraction undefined.",
      "When adding fractions, these parts must be made equal.",
      "In three-fourths, this part is four and tells how many equal parts form a whole.",
      "For 10 points—name the bottom number of a fraction."
    ],
    "answer": "The denominator",
    "answerLine": "denominator; do not accept numerator"
  },
  {
    "category": "History",
    "clues": [
      "During the Civil War, this woman helped guide the Combahee River Raid.",
      "She repeatedly returned to the South after escaping slavery herself.",
      "She led enslaved people to freedom through the Underground Railroad.",
      "For 10 points—name this abolitionist sometimes called Moses."
    ],
    "answer": "Harriet Tubman",
    "answerLine": "Harriet Tubman (accept Tubman)"
  },
  {
    "category": "History",
    "clues": [
      "This conflict included an American victory at Yorktown.",
      "France supported the colonists against Great Britain.",
      "The Declaration of Independence was issued during this war.",
      "For 10 points—name the war in which the thirteen colonies won independence."
    ],
    "answer": "The American Revolution",
    "answerLine": "American Revolution (accept American Revolutionary War or U.S. War of Independence)"
  },
  {
    "category": "History",
    "clues": [
      "This civilization used a writing system that included hieroglyphs.",
      "Many of its rulers were buried with goods meant for an afterlife.",
      "It built the pyramids at Giza and was ruled by pharaohs.",
      "For 10 points—name this ancient civilization centered on the Nile."
    ],
    "answer": "Ancient Egypt",
    "answerLine": "ancient Egypt (accept Egypt)"
  },
  {
    "category": "History",
    "clues": [
      "This ruler spent his final exile on the island of Saint Helena.",
      "His 1812 invasion of Russia ended in a disastrous retreat.",
      "He was defeated at Waterloo after ruling France as emperor.",
      "For 10 points—name this French military leader whose surname was Bonaparte."
    ],
    "answer": "Napoleon Bonaparte",
    "answerLine": "Napoleon Bonaparte (accept Napoleon I or Napoleon)"
  },
  {
    "category": "History",
    "clues": [
      "This woman's arrest helped spark a boycott lasting more than a year.",
      "She was an activist in the NAACP before that arrest.",
      "In 1955, she refused to give up her bus seat to a white passenger in Montgomery, Alabama.",
      "For 10 points—name this civil rights activist."
    ],
    "answer": "Rosa Parks",
    "answerLine": "Rosa Parks (accept Parks)"
  },
  {
    "category": "History",
    "clues": [
      "The Dust Bowl worsened hardship during this period.",
      "Franklin Roosevelt's New Deal responded to this economic crisis.",
      "A 1929 stock-market crash preceded this period of widespread unemployment.",
      "For 10 points—name this severe economic downturn of the 1930s."
    ],
    "answer": "The Great Depression",
    "answerLine": "Great Depression"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "This instrument's standard strings are tuned G, D, A, and E.",
      "It is usually held beneath the chin and played with a bow.",
      "It is the highest-pitched regular member of the orchestral string family.",
      "For 10 points—name this four-string instrument often called a fiddle."
    ],
    "answer": "The violin",
    "answerLine": "violin; do not accept viola"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "A winding landscape appears behind the seated subject of this painting.",
      "It is displayed at the Louvre Museum in Paris.",
      "Its subject is famous for an enigmatic smile.",
      "For 10 points—name this portrait, also called La Gioconda, often described as the most famous painting in the world."
    ],
    "answer": "The Mona Lisa",
    "answerLine": "Mona Lisa (accept La Gioconda or La Joconde)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "In this art, dancers use positions numbered first through fifth.",
      "Some performers wear pointe shoes that allow them to stand on the tips of their toes.",
      "Swan Lake and The Nutcracker are examples of this form of dance.",
      "For 10 points—name this classical dance form associated with tutus."
    ],
    "answer": "Ballet",
    "answerLine": "ballet"
  },
  {
    "category": "Geography",
    "clues": [
      "The Ahaggar Mountains lie within this desert.",
      "It stretches across countries including Algeria, Libya, and Egypt.",
      "It is the largest hot desert and covers much of North Africa.",
      "For 10 points—name this African desert."
    ],
    "answer": "The Sahara",
    "answerLine": "Sahara (accept Sahara Desert)"
  },
  {
    "category": "Geography",
    "clues": [
      "Hokkaido and Shikoku are among this country's main islands.",
      "Mount Fuji rises on its largest island, Honshu.",
      "Kyoto was once its capital, and Tokyo is its capital today.",
      "For 10 points—name this East Asian island country."
    ],
    "answer": "Japan",
    "answerLine": "Japan (accept Nippon or Nihon)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This organization promotes childhood vaccination and nutrition.",
      "Its name retains an acronym from its original emergency-fund name.",
      "It is the United Nations agency focused on children's welfare.",
      "For 10 points—name this agency known by the acronym UNICEF."
    ],
    "answer": "UNICEF",
    "answerLine": "UNICEF (accept United Nations Children's Fund)"
  },
  {
    "category": "Current Events",
    "clues": [
      "Geothermal power and sustainably managed hydropower belong to this category.",
      "Its sources are replenished by natural processes on human time scales.",
      "Wind turbines and solar panels produce this kind of energy.",
      "For 10 points—name this category of energy contrasted with finite fossil fuels."
    ],
    "answer": "Renewable energy",
    "answerLine": "renewable energy (accept renewable power)"
  },
  {
    "category": "Mythology",
    "clues": [
      "In Norse stories, this god rides in a chariot drawn by goats.",
      "His hammer is called Mjolnir.",
      "He is associated with storms and is a son of Odin.",
      "For 10 points—name this Norse god of thunder."
    ],
    "answer": "Thor",
    "answerLine": "Thor"
  },
  {
    "category": "Social Science",
    "clues": [
      "In the United States, this count helps determine how House seats are apportioned.",
      "The U.S. Constitution requires one every ten years.",
      "It gathers information about the people living in a country.",
      "For 10 points—name this official population count."
    ],
    "answer": "A census",
    "answerLine": "census (accept population census)"
  },
  {
    "category": "Theology/Philosophy",
    "clues": [
      "This religion includes Catholic, Orthodox, and Protestant traditions.",
      "Its scriptures include the New Testament.",
      "Its central figure is Jesus of Nazareth.",
      "For 10 points—name this religion whose followers are called Christians."
    ],
    "answer": "Christianity",
    "answerLine": "Christianity; prompt on a specific Christian denomination"
  },
  {
    "category": "Pop Culture / Sports",
    "clues": [
      "A player in this sport may be penalized for traveling or double dribbling.",
      "Each team normally has five players on the court.",
      "Players shoot a ball through an elevated hoop.",
      "For 10 points—name this sport invented by James Naismith."
    ],
    "answer": "Basketball",
    "answerLine": "basketball"
  },
  {
    "category": "Misc/General Knowledge",
    "clues": [
      "A standard cell in this system contains six possible raised-dot positions.",
      "Its inventor lost his sight as a child.",
      "It lets readers identify letters and other symbols by touch.",
      "For 10 points—name this reading and writing system named for Louis Braille."
    ],
    "answer": "Braille",
    "answerLine": "Braille"
  }
]);

BANK_NOVICE_DIRECTED.push(...[
  {
    "category": "Literature",
    "question": "What honey-loving bear created by A. A. Milne has friends named Piglet and Eeyore?",
    "answer": "Winnie-the-Pooh",
    "answerLine": "Winnie-the-Pooh (accept Pooh)"
  },
  {
    "category": "Literature",
    "question": "To what ancient storyteller are fables such as The Tortoise and the Hare traditionally attributed?",
    "answer": "Aesop",
    "answerLine": "Aesop"
  },
  {
    "category": "Science",
    "question": "What gas makes up about 78 percent of Earth's atmosphere?",
    "answer": "Nitrogen",
    "answerLine": "nitrogen (accept N2)"
  },
  {
    "category": "Science",
    "question": "What natural satellite of Earth has phases including new, crescent, and full?",
    "answer": "The Moon",
    "answerLine": "the Moon (accept Luna)"
  },
  {
    "category": "Math",
    "question": "How many sides does an octagon have?",
    "answer": "Eight",
    "answerLine": "eight (accept 8)"
  },
  {
    "category": "History",
    "question": "What barrier dividing a German city opened in November 1989?",
    "answer": "The Berlin Wall",
    "answerLine": "Berlin Wall"
  },
  {
    "category": "History",
    "question": "Who was the principal author of the Declaration of Independence?",
    "answer": "Thomas Jefferson",
    "answerLine": "Thomas Jefferson (accept Jefferson)"
  },
  {
    "category": "Fine Arts",
    "question": "What brass instrument typically uses three valves and is often associated with jazz musician Louis Armstrong?",
    "answer": "The trumpet",
    "answerLine": "trumpet"
  },
  {
    "category": "Geography",
    "question": "What city is the capital of Canada?",
    "answer": "Ottawa",
    "answerLine": "Ottawa"
  },
  {
    "category": "Mythology",
    "question": "What Greek god of the sea carries a trident?",
    "answer": "Poseidon",
    "answerLine": "Poseidon; do not accept Neptune"
  }
]);

BANK_REGULAR_TOSSUPS.push(...[
  {
    "category": "Literature",
    "clues": [
      "The horse Boxer is sent away after becoming too weak to work in this novel.",
      "The pigs Napoleon and Snowball struggle for control after a rebellion.",
      "Its animals discover that some animals are more equal than others.",
      "For 10 points—name this George Orwell novella about animals taking over a farm."
    ],
    "answer": "Animal Farm",
    "answerLine": "Animal Farm"
  },
  {
    "category": "Literature",
    "clues": [
      "The heroine of this novel attends the harsh Lowood School.",
      "She becomes a governess at Thornfield Hall, where Bertha Mason is hidden.",
      "She falls in love with Edward Rochester but refuses to become his mistress.",
      "For 10 points—name this Charlotte Bronte novel named for its heroine."
    ],
    "answer": "Jane Eyre",
    "answerLine": "Jane Eyre"
  },
  {
    "category": "Literature",
    "clues": [
      "The ship in this novel has a harpooner named Queequeg.",
      "Its narrator, Ishmael, survives by floating on a coffin.",
      "Captain Ahab commands the Pequod while pursuing a white whale.",
      "For 10 points—name this Herman Melville novel."
    ],
    "answer": "Moby-Dick",
    "answerLine": "Moby-Dick (accept Moby Dick or The Whale)"
  },
  {
    "category": "Literature",
    "clues": [
      "Priam visits an enemy camp to recover his son's body near the end of this epic.",
      "Patroclus dies after wearing another warrior's armor.",
      "It centers on Achilles' anger during the Trojan War.",
      "For 10 points—name this Homeric epic about the war at Troy."
    ],
    "answer": "The Iliad",
    "answerLine": "The Iliad; do not accept The Odyssey"
  },
  {
    "category": "Literature",
    "clues": [
      "This poet imagines a small cabin and nine bean rows on a lake island.",
      "Another of his poems describes a rough beast moving toward Bethlehem.",
      "He wrote The Lake Isle of Innisfree and The Second Coming.",
      "For 10 points—name this Irish Nobel-winning poet."
    ],
    "answer": "William Butler Yeats",
    "answerLine": "William Butler Yeats (accept Yeats or W. B. Yeats)"
  },
  {
    "category": "Science",
    "clues": [
      "This mechanism favors heritable traits that increase reproductive success in a particular environment.",
      "Alfred Russel Wallace independently developed an account of it.",
      "Charles Darwin used it to explain adaptation in On the Origin of Species.",
      "For 10 points—name this process often summarized as survival of the fittest."
    ],
    "answer": "Natural selection",
    "answerLine": "natural selection; prompt on evolution"
  },
  {
    "category": "Science",
    "clues": [
      "J. J. Thomson identified this particle through experiments with cathode rays.",
      "Its mass is much smaller than that of a proton.",
      "It has a negative electric charge and occupies orbitals around an atomic nucleus.",
      "For 10 points—name this negatively charged subatomic particle."
    ],
    "answer": "The electron",
    "answerLine": "electron"
  },
  {
    "category": "Science",
    "clues": [
      "Dmitri Mendeleev left gaps in an early version of this arrangement.",
      "Its columns are called groups, and its rows are called periods.",
      "The modern version arranges chemical elements by increasing atomic number.",
      "For 10 points—name this chart of the elements."
    ],
    "answer": "The periodic table",
    "answerLine": "periodic table (accept periodic table of the elements)"
  },
  {
    "category": "Science",
    "clues": [
      "These structures contain both RNA and proteins.",
      "Some attach to the rough endoplasmic reticulum, while others remain free in the cytoplasm.",
      "They translate messenger RNA into chains of amino acids.",
      "For 10 points—name these cellular structures that synthesize proteins."
    ],
    "answer": "Ribosomes",
    "answerLine": "ribosomes (accept ribosome)"
  },
  {
    "category": "Science",
    "clues": [
      "Snell's law relates angles in this phenomenon.",
      "It occurs when a wave changes speed while passing between media.",
      "It helps explain why a straw appears bent at the surface of water.",
      "For 10 points—name this bending of light as it enters a different medium."
    ],
    "answer": "Refraction",
    "answerLine": "refraction; do not accept reflection"
  },
  {
    "category": "Math",
    "clues": [
      "The expression under the radical in this formula is the discriminant.",
      "Its denominator is twice the coefficient of the squared term.",
      "It gives x as negative b plus or minus the square root of b squared minus four ac, all over two a.",
      "For 10 points—name this formula for solving a degree-two equation."
    ],
    "answer": "The quadratic formula",
    "answerLine": "quadratic formula"
  },
  {
    "category": "Math",
    "clues": [
      "For an even-sized data set, this statistic averages two central observations.",
      "It is generally less sensitive to extreme outliers than the mean.",
      "To find it, arrange the values in order and locate the middle.",
      "For 10 points—name this measure of central tendency."
    ],
    "answer": "The median",
    "answerLine": "median; do not accept mean or mode"
  },
  {
    "category": "History",
    "clues": [
      "The Peace of Augsburg recognized a division associated with this movement.",
      "John Calvin and Huldrych Zwingli were among its leaders.",
      "Martin Luther's Ninety-five Theses challenged practices of the Catholic Church.",
      "For 10 points—name this sixteenth-century religious reform movement."
    ],
    "answer": "The Protestant Reformation",
    "answerLine": "Protestant Reformation (accept Reformation)"
  },
  {
    "category": "History",
    "clues": [
      "The spinning jenny and power loom contributed to this transformation.",
      "Steam engines helped power mines, factories, and transportation.",
      "It began in Britain and shifted much production from hand labor to machinery.",
      "For 10 points—name this transition to industrial manufacturing."
    ],
    "answer": "The Industrial Revolution",
    "answerLine": "Industrial Revolution"
  },
  {
    "category": "History",
    "clues": [
      "This ruler was born with the name Temujin.",
      "He united steppe tribes and used highly mobile cavalry armies.",
      "His conquests began the expansion of the Mongol Empire.",
      "For 10 points—name this founder of the Mongol Empire."
    ],
    "answer": "Genghis Khan",
    "answerLine": "Genghis Khan (accept Chinggis Khan or Temujin)"
  },
  {
    "category": "History",
    "clues": [
      "Lewis and Clark explored lands acquired in this transaction.",
      "Its price was fifteen million dollars.",
      "In 1803, the United States bought a vast territory from Napoleon's France.",
      "For 10 points—name this purchase that roughly doubled the size of the United States."
    ],
    "answer": "The Louisiana Purchase",
    "answerLine": "Louisiana Purchase"
  },
  {
    "category": "History",
    "clues": [
      "The settlement of this confrontation included a secret U.S. agreement to remove missiles from Turkey.",
      "John F. Kennedy ordered a naval quarantine during it.",
      "The United States discovered Soviet nuclear missiles on an island south of Florida in 1962.",
      "For 10 points—name this thirteen-day confrontation over Soviet missiles in Cuba."
    ],
    "answer": "The Cuban Missile Crisis",
    "answerLine": "Cuban Missile Crisis (accept October Crisis)"
  },
  {
    "category": "History",
    "clues": [
      "The Bayeux Tapestry depicts events leading to this battle.",
      "Harold Godwinson was killed during it.",
      "William of Normandy defeated the English army in 1066.",
      "For 10 points—name this battle that began the Norman conquest of England."
    ],
    "answer": "The Battle of Hastings",
    "answerLine": "Battle of Hastings (accept Hastings)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "An exhibition at photographer Nadar's studio helped launch this movement in 1874.",
      "Its painters often explored changing light through loose, visible brushwork.",
      "Claude Monet's Impression, Sunrise helped give the movement its name.",
      "For 10 points—name this art movement associated with Monet and Renoir."
    ],
    "answer": "The Impressionist movement",
    "answerLine": "Impressionism (accept Impressionist movement)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "This composer's final symphony is nicknamed the Pathetique.",
      "His 1812 Overture famously uses cannon effects.",
      "He composed the music for Swan Lake and The Nutcracker.",
      "For 10 points—name this Russian composer."
    ],
    "answer": "Pyotr Ilyich Tchaikovsky",
    "answerLine": "Pyotr Ilyich Tchaikovsky (accept Tchaikovsky)"
  },
  {
    "category": "Geography",
    "clues": [
      "Aconcagua is the highest peak of this mountain range.",
      "It runs through countries including Peru and Chile.",
      "It extends along the western edge of South America.",
      "For 10 points—name this long South American mountain range."
    ],
    "answer": "The Andes",
    "answerLine": "Andes (accept Andes Mountains)"
  },
  {
    "category": "Geography",
    "clues": [
      "The Pillars of Hercules traditionally marked the sides of this passage.",
      "Spain lies to its north and Morocco to its south.",
      "It connects the Atlantic Ocean with the Mediterranean Sea.",
      "For 10 points—name this strait at the western entrance to the Mediterranean."
    ],
    "answer": "The Strait of Gibraltar",
    "answerLine": "Strait of Gibraltar (accept Gibraltar Strait; prompt on Gibraltar)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This orbital laboratory includes modules named Zarya and Unity.",
      "Its construction has involved agencies including NASA, ESA, and JAXA.",
      "Astronauts live aboard it while conducting experiments in low Earth orbit.",
      "For 10 points—name this multinational space station."
    ],
    "answer": "The International Space Station",
    "answerLine": "International Space Station (accept ISS)"
  },
  {
    "category": "Current Events",
    "clues": [
      "The World Meteorological Organization and UNEP established this body in 1988.",
      "It assesses published research rather than running its own climate experiments.",
      "Its assessment reports summarize the science, impacts, and mitigation of climate change.",
      "For 10 points—name this climate-science assessment panel that shared the 2007 Nobel Peace Prize with Al Gore."
    ],
    "answer": "The IPCC",
    "answerLine": "IPCC (accept Intergovernmental Panel on Climate Change)"
  },
  {
    "category": "Mythology",
    "clues": [
      "In one myth, this goddess transforms Arachne after a weaving contest.",
      "An olive tree is associated with her contest for a city's patronage.",
      "She is a Greek goddess of wisdom whose major temple is the Parthenon.",
      "For 10 points—name this patron goddess of Athens."
    ],
    "answer": "Athena",
    "answerLine": "Athena; do not accept Minerva"
  },
  {
    "category": "Social Science",
    "clues": [
      "This concept applies even when no money changes hands.",
      "Choosing to spend an hour studying can incur it by giving up an hour of paid work.",
      "It is the value of the next-best alternative forgone when a choice is made.",
      "For 10 points—name this economic cost of choosing one option over another."
    ],
    "answer": "Opportunity cost",
    "answerLine": "opportunity cost"
  },
  {
    "category": "Theology/Philosophy",
    "clues": [
      "This thinker emphasized ren, often translated as humaneness, and li, associated with ritual.",
      "His teachings stress ethical relationships and proper conduct.",
      "His sayings are collected in the Analects.",
      "For 10 points—name this influential Chinese teacher and philosopher."
    ],
    "answer": "Confucius",
    "answerLine": "Confucius (accept Kongzi or Kong Fuzi)"
  },
  {
    "category": "Pop Culture / Sports",
    "clues": [
      "This athlete's number 42 was retired throughout Major League Baseball.",
      "He played for the Kansas City Monarchs before joining a major-league club.",
      "In 1947, he broke modern MLB's color barrier with the Brooklyn Dodgers.",
      "For 10 points—name this pioneering baseball player."
    ],
    "answer": "Jackie Robinson",
    "answerLine": "Jackie Robinson (accept Robinson)"
  },
  {
    "category": "Pop Culture / Sports",
    "clues": [
      "En passant is a special capture in this game.",
      "Castling moves a king and a rook in a single turn.",
      "Its pieces include bishops, knights, queens, and pawns on a 64-square board.",
      "For 10 points—name this game in which checkmate ends play."
    ],
    "answer": "Chess",
    "answerLine": "chess"
  },
  {
    "category": "Misc/General Knowledge",
    "clues": [
      "Its broad classes include the 500s for science and 800s for literature.",
      "It divides subjects using numerical subdivisions.",
      "Libraries use it to assign nonfiction books numbers for shelf arrangement.",
      "For 10 points—name this classification system devised by Melvil Dewey."
    ],
    "answer": "The Dewey Decimal Classification",
    "answerLine": "Dewey Decimal Classification (accept Dewey Decimal System; prompt on Dewey)"
  }
]);

BANK_REGULAR_DIRECTED.push(...[
  {
    "category": "Literature",
    "question": "What Geoffrey Chaucer work presents stories told by pilgrims traveling to Thomas Becket's shrine?",
    "answer": "The Canterbury Tales",
    "answerLine": "The Canterbury Tales"
  },
  {
    "category": "Literature",
    "question": "What Harlem Renaissance poet wrote The Negro Speaks of Rivers?",
    "answer": "Langston Hughes",
    "answerLine": "Langston Hughes (accept Hughes)"
  },
  {
    "category": "Science",
    "question": "What membrane-bound organelle houses most of a eukaryotic cell's DNA?",
    "answer": "The nucleus",
    "answerLine": "cell nucleus (accept nucleus)"
  },
  {
    "category": "Science",
    "question": "What SI unit of force equals one kilogram meter per second squared?",
    "answer": "The newton",
    "answerLine": "newton (accept newtons)"
  },
  {
    "category": "Math",
    "question": "What function is the inverse of an exponential function with the same base?",
    "answer": "The logarithm",
    "answerLine": "logarithm (accept log)"
  },
  {
    "category": "History",
    "question": "What ship brought the Pilgrims to New England in 1620?",
    "answer": "The Mayflower",
    "answerLine": "Mayflower"
  },
  {
    "category": "History",
    "question": "What 1919 treaty, signed in a palace's Hall of Mirrors, imposed a war-guilt clause and reparations on Germany?",
    "answer": "The Treaty of Versailles",
    "answerLine": "Treaty of Versailles (accept Versailles)"
  },
  {
    "category": "Fine Arts",
    "question": "What Norwegian artist painted The Scream?",
    "answer": "Edvard Munch",
    "answerLine": "Edvard Munch (accept Munch)"
  },
  {
    "category": "Geography",
    "question": "What river flows past St. Louis and New Orleans before emptying into the Gulf of Mexico?",
    "answer": "The Mississippi River",
    "answerLine": "Mississippi River (accept Mississippi)"
  },
  {
    "category": "Theology/Philosophy",
    "question": "What religion has the Five Pillars and regards the Quran as its central scripture?",
    "answer": "Islam",
    "answerLine": "Islam"
  }
]);

BANK_REGIONAL_TOSSUPS.push(...[
  {
    "category": "Literature",
    "clues": [
      "The first section of this novel is narrated by Benjy, whose memories do not follow chronological order.",
      "Other sections focus on Quentin, Jason, and the household servant Dilsey.",
      "It depicts the decline of the Compson family in Mississippi.",
      "For 10 points—name this William Faulkner novel whose title comes from Macbeth."
    ],
    "answer": "The Sound and the Fury",
    "answerLine": "The Sound and the Fury"
  },
  {
    "category": "Literature",
    "clues": [
      "A wedding guest is detained by the narrator of this poem.",
      "The narrator's crew dies after an encounter with Death and Life-in-Death.",
      "A sailor shoots an albatross and must wear it around his neck.",
      "For 10 points—name this Samuel Taylor Coleridge poem about a cursed sailor."
    ],
    "answer": "The Rime of the Ancient Mariner",
    "answerLine": "The Rime of the Ancient Mariner (accept Rime of the Ancient Mariner)"
  },
  {
    "category": "Literature",
    "clues": [
      "The narrator of this novel lives in a basement illuminated by 1,369 light bulbs.",
      "He joins the Brotherhood after moving to Harlem.",
      "Its unnamed Black narrator describes being socially unseen rather than physically transparent.",
      "For 10 points—name this Ralph Ellison novel."
    ],
    "answer": "Invisible Man",
    "answerLine": "Invisible Man; do not accept The Invisible Man by H. G. Wells"
  },
  {
    "category": "Literature",
    "clues": [
      "A barber's basin is mistaken for the helmet of Mambrino in this novel.",
      "Its protagonist rides Rocinante and imagines a beloved named Dulcinea.",
      "Sancho Panza accompanies a knight who attacks windmills as if they were giants.",
      "For 10 points—name this Miguel de Cervantes novel."
    ],
    "answer": "Don Quixote",
    "answerLine": "Don Quixote (accept Don Quijote)"
  },
  {
    "category": "Literature",
    "clues": [
      "Krogstad threatens to expose a forged signature in this play.",
      "Its protagonist borrowed money to finance a trip for her husband's health.",
      "Nora leaves Torvald Helmer in its famous final scene.",
      "For 10 points—name this Henrik Ibsen play about Nora's marriage."
    ],
    "answer": "A Doll's House",
    "answerLine": "A Doll's House (accept A Doll House)"
  },
  {
    "category": "Science",
    "clues": [
      "Oxaloacetate is regenerated at the end of this metabolic pathway.",
      "It produces reduced electron carriers including NADH and FADH2.",
      "Acetyl-CoA enters a sequence of reactions associated with aerobic cellular respiration.",
      "For 10 points—name this cycle also called the citric acid cycle."
    ],
    "answer": "The Krebs cycle",
    "answerLine": "Krebs cycle (accept citric acid cycle or tricarboxylic acid cycle or TCA cycle)"
  },
  {
    "category": "Science",
    "clues": [
      "In this process, net movement tends toward the side with lower water potential.",
      "A selectively permeable membrane separates the solutions involved.",
      "It can cause a cell placed in a hypotonic solution to swell.",
      "For 10 points—name this movement of water across a selectively permeable membrane."
    ],
    "answer": "Osmosis",
    "answerLine": "osmosis; do not accept diffusion alone"
  },
  {
    "category": "Science",
    "clues": [
      "This relation combines pressure, volume, temperature, and amount of substance.",
      "Its constant R can be expressed in joules per mole-kelvin.",
      "It is written PV equals nRT.",
      "For 10 points—name this equation describing the behavior of an ideal gas."
    ],
    "answer": "The ideal gas law",
    "answerLine": "ideal gas law (accept PV equals nRT)"
  },
  {
    "category": "Science",
    "clues": [
      "Increasing light intensity below a threshold frequency does not produce this effect in the usual one-photon model.",
      "Einstein explained it using light quanta with energy proportional to frequency.",
      "It ejects electrons from a material when light strikes it.",
      "For 10 points—name this effect central to the development of quantum theory."
    ],
    "answer": "The photoelectric effect",
    "answerLine": "photoelectric effect"
  },
  {
    "category": "Science",
    "clues": [
      "Its smooth form participates in lipid synthesis and calcium storage.",
      "Its rough form has ribosomes attached to its surface.",
      "It is a membrane network connected to the nuclear envelope in eukaryotic cells.",
      "For 10 points—name this organelle with rough and smooth forms."
    ],
    "answer": "The endoplasmic reticulum",
    "answerLine": "endoplasmic reticulum (accept ER; accept rough ER or smooth ER after the last clue)"
  },
  {
    "category": "Math",
    "clues": [
      "The coefficients in this theorem appear as rows of a triangular array in which each entry is the sum of the two above it.",
      "It uses combinations often written as n choose k.",
      "It expands a quantity such as x plus y raised to a nonnegative integer power.",
      "For 10 points—name this theorem for expanding powers of a two-term expression."
    ],
    "answer": "The binomial theorem",
    "answerLine": "binomial theorem"
  },
  {
    "category": "Math",
    "clues": [
      "A zero value for this quantity means a square matrix is singular.",
      "For a two-by-two matrix, it equals ad minus bc.",
      "A nonzero value indicates that the matrix has an inverse.",
      "For 10 points—name this scalar quantity calculated from a square matrix."
    ],
    "answer": "The determinant",
    "answerLine": "determinant"
  },
  {
    "category": "History",
    "clues": [
      "This event led to the English Bill of Rights of 1689.",
      "James II fled after a foreign army landed in England.",
      "William of Orange and Mary replaced James on the English throne.",
      "For 10 points—name this revolution of 1688."
    ],
    "answer": "The Glorious Revolution",
    "answerLine": "Glorious Revolution (accept Revolution of 1688)"
  },
  {
    "category": "History",
    "clues": [
      "The first of these conflicts ended with the Treaty of Nanjing.",
      "That treaty ceded Hong Kong Island to Britain.",
      "They arose from disputes over trade, sovereignty, and a narcotic sold into Qing China.",
      "For 10 points—name these nineteenth-century wars involving China and Western powers."
    ],
    "answer": "The Opium Wars",
    "answerLine": "Opium Wars (accept First Opium War or Second Opium War as appropriate; prompt on Anglo-Chinese wars)"
  },
  {
    "category": "History",
    "clues": [
      "The plan for this fleet depended on linking up with the Duke of Parma's forces.",
      "English fireships disrupted its anchorage before the Battle of Gravelines.",
      "Philip II sent it against Elizabeth I's England in 1588.",
      "For 10 points—name this Spanish invasion fleet."
    ],
    "answer": "The Spanish Armada",
    "answerLine": "Spanish Armada (accept Armada of 1588; prompt on armada)"
  },
  {
    "category": "History",
    "clues": [
      "Fighting at Freeman's Farm and Bemis Heights formed part of this campaign.",
      "John Burgoyne surrendered his army after the American victories.",
      "The outcome helped persuade France to ally openly with the United States.",
      "For 10 points—name this 1777 Revolutionary War turning point in New York."
    ],
    "answer": "The Battle of Saratoga",
    "answerLine": "Battle of Saratoga (accept Battles of Saratoga or Saratoga)"
  },
  {
    "category": "History",
    "clues": [
      "A provisional government led by Alexander Kerensky held power during this upheaval.",
      "The abdication of Nicholas II was followed months later by another seizure of power.",
      "Lenin's Bolsheviks took control in its October phase.",
      "For 10 points—name this 1917 upheaval that ended tsarist rule and brought the Bolsheviks to power."
    ],
    "answer": "The Russian Revolution",
    "answerLine": "Russian Revolution (accept Russian Revolutions of 1917; accept October Revolution after the last clue)"
  },
  {
    "category": "History",
    "clues": [
      "Bahadur Shah II became a symbolic leader of this uprising.",
      "Controversy over greased rifle cartridges helped spark it among soldiers.",
      "It contributed to the end of East India Company rule and the beginning of direct British Crown rule.",
      "For 10 points—name this 1857 rebellion in India."
    ],
    "answer": "The Indian Rebellion of 1857",
    "answerLine": "Indian Rebellion of 1857 (accept Sepoy Rebellion or Sepoy Mutiny or First War of Indian Independence)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "A lute with a broken string sits among scientific and musical objects in this painting.",
      "It portrays Jean de Dinteville and Georges de Selve.",
      "A distorted skull stretches across its foreground and becomes recognizable from an angle.",
      "For 10 points—name this Hans Holbein the Younger double portrait."
    ],
    "answer": "The Ambassadors",
    "answerLine": "The Ambassadors"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "This work opens with a bassoon playing in an unusually high register.",
      "Its scenario ends with a chosen maiden dancing herself to death.",
      "Its 1913 Paris premiere by the Ballets Russes, choreographed by Vaslav Nijinsky, provoked an infamous uproar.",
      "For 10 points—name this ballet about a pagan spring ritual."
    ],
    "answer": "The Rite of Spring",
    "answerLine": "The Rite of Spring (accept Le Sacre du printemps)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "This artist created the Detroit Industry murals.",
      "His Rockefeller Center mural was destroyed after controversy over its depiction of Lenin.",
      "He was a Mexican muralist married to Frida Kahlo.",
      "For 10 points—name this painter."
    ],
    "answer": "Diego Rivera",
    "answerLine": "Diego Rivera (accept Rivera)"
  },
  {
    "category": "Geography",
    "clues": [
      "Tonle Sap's seasonal flow reversal is connected to this river's flood cycle.",
      "It passes through or along Laos, Thailand, and Cambodia.",
      "Its large delta lies in southern Vietnam.",
      "For 10 points—name this major Southeast Asian river."
    ],
    "answer": "The Mekong River",
    "answerLine": "Mekong River (accept Mekong)"
  },
  {
    "category": "Geography",
    "clues": [
      "The ALMA telescope array is situated in this desert.",
      "The Humboldt Current and rain shadows contribute to its aridity.",
      "It lies primarily in northern Chile along the Pacific side of South America.",
      "For 10 points—name this extremely dry desert."
    ],
    "answer": "The Atacama Desert",
    "answerLine": "Atacama Desert (accept Atacama)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This organization succeeded the institutional framework of GATT in 1995.",
      "It provides a forum for negotiations and disputes over international trade rules.",
      "Its headquarters are in Geneva.",
      "For 10 points—name this global trade organization abbreviated WTO."
    ],
    "answer": "The World Trade Organization",
    "answerLine": "World Trade Organization (accept WTO)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This organization's headquarters are in Addis Ababa.",
      "It succeeded the Organization of African Unity in 2002.",
      "Its members cooperate on peace, development, and integration across Africa.",
      "For 10 points—name this continental organization abbreviated AU."
    ],
    "answer": "The African Union",
    "answerLine": "African Union (accept AU; do not accept Organization of African Unity)"
  },
  {
    "category": "Mythology",
    "clues": [
      "Pomegranate seeds tie this goddess to the underworld.",
      "Her mother's grief is associated with the loss of vegetation.",
      "She is the daughter of Demeter and queen alongside Hades.",
      "For 10 points—name this Greek goddess whose story helps explain the seasons."
    ],
    "answer": "Persephone",
    "answerLine": "Persephone (accept Kore; do not accept Proserpina)"
  },
  {
    "category": "Social Science",
    "clues": [
      "This principle allows mutually beneficial trade even when one producer is more efficient at making everything.",
      "David Ricardo explained it using trade between England and Portugal.",
      "A producer has it when making a good carries a lower opportunity cost.",
      "For 10 points—name this economic basis for specialization and trade."
    ],
    "answer": "Comparative advantage",
    "answerLine": "comparative advantage; do not accept absolute advantage"
  },
  {
    "category": "Theology/Philosophy",
    "clues": [
      "John Stuart Mill distinguished higher and lower pleasures within this tradition.",
      "Jeremy Bentham proposed assessing pleasures and pains to guide decisions.",
      "It judges actions by their contribution to overall happiness or well-being.",
      "For 10 points—name this ethical theory associated with the greatest happiness principle."
    ],
    "answer": "Utilitarianism",
    "answerLine": "utilitarianism; prompt on consequentialism"
  },
  {
    "category": "Pop Culture / Sports",
    "clues": [
      "Its second day includes the pole vault, javelin throw, and a 1,500-meter race.",
      "Performances are converted to points rather than simply counting event wins.",
      "It combines ten track-and-field events, traditionally spread over two days.",
      "For 10 points—name this ten-event athletic competition."
    ],
    "answer": "The decathlon",
    "answerLine": "decathlon; do not accept heptathlon"
  },
  {
    "category": "Misc/General Knowledge",
    "clues": [
      "Oil-based ink and cast metal type were important parts of this European technology.",
      "An early major product was a forty-two-line Bible.",
      "A fifteenth-century craftsman in Mainz developed the system that made books easier to reproduce.",
      "For 10 points—name this printing technology associated with Johannes Gutenberg."
    ],
    "answer": "The Gutenberg printing press",
    "answerLine": "Gutenberg printing press (accept movable-type printing press; prompt on printing press)"
  }
]);

BANK_REGIONAL_DIRECTED.push(...[
  {
    "category": "Literature",
    "question": "What Sophocles tragedy follows a king investigating a plague who discovers he killed his father and married his mother?",
    "answer": "Oedipus Rex",
    "answerLine": "Oedipus Rex (accept Oedipus the King or Oedipus Tyrannus)"
  },
  {
    "category": "Literature",
    "question": "What Nigerian author wrote Things Fall Apart?",
    "answer": "Chinua Achebe",
    "answerLine": "Chinua Achebe (accept Achebe)"
  },
  {
    "category": "Science",
    "question": "What SI unit of pressure equals one newton per square meter?",
    "answer": "The pascal",
    "answerLine": "pascal (accept pascals or Pa)"
  },
  {
    "category": "Science",
    "question": "What fundamental interaction binds quarks and, through its residual effect, helps hold atomic nuclei together?",
    "answer": "The strong nuclear force",
    "answerLine": "strong nuclear force (accept strong interaction or strong force)"
  },
  {
    "category": "Math",
    "question": "What is the measure of each acute angle in an isosceles right triangle?",
    "answer": "Forty-five degrees",
    "answerLine": "45 degrees (accept pi over four radians)"
  },
  {
    "category": "History",
    "question": "What 1598 edict issued by Henry IV granted French Huguenots limited religious toleration?",
    "answer": "The Edict of Nantes",
    "answerLine": "Edict of Nantes"
  },
  {
    "category": "History",
    "question": "What canal, opened in 1869, links the Mediterranean Sea to the Red Sea?",
    "answer": "The Suez Canal",
    "answerLine": "Suez Canal (accept Suez)"
  },
  {
    "category": "Fine Arts",
    "question": "What Austrian artist used gold leaf in The Kiss?",
    "answer": "Gustav Klimt",
    "answerLine": "Gustav Klimt (accept Klimt)"
  },
  {
    "category": "Geography",
    "question": "What strait separates the Malay Peninsula from Sumatra?",
    "answer": "The Strait of Malacca",
    "answerLine": "Strait of Malacca (accept Malacca Strait; prompt on Malacca)"
  },
  {
    "category": "Theology/Philosophy",
    "question": "What French philosopher developed methodic doubt and the argument commonly expressed as I think, therefore I am?",
    "answer": "Rene Descartes",
    "answerLine": "Rene Descartes (accept Descartes)"
  }
]);

BANK_STATE_TOSSUPS.push(...[
  {
    "category": "Literature",
    "clues": [
      "The commentator in this novel claims connections to the imaginary kingdom of Zembla.",
      "Charles Kinbote supplies an unreliable commentary on a 999-line poem.",
      "John Shade is the poet whose work gives the novel its title.",
      "For 10 points—name this Vladimir Nabokov novel structured as a poem and commentary."
    ],
    "answer": "Pale Fire",
    "answerLine": "Pale Fire"
  },
  {
    "category": "Literature",
    "clues": [
      "The poet Ivan Bezdomny witnesses an encounter that leads to Berlioz's death in this novel.",
      "A talking cat named Behemoth belongs to Woland's entourage.",
      "It interweaves a visit by the devil to Moscow with a story of Pontius Pilate.",
      "For 10 points—name this Mikhail Bulgakov novel named for a writer and his lover."
    ],
    "answer": "The Master and Margarita",
    "answerLine": "The Master and Margarita"
  },
  {
    "category": "Literature",
    "clues": [
      "The Nisus and Euryalus episode appears in this epic's war narrative.",
      "Its hero visits the underworld with the Cumaean Sibyl and leaves Dido in Carthage.",
      "A Trojan survivor travels to Italy to become an ancestor of the Romans.",
      "For 10 points—name this Latin epic by Virgil about Aeneas."
    ],
    "answer": "The Aeneid",
    "answerLine": "The Aeneid"
  },
  {
    "category": "Literature",
    "clues": [
      "This writer assigned distinct biographies and styles to Alberto Caeiro and Ricardo Reis.",
      "Alvaro de Campos was another of his literary heteronyms.",
      "The Book of Disquiet is associated with his semi-heteronym Bernardo Soares.",
      "For 10 points—name this Portuguese poet known for writing under multiple invented identities."
    ],
    "answer": "Fernando Pessoa",
    "answerLine": "Fernando Pessoa (accept Pessoa)"
  },
  {
    "category": "Literature",
    "clues": [
      "The student Trofimov advocates leaving the past behind in this play.",
      "Lopakhin buys an estate after suggesting that its land be developed for summer cottages.",
      "Ranevskaya loses the family property, and sounds of axes mark the destruction of its trees.",
      "For 10 points—name this Anton Chekhov play about an orchard."
    ],
    "answer": "The Cherry Orchard",
    "answerLine": "The Cherry Orchard (accept Vishnyovy sad)"
  },
  {
    "category": "Science",
    "clues": [
      "Antisymmetric wavefunctions under exchange underlie this rule for identical particles.",
      "It applies to fermions but does not forbid bosons from sharing a state.",
      "In an atom, no two electrons can have the same set of four quantum numbers.",
      "For 10 points—name this quantum rule named for Wolfgang Pauli."
    ],
    "answer": "The Pauli exclusion principle",
    "answerLine": "Pauli exclusion principle (accept exclusion principle or Pauli principle)"
  },
  {
    "category": "Science",
    "clues": [
      "In this model, the reaction rate reaches half of V-max when substrate concentration equals K-m.",
      "Its standard form has substrate concentration in both the numerator and denominator.",
      "It models the saturating dependence of enzyme reaction rate on substrate concentration.",
      "For 10 points—name this enzyme-kinetics equation named for Leonor Michaelis and Maud Menten."
    ],
    "answer": "The Michaelis-Menten equation",
    "answerLine": "Michaelis-Menten equation (accept Michaelis-Menten kinetics)"
  },
  {
    "category": "Science",
    "clues": [
      "Its assumptions include random mating and the absence of selection, migration, and mutation.",
      "For two alleles, genotype frequencies are expressed as p squared, two pq, and q squared.",
      "It predicts stable allele frequencies in an idealized population across generations.",
      "For 10 points—name this population-genetics equilibrium principle."
    ],
    "answer": "The Hardy-Weinberg principle",
    "answerLine": "Hardy-Weinberg principle (accept Hardy-Weinberg equilibrium or Hardy-Weinberg law)"
  },
  {
    "category": "Science",
    "clues": [
      "For a nonrotating uncharged black hole, its radius is two GM divided by c squared.",
      "Crossing this boundary prevents a future-directed light signal from reaching a distant observer.",
      "It marks a black hole's boundary of no return.",
      "For 10 points—name this boundary beyond which light cannot escape to infinity."
    ],
    "answer": "The event horizon",
    "answerLine": "event horizon; do not accept singularity"
  },
  {
    "category": "Science",
    "clues": [
      "This relation contains the logarithm of a conjugate-base to acid concentration ratio.",
      "When that ratio is one, it predicts that pH equals pKa.",
      "It is widely used to estimate the pH of a buffer solution.",
      "For 10 points—name this equation linking pH, pKa, and acid-base composition."
    ],
    "answer": "The Henderson-Hasselbalch equation",
    "answerLine": "Henderson-Hasselbalch equation"
  },
  {
    "category": "Math",
    "clues": [
      "These numbers satisfy the characteristic equation obtained from the determinant of A minus lambda I.",
      "Their sum equals the trace of a square matrix when counted with multiplicity.",
      "For a nonzero vector v, they satisfy Av equals lambda v.",
      "For 10 points—name these scalar factors associated with a matrix's eigenvectors."
    ],
    "answer": "Eigenvalues",
    "answerLine": "eigenvalues (accept eigenvalue)"
  },
  {
    "category": "Math",
    "clues": [
      "Its denominator can be found by summing likelihood times prior over mutually exclusive hypotheses.",
      "It converts a prior probability into a posterior after evidence is observed.",
      "It expresses P of A given B using P of B given A, P of A, and P of B.",
      "For 10 points—name this probability theorem named for an eighteenth-century minister."
    ],
    "answer": "Bayes' theorem",
    "answerLine": "Bayes' theorem (accept Bayes' rule or Bayes' law)"
  },
  {
    "category": "History",
    "clues": [
      "Vilém Slavata and Jaroslav Borita were among the officials targeted in this event.",
      "Protestant nobles attacked royal representatives at a Bohemian castle.",
      "The officials were thrown out of a window in 1618, helping ignite the Thirty Years' War.",
      "For 10 points—name this event whose name refers to throwing someone from a window in Prague."
    ],
    "answer": "The Defenestration of Prague",
    "answerLine": "Defenestration of Prague (accept Second Defenestration of Prague or Third Defenestration of Prague; accept 1618 Defenestration of Prague)"
  },
  {
    "category": "History",
    "clues": [
      "The Hatt-i Sharif of Gulhane inaugurated this reform era.",
      "An 1856 decree associated with it promised equality for subjects regardless of religion.",
      "It sought to modernize the Ottoman Empire's administration, law, and military.",
      "For 10 points—name this nineteenth-century Ottoman reform movement."
    ],
    "answer": "The Tanzimat",
    "answerLine": "Tanzimat (accept Tanzimat reforms)"
  },
  {
    "category": "History",
    "clues": [
      "Don John of Austria commanded the victorious coalition in this battle.",
      "It was a major clash of oared fleets in the Gulf of Patras.",
      "The Holy League defeated an Ottoman fleet in 1571.",
      "For 10 points—name this Mediterranean naval battle."
    ],
    "answer": "The Battle of Lepanto",
    "answerLine": "Battle of Lepanto (accept Lepanto)"
  },
  {
    "category": "History",
    "clues": [
      "The real spy in this controversy was identified as Ferdinand Walsin Esterhazy.",
      "Emile Zola intervened with his open letter J'accuse.",
      "A Jewish French army officer was wrongly convicted of treason.",
      "For 10 points—name this political scandal centered on Alfred Dreyfus."
    ],
    "answer": "The Dreyfus affair",
    "answerLine": "Dreyfus affair (accept Dreyfus case)"
  },
  {
    "category": "History",
    "clues": [
      "The emperor Romanos IV Diogenes was captured in this battle.",
      "The victorious commander was the Seljuk ruler Alp Arslan.",
      "This 1071 defeat weakened Byzantine control in Anatolia.",
      "For 10 points—name this battle between the Byzantine and Seljuk forces."
    ],
    "answer": "The Battle of Manzikert",
    "answerLine": "Battle of Manzikert (accept Manzikert or Malazgirt)"
  },
  {
    "category": "History",
    "clues": [
      "This agreement placed a dividing meridian 370 leagues west of the Cape Verde Islands.",
      "Its allocation helped support Portugal's later claim to Brazil.",
      "In 1494, Spain and Portugal agreed to divide claims to newly encountered lands outside Europe.",
      "For 10 points—name this treaty named for a Spanish town."
    ],
    "answer": "The Treaty of Tordesillas",
    "answerLine": "Treaty of Tordesillas (accept Tordesillas)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "A mirror at the back of this painting reflects Philip IV and Mariana.",
      "The artist depicts himself at a large canvas on the left.",
      "The Infanta Margarita stands among attendants in a Spanish court interior.",
      "For 10 points—name this Diego Velazquez painting."
    ],
    "answer": "Las Meninas",
    "answerLine": "Las Meninas (accept The Maids of Honour)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "This composer left Khovanshchina unfinished.",
      "Viktor Hartmann's memorial exhibition inspired his piano suite with a recurring Promenade.",
      "His works include Boris Godunov and Pictures at an Exhibition.",
      "For 10 points—name this Russian composer, a member of the Five."
    ],
    "answer": "Modest Mussorgsky",
    "answerLine": "Modest Mussorgsky (accept Mussorgsky)"
  },
  {
    "category": "Fine Arts",
    "clues": [
      "Hannes Meyer and Ludwig Mies van der Rohe followed its founding director.",
      "It moved from Weimar to Dessau and later to Berlin.",
      "Walter Gropius founded this German design school in 1919.",
      "For 10 points—name this school associated with modernist architecture and the integration of art and craft."
    ],
    "answer": "The Bauhaus",
    "answerLine": "Bauhaus (accept Staatliches Bauhaus)"
  },
  {
    "category": "Geography",
    "clues": [
      "The eastern end of this strip reaches the border with China.",
      "It lies between Tajikistan to the north and Pakistan to the south.",
      "It is the narrow eastern extension of Afghanistan.",
      "For 10 points—name this mountainous corridor in northeastern Afghanistan."
    ],
    "answer": "The Wakhan Corridor",
    "answerLine": "Wakhan Corridor (accept Wakhan)"
  },
  {
    "category": "Geography",
    "clues": [
      "The floating islands of the Uros are found on this lake.",
      "Inca traditions associate its region with the origins of their rulers.",
      "It lies high in the Andes on the border of Peru and Bolivia.",
      "For 10 points—name this large Andean lake."
    ],
    "answer": "Lake Titicaca",
    "answerLine": "Lake Titicaca (accept Titicaca)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This Vienna-based agency and Mohamed ElBaradei shared the 2005 Nobel Peace Prize.",
      "Its safeguards verify commitments concerning nuclear material.",
      "It promotes peaceful uses of nuclear technology while working to prevent its military misuse.",
      "For 10 points—name this international agency abbreviated IAEA."
    ],
    "answer": "The International Atomic Energy Agency",
    "answerLine": "International Atomic Energy Agency (accept IAEA)"
  },
  {
    "category": "Current Events",
    "clues": [
      "This institution's reserve asset is the special drawing right.",
      "It was established through the Bretton Woods arrangements.",
      "It monitors economies and lends to countries facing balance-of-payments difficulties.",
      "For 10 points—name this international financial institution abbreviated IMF."
    ],
    "answer": "The International Monetary Fund",
    "answerLine": "International Monetary Fund (accept IMF; do not accept World Bank)"
  },
  {
    "category": "Mythology",
    "clues": [
      "In a Sumerian account, this goddess passes through seven gates and loses a garment or ornament at each.",
      "Her sister Ereshkigal rules the underworld to which she descends.",
      "She is a Mesopotamian goddess of love and war associated with the planet Venus and worshipped at Uruk.",
      "For 10 points—name this Sumerian goddess."
    ],
    "answer": "Inanna",
    "answerLine": "Inanna (accept Ishtar)"
  },
  {
    "category": "Social Science",
    "clues": [
      "In its standard one-shot form, each player has a dominant strategy that produces a worse joint outcome.",
      "Mutual cooperation would benefit both players more than mutual defection.",
      "Its classic story offers two suspects incentives to betray one another.",
      "For 10 points—name this game-theory dilemma."
    ],
    "answer": "The prisoner's dilemma",
    "answerLine": "prisoner's dilemma (accept prisoners' dilemma)"
  },
  {
    "category": "Theology/Philosophy",
    "clues": [
      "This philosopher proposed that inequalities should benefit the least advantaged under the difference principle.",
      "His original position places choosers behind a veil of ignorance.",
      "He defended justice as fairness in A Theory of Justice.",
      "For 10 points—name this twentieth-century American political philosopher."
    ],
    "answer": "John Rawls",
    "answerLine": "John Rawls (accept Rawls)"
  },
  {
    "category": "Pop Culture / Sports",
    "clues": [
      "The athlete who popularized this technique won Olympic gold at Mexico City in 1968.",
      "It replaced older high-jump approaches such as the straddle for many competitors.",
      "The jumper crosses the bar headfirst with the back facing downward.",
      "For 10 points—name this high-jump technique associated with Dick Fosbury."
    ],
    "answer": "The Fosbury flop",
    "answerLine": "Fosbury flop (accept flop; prompt on high jump)"
  },
  {
    "category": "Misc/General Knowledge",
    "clues": [
      "Its original creator published under a pseudonym meaning one who hopes.",
      "L. L. Zamenhof introduced it in 1887.",
      "It was designed as an international auxiliary language with regular grammatical rules.",
      "For 10 points—name this constructed language."
    ],
    "answer": "Esperanto",
    "answerLine": "Esperanto"
  }
]);

BANK_STATE_DIRECTED.push(...[
  {
    "category": "Literature",
    "question": "What Argentine writer authored The Library of Babel and The Garden of Forking Paths?",
    "answer": "Jorge Luis Borges",
    "answerLine": "Jorge Luis Borges (accept Borges)"
  },
  {
    "category": "Literature",
    "question": "What work attributed to Murasaki Shikibu follows the life and courtly relationships of Hikaru Genji?",
    "answer": "The Tale of Genji",
    "answerLine": "The Tale of Genji (accept Genji Monogatari)"
  },
  {
    "category": "Science",
    "question": "What limit of roughly 1.4 solar masses gives the maximum mass of an idealized nonrotating white dwarf supported by electron degeneracy pressure?",
    "answer": "The Chandrasekhar limit",
    "answerLine": "Chandrasekhar limit (accept Chandrasekhar mass)"
  },
  {
    "category": "Science",
    "question": "What five positions in a two-body orbital system allow a small object to remain fixed relative to the two larger bodies in the rotating frame?",
    "answer": "The Lagrange points",
    "answerLine": "Lagrange points (accept Lagrangian points or libration points)"
  },
  {
    "category": "Math",
    "question": "What test relates convergence of a series with positive decreasing terms to convergence of a corresponding improper integral?",
    "answer": "The integral test",
    "answerLine": "integral test (accept integral test for convergence)"
  },
  {
    "category": "History",
    "question": "What 1122 agreement between Henry V and Pope Calixtus II settled a major phase of the Investiture Controversy?",
    "answer": "The Concordat of Worms",
    "answerLine": "Concordat of Worms (accept Worms Concordat; prompt on Worms)"
  },
  {
    "category": "History",
    "question": "What 1905 treaty ended the Russo-Japanese War after mediation by Theodore Roosevelt?",
    "answer": "The Treaty of Portsmouth",
    "answerLine": "Treaty of Portsmouth (accept Portsmouth)"
  },
  {
    "category": "Fine Arts",
    "question": "What Baroque sculptor created The Ecstasy of Saint Teresa in Rome's Cornaro Chapel?",
    "answer": "Gian Lorenzo Bernini",
    "answerLine": "Gian Lorenzo Bernini (accept Bernini)"
  },
  {
    "category": "Geography",
    "question": "What mountain pass traditionally connects the Peshawar region of Pakistan with Afghanistan?",
    "answer": "The Khyber Pass",
    "answerLine": "Khyber Pass (accept Khyber)"
  },
  {
    "category": "Theology/Philosophy",
    "question": "What philosopher presented a geometrically structured Ethics and identified God with Nature?",
    "answer": "Baruch Spinoza",
    "answerLine": "Baruch Spinoza (accept Benedict Spinoza or Spinoza)"
  }
]);

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
