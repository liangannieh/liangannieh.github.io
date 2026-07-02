const TYPES = {
  existentialist: {
    title: "Existentialist",
    summary: "Meaning is chosen, made, and lived through action.",
    description: [
      "You are an Existentialist. You are drawn to the idea that life does not hand you a finished script. Meaning has to be chosen, made, and lived through action. You likely care about authenticity, freedom, responsibility, and the courage to become yourself without hiding behind convention or excuses.",
      "At your best, you are honest about uncertainty and serious about personal responsibility. You do not need life to be simple in order for it to matter. Your challenge is that freedom can become heavy if every choice feels like a referendum on your whole identity."
    ],
    thinkers: "Soren Kierkegaard, Jean-Paul Sartre, Simone de Beauvoir",
    readings: ["Existentialism Is a Humanism", "The Ethics of Ambiguity", "Fear and Trembling"]
  },
  absurdist: {
    title: "Absurdist",
    summary: "The universe may not answer, but you can still live lucidly.",
    description: [
      "You are an Absurdist. You see the tension between the human hunger for meaning and a universe that may not answer back. But instead of collapsing under that tension, you are inclined to face it directly, with lucidity, defiance, humor, and freedom.",
      "At your best, you are clear-eyed without being obedient to despair. You can recognize the strangeness of existence and still choose to live intensely. Your challenge is avoiding the temptation to turn irony into distance from everything that asks for commitment."
    ],
    thinkers: "Albert Camus, Miguel de Unamuno, Franz Kafka",
    readings: ["The Myth of Sisyphus", "The Rebel", "The Trial"]
  },
  nihilist: {
    title: "Nihilist",
    summary: "Inherited meanings deserve to be questioned without mercy.",
    description: [
      "You are a Nihilist. You are skeptical of inherited meanings, moral certainties, grand narratives, and comforting illusions. You tend to ask whether values are truly grounded or whether people simply dress up preference, fear, power, or habit as truth.",
      "At your best, you are intellectually ruthless in a clarifying way. You strip away false consolations and refuse to pretend that something is meaningful just because others need it to be. Your challenge is deciding what, if anything, can be built after the old certainties have been dismantled."
    ],
    thinkers: "Friedrich Nietzsche, Emil Cioran, Max Stirner",
    readings: ["The Gay Science", "The Trouble with Being Born", "The Ego and Its Own"]
  },
  stoic: {
    title: "Stoic",
    summary: "Freedom begins with judgment, discipline, and character.",
    description: [
      "You are a Stoic. You believe that freedom begins with self-command. The world is unstable, other people are unpredictable, and fortune changes quickly, but your judgments, choices, and character remain your responsibility.",
      "At your best, you are steady, principled, and hard to shake. You know the difference between what you can control and what you cannot. Your challenge is remembering that composure should not become emotional avoidance, and that vulnerability is not always weakness."
    ],
    thinkers: "Epictetus, Marcus Aurelius, Seneca",
    readings: ["Enchiridion", "Meditations", "Letters from a Stoic"]
  },
  epicurean: {
    title: "Epicurean",
    summary: "The good life is calm pleasure, friendship, and freedom from fear.",
    description: [
      "You are an Epicurean. You are drawn to a life of simple pleasures, good friends, intellectual calm, and freedom from needless fear. You likely distrust status games, frantic ambition, and forms of desire that create more anxiety than joy.",
      "At your best, you understand that happiness is often quieter than people expect. You know the value of moderation, friendship, rest, and a clear mind. Your challenge is making sure peace does not become withdrawal from responsibilities that deserve your attention."
    ],
    thinkers: "Epicurus, Lucretius, Philodemus",
    readings: ["Letter to Menoeceus", "On the Nature of Things", "Principal Doctrines"]
  },
  cynic: {
    title: "Cynic",
    summary: "Need less, fake less, and refuse the worship of status.",
    description: [
      "You are a Cynic. You distrust social performance, luxury, status, vanity, and polite hypocrisy. You are drawn to blunt honesty and the idea that a good life may require needing less, wanting less, and refusing to be impressed by what everyone else is chasing.",
      "At your best, you are fiercely independent and difficult to corrupt. You expose artificial needs and puncture pretension. Your challenge is that contempt for convention can harden into contempt for people, including people who are sincerely trying to live well inside imperfect systems."
    ],
    thinkers: "Diogenes, Antisthenes, Crates of Thebes",
    readings: ["Sayings and Anecdotes of Diogenes", "Lives of Eminent Philosophers", "The Cynic Philosophers"]
  },
  aristotelian: {
    title: "Aristotelian / Virtue Ethicist",
    summary: "Become excellent through character, habit, and practical wisdom.",
    description: [
      "You are an Aristotelian, or Virtue Ethicist. You see the good life as something cultivated through habit, character, judgment, friendship, and practical wisdom. The central question is not only \"What rule should I follow?\" or \"What outcome should I produce?\" but \"What kind of person should I become?\"",
      "At your best, you are balanced, developmental, and attentive to context. You understand that excellence is practiced over time. Your challenge is that a focus on moderation and character can sometimes understate how much institutions, luck, or injustice shape people's lives."
    ],
    thinkers: "Aristotle, Alasdair MacIntyre, Philippa Foot",
    readings: ["Nicomachean Ethics", "After Virtue", "Natural Goodness"]
  },
  kantian: {
    title: "Kantian / Deontologist",
    summary: "People have dignity, and principles matter even under pressure.",
    description: [
      "You are a Kantian, or Deontologist. You are drawn to ethics based on dignity, duty, principle, and respect for persons. You likely believe that some things should not be done even for attractive outcomes, because people are not tools to be used for someone else's goal.",
      "At your best, you are principled, fair-minded, and serious about moral consistency. You care about whether actions could be justified to everyone, not just whether they benefit you. Your challenge is that moral rules can become rigid when real life presents messy conflicts between duties."
    ],
    thinkers: "Immanuel Kant, Christine Korsgaard, Onora O'Neill",
    readings: ["Groundwork of the Metaphysics of Morals", "Creating the Kingdom of Ends", "Constructions of Reason"]
  },
  utilitarian: {
    title: "Utilitarian / Consequentialist",
    summary: "The moral question is what actually reduces suffering and improves life.",
    description: [
      "You are a Utilitarian, or Consequentialist. You think morality should pay close attention to results. Good intentions and elegant principles matter less if the outcome leaves more people suffering. You are drawn to practical moral reasoning that asks what would improve life overall.",
      "At your best, you are humane, scalable, and focused on reducing harm. You can look past personal attachment and ask what would do the most good. Your challenge is protecting individual dignity and minority interests when the math of overall benefit becomes too abstract."
    ],
    thinkers: "Jeremy Bentham, John Stuart Mill, Peter Singer",
    readings: ["Utilitarianism", "An Introduction to the Principles of Morals and Legislation", "Practical Ethics"]
  },
  pragmatist: {
    title: "Pragmatist",
    summary: "Ideas prove themselves through consequences, revision, and use.",
    description: [
      "You are a Pragmatist. You are less interested in whether an idea sounds perfect in theory than whether it works in practice. Truth, meaning, and ethics are tested through experience, consequences, revision, and lived experiment.",
      "At your best, you are flexible, experimental, and resistant to empty ideology. You adapt when reality pushes back. Your challenge is making sure \"what works\" does not collapse into short-term convenience or whatever happens to succeed under unfair conditions."
    ],
    thinkers: "William James, John Dewey, Charles Sanders Peirce",
    readings: ["Pragmatism", "Experience and Education", "The Fixation of Belief"]
  },
  skeptic: {
    title: "Skeptic",
    summary: "Certainty is rare, and doubt can be intellectually honorable.",
    description: [
      "You are a Skeptic. You are cautious about certainty and alert to overconfidence. You tend to question assumptions, examine evidence, and resist the pressure to accept claims just because they are popular, traditional, or emotionally satisfying.",
      "At your best, you are intellectually disciplined and hard to manipulate. You give doubt an honorable role. Your challenge is that constant suspension of judgment can become paralysis, especially when action is needed before perfect certainty is available."
    ],
    thinkers: "Pyrrho, Sextus Empiricus, David Hume",
    readings: ["Outlines of Pyrrhonism", "An Enquiry Concerning Human Understanding", "Dialogues Concerning Natural Religion"]
  },
  empiricist: {
    title: "Empiricist / Naturalist",
    summary: "Start with observation, evidence, science, and the natural world.",
    description: [
      "You are an Empiricist, or Naturalist. You trust observation, evidence, science, and the natural world as the best starting points for understanding reality. You are likely wary of explanations that float too far away from what can be tested, observed, or revised.",
      "At your best, you are grounded, curious, and reality-oriented. You prefer accountable claims to beautiful speculation. Your challenge is leaving room for questions of value, meaning, beauty, and consciousness that may not fit neatly into measurement alone."
    ],
    thinkers: "John Locke, David Hume, W. V. O. Quine",
    readings: ["An Essay Concerning Human Understanding", "A Treatise of Human Nature", "Epistemology Naturalized"]
  },
  platonist: {
    title: "Platonist / Idealist",
    summary: "Look beneath appearances for deeper truths, ideals, and forms.",
    description: [
      "You are a Platonist, or Idealist. You are drawn to the possibility that surface appearances are not the whole story. Beneath ordinary experience, you look for deeper truths, ideals, forms, patterns, or realities that give shape and meaning to the visible world.",
      "At your best, you are visionary, intellectually ambitious, and unwilling to reduce life to appetite or utility. You care about truth, beauty, and the highest version of things. Your challenge is staying connected to ordinary experience rather than treating the real world as a disappointing copy of an imagined ideal."
    ],
    thinkers: "Plato, Plotinus, G. W. F. Hegel",
    readings: ["Republic", "Symposium", "The Phenomenology of Spirit"]
  },
  daoist: {
    title: "Daoist",
    summary: "Wisdom often means simplicity, flow, and non-forcing.",
    description: [
      "You are a Daoist. You are drawn to simplicity, flow, balance, and non-forcing. You likely believe that life often goes wrong when people over-control, over-name, over-plan, and try to dominate patterns they would be wiser to move with.",
      "At your best, you are graceful, adaptive, and sensitive to natural rhythms. You know that effort is not always the same as wisdom. Your challenge is recognizing when action, structure, or resistance is necessary rather than waiting for events to settle on their own."
    ],
    thinkers: "Laozi, Zhuangzi, Liezi",
    readings: ["Dao De Jing", "Zhuangzi", "Liezi"]
  },
  buddhist: {
    title: "Buddhist",
    summary: "Understand suffering, impermanence, attachment, and compassion.",
    description: [
      "You are a Buddhist. You are drawn to questions of suffering, impermanence, attachment, compassion, and liberation. You likely sense that much human distress comes from clinging to what changes, mistaking the self for something fixed, or chasing satisfaction in unstable things.",
      "At your best, you are compassionate, reflective, and able to loosen your grip on ego and craving. You understand that clarity and kindness belong together. Your challenge is making sure detachment does not become emotional distance from the world or from the people who need you."
    ],
    thinkers: "The Buddha, Nagarjuna, Shantideva",
    readings: ["The Dhammapada", "The Heart Sutra", "The Way of the Bodhisattva"]
  },
  confucian: {
    title: "Confucian / Communitarian",
    summary: "A good life is formed through relationships, responsibility, and practice.",
    description: [
      "You are a Confucian, or Communitarian. You see the self as formed through relationships, responsibilities, traditions, and shared practices. A good life is not just individual freedom; it is becoming trustworthy, humane, and properly situated within family, community, and society.",
      "At your best, you are loyal, relational, and serious about social harmony. You understand that people become good through practice, example, and responsibility to others. Your challenge is protecting individuality and moral dissent when tradition or group expectations become too strong."
    ],
    thinkers: "Confucius, Mencius, Xunzi",
    readings: ["Analects", "Mencius", "Xunzi"]
  },
  humanist: {
    title: "Humanist",
    summary: "Human dignity, creativity, education, and moral growth are central.",
    description: [
      "You are a Humanist. You place human dignity, agency, education, creativity, and moral growth near the center of your worldview. You believe people can reason, care, build, learn, and improve the conditions of life, even without needing every answer to come from a sacred or cosmic authority.",
      "At your best, you are generous, constructive, and committed to human flourishing. You take both freedom and responsibility seriously. Your challenge is avoiding an overly optimistic view of human nature or assuming that progress happens more easily than it does."
    ],
    thinkers: "Erasmus, Martha Nussbaum, bell hooks",
    readings: ["In Praise of Folly", "Cultivating Humanity", "Teaching to Transgress"]
  },
  romantic: {
    title: "Romantic",
    summary: "Feeling, beauty, imagination, and intensity reveal what matters.",
    description: [
      "You are a Romantic. You trust feeling, imagination, beauty, nature, intensity, and individuality as ways of encountering truth. You are likely suspicious of worldviews that flatten life into calculation, bureaucracy, cold reason, or merely practical success.",
      "At your best, you are vivid, creative, and alive to experiences others may dismiss as impractical. You know that meaning is not only argued but felt. Your challenge is making sure intensity does not become self-absorption, and that beautiful rebellion still leaves room for discipline and care."
    ],
    thinkers: "Jean-Jacques Rousseau, Mary Wollstonecraft, Friedrich Schiller",
    readings: ["Reveries of the Solitary Walker", "Letters on the Aesthetic Education of Man", "A Vindication of the Rights of Woman"]
  }
};

