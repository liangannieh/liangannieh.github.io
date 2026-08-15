/*
 * Visual-route content for the Philosophy Sorting Hat.
 *
 * Every public-domain artwork is stored locally so the visual route does not
 * depend on museum or Wikimedia redirects at quiz time. `sourceUrl` points to
 * an authoritative museum collection record for attribution and context.
 *
 * Answer order is intentionally identical to the corresponding question in
 * QUESTIONS. The quiz engine can therefore reuse the original weights by
 * answer index without duplicating scoring data here.
 */

const ARTWORKS = {
  greatWave: {
    src: "assets/art/great-wave.jpg",
    alt: "A towering blue wave curls over three narrow boats while the small, snow-capped form of Mount Fuji sits on the distant horizon.",
    title: "Under the Wave off Kanagawa (The Great Wave)",
    artist: "Katsushika Hokusai",
    year: "ca. 1830–32",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/56353"
  },
  deathOfSocrates: {
    src: "assets/art/death-of-socrates.jpg",
    alt: "In a stone prison, an elderly Socrates reaches calmly for a cup of poison while grieving friends surround him.",
    title: "The Death of Socrates",
    artist: "Jacques Louis David",
    year: "1787",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/436105"
  },
  harvesters: {
    src: "assets/art/harvesters.jpg",
    alt: "Farm workers reap a vast golden field while others eat and rest beneath a tree, with a village and hazy landscape beyond.",
    title: "The Harvesters",
    artist: "Pieter Bruegel the Elder",
    year: "1565",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/435809"
  },
  gulfStream: {
    src: "assets/art/gulf-stream.jpg",
    alt: "A solitary Black sailor lies on a damaged, mastless boat in rough seas, with sharks nearby and a waterspout in the distance.",
    title: "The Gulf Stream",
    artist: "Winslow Homer",
    year: "1899; reworked by 1906",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/11122"
  },
  iyoba: {
    src: "assets/art/iyoba.jpg",
    alt: "An intricately carved ivory pendant mask shows the composed face of Queen Mother Idia beneath a crown of small figures and mudfish.",
    title: "Pendant mask of Ìyọ́bà Idià",
    artist: "Ìgbèsànmwà guild artists, Edo peoples",
    year: "16th century",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/318622"
  },
  avalokiteshvara: {
    src: "assets/art/avalokiteshvara.jpg",
    alt: "A small four-armed brass figure of the bodhisattva Avalokiteshvara sits upright in meditation, one hand raised in reassurance.",
    title: "Bodhisattva Avalokiteshvara",
    artist: "Artist from the Swat Valley, Pakistan",
    year: "7th century",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/77918"
  },
  mihrab: {
    src: "assets/art/mihrab.jpg",
    alt: "A tall pointed prayer niche is covered in an intricate mosaic of blue, turquoise, white, and ochre geometric patterns and calligraphy.",
    title: "Mihrab (Prayer Niche)",
    artist: "Unknown artists, Isfahan, Iran",
    year: "1354–55",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/449537"
  },
  qingming: {
    src: "assets/art/qingming-bridge.jpg",
    alt: "Crowds of travelers, merchants, animals, and onlookers converge around a high arched bridge spanning a busy river.",
    title: "Along the River During the Qingming Festival",
    artist: "Attributed to Zhang Zeduan",
    year: "early 12th century",
    sourceUrl: "https://en.dpm.org.cn/collections/collections/2009-09-24/849.html"
  },
  womanHoldingBalance: {
    src: "assets/art/woman-holding-balance.jpg",
    alt: "A woman stands quietly before a table of jewelry, holding an empty balance; behind her hangs a painting of the Last Judgment.",
    title: "Woman Holding a Balance",
    artist: "Johannes Vermeer",
    year: "ca. 1664",
    sourceUrl: "https://www.nga.gov/artworks/1236-woman-holding-balance"
  },
  slaveShip: {
    src: "assets/art/slave-ship.jpg",
    alt: "A ship sails into a blazing storm while chained human limbs are visible in the violent red-brown sea below.",
    title: "Slave Ship (Slavers Throwing Overboard the Dead and Dying, Typhoon Coming On)",
    artist: "J. M. W. Turner",
    year: "1840",
    sourceUrl: "https://collections.mfa.org/objects/31102"
  },
  wanderer: {
    src: "assets/art/wanderer.jpg",
    alt: "A lone figure in a dark green coat stands on a rocky summit, looking across peaks and valleys almost hidden by white mist.",
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: "ca. 1817",
    sourceUrl: "https://online-sammlung.hamburger-kunsthalle.de/en/objekt/HK-5161/wanderer-ueber-dem-nebelmeer"
  }
};