const TYPE_ORDER = Object.keys(TYPES);
const TYPE_CHIP_TITLES = {
  existentialist: "Existentialist",
  absurdist: "Absurdist",
  nihilist: "Nihilist",
  stoic: "Stoic",
  epicurean: "Epicurean",
  cynic: "Cynic",
  aristotelian: "Aristotelian",
  kantian: "Kantian",
  utilitarian: "Utilitarian",
  pragmatist: "Pragmatist",
  skeptic: "Skeptic",
  empiricist: "Empiricist",
  platonist: "Platonist",
  daoist: "Daoist",
  buddhist: "Buddhist",
  confucian: "Confucian",
  humanist: "Humanist",
  romantic: "Romantic"
};

const QUESTIONS = [
  {
    title: "A major decision is in front of you.",
    copy: "What most deserves your attention first?",
    answers: [
      { text: "Whether the choice is truly mine, not just a role I slipped into.", weights: { existentialist: 3, humanist: 1 } },
      { text: "Whether I could defend the principle behind it to anyone.", weights: { kantian: 3, stoic: 1 } },
      { text: "Which path would reduce harm and improve the most lives.", weights: { utilitarian: 3, humanist: 1 } },
      { text: "What I can test, revise, and learn from in the real world.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Which parts are actually within my control.", weights: { stoic: 3, daoist: 1 } },
      { text: "What desire, fear, or attachment might be driving me.", weights: { buddhist: 3, epicurean: 1 } }
    ]
  },
  {
    title: "A good life is best described as...",
    copy: "Pick the version that feels most natural.",
    answers: [
      { text: "A practiced excellence of character, judgment, and friendship.", weights: { aristotelian: 3, confucian: 1 } },
      { text: "A calm life of simple pleasures and trusted companions.", weights: { epicurean: 3, daoist: 1 } },
      { text: "A life of proper relationship, responsibility, and humane conduct.", weights: { confucian: 3, humanist: 1 } },
      { text: "A freer human life built through learning, creativity, and dignity.", weights: { humanist: 3, existentialist: 1 } },
      { text: "A life that flows with events instead of forcing everything into shape.", weights: { daoist: 3, buddhist: 1 } },
      { text: "A life stripped of vanity, artificial needs, and social theater.", weights: { cynic: 3, stoic: 1 } }
    ]
  },
  {
    title: "When someone makes a big claim, you first want...",
    copy: "What kind of support carries the most weight?",
    answers: [
      { text: "Evidence that can be observed, checked, or corrected.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "A clear argument that does not collapse under questioning.", weights: { skeptic: 3, kantian: 1 } },
      { text: "A view of the deeper pattern beneath surface appearances.", weights: { platonist: 3, romantic: 1 } },
      { text: "Proof that the idea works when people actually live by it.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "Room to admit that certainty may be beyond us.", weights: { skeptic: 3, absurdist: 1 } },
      { text: "Attention to how clinging to the claim affects suffering.", weights: { buddhist: 3, daoist: 1 } }
    ]
  },
  {
    title: "Suffering enters the picture.",
    copy: "What response feels wisest?",
    answers: [
      { text: "Strengthen the part of myself that can meet it honorably.", weights: { stoic: 3, aristotelian: 1 } },
      { text: "Understand the craving, clinging, or illusion that intensifies it.", weights: { buddhist: 3, skeptic: 1 } },
      { text: "Organize action around reducing it for as many people as possible.", weights: { utilitarian: 3, humanist: 1 } },
      { text: "Refuse false comfort and face the strangeness directly.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "Choose what this pain will mean through what I do next.", weights: { existentialist: 3, romantic: 1 } },
      { text: "Remove needless fears and return to ordinary sources of peace.", weights: { epicurean: 3, daoist: 1 } }
    ]
  },
  {
    title: "Society is failing at something important.",
    copy: "Your instinct is to ask...",
    answers: [
      { text: "Which relationships, duties, and shared practices have broken down?", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Whose dignity and development are being blocked?", weights: { humanist: 3, kantian: 1 } },
      { text: "Which policy would produce the best concrete outcomes?", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "What principle has been violated, regardless of convenience?", weights: { kantian: 3, stoic: 1 } },
      { text: "Which conventions are just protecting status and hypocrisy?", weights: { cynic: 3, nihilist: 1 } },
      { text: "What small experiment would reveal a better way forward?", weights: { pragmatist: 3, empiricist: 1 } }
    ]
  },
  {
    title: "Your relationship to nature is closest to...",
    copy: "Choose the answer that fits your ordinary instinct.",
    answers: [
      { text: "Nature is a pattern to move with, not a machine to dominate.", weights: { daoist: 3, buddhist: 1 } },
      { text: "Nature is the reality our explanations must answer to.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Nature reveals beauty and feeling that ordinary language misses.", weights: { romantic: 3, platonist: 1 } },
      { text: "Nature reminds me to accept what is not mine to command.", weights: { stoic: 3, daoist: 1 } },
      { text: "Nature is best approached through practical learning and adjustment.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Nature points beyond itself toward order, form, or ideal structure.", weights: { platonist: 3, romantic: 1 } }
    ]
  },
  {
    title: "A friend asks for moral advice.",
    copy: "What do you emphasize?",
    answers: [
      { text: "Respect people as ends, even when a shortcut is tempting.", weights: { kantian: 3, humanist: 1 } },
      { text: "Look at the consequences for everyone affected.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Ask what a wise, generous, courageous person would do.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Honor the responsibilities created by the relationship.", weights: { confucian: 3, kantian: 1 } },
      { text: "Own the choice instead of hiding behind someone else's formula.", weights: { existentialist: 3, cynic: 1 } },
      { text: "Ask whether compassion is being crowded out by ego.", weights: { buddhist: 3, humanist: 1 } }
    ]
  },
  {
    title: "Status, wealth, and reputation look to you like...",
    copy: "What is your default suspicion or hope?",
    answers: [
      { text: "Usually a trap that teaches people to perform instead of live.", weights: { cynic: 3, nihilist: 1 } },
      { text: "Mostly useful only if they support calm, friendship, and security.", weights: { epicurean: 3, pragmatist: 1 } },
      { text: "Indifferent materials; the real issue is character.", weights: { stoic: 3, aristotelian: 1 } },
      { text: "Potential tools for human development if handled responsibly.", weights: { humanist: 3, utilitarian: 1 } },
      { text: "Less interesting than intensity, beauty, and a life that feels alive.", weights: { romantic: 3, existentialist: 1 } },
      { text: "Dangerous when they replace the slow work of becoming excellent.", weights: { aristotelian: 3, confucian: 1 } }
    ]
  },
  {
    title: "You are not sure what is true.",
    copy: "What do you do with uncertainty?",
    answers: [
      { text: "Suspend judgment until the claim earns more confidence.", weights: { skeptic: 3, empiricist: 1 } },
      { text: "Try something modest and see what reality teaches.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Focus on acting well even without perfect knowledge.", weights: { stoic: 3, kantian: 1 } },
      { text: "Notice the discomfort and loosen the need to possess an answer.", weights: { buddhist: 3, daoist: 1 } },
      { text: "Accept the tension and keep living without pretending it disappears.", weights: { absurdist: 3, existentialist: 1 } },
      { text: "Look for the deeper principle that would make the confusion intelligible.", weights: { platonist: 3, aristotelian: 1 } }
    ]
  },
  {
    title: "Work should ideally give you...",
    copy: "What would make work feel worth doing?",
    answers: [
      { text: "A chance to choose a life I can honestly claim as mine.", weights: { existentialist: 3, humanist: 1 } },
      { text: "A disciplined craft through which I become more capable.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "A way to serve human growth, dignity, or repair.", weights: { humanist: 3, utilitarian: 1 } },
      { text: "A field for useful experiments and visible improvement.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "A place to fulfill roles and contribute to a larger fabric.", weights: { confucian: 3, kantian: 1 } },
      { text: "No illusion that work is sacred just because society says so.", weights: { nihilist: 3, cynic: 1 } }
    ]
  },
  {
    title: "A conflict is getting heated.",
    copy: "What is your strongest impulse?",
    answers: [
      { text: "Lower the force and find the path of least needless resistance.", weights: { daoist: 3, epicurean: 1 } },
      { text: "Clarify the rule or duty everyone must respect.", weights: { kantian: 3, confucian: 1 } },
      { text: "Choose the settlement that prevents the most harm.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Say the uncomfortable truth everyone is politely avoiding.", weights: { cynic: 3, skeptic: 1 } },
      { text: "Look for the suffering and fear beneath the anger.", weights: { buddhist: 3, humanist: 1 } },
      { text: "Keep my judgment clean and refuse to be ruled by reaction.", weights: { stoic: 3, aristotelian: 1 } }
    ]
  },
  {
    title: "Art matters because...",
    copy: "Which answer feels least optional?",
    answers: [
      { text: "It lets feeling, imagination, and intensity speak truth.", weights: { romantic: 3, existentialist: 1 } },
      { text: "It gestures toward beauty and ideals beyond ordinary surfaces.", weights: { platonist: 3, romantic: 1 } },
      { text: "It enlarges human sympathy, dignity, and possibility.", weights: { humanist: 3, confucian: 1 } },
      { text: "It is part of human nature and can be studied like any other phenomenon.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "It can make the absurdity of existence bearable without explaining it away.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "It can be one of life's simple, restorative pleasures.", weights: { epicurean: 3, daoist: 1 } }
    ]
  },
  {
    title: "Tradition should be treated as...",
    copy: "What is your default posture?",
    answers: [
      { text: "A living inheritance that can train responsibility and respect.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "A suspicious costume that often hides power or laziness.", weights: { cynic: 3, nihilist: 1 } },
      { text: "A set of practices worth keeping only where they still work.", weights: { pragmatist: 3, skeptic: 1 } },
      { text: "A source of character formation, but not immune from judgment.", weights: { aristotelian: 3, kantian: 1 } },
      { text: "A claim that needs reasons, not automatic obedience.", weights: { skeptic: 3, empiricist: 1 } },
      { text: "Material I may inherit, revise, or reject in choosing myself.", weights: { existentialist: 3, romantic: 1 } }
    ]
  },
  {
    title: "The self is...",
    copy: "Which description comes closest?",
    answers: [
      { text: "Less fixed than we think, and much suffering comes from clinging to it.", weights: { buddhist: 3, daoist: 1 } },
      { text: "A project shaped by choices, commitments, and responsibility.", weights: { existentialist: 3, humanist: 1 } },
      { text: "A bearer of dignity, creativity, learning, and moral possibility.", weights: { humanist: 3, kantian: 1 } },
      { text: "Formed through relationships, roles, and shared practices.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "A natural phenomenon to be studied without mystical inflation.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Often a story we tell because we need a center.", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    title: "A brilliant teacher offers you a system.",
    copy: "What do you do first?",
    answers: [
      { text: "Test its assumptions before giving it my allegiance.", weights: { skeptic: 3, empiricist: 1 } },
      { text: "Ask whether it reveals a deeper order I had missed.", weights: { platonist: 3, romantic: 1 } },
      { text: "Look for evidence that survives contact with observation.", weights: { empiricist: 3, pragmatist: 1 } },
      { text: "Try applying it and watch what consequences follow.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "Ask whether it forms better people and better relationships.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Notice whether it makes life feel more vivid and whole.", weights: { romantic: 3, humanist: 1 } }
    ]
  },
  {
    title: "After a real loss, you are most helped by...",
    copy: "Which kind of response would reach you?",
    answers: [
      { text: "A reminder to meet what happened with steadiness and dignity.", weights: { stoic: 3, aristotelian: 1 } },
      { text: "A way to see impermanence without turning away from compassion.", weights: { buddhist: 3, daoist: 1 } },
      { text: "Permission to admit that the world can be unreasonable.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "Small, ordinary comforts and people who stay close.", weights: { epicurean: 3, confucian: 1 } },
      { text: "The responsibility to choose what this will make of me.", weights: { existentialist: 3, stoic: 1 } },
      { text: "A renewed commitment to care for living human beings.", weights: { humanist: 3, utilitarian: 1 } }
    ]
  },
  {
    title: "Rules are valuable when...",
    copy: "What makes a rule legitimate?",
    answers: [
      { text: "They express duties that respect every person's dignity.", weights: { kantian: 3, humanist: 1 } },
      { text: "They reliably improve consequences and reduce harm.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "They work in practice and can change when experience demands it.", weights: { pragmatist: 3, skeptic: 1 } },
      { text: "They do not become a disguise for convention and status.", weights: { cynic: 3, nihilist: 1 } },
      { text: "They train people toward good character without replacing judgment.", weights: { aristotelian: 3, confucian: 1 } },
      { text: "They are light enough not to fight the shape of life.", weights: { daoist: 3, epicurean: 1 } }
    ]
  },
  {
    title: "Ambition is...",
    copy: "What is your most honest reaction?",
    answers: [
      { text: "Often another name for vanity unless it has been disciplined.", weights: { cynic: 3, stoic: 1 } },
      { text: "Good when it develops excellence and practical wisdom.", weights: { aristotelian: 3, humanist: 1 } },
      { text: "Worthwhile when it enlarges human freedom or flourishing.", weights: { humanist: 3, utilitarian: 1 } },
      { text: "A fire that can make life vivid, risky, and real.", weights: { romantic: 3, existentialist: 1 } },
      { text: "A desire that should be limited before it steals peace.", weights: { epicurean: 3, buddhist: 1 } },
      { text: "A story people use to make competition feel meaningful.", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    title: "Individual freedom and community pull against each other.",
    copy: "Where do you lean?",
    answers: [
      { text: "A person becomes whole through obligations and relationships.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "No community has the right to choose my life for me.", weights: { existentialist: 3, cynic: 1 } },
      { text: "Freedom matters because human beings deserve room to grow.", weights: { humanist: 3, kantian: 1 } },
      { text: "The test is whether each person is treated as an end.", weights: { kantian: 3, humanist: 1 } },
      { text: "The healthiest order is one that does not force more than needed.", weights: { daoist: 3, epicurean: 1 } },
      { text: "Both self and community should be held lightly, with compassion.", weights: { buddhist: 3, confucian: 1 } }
    ]
  },
  {
    title: "The universe, at bottom, seems...",
    copy: "Which answer feels closest to your metaphysical weather?",
    answers: [
      { text: "Natural, observable, and not obligated to match our wishes.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Structured by realities or ideals deeper than appearances.", weights: { platonist: 3, kantian: 1 } },
      { text: "Silent about human value, whatever stories we tell.", weights: { nihilist: 3, absurdist: 1 } },
      { text: "Strange enough that dignity lies in facing it without escape.", weights: { absurdist: 3, existentialist: 1 } },
      { text: "A pattern to harmonize with more than a puzzle to conquer.", weights: { daoist: 3, buddhist: 1 } },
      { text: "Something we should be cautious about claiming to understand.", weights: { skeptic: 3, empiricist: 1 } }
    ]
  },
  {
    title: "In a crisis, you become most useful by...",
    copy: "What role would you naturally take?",
    answers: [
      { text: "Staying composed and focusing on the next right action.", weights: { stoic: 3, kantian: 1 } },
      { text: "Triaging needs so the greatest harm is prevented.", weights: { utilitarian: 3, humanist: 1 } },
      { text: "Adapting quickly as new information appears.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Holding the group together through responsibility and trust.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Reducing panic by seeing fear clearly and compassionately.", weights: { buddhist: 3, stoic: 1 } },
      { text: "Finding the human pulse when procedures become mechanical.", weights: { romantic: 3, humanist: 1 } }
    ]
  },
  {
    title: "Happiness is most likely to come from...",
    copy: "Which source seems least fake?",
    answers: [
      { text: "Simple pleasure, friendship, and freedom from needless fear.", weights: { epicurean: 3, daoist: 1 } },
      { text: "Loosening attachment and cultivating compassion.", weights: { buddhist: 3, humanist: 1 } },
      { text: "Living with excellent character over time.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Improving the conditions that make suffering less likely.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Building a more humane life with others.", weights: { humanist: 3, confucian: 1 } },
      { text: "Laughing at the mismatch between our hopes and the universe.", weights: { absurdist: 3, cynic: 1 } }
    ]
  },
  {
    title: "Honesty means...",
    copy: "Which version of honesty matters most?",
    answers: [
      { text: "Saying what convention pressures everyone to hide.", weights: { cynic: 3, skeptic: 1 } },
      { text: "Refusing to use people through lies or manipulation.", weights: { kantian: 3, humanist: 1 } },
      { text: "Updating claims when reality proves them wrong.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Speaking in a way that preserves trust and proper relationship.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Not pretending my choices were forced when I chose them.", weights: { existentialist: 3, stoic: 1 } },
      { text: "Admitting what I do not know.", weights: { skeptic: 3, buddhist: 1 } }
    ]
  },
  {
    title: "Education should primarily...",
    copy: "What should learning form in people?",
    answers: [
      { text: "Expand dignity, freedom, sympathy, and human possibility.", weights: { humanist: 3, confucian: 1 } },
      { text: "Turn the soul toward truth, beauty, and higher ideals.", weights: { platonist: 3, romantic: 1 } },
      { text: "Teach people how to investigate reality carefully.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Build character, judgment, and the habits of excellence.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Prepare people to solve problems in changing conditions.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "Awaken imagination, feeling, and individual voice.", weights: { romantic: 3, existentialist: 1 } }
    ]
  },
  {
    title: "Power and institutions should be met with...",
    copy: "What is your first posture?",
    answers: [
      { text: "A raised eyebrow; power usually tells flattering stories about itself.", weights: { cynic: 3, nihilist: 1 } },
      { text: "A demand that they serve human dignity and development.", weights: { humanist: 3, kantian: 1 } },
      { text: "Measurement of whether they reduce suffering overall.", weights: { utilitarian: 3, empiricist: 1 } },
      { text: "Limits that prevent people from becoming tools of the system.", weights: { kantian: 3, existentialist: 1 } },
      { text: "Doubt until their claims survive scrutiny.", weights: { skeptic: 3, pragmatist: 1 } },
      { text: "Suspicion that their grand language may be empty theater.", weights: { nihilist: 3, cynic: 1 } }
    ]
  },
  {
    title: "Time and impermanence make you think...",
    copy: "Which thought feels most familiar?",
    answers: [
      { text: "Clinging is the problem; compassion is still possible.", weights: { buddhist: 3, daoist: 1 } },
      { text: "Change is not mine to command, but my response is.", weights: { stoic: 3, existentialist: 1 } },
      { text: "The passing moment is exactly why beauty matters.", weights: { romantic: 3, epicurean: 1 } },
      { text: "Enjoy the ordinary goods before anxiety steals them.", weights: { epicurean: 3, buddhist: 1 } },
      { text: "Move with the season rather than trying to freeze it.", weights: { daoist: 3, stoic: 1 } },
      { text: "I must choose before the chance to choose disappears.", weights: { existentialist: 3, absurdist: 1 } }
    ]
  },
  {
    title: "When people strongly disagree, you prefer to...",
    copy: "What is the best path through disagreement?",
    answers: [
      { text: "Separate what is known from what is merely asserted.", weights: { skeptic: 3, empiricist: 1 } },
      { text: "Try a practical compromise and learn from what happens.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "Find the principle each side would have to respect.", weights: { kantian: 3, platonist: 1 } },
      { text: "Protect the dignity of the people in the argument.", weights: { humanist: 3, buddhist: 1 } },
      { text: "Restore the relationships that make future trust possible.", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Name the vanity, status, or bad faith in the room.", weights: { cynic: 3, nihilist: 1 } }
    ]
  },
  {
    title: "What unsettles you most?",
    copy: "Choose the discomfort that feels most philosophically important.",
    answers: [
      { text: "That values may have no foundation beyond human projection.", weights: { nihilist: 3, skeptic: 1 } },
      { text: "That our need for meaning may outrun what reality provides.", weights: { absurdist: 3, existentialist: 1 } },
      { text: "That I might live by excuses instead of choosing honestly.", weights: { existentialist: 3, kantian: 1 } },
      { text: "That craving could make me miss the life I am actually living.", weights: { buddhist: 3, epicurean: 1 } },
      { text: "That I might surrender my judgment to fear or appetite.", weights: { stoic: 3, aristotelian: 1 } },
      { text: "That life could become efficient but spiritually flat.", weights: { romantic: 3, humanist: 1 } }
    ]
  },
  {
    title: "Your ideal free day includes...",
    copy: "Pick the scene that sounds most restorative.",
    answers: [
      { text: "A long meal, easy conversation, and no anxious striving.", weights: { epicurean: 3, confucian: 1 } },
      { text: "A walk, a storm, music, and the feeling of being intensely alive.", weights: { romantic: 3, daoist: 1 } },
      { text: "A museum, lab, archive, or field notebook full of observations.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Quiet movement with the day as it unfolds.", weights: { daoist: 3, buddhist: 1 } },
      { text: "A meaningful ritual or gathering with people I owe care to.", weights: { confucian: 3, humanist: 1 } },
      { text: "Time with a difficult book that reaches beyond the visible world.", weights: { platonist: 3, aristotelian: 1 } }
    ]
  },
  {
    title: "If you had to carry one motto, it would be...",
    copy: "Choose the line you would be least embarrassed to live by.",
    answers: [
      { text: "Become who you are through what you choose.", weights: { existentialist: 3, romantic: 1 } },
      { text: "Master your judgment; meet the world with virtue.", weights: { stoic: 3, kantian: 1 } },
      { text: "Reduce suffering and make life better where you can.", weights: { utilitarian: 3, humanist: 1 } },
      { text: "Follow what works, revise what fails, keep learning.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Let go, move lightly, and do not force the river.", weights: { daoist: 3, buddhist: 1 } },
      { text: "Question the stage, the script, and the applause.", weights: { cynic: 3, nihilist: 1 } }
    ]
  }
];

const state = {
  index: 0,
  answers: new Array(QUESTIONS.length).fill(null)
};

const els = {
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  quizForm: document.querySelector("#quiz-form"),
  questionCount: document.querySelector("#question-count"),
  progressFill: document.querySelector("#progress-fill"),
  questionTitle: document.querySelector("#question-title"),
  questionCopy: document.querySelector("#question-copy"),
  optionsList: document.querySelector("#options-list"),
  backButton: document.querySelector("#back-button"),
  nextButton: document.querySelector("#next-button"),
  resultTitle: document.querySelector("#result-title"),
  resultSummary: document.querySelector("#result-summary"),
  resultDescription: document.querySelector("#result-description"),
  secondaryResult: document.querySelector("#secondary-result"),
  resultThinkers: document.querySelector("#result-thinkers"),
  affinityList: document.querySelector("#affinity-list"),
  readingList: document.querySelector("#reading-list"),
  retakeButton: document.querySelector("#retake-button"),
  copyButton: document.querySelector("#copy-button"),
  copyStatus: document.querySelector("#copy-status"),
  typeChipList: document.querySelector("#type-chip-list")
};

function renderTypeChips() {
  els.typeChipList.innerHTML = TYPE_ORDER.map((key) => {
    return `<span class="type-chip">${TYPE_CHIP_TITLES[key]}</span>`;
  }).join("");
}

function renderQuestion() {
  const question = QUESTIONS[state.index];
  const answeredIndex = state.answers[state.index];
  const progress = ((state.index + 1) / QUESTIONS.length) * 100;

  els.questionCount.textContent = `Question ${state.index + 1} of ${QUESTIONS.length}`;
  els.progressFill.style.width = `${progress}%`;
  els.questionTitle.textContent = question.title;
  els.questionCopy.textContent = question.copy;
  els.backButton.disabled = state.index === 0;
  els.nextButton.disabled = answeredIndex === null;
  els.nextButton.textContent = state.index === QUESTIONS.length - 1 ? "See result" : "Next";

  els.optionsList.innerHTML = question.answers.map((answer, index) => {
    const optionId = `q${state.index}-a${index}`;
    const checked = answeredIndex === index ? "checked" : "";
    const selectedClass = answeredIndex === index ? " is-selected" : "";
    return `
      <label class="option${selectedClass}" for="${optionId}">
        <input id="${optionId}" type="radio" name="answer" value="${index}" ${checked}>
        <span>${answer.text}</span>
      </label>
    `;
  }).join("");
}

function selectAnswer(index) {
  state.answers[state.index] = index;
  els.nextButton.disabled = false;
  document.querySelectorAll(".option").forEach((option) => option.classList.remove("is-selected"));
  const selectedInput = document.querySelector(`input[name="answer"][value="${index}"]`);
  if (selectedInput) {
    selectedInput.checked = true;
    selectedInput.closest(".option").classList.add("is-selected");
  }
}

function calculateScores() {
  const scores = Object.fromEntries(TYPE_ORDER.map((key) => [key, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    const answer = QUESTIONS[questionIndex].answers[answerIndex];
    Object.entries(answer.weights).forEach(([key, value]) => {
      if (scores[key] !== undefined) {
        scores[key] += value;
      }
    });
  });

  return TYPE_ORDER
    .map((key) => ({ key, score: scores[key], ...TYPES[key] }))
    .sort((a, b) => b.score - a.score || TYPE_ORDER.indexOf(a.key) - TYPE_ORDER.indexOf(b.key));
}

function renderResult() {
  const ranked = calculateScores();
  const primary = ranked[0];
  const secondary = ranked[1];
  const topScore = Math.max(primary.score, 1);

  els.quizView.classList.add("is-hidden");
  els.resultView.classList.remove("is-hidden");
  els.questionCount.textContent = "Complete";
  els.progressFill.style.width = "100%";

  els.resultTitle.textContent = primary.title;
  els.resultSummary.textContent = primary.summary;
  els.resultDescription.innerHTML = primary.description.map((paragraph) => `<p>${paragraph}</p>`).join("");
  els.secondaryResult.textContent = `${secondary.title}: ${secondary.summary}`;
  els.resultThinkers.textContent = primary.thinkers;
  els.readingList.innerHTML = primary.readings.map((reading) => `<li>${reading}</li>`).join("");
  els.affinityList.innerHTML = ranked.slice(0, 5).map((result) => {
    const percent = Math.round((result.score / topScore) * 100);
    return `
      <div class="affinity-row">
        <div class="affinity-name">${result.title}</div>
        <div class="affinity-track" aria-hidden="true">
          <div class="affinity-fill" style="width: ${percent}%"></div>
        </div>
        <div class="affinity-score">${percent}%</div>
      </div>
    `;
  }).join("");

  els.copyStatus.textContent = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  state.index = 0;
  state.answers = new Array(QUESTIONS.length).fill(null);
  els.resultView.classList.add("is-hidden");
  els.quizView.classList.remove("is-hidden");
  els.copyStatus.textContent = "";
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getShareText() {
  const ranked = calculateScores();
  const primary = ranked[0];
  const secondary = ranked[1];
  return [
    `My Philosophy Sorting Hat result: ${primary.title}`,
    primary.summary,
    `Secondary influence: ${secondary.title}`
  ].join("\n");
}

async function copyResult() {
  const text = getShareText();

  try {
    await navigator.clipboard.writeText(text);
    els.copyStatus.textContent = "Result copied.";
  } catch {
    els.copyStatus.textContent = text;
  }
}

els.optionsList.addEventListener("change", (event) => {
  if (event.target.matches('input[name="answer"]')) {
    selectAnswer(Number(event.target.value));
  }
});

els.optionsList.addEventListener("click", (event) => {
  const option = event.target.closest(".option");
  if (!option) return;
  const input = option.querySelector('input[name="answer"]');
  if (input) {
    selectAnswer(Number(input.value));
  }
});

els.quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.answers[state.index] === null) return;

  if (state.index === QUESTIONS.length - 1) {
    renderResult();
    return;
  }

  state.index += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.backButton.addEventListener("click", () => {
  if (state.index === 0) return;
  state.index -= 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.retakeButton.addEventListener("click", resetQuiz);
els.copyButton.addEventListener("click", copyResult);

renderTypeChips();
renderQuestion();