const VISUAL_VARIANTS = {
  meaning: {
    artwork: "wanderer",
    title: "What story do you instinctively tell about this person?",
    copy: "Choose the reading that comes most naturally when you look at the figure and landscape.",
    answers: [
      "He climbed this far to decide for himself where his life goes next.",
      "The view is beautiful partly because it gives him no clear answer.",
      "The repeating peaks and layers make the world feel ordered beneath the fog.",
      "This feels like a pilgrimage—a moment of being called beyond ordinary life.",
      "I hope the journey changes how he treats the people he returns to.",
      "He does not need to conquer the landscape; he can simply stand within it."
    ]
  },
  "good-life": {
    artwork: "harvesters",
    title: "What would you most want to borrow from this day?",
    copy: "Look at the work, rest, meal, landscape, and shared activity.",
    answers: [
      "The satisfaction of mastering a useful skill and doing the work well.",
      "The simple meal and the feeling that, for now, there is nowhere else to be.",
      "The sense of belonging to a community in which everyone has a role and people depend on one another.",
      "The chance for ordinary people to grow, make things, and enjoy some dignity.",
      "The reminder that work, weather, hunger, and even the self keep changing.",
      "The freedom of needing little and not caring who looks important."
    ]
  },
  knowledge: {
    artwork: "womanHoldingBalance",
    title: "What would guide your interpretation of this scene?",
    copy: "The balance is empty, jewelry lies on the table, and the painting behind her shows a judgment scene.",
    answers: [
      "The things I can actually inspect: the empty scale, the coins, the light, and where she is looking.",
      "The explanation that makes all the details fit together without contradicting itself.",
      "The interpretation that helps people make better judgments in real life.",
      "The idea of perfect balance or justice that seems to organize the whole room.",
      "What these objects meant to people who knew the customs and symbols of the time.",
      "The fact that her expression and the empty scale may never yield one certain answer."
    ]
  },
  suffering: {
    artwork: "gulfStream",
    title: "What pulls your attention most strongly in this scene?",
    copy: "Choose the response that feels closest to your first sustained reaction.",
    answers: [
      "The man's composure—he has almost nothing left to control except how he meets the danger.",
      "How terror can become even worse when the mind fights what is already happening.",
      "The practical emergency: someone needs to find the fastest, most effective way to rescue him.",
      "This particular person's isolation; I do not want him reduced to a lesson or symbol.",
      "The terrible lack of a reassuring ending—the sea offers no explanation.",
      "The hope that even suffering this bleak might still belong to a larger story of mercy or redemption."
    ]
  },
  transcendence: {
    artwork: "avalokiteshvara",
    title: "What does this small, many-armed figure make you imagine?",
    copy: "Choose the association the figure most readily evokes for you.",
    answers: [
      "A sacred presence able to reach toward more suffering than one ordinary person could hold.",
      "A direct encounter with something sacred that cannot be reached by argument or explanation.",
      "A reminder that beneath our separate identities there may be a deeper consciousness shared by all reality.",
      "A beautiful spiritual possibility that I would still want good reasons to believe.",
      "A remarkable object made by human hands for a human practice of devotion.",
      "A comforting image people may have made because an empty universe is hard to face."
    ]
  },
  "ethics-priority": {
    artwork: "deathOfSocrates",
    title: "Which considerations most shape how you feel about Socrates' choice?",
    copy: "Choose up to two. Socrates is accepting a death sentence rather than escaping.",
    answers: [
      "He is holding to a principle even when it costs him his life.",
      "Whether his death will leave the city better or worse overall, including the effects of obedience and resistance.",
      "His steady gesture makes the choice look brave and deeply practiced.",
      "The grief on one friend's face; that particular relationship matters even if a wider calculation points elsewhere.",
      "The scene feels like a sacrifice made before a higher kind of justice.",
      "The calm, respectable setting makes the authority that condemned him look even more suspect."
    ]
  },
  society: {
    artwork: "harvesters",
    title: "What do you become most curious about beyond the edge of this field?",
    copy: "Imagine the wider life behind the labor, land, village, and meal.",
    answers: [
      "Whether these workers are free, fairly treated, and protected when something goes wrong.",
      "Who owns the field and the harvest, and how much of this work's value reaches the workers.",
      "How families, customs, and shared jobs keep the village functioning from season to season.",
      "Whether each person here gets a real chance to learn, develop, and shape a life.",
      "Whether this way of organizing life actually leaves most people fed, safe, and content.",
      "What these people believe they owe one another—and what makes those duties binding."
    ]
  },
  "religion-posture": {
    artwork: "mihrab",
    title: "What kind of response does this space invite from you?",
    copy: "The niche marks the direction of prayer and joins geometry, craft, calligraphy, and ritual use.",
    answers: [
      "To turn gratitude or devotion outward into greater love for other people.",
      "To join a long, living conversation of memory, rules, questions, and repair.",
      "To bring thought, prayer, duty, and daily life into one coherent direction.",
      "To examine consciousness until the boundary between the self and the rest of reality feels less solid.",
      "To encounter a presence or mystery that cannot be captured in ordinary words.",
      "To admire the human craft while still asking how religious institutions use authority."
    ]
  },
  self: {
    artwork: "iyoba",
    title: "Looking at this royal face, what do you think a person's identity is made of?",
    copy: "The work honors Queen Mother Idia, idealizes admired qualities, and served a ceremonial role.",
    answers: [
      "I imagine the choices and commitments through which she became this commanding person.",
      "Even an identity made to look permanent will change, pass away, and be remembered differently.",
      "Her calm face suggests a dignity and calling larger than status alone.",
      "Behind the idealized mask was a human body and mind like any other, shaped by ordinary causes.",
      "The crown and symbols show a person formed by family, office, ceremony, and community.",
      "Much of her power comes from a shared story people agreed to make real."
    ]
  },
  power: {
    artwork: "slaveShip",
    title: "Where does your anger land first in this painting?",
    copy: "Turner connected the storm to an atrocity committed for financial gain.",
    answers: [
      "At the absence of rights, limits, and accountability for people given life-and-death power over others.",
      "At the profit system that made murdered people appear as losses on a balance sheet.",
      "At any official account that asks us to trust the people responsible for what happened.",
      "At the destruction of individual human possibility—each person in the water had a life that should have been allowed to flourish.",
      "At the respectable language people use to make organized brutality sound normal.",
      "At the violation of a sacred moral law that stands above every government, captain, and market."
    ]
  },
  uncertainty: {
    artwork: "greatWave",
    title: "If you were in one of these boats, what would you want the crew to do?",
    copy: "Choose the response you would trust most with the wave approaching.",
    answers: [
      "Read the wind, water, and boat carefully before committing to a move.",
      "Try the smallest useful maneuver, watch what happens, and adjust fast.",
      "Keep steady and do the next necessary task instead of imagining every outcome.",
      "Stop wishing the sea were different and work with the motion that is actually there.",
      "Admit that everyone is afraid, then choose how to act anyway.",
      "Trust the seamanship passed down by experienced crews while staying alert to this particular wave."
    ]
  },
  beauty: {
    artwork: "greatWave",
    title: "Why do you keep looking when the wave is so dangerous?",
    copy: "Choose what makes the image hold your attention.",
    answers: [
      "The rush of fear and awe says something that a factual account of the storm could not.",
      "The curve, foam, and repeated shapes feel almost perfectly composed.",
      "It lets me imagine the sailors' smallness and vulnerability more vividly.",
      "It turns senseless danger into something I can face without pretending it has a tidy meaning.",
      "The color and rhythm are simply pleasurable to look at.",
      "It makes me curious about how waves move and why certain patterns seize human attention."
    ]
  },
  tradition: {
    artwork: "qingming",
    title: "Looking at this crowded bridge, what makes you most curious?",
    copy: "The scene preserves forms of labor, trade, travel, architecture, and public life.",
    answers: [
      "The customs and shared expectations that let so many people move through the same space together.",
      "Who carries the heaviest loads, who gets the easiest passage, and whose work is barely noticed.",
      "Which old habits and practical inventions still work well—and which ones people should change.",
      "What kinds of patience, courage, and judgment daily life here teaches people to develop.",
      "The inherited rituals and obligations that connect this crowd to generations before and after them.",
      "How one person could make an individual life while surrounded by so many customs and expectations."
    ]
  },
  rules: {
    artwork: "deathOfSocrates",
    title: "What could make accepting this sentence seem like the right choice?",
    copy: "The city condemned Socrates, and he chose not to escape.",
    answers: [
      "He refuses to break a principle just because the principle has become costly for him.",
      "He believes escaping would create worse consequences for the city as a whole by weakening laws people rely on.",
      "Meeting death calmly is the final test of the courage and character he tried to practice.",
      "His loyalty to the people who love him keeps him from asking them to become accomplices and carry that burden.",
      "He answers to a higher moral or sacred obligation than his own survival.",
      "He has stopped struggling against what cannot now be changed and meets it without force."
    ]
  },
  ambition: {
    artwork: "iyoba",
    title: "What does this portrait suggest about seeking status and influence?",
    copy: "The regalia honors a politically influential queen mother and presents authority as something publicly recognized.",
    answers: [
      "The regalia is impressive, but authority means little without self-command.",
      "Recognition can reward skill, judgment, and qualities genuinely worthy of respect.",
      "Influence is worthwhile when it gives other people more room to live and flourish.",
      "A public role can offer a risky chance to shape a life instead of merely accepting what was given.",
      "The desire for still more status can take over, however dignified the symbols look.",
      "Portraits like this can make rank and inherited power appear natural rather than constructed."
    ]
  },
  community: {
    artwork: "qingming",
    title: "Where would you look for freedom in this crowded scene?",
    copy: "Individual lives here unfold inside shared work, streets, institutions, and customs.",
    answers: [
      "In belonging somewhere and becoming a person through the roles and relationships found there.",
      "In having room to choose your own path even when family and neighbors disapprove.",
      "In getting the education and opportunity needed to discover what you can become.",
      "In not being trapped at the bottom while other people control the work and rewards.",
      "In moving among people without clinging too tightly to either 'me' or 'my group.'",
      "In answering to a sacred promise of justice and care that binds the whole community."
    ]
  },
  universe: {
    artwork: "greatWave",
    title: "If this scene could tell people one thing about nature, what would it say?",
    copy: "Look at the wave, mountain, boats, and the difference in their scale.",
    answers: [
      "The wave obeys physical forces that can be observed, measured, and studied.",
      "The echoed curves of wave and mountain suggest an enduring form beneath all the visible change.",
      "The universe does not promise that human lives will be safe or meaningful.",
      "Creation is larger than us, ordered in a way that carries moral or sacred weight.",
      "Survival depends less on conquering nature than on learning how to move with it.",
      "Some truths about the world are felt through awe and transformation, not explained once and for all."
    ]
  },
  crisis: {
    artwork: "gulfStream",
    title: "Who would you most want arriving to help in this crisis?",
    copy: "Choose the person whose instincts you would trust first.",
    answers: [
      "Someone calm enough to secure the boat and take the next necessary action.",
      "Someone who quickly ranks the dangers and directs help where it will save the most lives.",
      "Someone inventive who can improvise as the weather, damage, and information keep changing.",
      "Someone who gets a crew working together clearly instead of letting everyone act alone.",
      "Someone who recognizes panic without being ruled by it and helps others steady themselves.",
      "Someone who never lets procedures obscure the frightened person they are meant to save."
    ]
  },
  education: {
    artwork: "womanHoldingBalance",
    title: "What would an excellent guide help you notice here?",
    copy: "Think about the woman, the objects, the symbols, and the act of interpretation.",
    answers: [
      "The woman as a full person, not merely a device for illustrating an idea.",
      "How the balance and judgment scene point toward ideals larger than the objects themselves.",
      "The materials, light, history, and small physical clues that support or weaken a reading.",
      "How patience, honesty, and practiced judgment affect what a viewer is able to see.",
      "Which interpretations illuminate real experience and which collapse when tested.",
      "How generations of viewers learned to read these symbols, argue about them, and pass them on."
    ]
  },
  time: {
    artwork: "harvesters",
    title: "What feeling about time comes up as you look at this late-summer day?",
    copy: "The harvest, meal, weather, work, and people all belong to a moment that will end.",
    answers: [
      "Everything here will pass, and trying to hold it still would only make the loss harder.",
      "The season is outside my control; my task is to meet its changes with steadiness.",
      "The vanishing light makes this particular afternoon feel unusually vivid and beautiful.",
      "The meal is a simple pleasure available right now, so anxiety should not spoil it.",
      "The same work and meals return each year, carrying memory and responsibility forward.",
      "The season supplies no lesson by itself; people still have to choose what to make of their limited time."
    ]
  },
  care: {
    artwork: "avalokiteshvara",
    title: "If this figure is listening for every cry, what kind of care does that suggest?",
    copy: "Avalokiteshvara is associated with hearing and responding to the suffering of beings.",
    answers: [
      "Notice the need in front of you and respond before turning it into an abstract debate.",
      "Help without treating the person as a problem to manage or a number in a plan.",
      "Keep showing up, because shared history and relationship create duties over time.",
      "Give without needing credit, gratitude, or control over what happens next.",
      "Choose the help that will actually reduce the most suffering, not merely feel kind.",
      "Ask what larger arrangement keeps producing the same need again and again."
    ]
  },
  "select-attractions": {
    artwork: "qingming",
    title: "If you could enter this scene, where would you go first?",
    copy: "Select up to two places or activities that most attract your attention.",
    answers: [
      "To the plainest market stall, to see how little a person could need even amid all this buying and selling.",
      "Onto the bridge, to see how strangers share space and what rules keep everyone moving.",
      "Into the market and docks, to learn who does the hardest work and who takes the profit.",
      "Into a shrine, to sit in ritual silence and listen for something beyond ordinary speech.",
      "Into the workshops, to see how things are made and what practical improvements people are trying.",
      "Alongside one person, so I could follow an ordinary life and hear its particular story."
    ]
  },
  discomforts: {
    artwork: "slaveShip",
    title: "Which parts of this painting are hardest for you to look away from?",
    copy: "Select up to two if two reactions feel equally strong.",
    answers: [
      "That people can decide another human life has no value—and may find no outside force stopping them.",
      "That a beautiful sky and sea can remain completely indifferent to human horror.",
      "That ordinary people made choices here and probably found ways to excuse themselves.",
      "That greed, fear, and the urge to control can overwhelm the ability to see another life clearly.",
      "That organized cruelty can become routine business when a whole society profits from it.",
      "That law, faith, and respectable tradition can continue on the surface while atrocity happens underneath.",
      "That every bond of responsibility can collapse so completely that people are handled as cargo."
    ]
  },
  "free-day": {
    artwork: "harvesters",
    title: "Where in this landscape would you spend an unexpectedly free afternoon?",
    copy: "Choose the experience that sounds most restorative.",
    answers: [
      "At the long meal, talking easily and making no effort to be productive or impressive.",
      "Taking a deliberate walk through the fields for the color, weather, sounds, and feeling of beauty.",
      "Looking closely at the plants, tools, buildings, and all the ways the work gets done.",
      "Setting out with no destination or plan and following whatever path the day happens to offer.",
      "Sitting with someone I have neglected and using the day to repair that relationship.",
      "Somewhere quiet enough for reading, prayer, or unbroken thought."
    ]
  },
  motto: {
    artwork: "greatWave",
    title: "If you were in one of these boats, which thought might steady you?",
    copy: "Choose the thought you would most want available under pressure.",
    answers: [
      "Whatever happens next, I still get to decide how I meet it.",
      "Do not spend strength fighting fear; keep your hands and judgment steady.",
      "Look first for the person who most needs help.",
      "Try what seems best, watch closely, and adjust when it fails.",
      "Work with the water's motion instead of trying to overpower it.",
      "I am responsible to something larger than my own survival."
    ]
  },
  "ai-design": {
    artwork: "womanHoldingBalance",
    title: "A museum is building an AI guide to help people interpret this painting. What should guide its design first?",
    copy: "The guide will describe details, explain possible meanings, and answer visitors' questions.",
    answers: [
      "Firm limits against inventing evidence, misrepresenting people, or presenting guesses as historical fact.",
      "Tests of what visitors actually notice and learn, followed by revisions when the guide misleads or confuses them.",
      "A meaningful role for visitors, scholars, artists, and connected communities in shaping and correcting the guide.",
      "A review of whose images and scholarship trained it, whose interpretations were excluded, and who controls it.",
      "A design that develops visitors' own attention and judgment instead of simply telling them what the painting means.",
      "A limited, clearly labeled pilot that can be withdrawn while the museum learns where the guide is unreliable."
    ]
  },
  "ai-authorship": {
    artwork: "iyoba",
    title: "A museum uses AI to create a new ceremonial portrait inspired by this object. What most affects whether that is good work?",
    copy: "Imagine the new image will be displayed publicly beside historical objects.",
    answers: [
      "It must be clearly labeled so nobody is misled about how it was made or what is historically authentic.",
      "It should help visitors understand more without causing confusion or other harms that outweigh the benefit.",
      "The human makers should understand the craft and context well enough that their own judgment remains visible.",
      "I would ask who supplied the cultural material, who consented to its use, and who profits from the new image.",
      "The result should express a real curatorial or artistic choice rather than a generic imitation with a signature attached.",
      "The people connected to the object's history should receive genuine attention, not be treated as material to generate from."
    ]
  },
  "faith-reason": {
    artwork: "mihrab",
    title: "This space joins precise geometry with prayer. What do you make of that combination?",
    copy: "The niche brings together mathematical pattern, calligraphy, skilled craft, and ritual orientation.",
    answers: [
      "The geometry makes prayer feel intellectually ordered; careful thought and faith can strengthen one another.",
      "The fixed pattern gives inherited prayer a structure that each generation can question and interpret anew.",
      "The precision is worthwhile only if the prayer practiced here makes people more merciful toward one another.",
      "The repeating pattern quiets ordinary thought and carries attention toward something beyond words.",
      "The geometry shows remarkable human intelligence; I can value it without accepting the religious claims around it.",
      "Their seamless union makes me wonder how beauty and order can lend authority to a religious institution.",
      "I would ask how returning to this pattern trains attention, conduct, and responsibility within a community."
    ]
  }
};
