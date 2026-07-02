const TYPES = {
  existentialist: {
    title: "Existentialist",
    family: "Freedom and meaning",
    summary: "Meaning is chosen, made, and lived through action.",
    description: [
      "Your answers place you closest to existentialism. You are drawn to the idea that life does not hand you a finished script. Meaning has to be chosen, made, and lived through action. You care about authenticity, freedom, responsibility, and the courage to become yourself without hiding behind convention or excuses.",
      "At your best, you are honest about uncertainty and serious about personal responsibility. Your challenge is that freedom can become heavy if every choice feels like a referendum on your whole identity."
    ],
    thinkers: "Soren Kierkegaard, Jean-Paul Sartre, Simone de Beauvoir",
    readings: ["Existentialism Is a Humanism", "The Ethics of Ambiguity", "Fear and Trembling"]
  },
  absurdist: {
    title: "Absurdist",
    family: "Freedom and meaning",
    summary: "The universe may not answer, but you can still live lucidly.",
    description: [
      "Your answers place you closest to absurdism. You see the tension between the human hunger for meaning and a universe that may not answer back. Instead of collapsing under that tension, you face it with lucidity, defiance, humor, and freedom.",
      "At your best, you are clear-eyed without being obedient to despair. Your challenge is avoiding the temptation to turn irony into distance from everything that asks for commitment."
    ],
    thinkers: "Albert Camus, Miguel de Unamuno, Franz Kafka",
    readings: ["The Myth of Sisyphus", "The Rebel", "The Trial"]
  },
  nihilist: {
    title: "Nihilist",
    family: "Freedom and meaning",
    summary: "Inherited meanings deserve to be questioned without flinching.",
    description: [
      "Your answers place you closest to philosophical nihilism. You are skeptical of inherited meanings, moral certainties, grand narratives, and comforting illusions. You ask whether values are truly grounded or whether people dress up preference, fear, power, or habit as truth.",
      "At your best, you are intellectually rigorous in a clarifying way. Your challenge is deciding what, if anything, can be built after old certainties have been dismantled."
    ],
    thinkers: "Friedrich Nietzsche, Emil Cioran, Max Stirner",
    readings: ["The Gay Science", "The Trouble with Being Born", "The Ego and Its Own"]
  },
  stoic: {
    title: "Stoic",
    family: "Ancient ethics",
    summary: "Freedom begins with judgment, discipline, and character.",
    description: [
      "Your answers place you closest to Stoicism. You believe that freedom begins with self-command. The world is unstable, other people are unpredictable, and fortune changes quickly, but your judgments, choices, and character remain your responsibility.",
      "At your best, you are steady, principled, and hard to shake. Your challenge is remembering that composure should not become emotional avoidance."
    ],
    thinkers: "Epictetus, Marcus Aurelius, Seneca",
    readings: ["Enchiridion", "Meditations", "Letters from a Stoic"]
  },
  epicurean: {
    title: "Epicurean",
    family: "Ancient ethics",
    summary: "The good life is calm pleasure, friendship, and freedom from fear.",
    description: [
      "Your answers place you closest to Epicureanism. You are drawn to simple pleasures, good friends, intellectual calm, and freedom from needless fear. You distrust status games, frantic ambition, and desires that create more anxiety than joy.",
      "At your best, you understand that happiness is often quieter than people expect. Your challenge is making sure peace does not become withdrawal from responsibilities that deserve your attention."
    ],
    thinkers: "Epicurus, Lucretius, Philodemus",
    readings: ["Letter to Menoeceus", "On the Nature of Things", "Principal Doctrines"]
  },
  cynic: {
    title: "Cynic",
    family: "Ancient ethics",
    summary: "Need less, perform less, and refuse the worship of status.",
    description: [
      "Your answers place you closest to ancient Cynicism. You distrust social performance, luxury, status, vanity, and polite hypocrisy. You are drawn to blunt honesty and the idea that a good life may require needing less and refusing to be impressed.",
      "At your best, you are fiercely independent and difficult to corrupt. Your challenge is that contempt for convention can harden into contempt for people."
    ],
    thinkers: "Diogenes, Antisthenes, Crates of Thebes",
    readings: ["Sayings and Anecdotes of Diogenes", "Lives of Eminent Philosophers", "The Cynic Philosophers"]
  },
  aristotelian: {
    title: "Aristotelian / Virtue Ethicist",
    family: "Ethics and character",
    summary: "Become excellent through character, habit, and practical wisdom.",
    description: [
      "Your answers place you closest to Aristotelian virtue ethics. You see the good life as something cultivated through habit, character, judgment, friendship, and practical wisdom. The central question is not only what to do, but what kind of person to become.",
      "At your best, you are balanced, developmental, and attentive to context. Your challenge is that a focus on character can sometimes understate luck, institutions, and injustice."
    ],
    thinkers: "Aristotle, Alasdair MacIntyre, Philippa Foot",
    readings: ["Nicomachean Ethics", "After Virtue", "Natural Goodness"]
  },
  kantian: {
    title: "Kantian / Deontologist",
    family: "Ethics and principle",
    summary: "People have dignity, and principles matter even under pressure.",
    description: [
      "Your answers place you closest to Kantian deontology. You are drawn to ethics based on dignity, duty, principle, and respect for persons. You believe some things should not be done even for attractive outcomes, because people are not tools.",
      "At your best, you are principled, fair-minded, and serious about moral consistency. Your challenge is that rules can become rigid when real life presents conflicts between duties."
    ],
    thinkers: "Immanuel Kant, Christine Korsgaard, Onora O'Neill",
    readings: ["Groundwork of the Metaphysics of Morals", "Creating the Kingdom of Ends", "Constructions of Reason"]
  },
  utilitarian: {
    title: "Utilitarian / Consequentialist",
    family: "Ethics and outcomes",
    summary: "The moral question is what actually reduces suffering and improves life.",
    description: [
      "Your answers place you closest to utilitarian or consequentialist ethics. You think morality should pay close attention to results. Good intentions and elegant principles matter less if the outcome leaves more people suffering.",
      "At your best, you are humane, scalable, and focused on reducing harm. Your challenge is protecting individual dignity and minority interests when overall benefit becomes too abstract."
    ],
    thinkers: "Jeremy Bentham, John Stuart Mill, Peter Singer",
    readings: ["Utilitarianism", "An Introduction to the Principles of Morals and Legislation", "Practical Ethics"]
  },
  care_ethicist: {
    title: "Care Ethicist",
    family: "Ethics and relationship",
    summary: "Moral life begins with care, dependency, and concrete responsibility.",
    description: [
      "Your answers place you closest to care ethics. You see morality as rooted in attention, vulnerability, dependency, and the responsibilities created by actual relationships. Abstract rules and aggregate outcomes matter, but they can miss the person in front of you.",
      "At your best, you are perceptive, humane, and alert to neglected needs. Your challenge is keeping care from becoming self-erasure or favoritism."
    ],
    thinkers: "Carol Gilligan, Nel Noddings, Eva Feder Kittay",
    readings: ["In a Different Voice", "Caring", "Love's Labor"]
  },
  pragmatist: {
    title: "Pragmatist",
    family: "Knowledge and practice",
    summary: "Ideas prove themselves through consequences, revision, and use.",
    description: [
      "Your answers place you closest to pragmatism. You are less interested in whether an idea sounds perfect in theory than whether it works in practice. Truth, meaning, and ethics are tested through experience, consequences, revision, and lived experiment.",
      "At your best, you are flexible, experimental, and resistant to empty ideology. Your challenge is making sure what works does not collapse into short-term convenience."
    ],
    thinkers: "William James, John Dewey, Charles Sanders Peirce",
    readings: ["Pragmatism", "Experience and Education", "The Fixation of Belief"]
  },
  skeptic: {
    title: "Skeptic",
    family: "Knowledge and doubt",
    summary: "Certainty is rare, and doubt can be intellectually honorable.",
    description: [
      "Your answers place you closest to philosophical skepticism. You are cautious about certainty and alert to overconfidence. You question assumptions, examine evidence, and resist accepting claims because they are popular, traditional, or emotionally satisfying.",
      "At your best, you are intellectually disciplined and hard to manipulate. Your challenge is that constant suspension of judgment can become paralysis."
    ],
    thinkers: "Pyrrho, Sextus Empiricus, David Hume",
    readings: ["Outlines of Pyrrhonism", "An Enquiry Concerning Human Understanding", "Dialogues Concerning Natural Religion"]
  },
  empiricist: {
    title: "Empiricist / Naturalist",
    family: "Knowledge and nature",
    summary: "Start with observation, evidence, science, and the natural world.",
    description: [
      "Your answers place you closest to empiricism or naturalism. You trust observation, evidence, science, and the natural world as the best starting points for understanding reality. You are wary of explanations that float too far from what can be tested or revised.",
      "At your best, you are grounded, curious, and reality-oriented. Your challenge is leaving room for value, beauty, and consciousness when they do not fit neatly into measurement."
    ],
    thinkers: "John Locke, David Hume, W. V. O. Quine",
    readings: ["An Essay Concerning Human Understanding", "A Treatise of Human Nature", "Epistemology Naturalized"]
  },
  platonist: {
    title: "Platonist / Idealist",
    family: "Metaphysics and ideals",
    summary: "Look beneath appearances for deeper truths, ideals, and forms.",
    description: [
      "Your answers place you closest to Platonism or philosophical idealism. You are drawn to the possibility that surface appearances are not the whole story. Beneath ordinary experience, you look for deeper truths, ideals, forms, patterns, or realities.",
      "At your best, you are visionary and intellectually ambitious. Your challenge is staying connected to ordinary experience rather than treating the real world as a disappointing copy of an ideal."
    ],
    thinkers: "Plato, Plotinus, G. W. F. Hegel",
    readings: ["Republic", "Symposium", "The Phenomenology of Spirit"]
  },
  daoist: {
    title: "Daoist",
    family: "Asian philosophy",
    summary: "Wisdom often means simplicity, flow, and non-forcing.",
    description: [
      "Your answers place you closest to Daoist philosophy. You are drawn to simplicity, flow, balance, and non-forcing. You believe life often goes wrong when people over-control, over-name, over-plan, and dominate patterns they should move with.",
      "At your best, you are graceful, adaptive, and sensitive to natural rhythms. Your challenge is recognizing when action, structure, or resistance is necessary."
    ],
    thinkers: "Laozi, Zhuangzi, Liezi",
    readings: ["Dao De Jing", "Zhuangzi", "Liezi"]
  },
  buddhist: {
    title: "Buddhist",
    family: "Asian philosophy",
    summary: "Understand suffering, impermanence, attachment, and compassion.",
    description: [
      "Your answers place you closest to Buddhist philosophy. You are drawn to questions of suffering, impermanence, attachment, compassion, and liberation. You sense that much distress comes from clinging to what changes or mistaking the self for something fixed.",
      "At your best, you are compassionate, reflective, and able to loosen your grip on ego and craving. Your challenge is making sure detachment does not become emotional distance."
    ],
    thinkers: "The Buddha, Nagarjuna, Shantideva",
    readings: ["The Dhammapada", "The Heart Sutra", "The Way of the Bodhisattva"]
  },
  confucian: {
    title: "Confucian / Communitarian",
    family: "Asian philosophy",
    summary: "A good life is formed through relationships, responsibility, and practice.",
    description: [
      "Your answers place you closest to Confucian or communitarian philosophy. You see the self as formed through relationships, responsibilities, traditions, and shared practices. A good life is becoming trustworthy, humane, and properly situated with others.",
      "At your best, you are loyal, relational, and serious about social harmony. Your challenge is protecting individuality and moral dissent when group expectations become too strong."
    ],
    thinkers: "Confucius, Mencius, Xunzi",
    readings: ["Analects", "Mencius", "Xunzi"]
  },
  vedantic: {
    title: "Vedanta / Hindu Philosophy",
    family: "Religious and spiritual",
    summary: "The self, reality, duty, and liberation belong to a deeper spiritual order.",
    description: [
      "Your answers place you closest to Vedanta or Hindu philosophy. You are drawn to questions of self, ultimate reality, duty, consciousness, and liberation. The visible world matters, but it points toward a deeper metaphysical and spiritual order.",
      "At your best, you can hold everyday action and ultimate questions together. Your challenge is translating spiritual insight into concrete responsibility."
    ],
    thinkers: "Adi Shankara, Ramanuja, Swami Vivekananda",
    readings: ["Bhagavad Gita", "Upanishads", "Brahma Sutra"]
  },
  christian_personalist: {
    title: "Christian Personalism",
    family: "Religious and spiritual",
    summary: "Persons have sacred dignity because they are loved, created, and called.",
    description: [
      "Your answers place you closest to Christian personalism. You see reality through creation, grace, love, sin, redemption, and the sacred dignity of persons. Moral life is not only rule-following or outcome-management; it is a response to divine love and neighborly obligation.",
      "At your best, you unite moral seriousness with mercy. Your challenge is keeping faith from becoming moralism or institutional defensiveness."
    ],
    thinkers: "Augustine, Thomas Aquinas, Dorothy Day",
    readings: ["Confessions", "Summa Theologiae selections", "The Long Loneliness"]
  },
  jewish_covenantal: {
    title: "Jewish Covenantal Thought",
    family: "Religious and spiritual",
    summary: "Meaning is lived through covenant, law, memory, argument, and repair.",
    description: [
      "Your answers place you closest to Jewish covenantal thought. You are drawn to a life shaped by obligation, interpretation, memory, communal responsibility, justice, and repair. Truth is not only contemplated; it is argued over, practiced, and handed down.",
      "At your best, you bring ethical seriousness and historical memory together. Your challenge is balancing inherited obligation with personal conscience and pluralism."
    ],
    thinkers: "Maimonides, Martin Buber, Emmanuel Levinas",
    readings: ["Guide for the Perplexed", "I and Thou", "Difficult Freedom"]
  },
  islamic_falsafa: {
    title: "Islamic Philosophy",
    family: "Religious and spiritual",
    summary: "Reason, revelation, law, and divine unity belong in one moral cosmos.",
    description: [
      "Your answers place you closest to Islamic philosophy. You are drawn to the harmony and tension between reason, revelation, law, virtue, and divine unity. Knowledge should orient the whole person toward truth, justice, and a rightly ordered life.",
      "At your best, you integrate intellect, discipline, and devotion. Your challenge is holding interpretive humility alongside conviction."
    ],
    thinkers: "Al-Farabi, Avicenna, Al-Ghazali, Ibn Rushd",
    readings: ["The Incoherence of the Philosophers", "The Decisive Treatise", "The Book of Healing selections"]
  },
  mystical: {
    title: "Mystic / Contemplative",
    family: "Religious and spiritual",
    summary: "Ultimate truth is approached through transformation, silence, and direct encounter.",
    description: [
      "Your answers place you closest to mystical or contemplative traditions. You are drawn to direct encounter, silence, transformation, and the limits of ordinary language. Concepts matter, but they are not the same as contact with the real.",
      "At your best, you are inwardly serious and open to wonder. Your challenge is keeping inward depth connected to ethical clarity and shared life."
    ],
    thinkers: "Meister Eckhart, Rumi, Teresa of Avila, Simone Weil",
    readings: ["The Essential Rumi", "Interior Castle", "Gravity and Grace"]
  },
  humanist: {
    title: "Humanist",
    family: "Modern life",
    summary: "Human dignity, creativity, education, and moral growth are central.",
    description: [
      "Your answers place you closest to humanism. You place human dignity, agency, education, creativity, and moral growth near the center of your worldview. You believe people can reason, care, build, learn, and improve the conditions of life.",
      "At your best, you are generous, constructive, and committed to human flourishing. Your challenge is avoiding an overly optimistic view of human nature or progress."
    ],
    thinkers: "Erasmus, Martha Nussbaum, bell hooks",
    readings: ["In Praise of Folly", "Cultivating Humanity", "Teaching to Transgress"]
  },
  romantic: {
    title: "Romantic",
    family: "Modern life",
    summary: "Feeling, beauty, imagination, and intensity reveal what matters.",
    description: [
      "Your answers place you closest to Romanticism. You trust feeling, imagination, beauty, nature, intensity, and individuality as ways of encountering truth. You are suspicious of worldviews that flatten life into calculation or merely practical success.",
      "At your best, you are vivid, creative, and alive to experiences others dismiss as impractical. Your challenge is making sure intensity does not become self-absorption."
    ],
    thinkers: "Jean-Jacques Rousseau, Mary Wollstonecraft, Friedrich Schiller",
    readings: ["Reveries of the Solitary Walker", "Letters on the Aesthetic Education of Man", "A Vindication of the Rights of Woman"]
  },
  liberal_contractarian: {
    title: "Liberal / Social Contract Thinker",
    family: "Political philosophy",
    summary: "Freedom, rights, fairness, consent, and institutions make pluralism possible.",
    description: [
      "Your answers place you closest to liberal or social-contract philosophy. You care about rights, consent, fairness, individual liberty, constitutional limits, and institutions that allow different people to live together without domination.",
      "At your best, you are principled about freedom and pluralism. Your challenge is seeing when formal rights are not enough to overcome material inequality or social exclusion."
    ],
    thinkers: "John Locke, John Rawls, Judith Shklar",
    readings: ["Second Treatise of Government", "A Theory of Justice", "Liberalism of Fear"]
  },
  marxist_critical: {
    title: "Marxist / Critical Theorist",
    family: "Political philosophy",
    summary: "Ideas, morals, and institutions must be read through power and material life.",
    description: [
      "Your answers place you closest to Marxist or critical theory. You look for the material conditions, class relations, ideology, labor, and power structures beneath ordinary moral language. You ask who benefits from the way things are arranged.",
      "At your best, you expose hidden domination and insist that freedom must be social, not merely private. Your challenge is preserving individual complexity when analyzing systems."
    ],
    thinkers: "Karl Marx, W. E. B. Du Bois, Theodor Adorno, Angela Davis",
    readings: ["Economic and Philosophic Manuscripts", "The Souls of Black Folk", "Dialectic of Enlightenment"]
  }
};

const TYPE_ORDER = Object.keys(TYPES);
const TYPE_DETAILS = {
  existentialist: {
    notes: [
      "Your result points toward freedom as a burden as well as a gift: you want a life that can be owned from the inside.",
      "You are likely impatient with roles, identities, and explanations that let people avoid responsibility.",
      "A good next question for you is what commitments are worth choosing even when certainty is unavailable."
    ],
    readings: [
      { title: "Existentialism Is a Humanism", author: "Jean-Paul Sartre", note: "A concise defense of freedom, responsibility, and self-making." },
      { title: "The Ethics of Ambiguity", author: "Simone de Beauvoir", note: "Connects existential freedom to ethics and other people." },
      { title: "Fear and Trembling", author: "Soren Kierkegaard", note: "A demanding entry point into choice, faith, anxiety, and inwardness." }
    ]
  },
  absurdist: {
    notes: [
      "Your result suggests that you notice the gap between human longing and an uncooperative universe.",
      "You are not necessarily pessimistic; you may simply dislike dishonest consolation.",
      "Your central task is to live vividly without needing the world to become finally explainable."
    ],
    readings: [
      { title: "The Myth of Sisyphus", author: "Albert Camus", note: "The classic statement of absurd lucidity and revolt." },
      { title: "The Rebel", author: "Albert Camus", note: "Develops absurdism into an ethics of resistance." },
      { title: "The Trial", author: "Franz Kafka", note: "Fiction that captures absurdity as atmosphere rather than argument." }
    ]
  },
  nihilist: {
    notes: [
      "Your result points toward a severe suspicion of inherited value systems and comforting explanations.",
      "You may be less interested in despair than in intellectual honesty: what remains after false meanings are stripped away?",
      "The challenge is to decide whether clarity should end in refusal, reconstruction, or a more disciplined silence."
    ],
    readings: [
      { title: "The Gay Science", author: "Friedrich Nietzsche", note: "A major source for modern questions about value after certainty." },
      { title: "The Trouble with Being Born", author: "Emil Cioran", note: "A sharp, aphoristic exploration of negation and disillusionment." },
      { title: "The Ego and Its Own", author: "Max Stirner", note: "A radical attack on fixed ideals and inherited abstractions." }
    ]
  },
  stoic: {
    notes: [
      "Your result suggests that you value inner discipline more than favorable circumstances.",
      "You likely distinguish sharply between what belongs to you, such as judgment and conduct, and what does not.",
      "The fruitful tension for you is staying steady without becoming sealed off from tenderness."
    ],
    readings: [
      { title: "Enchiridion", author: "Epictetus", note: "The most compact handbook of Stoic practice." },
      { title: "Meditations", author: "Marcus Aurelius", note: "Private reflections on discipline, duty, mortality, and perspective." },
      { title: "Letters from a Stoic", author: "Seneca", note: "Readable essays on fear, anger, wealth, grief, and character." }
    ]
  },
  epicurean: {
    notes: [
      "Your result suggests that you are drawn to a quieter account of happiness than ambition usually offers.",
      "You likely see friendship, moderation, and freedom from needless fear as major philosophical achievements.",
      "Your challenge is to protect peace without shrinking away from obligations that deserve attention."
    ],
    readings: [
      { title: "Letter to Menoeceus", author: "Epicurus", note: "A short statement of pleasure, fear, death, and the good life." },
      { title: "On the Nature of Things", author: "Lucretius", note: "A poetic Epicurean vision of nature and freedom from superstition." },
      { title: "Principal Doctrines", author: "Epicurus", note: "Brief maxims that show the architecture of Epicurean ethics." }
    ]
  },
  cynic: {
    notes: [
      "Your result points toward anti-pretension: you want to know what is real when status and performance are removed.",
      "You may have a low tolerance for polite hypocrisy, luxury, and social theater.",
      "The edge to watch is whether contempt for convention starts hardening into contempt for people."
    ],
    readings: [
      { title: "Sayings and Anecdotes of Diogenes", author: "Diogenes tradition", note: "The clearest entry into Cynic bluntness and simplicity." },
      { title: "Lives of Eminent Philosophers, Book VI", author: "Diogenes Laertius", note: "Ancient reports on Diogenes and the Cynic lineage." },
      { title: "The Cynic Philosophers", author: "Translated by Robert Dobbin", note: "A convenient modern collection of Cynic fragments." }
    ]
  },
  aristotelian: {
    notes: [
      "Your result suggests that you think ethics is not just decision-making; it is character formation over time.",
      "You likely care about habit, friendship, judgment, and the concrete texture of a flourishing life.",
      "Your challenge is to keep character-talk attentive to luck, institutions, and unequal starting points."
    ],
    readings: [
      { title: "Nicomachean Ethics", author: "Aristotle", note: "The central text for virtue, flourishing, habit, and practical wisdom." },
      { title: "After Virtue", author: "Alasdair MacIntyre", note: "A modern revival of virtue ethics and tradition-shaped moral life." },
      { title: "Natural Goodness", author: "Philippa Foot", note: "A compact contemporary defense of virtue and human good." }
    ]
  },
  kantian: {
    notes: [
      "Your result points toward moral seriousness about dignity, consistency, and what can be justified to others.",
      "You likely resist treating people as instruments, even for appealing outcomes.",
      "The pressure point is how to handle messy cases where duties conflict and no rule feels complete."
    ],
    readings: [
      { title: "Groundwork of the Metaphysics of Morals", author: "Immanuel Kant", note: "The classic source for dignity, duty, and universal law." },
      { title: "Creating the Kingdom of Ends", author: "Christine Korsgaard", note: "A clear contemporary development of Kantian moral agency." },
      { title: "Constructions of Reason", author: "Onora O'Neill", note: "Shows Kantian ethics applied to trust, obligation, and public reason." }
    ]
  },
  utilitarian: {
    notes: [
      "Your result suggests that intentions and principles are not enough if the consequences leave people worse off.",
      "You likely think moral seriousness requires scale: suffering counts wherever it occurs.",
      "Your challenge is to keep individual dignity visible when reasoning in aggregate."
    ],
    readings: [
      { title: "Utilitarianism", author: "John Stuart Mill", note: "The standard introduction to happiness, consequences, and moral calculation." },
      { title: "An Introduction to the Principles of Morals and Legislation", author: "Jeremy Bentham", note: "The founding utilitarian framework in systematic form." },
      { title: "Practical Ethics", author: "Peter Singer", note: "A contemporary application of consequentialist reasoning to hard cases." }
    ]
  },
  care_ethicist: {
    notes: [
      "Your result points toward the moral weight of dependency, attention, and concrete responsibility.",
      "You likely distrust ethical systems that become elegant while overlooking the vulnerable person nearby.",
      "Your challenge is to care deeply without making yourself disappear."
    ],
    readings: [
      { title: "In a Different Voice", author: "Carol Gilligan", note: "The foundational modern text for care as a moral voice." },
      { title: "Caring", author: "Nel Noddings", note: "Develops care as a relational ethical practice." },
      { title: "Love's Labor", author: "Eva Feder Kittay", note: "Connects care, dependency, disability, and justice." }
    ]
  },
  pragmatist: {
    notes: [
      "Your result suggests that you trust lived testing more than abstract purity.",
      "You likely ask what an idea does, how it changes conduct, and whether it can be revised when reality pushes back.",
      "Your challenge is to keep practical success from becoming mere convenience."
    ],
    readings: [
      { title: "Pragmatism", author: "William James", note: "The most approachable classic statement of pragmatist temperament." },
      { title: "Experience and Education", author: "John Dewey", note: "A short example of pragmatist thinking in practice." },
      { title: "The Fixation of Belief", author: "Charles Sanders Peirce", note: "A foundational essay on inquiry, doubt, and belief." }
    ]
  },
  skeptic: {
    notes: [
      "Your result points toward disciplined doubt: you resist confidence that outruns evidence.",
      "You likely see uncertainty not as failure, but as an honest intellectual posture.",
      "The risk is letting doubt become a place to hide when action is required."
    ],
    readings: [
      { title: "Outlines of Pyrrhonism", author: "Sextus Empiricus", note: "The classic ancient source for skeptical suspension of judgment." },
      { title: "An Enquiry Concerning Human Understanding", author: "David Hume", note: "A readable modern skeptical challenge to causation and certainty." },
      { title: "Dialogues Concerning Natural Religion", author: "David Hume", note: "A skeptical examination of religious and metaphysical arguments." }
    ]
  },
  empiricist: {
    notes: [
      "Your result suggests that reality should discipline our claims through observation, evidence, and revision.",
      "You likely prefer accountable explanations to beautiful speculation.",
      "Your challenge is leaving room for value and meaning without reducing them to what is easiest to measure."
    ],
    readings: [
      { title: "An Essay Concerning Human Understanding", author: "John Locke", note: "A foundational empiricist account of knowledge and experience." },
      { title: "A Treatise of Human Nature", author: "David Hume", note: "A major attempt to treat human nature experimentally." },
      { title: "Epistemology Naturalized", author: "W. V. O. Quine", note: "A modern bridge between philosophy, science, and naturalism." }
    ]
  },
  platonist: {
    notes: [
      "Your result points toward ideals, forms, and realities deeper than immediate appearance.",
      "You likely resist reducing truth, beauty, and goodness to appetite, utility, or convention.",
      "The challenge is to let ideals illuminate ordinary life rather than make ordinary life seem merely second-rate."
    ],
    readings: [
      { title: "Republic", author: "Plato", note: "The central text for forms, justice, education, and the good." },
      { title: "Symposium", author: "Plato", note: "A more literary ascent from desire to beauty itself." },
      { title: "The Phenomenology of Spirit", author: "G. W. F. Hegel", note: "A demanding modern idealist account of consciousness and history." }
    ]
  },
  daoist: {
    notes: [
      "Your result suggests that wisdom often lies in moving with patterns rather than dominating them.",
      "You likely distrust over-control, over-naming, and the human habit of making life heavier than necessary.",
      "Your challenge is knowing when non-forcing should give way to direct action."
    ],
    readings: [
      { title: "Dao De Jing", author: "Laozi", note: "The classic text of non-forcing, simplicity, and the Dao." },
      { title: "Zhuangzi", author: "Zhuang Zhou", note: "Playful stories on spontaneity, perspective, and freedom." },
      { title: "Liezi", author: "Liezi tradition", note: "A later Daoist collection on ease, fate, and naturalness." }
    ]
  },
  buddhist: {
    notes: [
      "Your result points toward suffering, impermanence, attachment, and compassion as central philosophical facts.",
      "You likely sense that ego and craving make life more painful than it needs to be.",
      "Your challenge is ensuring detachment remains warm, engaged, and compassionate."
    ],
    readings: [
      { title: "The Dhammapada", author: "Attributed to the Buddha", note: "Accessible verses on suffering, conduct, attention, and liberation." },
      { title: "The Heart Sutra", author: "Mahayana Buddhist text", note: "A brief, profound text on emptiness and wisdom." },
      { title: "The Way of the Bodhisattva", author: "Shantideva", note: "A major text on compassion, discipline, and awakening for others." }
    ]
  },
  confucian: {
    notes: [
      "Your result suggests that persons are formed through relationships, rituals, roles, and examples.",
      "You likely take responsibility, trustworthiness, and humane conduct more seriously than pure individual self-expression.",
      "Your challenge is protecting moral dissent when harmony becomes pressure."
    ],
    readings: [
      { title: "Analects", author: "Confucius and disciples", note: "The central source for ritual, humanity, learning, and exemplary conduct." },
      { title: "Mencius", author: "Mencius", note: "A more optimistic Confucian account of human nature and moral cultivation." },
      { title: "Xunzi", author: "Xunzi", note: "A sharper account of ritual, discipline, and social formation." }
    ]
  },
  vedantic: {
    notes: [
      "Your result points toward self, consciousness, duty, and liberation as connected questions.",
      "You likely suspect that ordinary identity does not exhaust what the self finally is.",
      "Your challenge is bringing metaphysical insight back into ordinary obligations."
    ],
    readings: [
      { title: "Bhagavad Gita", author: "Hindu scripture", note: "A central text on action, duty, devotion, knowledge, and liberation." },
      { title: "Upanishads", author: "Hindu philosophical scriptures", note: "Foundational texts on self, ultimate reality, and consciousness." },
      { title: "Brahma Sutra", author: "Badarayana", note: "A systematic source for Vedantic interpretation." }
    ]
  },
  christian_personalist: {
    notes: [
      "Your result suggests that persons have sacred dignity because they are loved, created, and called.",
      "You likely connect moral life with mercy, neighbor-love, sin, redemption, and responsibility before God.",
      "Your challenge is keeping faith from hardening into moralism or institutional defensiveness."
    ],
    readings: [
      { title: "Confessions", author: "Augustine", note: "A classic interior account of desire, grace, memory, and conversion." },
      { title: "Summa Theologiae selections", author: "Thomas Aquinas", note: "A structured account of virtue, law, God, and moral life." },
      { title: "The Long Loneliness", author: "Dorothy Day", note: "A modern witness to Christian personalism, solidarity, and mercy." }
    ]
  },
  jewish_covenantal: {
    notes: [
      "Your result points toward covenant, law, memory, argument, and repair as ways meaning is lived.",
      "You likely see truth as something interpreted and practiced within a living community, not merely privately contemplated.",
      "Your challenge is balancing inherited obligation with personal conscience and pluralism."
    ],
    readings: [
      { title: "Guide for the Perplexed", author: "Maimonides", note: "A major Jewish philosophical attempt to hold reason and revelation together." },
      { title: "I and Thou", author: "Martin Buber", note: "A short modern text on relation, presence, and encounter." },
      { title: "Difficult Freedom", author: "Emmanuel Levinas", note: "Essays on ethics, Judaism, responsibility, and the other person." }
    ]
  },
  islamic_falsafa: {
    notes: [
      "Your result suggests that reason, revelation, law, virtue, and divine unity belong in one moral cosmos.",
      "You likely see knowledge as something that should orient the whole person toward truth and justice.",
      "Your challenge is holding interpretive humility alongside conviction."
    ],
    readings: [
      { title: "The Decisive Treatise", author: "Ibn Rushd", note: "A classic argument about philosophy, reason, and revealed law." },
      { title: "The Incoherence of the Philosophers", author: "Al-Ghazali", note: "A major critique of philosophical overreach from within Islamic thought." },
      { title: "The Book of Healing selections", author: "Avicenna", note: "A landmark work of metaphysics, psychology, and philosophical theology." }
    ]
  },
  mystical: {
    notes: [
      "Your result points toward silence, transformation, and direct encounter with what exceeds ordinary language.",
      "You likely distrust both flat rationalism and merely inherited formulas when they do not change the person.",
      "Your challenge is keeping inward depth accountable to ethical clarity and shared life."
    ],
    readings: [
      { title: "The Essential Rumi", author: "Rumi", note: "Poetry of longing, union, love, and spiritual transformation." },
      { title: "Interior Castle", author: "Teresa of Avila", note: "A classic map of contemplative inwardness." },
      { title: "Gravity and Grace", author: "Simone Weil", note: "Fragments on attention, affliction, grace, and self-emptying." }
    ]
  },
  humanist: {
    notes: [
      "Your result suggests that dignity, education, creativity, and moral growth are central to your worldview.",
      "You likely believe people can reason, care, build, and improve conditions without grounding every answer in divine command or metaphysical certainty.",
      "Your challenge is avoiding an overly easy optimism about human nature or progress."
    ],
    readings: [
      { title: "In Praise of Folly", author: "Erasmus", note: "A witty Renaissance humanist critique of pretension and dogma." },
      { title: "Cultivating Humanity", author: "Martha Nussbaum", note: "A defense of liberal education, dignity, and global citizenship." },
      { title: "Teaching to Transgress", author: "bell hooks", note: "A humanistic vision of education as freedom and transformation." }
    ]
  },
  romantic: {
    notes: [
      "Your result points toward feeling, imagination, beauty, nature, and intensity as ways of knowing.",
      "You likely resist worldviews that flatten life into calculation, bureaucracy, or mere usefulness.",
      "Your challenge is giving intensity discipline and care, so it does not become self-absorption."
    ],
    readings: [
      { title: "Reveries of the Solitary Walker", author: "Jean-Jacques Rousseau", note: "A reflective source for inwardness, nature, and feeling." },
      { title: "Letters on the Aesthetic Education of Man", author: "Friedrich Schiller", note: "A major Romantic-era argument for beauty and freedom." },
      { title: "A Vindication of the Rights of Woman", author: "Mary Wollstonecraft", note: "A passionate Enlightenment/Romantic bridge on dignity and education." }
    ]
  },
  liberal_contractarian: {
    notes: [
      "Your result suggests that freedom needs rights, fairness, consent, and durable institutions.",
      "You likely care about protecting free and pluralistic life without allowing one group to dominate the rest.",
      "Your challenge is seeing when formal equality is not enough to repair material or social exclusion."
    ],
    readings: [
      { title: "Second Treatise of Government", author: "John Locke", note: "A classic source for rights, consent, and legitimate government." },
      { title: "A Theory of Justice", author: "John Rawls", note: "The central modern text on fairness, institutions, and political liberalism." },
      { title: "Liberalism of Fear", author: "Judith Shklar", note: "A concise liberal argument centered on cruelty and domination." }
    ]
  },
  marxist_critical: {
    notes: [
      "Your result points toward power, labor, ideology, and material conditions beneath official moral language.",
      "You likely ask who benefits from the way things are arranged and whose suffering is made to look natural.",
      "Your challenge is preserving individual complexity while analyzing systems."
    ],
    readings: [
      { title: "Economic and Philosophic Manuscripts", author: "Karl Marx", note: "A readable early Marx text on alienation, labor, and human life." },
      { title: "The Souls of Black Folk", author: "W. E. B. Du Bois", note: "A foundational work on race, history, social structure, and consciousness." },
      { title: "Dialectic of Enlightenment", author: "Theodor Adorno and Max Horkheimer", note: "A difficult but influential critique of reason, culture, and domination." }
    ]
  }
};
const MIN_QUESTIONS = 9;
const MAX_QUESTIONS = 16;
const CONFIDENCE_GAP = 8;
const QUESTION_SEEDS = ["meaning", "good-life", "knowledge", "suffering", "transcendence"];

const QUESTIONS = [
  {
    id: "meaning",
    title: "When life asks for meaning, you are most drawn to...",
    copy: "Choose the answer that feels most like your default orientation.",
    mode: "single",
    answers: [
      { text: "Choosing a life I can honestly claim as mine.", weights: { existentialist: 3, humanist: 1 } },
      { text: "Facing the silence of the universe without false comfort.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "Discovering a deeper order beneath appearances.", weights: { platonist: 3, vedantic: 1, mystical: 1 } },
      { text: "Living faithfully within a sacred call or covenant.", weights: { christian_personalist: 2, jewish_covenantal: 2, islamic_falsafa: 2 } },
      { text: "Reducing suffering and improving actual lives.", weights: { utilitarian: 2, care_ethicist: 2, humanist: 1 } },
      { text: "Letting meaning be lighter, quieter, and less forced.", weights: { daoist: 3, epicurean: 1, buddhist: 1 } }
    ]
  },
  {
    id: "good-life",
    title: "A good life is closest to...",
    copy: "Pick the formulation that feels least artificial.",
    mode: "single",
    answers: [
      { text: "Cultivated excellence of character, judgment, and friendship.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Simple pleasure, peace of mind, and trusted companions.", weights: { epicurean: 3, daoist: 1 } },
      { text: "Responsibility, ritual, relationship, and humane conduct.", weights: { confucian: 3, care_ethicist: 1, jewish_covenantal: 1 } },
      { text: "Human dignity, education, creativity, and moral growth.", weights: { humanist: 3, liberal_contractarian: 2 } },
      { text: "Liberation from attachment, illusion, or spiritual ignorance.", weights: { buddhist: 2, vedantic: 2, mystical: 1 } },
      { text: "Refusing vanity, luxury, status, and social theater.", weights: { cynic: 3, nihilist: 1 } }
    ]
  },
  {
    id: "knowledge",
    title: "When someone makes a big claim, you first want...",
    copy: "What kind of support carries the most weight?",
    mode: "single",
    answers: [
      { text: "Evidence that can be observed, tested, or corrected.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "A clear argument that survives careful questioning.", weights: { skeptic: 2, kantian: 3, islamic_falsafa: 1 } },
      { text: "Proof that the idea works when people live by it.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "A view of the deeper pattern beneath the surface.", weights: { platonist: 3, vedantic: 1 } },
      { text: "Wisdom tested by tradition, commentary, and practice.", weights: { confucian: 2, jewish_covenantal: 2, christian_personalist: 1 } },
      { text: "Enough humility to admit that certainty may be beyond us.", weights: { skeptic: 2, buddhist: 1, absurdist: 1 } }
    ]
  },
  {
    id: "suffering",
    title: "Suffering enters the picture.",
    copy: "Which response feels wisest?",
    mode: "single",
    answers: [
      { text: "Strengthen the part of myself that can meet it honorably.", weights: { stoic: 2, kantian: 2, aristotelian: 1 } },
      { text: "Understand the craving, attachment, or illusion that intensifies it.", weights: { buddhist: 3, vedantic: 1 } },
      { text: "Organize action around reducing it for as many people as possible.", weights: { utilitarian: 3, marxist_critical: 1 } },
      { text: "Stay close to the vulnerable person in front of me.", weights: { care_ethicist: 3, christian_personalist: 1 } },
      { text: "Refuse false comfort and face the strangeness directly.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "Find mercy, repair, or redemption inside the wound.", weights: { christian_personalist: 2, jewish_covenantal: 1, mystical: 1 } }
    ]
  },
  {
    id: "transcendence",
    title: "The possibility of transcendence feels...",
    copy: "This does not ask what you officially believe, only what you are drawn toward.",
    mode: "single",
    answers: [
      { text: "Central: reality is finally grounded in the divine.", weights: { christian_personalist: 3, islamic_falsafa: 2, jewish_covenantal: 1 } },
      { text: "Real, but better approached through silence and transformation than doctrine.", weights: { mystical: 3, vedantic: 1, buddhist: 1 } },
      { text: "A question of ultimate consciousness or liberation.", weights: { vedantic: 4, mystical: 1 } },
      { text: "A noble possibility, but one that reason must examine carefully.", weights: { platonist: 2, islamic_falsafa: 1, skeptic: 1 } },
      { text: "Unnecessary: the natural world is enough to investigate.", weights: { empiricist: 3, humanist: 1 } },
      { text: "Suspicious: transcendence can become a way to escape emptiness.", weights: { nihilist: 3, cynic: 1, absurdist: 1 } }
    ]
  },
  {
    id: "ethics-priority",
    title: "In a moral dilemma, what matters first?",
    copy: "If more than one matters strongly, choose up to two.",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "Respecting every person as an end, never merely a tool.", weights: { kantian: 3, liberal_contractarian: 2 } },
      { text: "Producing the best consequences overall.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Becoming the kind of person who can judge well.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Responding faithfully to concrete need and dependency.", weights: { care_ethicist: 3, confucian: 1 } },
      { text: "Acting from mercy, justice, and sacred obligation.", weights: { christian_personalist: 1, jewish_covenantal: 2, islamic_falsafa: 2 } },
      { text: "Refusing hypocrisy, status, and conventional excuses.", weights: { cynic: 3, existentialist: 1 } }
    ]
  },
  {
    id: "society",
    title: "When society is failing, your instinct is to ask...",
    copy: "Which diagnosis do you reach for first?",
    mode: "single",
    answers: [
      { text: "Which institutions no longer protect rights, fairness, and pluralism?", weights: { liberal_contractarian: 3, kantian: 2 } },
      { text: "Who benefits from the material arrangement of power?", weights: { marxist_critical: 3, cynic: 1 } },
      { text: "Which relationships, roles, and shared practices have broken down?", weights: { confucian: 3, aristotelian: 1 } },
      { text: "Whose dignity and development are being blocked?", weights: { humanist: 3, care_ethicist: 1 } },
      { text: "Which policy would produce the best concrete outcomes?", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Where has justice, covenant, or divine command been betrayed?", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "religion-posture",
    title: "Religious tradition, at its best, is...",
    copy: "Choose the version you find most compelling, even if you are not religious.",
    mode: "single",
    answers: [
      { text: "A disciplined response to divine love, grace, and neighbor.", weights: { christian_personalist: 3, care_ethicist: 1 } },
      { text: "A covenantal practice of law, memory, argument, and repair.", weights: { jewish_covenantal: 3, confucian: 1 } },
      { text: "A complete orientation of reason, devotion, law, and justice.", weights: { islamic_falsafa: 3, kantian: 1 } },
      { text: "A path toward liberation through insight into self and ultimate reality.", weights: { vedantic: 3, mystical: 1 } },
      { text: "A contemplative path beyond ordinary language and ego.", weights: { mystical: 3, buddhist: 1 } },
      { text: "Even at its best, a human practice that deserves historical and social critique.", weights: { skeptic: 2, nihilist: 2, marxist_critical: 1 } }
    ]
  },
  {
    id: "self",
    title: "The self is best understood as...",
    copy: "Choose the account that feels most plausible.",
    mode: "single",
    answers: [
      { text: "A project shaped by choices, commitments, and responsibility.", weights: { existentialist: 3, humanist: 1 } },
      { text: "Less fixed than we think, and a source of suffering when clung to.", weights: { buddhist: 3, daoist: 1 } },
      { text: "A bearer of sacred dignity and vocation.", weights: { christian_personalist: 2, islamic_falsafa: 1, jewish_covenantal: 1 } },
      { text: "A natural phenomenon to be studied without metaphysical inflation.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "A role-bearing person formed through relationships.", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "Often a useful story with no ultimate foundation.", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "power",
    title: "Power and institutions should be met with...",
    copy: "Choose your first posture.",
    mode: "single",
    answers: [
      { text: "Rights, limits, consent, and public justification.", weights: { liberal_contractarian: 3, kantian: 2 } },
      { text: "A material analysis of labor, ideology, and domination.", weights: { marxist_critical: 3, nihilist: 1 } },
      { text: "Doubt until their claims survive scrutiny.", weights: { skeptic: 3, pragmatist: 1 } },
      { text: "A demand that they serve concrete human flourishing.", weights: { humanist: 2, utilitarian: 1, care_ethicist: 1 } },
      { text: "Skeptical attention: power usually flatters itself.", weights: { cynic: 3, absurdist: 1 } },
      { text: "A question of justice before God, law, or sacred order.", weights: { islamic_falsafa: 2, jewish_covenantal: 1, christian_personalist: 1 } }
    ]
  },
  {
    id: "uncertainty",
    title: "When you are not sure what is true, you...",
    copy: "Pick the habit that sounds most like you.",
    mode: "single",
    answers: [
      { text: "Suspend judgment until the claim earns more confidence.", weights: { skeptic: 3, empiricist: 1 } },
      { text: "Try something modest and see what reality teaches.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Focus on acting well even without perfect knowledge.", weights: { stoic: 3, kantian: 1 } },
      { text: "Loosen the need to possess an answer.", weights: { buddhist: 2, daoist: 2 } },
      { text: "Accept the tension and keep living without pretending it disappears.", weights: { absurdist: 3, existentialist: 1 } },
      { text: "Trust a tested tradition while continuing to interpret it.", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "beauty",
    title: "Beauty matters because...",
    copy: "Choose the answer that feels least optional.",
    mode: "single",
    answers: [
      { text: "It lets feeling, imagination, and intensity speak truth.", weights: { romantic: 4, existentialist: 1 } },
      { text: "It gestures toward ideals beyond ordinary surfaces.", weights: { platonist: 3, mystical: 1 } },
      { text: "It enlarges human sympathy and possibility.", weights: { humanist: 2, care_ethicist: 1, confucian: 1 } },
      { text: "It can make the absurd bearable without explaining it away.", weights: { absurdist: 3, nihilist: 1 } },
      { text: "It can be one of life's simple restorative pleasures.", weights: { epicurean: 3, daoist: 1 } },
      { text: "It is part of human nature and can be studied without mystification.", weights: { empiricist: 3, skeptic: 1 } }
    ]
  },
  {
    id: "tradition",
    title: "Tradition should be treated as...",
    copy: "Choose your default posture.",
    mode: "single",
    answers: [
      { text: "A living inheritance that trains responsibility and respect.", weights: { confucian: 3, jewish_covenantal: 1 } },
      { text: "A performance that can hide power, fear, or laziness.", weights: { cynic: 3, marxist_critical: 1 } },
      { text: "A set of practices worth keeping only where they still work.", weights: { pragmatist: 3, skeptic: 1 } },
      { text: "A source of character formation, but not immune from judgment.", weights: { aristotelian: 3, kantian: 1 } },
      { text: "A sacred inheritance that calls for faithful interpretation.", weights: { christian_personalist: 2, jewish_covenantal: 2, islamic_falsafa: 1 } },
      { text: "Material I may inherit, revise, or reject in choosing myself.", weights: { existentialist: 3, romantic: 1 } }
    ]
  },
  {
    id: "rules",
    title: "Rules are valuable when...",
    copy: "What makes a rule legitimate?",
    mode: "single",
    answers: [
      { text: "They express duties that respect every person's dignity.", weights: { kantian: 3, liberal_contractarian: 2 } },
      { text: "They reliably improve consequences and reduce harm.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "They train character without replacing judgment.", weights: { aristotelian: 3, confucian: 1 } },
      { text: "They protect vulnerable relationships and concrete needs.", weights: { care_ethicist: 3, humanist: 1 } },
      { text: "They are rooted in divine order, covenant, or sacred law.", weights: { islamic_falsafa: 2, jewish_covenantal: 2, christian_personalist: 1 } },
      { text: "They are light enough not to fight the shape of life.", weights: { daoist: 3, epicurean: 1 } }
    ]
  },
  {
    id: "ambition",
    title: "Ambition is...",
    copy: "What is your most honest reaction?",
    mode: "single",
    answers: [
      { text: "Often another name for vanity unless disciplined.", weights: { cynic: 2, stoic: 2 } },
      { text: "Good when it develops excellence and practical wisdom.", weights: { aristotelian: 3, humanist: 1 } },
      { text: "Worthwhile when it enlarges freedom or flourishing.", weights: { humanist: 2, liberal_contractarian: 1, utilitarian: 1 } },
      { text: "A fire that can make life vivid, risky, and real.", weights: { romantic: 3, existentialist: 1 } },
      { text: "A desire that should be limited before it steals peace.", weights: { epicurean: 3, buddhist: 1 } },
      { text: "A story people use to make competition feel meaningful.", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "community",
    title: "Individual freedom and community pull against each other.",
    copy: "Where do you lean?",
    mode: "single",
    answers: [
      { text: "A person becomes whole through obligations and relationships.", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "No community has the right to choose my life for me.", weights: { existentialist: 2, liberal_contractarian: 2 } },
      { text: "Freedom matters because human beings need room to grow.", weights: { humanist: 3, kantian: 1 } },
      { text: "Communities should be judged by how they distribute power and labor.", weights: { marxist_critical: 3, utilitarian: 1 } },
      { text: "Both self and community should be held lightly, with compassion.", weights: { buddhist: 2, daoist: 1, confucian: 1 } },
      { text: "The community is bound by covenant, neighbor-love, or sacred justice.", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "universe",
    title: "The universe, at bottom, seems...",
    copy: "Choose the description closest to your metaphysical weather.",
    mode: "single",
    answers: [
      { text: "Natural, observable, and not obligated to match our wishes.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Structured by realities or ideals deeper than appearances.", weights: { platonist: 3, vedantic: 1 } },
      { text: "Silent about human value, whatever stories we tell.", weights: { nihilist: 3, absurdist: 1 } },
      { text: "Created, sustained, and morally charged.", weights: { christian_personalist: 2, islamic_falsafa: 2, jewish_covenantal: 1 } },
      { text: "A pattern to harmonize with more than a puzzle to conquer.", weights: { daoist: 3, buddhist: 1 } },
      { text: "Mystery encountered more truly in transformation than explanation.", weights: { mystical: 3, romantic: 1 } }
    ]
  },
  {
    id: "crisis",
    title: "In a crisis, you become most useful by...",
    copy: "What role would you naturally take?",
    mode: "single",
    answers: [
      { text: "Staying composed and focusing on the next right action.", weights: { stoic: 3, kantian: 1 } },
      { text: "Triaging needs so the greatest harm is prevented.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Adapting quickly as new information appears.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Holding the group together through responsibility and trust.", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "Reducing panic by seeing fear clearly and compassionately.", weights: { buddhist: 3, stoic: 1 } },
      { text: "Finding the human pulse when procedures become mechanical.", weights: { romantic: 2, humanist: 1, christian_personalist: 1 } }
    ]
  },
  {
    id: "education",
    title: "Education should primarily...",
    copy: "What should learning form in people?",
    mode: "single",
    answers: [
      { text: "Expand dignity, freedom, sympathy, and human possibility.", weights: { humanist: 3, liberal_contractarian: 2 } },
      { text: "Turn the soul toward truth, beauty, and higher ideals.", weights: { platonist: 3, mystical: 1 } },
      { text: "Teach people how to investigate reality carefully.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Build character, judgment, and habits of excellence.", weights: { aristotelian: 3, stoic: 1 } },
      { text: "Prepare people to solve problems in changing conditions.", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "Hand down wisdom, law, memory, and disciplined interpretation.", weights: { jewish_covenantal: 2, islamic_falsafa: 1, confucian: 1 } }
    ]
  },
  {
    id: "time",
    title: "Time and impermanence make you think...",
    copy: "Which thought feels most familiar?",
    mode: "single",
    answers: [
      { text: "Clinging is the problem; compassion is still possible.", weights: { buddhist: 3, daoist: 1 } },
      { text: "Change is not mine to command, but my response is.", weights: { stoic: 3, existentialist: 1 } },
      { text: "The passing moment is exactly why beauty matters.", weights: { romantic: 4, epicurean: 1 } },
      { text: "Enjoy ordinary goods before anxiety steals them.", weights: { epicurean: 3, buddhist: 1 } },
      { text: "Memory and ritual keep communities morally awake.", weights: { jewish_covenantal: 2, confucian: 2 } },
      { text: "I must choose before the chance to choose disappears.", weights: { existentialist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "care",
    title: "When someone depends on you, the central fact is...",
    copy: "Choose the statement that feels most morally real.",
    mode: "single",
    answers: [
      { text: "Their concrete need creates a responsibility no theory should erase.", weights: { care_ethicist: 3, humanist: 1 } },
      { text: "They must still be respected as a person, not managed as a case.", weights: { kantian: 3, christian_personalist: 1, liberal_contractarian: 1 } },
      { text: "The relationship itself has formed duties over time.", weights: { confucian: 2, jewish_covenantal: 1, aristotelian: 1 } },
      { text: "Compassion should loosen the ego that wants credit or control.", weights: { buddhist: 2, mystical: 1, daoist: 1 } },
      { text: "The right response is the one that most reduces suffering.", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "Need reveals the failures of systems, not just individuals.", weights: { marxist_critical: 3, care_ethicist: 1 } }
    ]
  },
  {
    id: "select-attractions",
    title: "Which impulses do you recognize in yourself?",
    copy: "Select up to two.",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "To simplify life until very little can own me.", weights: { cynic: 2, epicurean: 1, daoist: 1 } },
      { text: "To build fair institutions for people who disagree.", weights: { liberal_contractarian: 3, kantian: 1 } },
      { text: "To unmask ideology, class, domination, or hidden power.", weights: { marxist_critical: 3, nihilist: 1 } },
      { text: "To pray, contemplate, or listen beyond ordinary language.", weights: { mystical: 3, christian_personalist: 1, vedantic: 1 } },
      { text: "To test ideas in life rather than merely admire them.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "To make experience vivid, beautiful, and intensely personal.", weights: { romantic: 3, existentialist: 1 } }
    ]
  },
  {
    id: "discomforts",
    title: "What unsettles you most?",
    copy: "Select up to two if two feel equally important.",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "That values may have no foundation beyond human projection.", weights: { nihilist: 3, skeptic: 1 } },
      { text: "That our need for meaning may outrun what reality provides.", weights: { absurdist: 3, existentialist: 1 } },
      { text: "That I might live by excuses instead of choosing honestly.", weights: { existentialist: 3, kantian: 1 } },
      { text: "That craving could make me miss the life I am actually living.", weights: { buddhist: 3, epicurean: 1 } },
      { text: "That society treats domination as normal or natural.", weights: { marxist_critical: 3, liberal_contractarian: 1 } },
      { text: "That faith or tradition could become empty performance.", weights: { christian_personalist: 1, jewish_covenantal: 1, islamic_falsafa: 1, cynic: 1 } }
    ]
  },
  {
    id: "free-day",
    title: "Your ideal free day includes...",
    copy: "Pick the scene that sounds most restorative.",
    mode: "single",
    answers: [
      { text: "A long meal, easy conversation, and no anxious striving.", weights: { epicurean: 3, confucian: 1 } },
      { text: "A walk, music, weather, and the feeling of being intensely alive.", weights: { romantic: 3, daoist: 1 } },
      { text: "A museum, lab, archive, or field notebook full of observations.", weights: { empiricist: 3, skeptic: 1 } },
      { text: "Quiet movement with the day as it unfolds.", weights: { daoist: 3, buddhist: 1 } },
      { text: "A meaningful ritual or gathering with people I owe care to.", weights: { confucian: 2, jewish_covenantal: 1, care_ethicist: 1 } },
      { text: "Stillness, prayer, study, or contemplation.", weights: { mystical: 2, christian_personalist: 1, islamic_falsafa: 1, vedantic: 1 } }
    ]
  },
  {
    id: "motto",
    title: "If you had to carry one motto, it would be...",
    copy: "Choose the line you would be least embarrassed to live by.",
    mode: "single",
    answers: [
      { text: "Become who you are through what you choose.", weights: { existentialist: 3, romantic: 1 } },
      { text: "Master your judgment; meet the world with virtue.", weights: { stoic: 3, kantian: 1 } },
      { text: "Reduce suffering and make life better where you can.", weights: { utilitarian: 3, humanist: 1 } },
      { text: "Follow what works, revise what fails, keep learning.", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "Let go, move lightly, and do not force the river.", weights: { daoist: 3, buddhist: 1 } },
      { text: "Love, justice, and truth require more than the self.", weights: { christian_personalist: 1, jewish_covenantal: 1, islamic_falsafa: 1, care_ethicist: 1 } }
    ]
  },
  {
    id: "faith-reason",
    title: "Faith and reason should...",
    copy: "Choose the relationship that makes the most sense to you.",
    mode: "single",
    answers: [
      { text: "Work together, with reason deepening devotion and law.", weights: { islamic_falsafa: 3, christian_personalist: 1 } },
      { text: "Argue with each other inside a living tradition.", weights: { jewish_covenantal: 3, skeptic: 1 } },
      { text: "Be ordered toward love, mercy, and the person.", weights: { christian_personalist: 3, care_ethicist: 1 } },
      { text: "Give way to contemplative insight when language runs out.", weights: { mystical: 3, vedantic: 1 } },
      { text: "Remain secondary to evidence and natural explanation.", weights: { empiricist: 3, humanist: 1 } },
      { text: "Be treated as human productions that require critique.", weights: { marxist_critical: 2, nihilist: 2, cynic: 1 } }
    ]
  }
];

const BALANCE_MIN = 0.9;
const BALANCE_MAX = 1.12;

const TYPE_BALANCE = (() => {
  const maxPotentialByType = Object.fromEntries(TYPE_ORDER.map((key) => {
    const maxPotential = QUESTIONS.reduce((sum, question) => {
      const questionMax = Math.max(...question.answers.map((answer) => answer.weights[key] || 0));
      return sum + questionMax;
    }, 0);

    return [key, maxPotential];
  }));
  const averageMaxPotential = TYPE_ORDER.reduce(
    (sum, key) => sum + maxPotentialByType[key],
    0
  ) / TYPE_ORDER.length;

  return Object.fromEntries(TYPE_ORDER.map((key) => {
    const rawBalance = Math.sqrt(averageMaxPotential / maxPotentialByType[key]);
    const balance = Math.max(BALANCE_MIN, Math.min(BALANCE_MAX, rawBalance));
    return [key, balance];
  }));
})();

const state = {
  currentIndex: 0,
  path: [...QUESTION_SEEDS],
  responses: {},
  shareData: null,
  shareText: "",
  shareImagePromise: null,
  shareImageDataUrlPromise: null
};

const els = {
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  quizForm: document.querySelector("#quiz-form"),
  questionCount: document.querySelector("#question-count"),
  questionMode: document.querySelector("#question-mode"),
  questionGuidance: document.querySelector("#question-guidance"),
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
  viewCategoriesButton: document.querySelector("#view-categories-button"),
  categoryDirectory: document.querySelector("#category-directory"),
  categoryList: document.querySelector("#category-list")
};

const questionById = Object.fromEntries(QUESTIONS.map((question) => [question.id, question]));

function getCurrentQuestion() {
  return questionById[state.path[state.currentIndex]];
}

function getAnsweredQuestionIds() {
  return state.path.filter((id) => state.responses[id]?.length);
}

function scoreResponses(questionIds = getAnsweredQuestionIds()) {
  const scores = Object.fromEntries(TYPE_ORDER.map((key) => [key, 0]));

  questionIds.forEach((questionId) => {
    const question = questionById[questionId];
    const selected = state.responses[questionId] || [];
    const scale = question.mode === "multi" && selected.length > 1 ? 0.75 : 1;

    selected.forEach((answerIndex) => {
      const answer = question.answers[answerIndex];
      Object.entries(answer.weights).forEach(([key, value]) => {
        if (scores[key] !== undefined) {
          scores[key] += value * scale;
        }
      });
    });
  });

  return TYPE_ORDER
    .map((key) => ({
      key,
      rawScore: scores[key],
      score: scores[key] * TYPE_BALANCE[key],
      ...TYPES[key]
    }))
    .sort((a, b) => b.score - a.score || TYPE_ORDER.indexOf(a.key) - TYPE_ORDER.indexOf(b.key));
}

function getConfidence(ranked = scoreResponses()) {
  const top = ranked[0];
  const second = ranked[1];
  const gap = top.score - second.score;
  const answered = getAnsweredQuestionIds().length;
  return {
    answered,
    gap,
    topScore: top.score,
    strong: answered >= MIN_QUESTIONS && gap >= CONFIDENCE_GAP && top.score >= 20
  };
}

function shouldFinish() {
  const confidence = getConfidence();
  return confidence.strong || confidence.answered >= MAX_QUESTIONS;
}

function maxWeightFor(question, key) {
  return Math.max(...question.answers.map((answer) => answer.weights[key] || 0));
}

function chooseNextQuestion() {
  const asked = new Set(state.path);
  const ranked = scoreResponses();
  const focus = ranked.slice(0, 10).map((result) => result.key);
  const remaining = QUESTIONS.filter((question) => !asked.has(question.id));

  let bestQuestion = remaining[0];
  let bestScore = -Infinity;

  remaining.forEach((question) => {
    const potentials = focus.map((key) => maxWeightFor(question, key) * TYPE_BALANCE[key]);
    const mean = potentials.reduce((sum, value) => sum + value, 0) / potentials.length;
    const variance = potentials.reduce((sum, value) => sum + (value - mean) ** 2, 0) / potentials.length;
    const coverage = potentials.filter((value) => value > 0).length;
    const modeBonus = question.mode === "multi" ? 0.35 : 0;
    const seedPenalty = QUESTION_SEEDS.includes(question.id) ? -3 : 0;
    const score = variance * 4 + coverage * 0.35 + modeBonus + seedPenalty;

    if (score > bestScore) {
      bestScore = score;
      bestQuestion = question;
    }
  });

  return bestQuestion?.id;
}

function truncateFuture() {
  state.path.slice(state.currentIndex + 1).forEach((questionId) => {
    delete state.responses[questionId];
  });
  state.path = state.path.slice(0, state.currentIndex + 1);
}

function setSelectedAnswer(index) {
  const question = getCurrentQuestion();
  const current = state.responses[question.id] || [];

  if (question.mode === "multi") {
    const exists = current.includes(index);
    let next = exists ? current.filter((item) => item !== index) : [...current, index];
    if (next.length > question.maxSelect) {
      next = next.slice(next.length - question.maxSelect);
    }
    state.responses[question.id] = next;
  } else {
    state.responses[question.id] = [index];
  }

  truncateFuture();
  renderQuestion();
}

function renderQuestion() {
  const question = getCurrentQuestion();
  const selected = state.responses[question.id] || [];
  const answered = getAnsweredQuestionIds().length;
  const projectedTotal = Math.max(MAX_QUESTIONS, state.path.length);
  const progress = Math.min((answered / projectedTotal) * 100, 96);
  const isMulti = question.mode === "multi";

  els.questionCount.textContent = `Question ${state.currentIndex + 1}`;
  els.questionMode.textContent = isMulti ? `Select up to ${question.maxSelect}` : "Select one";
  els.questionGuidance.textContent = "";
  els.progressFill.style.width = `${progress}%`;
  els.questionTitle.textContent = question.title;
  els.questionCopy.textContent = question.copy;
  els.backButton.disabled = state.currentIndex === 0;
  els.nextButton.disabled = selected.length === 0;
  els.nextButton.textContent = shouldFinish() ? "See result" : "Next";

  els.optionsList.innerHTML = question.answers.map((answer, index) => {
    const optionId = `${question.id}-a${index}`;
    const checked = selected.includes(index) ? "checked" : "";
    const selectedClass = selected.includes(index) ? " is-selected" : "";
    const inputType = isMulti ? "checkbox" : "radio";

    return `
      <label class="option${selectedClass}" for="${optionId}">
        <input id="${optionId}" type="${inputType}" name="answer" value="${index}" ${checked}>
        <span>${answer.text}</span>
      </label>
    `;
  }).join("");
}

function renderResult() {
  const ranked = scoreResponses();
  const primary = ranked[0];
  const secondary = ranked[1];
  const primaryDetails = TYPE_DETAILS[primary.key];
  const topScore = Math.max(primary.score, 1);
  const confidence = getConfidence(ranked);

  els.quizView.classList.add("is-hidden");
  els.resultView.classList.remove("is-hidden");
  els.categoryDirectory.classList.add("is-hidden");
  els.viewCategoriesButton.textContent = "View all possible philosophy families";
  els.questionCount.textContent = `${confidence.answered} questions`;
  els.progressFill.style.width = "100%";

  els.resultTitle.textContent = primary.title;
  els.resultSummary.textContent = primary.summary;
  els.resultDescription.innerHTML = `
    ${primary.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <div class="result-notes">
      <h3>What this means</h3>
      <ul>
        ${primaryDetails.notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;
  els.secondaryResult.textContent = `${secondary.title}: ${secondary.summary}`;
  els.resultThinkers.textContent = primary.thinkers;
  els.readingList.innerHTML = primaryDetails.readings.map((reading) => `
    <article class="reading-item">
      <h4>${reading.title}</h4>
      <p class="reading-author">${reading.author}</p>
      <p>${reading.note}</p>
    </article>
  `).join("");
  els.affinityList.innerHTML = ranked.slice(0, 6).map((result) => {
    const percent = Math.round((result.score / topScore) * 100);
    const scoreLabel = percent === 100 ? "Top" : `${percent}/100`;
    return `
      <div class="affinity-row">
        <div class="affinity-name">${result.title}</div>
        <div class="affinity-track" aria-hidden="true">
          <div class="affinity-fill" style="width: ${percent}%"></div>
        </div>
        <div class="affinity-score">${scoreLabel}</div>
      </div>
    `;
  }).join("");

  state.shareData = getShareData();
  state.shareText = getShareText(state.shareData);
  state.shareImagePromise = createShareImageBlob(state.shareData).catch(() => null);
  state.shareImageDataUrlPromise = state.shareImagePromise
    .then((blob) => blob ? blobToDataUrl(blob) : "")
    .catch(() => "");
  hideSharePreview();
  els.copyStatus.textContent = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategoryDirectory() {
  els.categoryList.innerHTML = TYPE_ORDER.map((key) => {
    const type = TYPES[key];
    return `
      <article class="category-row">
        <div>
          <h4>${type.title}</h4>
          <p>${type.summary}</p>
        </div>
        <span>${type.family}</span>
      </article>
    `;
  }).join("");
}

function toggleCategoryDirectory() {
  if (!els.categoryList.children.length) {
    renderCategoryDirectory();
  }
  const isHidden = els.categoryDirectory.classList.toggle("is-hidden");
  els.viewCategoriesButton.textContent = isHidden
    ? "View all possible philosophy families"
    : "Hide all possible philosophy families";
}

function resetQuiz() {
  state.currentIndex = 0;
  state.path = [...QUESTION_SEEDS];
  state.responses = {};
  state.shareData = null;
  state.shareText = "";
  state.shareImagePromise = null;
  state.shareImageDataUrlPromise = null;
  hideSharePreview();
  els.resultView.classList.add("is-hidden");
  els.quizView.classList.remove("is-hidden");
  els.copyStatus.textContent = "";
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getShareData() {
  const ranked = scoreResponses();
  const primary = ranked[0];
  const secondary = ranked[1];
  const primaryDetails = TYPE_DETAILS[primary.key];
  const topScore = Math.max(primary.score, 1);
  const affinities = ranked.slice(0, 6).map((result) => ({
    title: result.title,
    score: Math.round((result.score / topScore) * 100)
  }));

  return {
    primary,
    secondary,
    details: primaryDetails,
    affinities
  };
}

function getShareText(data = getShareData()) {
  const { primary, secondary, details, affinities } = data;
  return [
    `My Philosophy Sorting Hat result: ${primary.title}`,
    "",
    primary.summary,
    "",
    ...primary.description,
    "",
    "What this means",
    ...details.notes.map((note) => `- ${note}`),
    "",
    `Secondary influence: ${secondary.title}`,
    secondary.summary,
    "",
    `Nearby thinkers: ${primary.thinkers}`,
    "",
    "Top affinities",
    ...affinities.map((result) => `- ${result.title}: ${result.score === 100 ? "Top" : `${result.score}/100`}`),
    "",
    "Suggested starting points",
    ...details.readings.map((reading) => `- ${reading.title}, ${reading.author}: ${reading.note}`)
  ].join("\n");
}

function wrapCanvasText(context, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width <= maxWidth) {
      line = testLine;
      return;
    }

    if (line) {
      lines.push(line);
    }
    line = word;
  });

  if (line) {
    lines.push(line);
  }
  return lines;
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
  const lines = wrapCanvasText(context, text, maxWidth);
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

function drawShareCardContent(context, data, width, height = 0, measureOnly = false) {
  const { primary, secondary, details, affinities } = data;
  const margin = 72;
  const contentWidth = width - margin * 2;
  const cardHeight = height || context.canvas.height;
  let y = margin;

  const setFont = (size, weight = 500) => {
    context.font = `${weight} ${size}px Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  };
  const drawText = (text, x, top, maxWidth, lineHeight) => {
    if (measureOnly) {
      return top + wrapCanvasText(context, text, maxWidth).length * lineHeight;
    }
    return drawWrappedText(context, text, x, top, maxWidth, lineHeight);
  };
  const drawRule = (top) => {
    if (!measureOnly) {
      context.strokeStyle = "#e8e2d6";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(margin, top);
      context.lineTo(width - margin, top);
      context.stroke();
    }
  };

  if (!measureOnly) {
    context.fillStyle = "#f8f6ef";
    context.fillRect(0, 0, width, cardHeight);
    context.strokeStyle = "#c7bead";
    context.lineWidth = 2;
    context.strokeRect(28, 28, width - 56, cardHeight - 56);

    context.fillStyle = "#20211e";
    context.fillRect(margin, y, 44, 44);
    context.fillStyle = "#fffdf8";
    setFont(19, 700);
    context.textAlign = "center";
    context.fillText("PH", margin + 22, y + 29);
    context.textAlign = "left";
  }

  setFont(24, 650);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("Philosophy Sorting Hat", margin + 60, y + 30);
  }
  y += 78;

  setFont(58, 700);
  if (!measureOnly) {
    context.fillStyle = "#20211e";
  }
  y = drawText(primary.title, margin, y, contentWidth, 64) + 12;

  setFont(30, 650);
  if (!measureOnly) {
    context.fillStyle = "#465943";
  }
  y = drawText(primary.summary, margin, y, contentWidth, 39) + 28;

  setFont(23, 400);
  if (!measureOnly) {
    context.fillStyle = "#30322e";
  }
  primary.description.forEach((paragraph) => {
    y = drawText(paragraph, margin, y, contentWidth, 34) + 16;
  });

  drawRule(y + 4);
  y += 42;

  setFont(22, 700);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("What this means", margin, y);
  }
  y += 34;

  setFont(21, 400);
  if (!measureOnly) {
    context.fillStyle = "#30322e";
  }
  details.notes.forEach((note) => {
    y = drawText(`- ${note}`, margin, y, contentWidth, 31) + 10;
  });

  drawRule(y + 6);
  y += 44;

  const columnGap = 48;
  const columnWidth = (contentWidth - columnGap) / 2;
  const columnStart = y;

  setFont(22, 700);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("Secondary influence", margin, y);
  }
  y += 34;
  setFont(21, 650);
  if (!measureOnly) {
    context.fillStyle = "#20211e";
  }
  y = drawText(secondary.title, margin, y, columnWidth, 29) + 8;
  setFont(20, 400);
  if (!measureOnly) {
    context.fillStyle = "#70736b";
  }
  const leftEnd = drawText(secondary.summary, margin, y, columnWidth, 29);

  let rightY = columnStart;
  setFont(22, 700);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("Nearby thinkers", margin + columnWidth + columnGap, rightY);
  }
  rightY += 34;
  setFont(20, 400);
  if (!measureOnly) {
    context.fillStyle = "#70736b";
  }
  const rightEnd = drawText(primary.thinkers, margin + columnWidth + columnGap, rightY, columnWidth, 29);
  y = Math.max(leftEnd, rightEnd) + 40;

  drawRule(y + 4);
  y += 42;

  setFont(22, 700);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("Top affinities", margin, y);
  }
  y += 36;

  affinities.forEach((result) => {
    setFont(20, 650);
    if (!measureOnly) {
      context.fillStyle = "#20211e";
      context.fillText(result.title, margin, y);
      context.fillStyle = "#70736b";
      context.textAlign = "right";
      context.fillText(result.score === 100 ? "Top" : `${result.score}/100`, width - margin, y);
      context.textAlign = "left";

      const barY = y + 14;
      context.fillStyle = "#e8e2d6";
      context.fillRect(margin, barY, contentWidth, 8);
      context.fillStyle = "#465943";
      context.fillRect(margin, barY, contentWidth * (result.score / 100), 8);
    }
    y += 46;
  });

  drawRule(y + 2);
  y += 40;

  setFont(22, 700);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("Suggested starting points", margin, y);
  }
  y += 38;

  details.readings.forEach((reading) => {
    setFont(21, 650);
    if (!measureOnly) {
      context.fillStyle = "#20211e";
    }
    y = drawText(reading.title, margin, y, contentWidth, 29) + 4;
    setFont(19, 650);
    if (!measureOnly) {
      context.fillStyle = "#465943";
    }
    y = drawText(reading.author, margin, y, contentWidth, 27) + 4;
    setFont(19, 400);
    if (!measureOnly) {
      context.fillStyle = "#70736b";
    }
    y = drawText(reading.note, margin, y, contentWidth, 27) + 18;
  });

  setFont(18, 650);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("philosophy sorting hat", margin, y + 20);
  }

  return y + margin + 24;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Could not create share image."));
      }
    }, "image/png");
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(blob);
  });
}

function withTimeout(promise, timeoutMs) {
  return Promise.race([
    Promise.resolve(promise),
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error("Share action timed out.")), timeoutMs);
    })
  ]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getShareHtml(imageDataUrl, text) {
  return `
    <section>
      <img
        src="${imageDataUrl}"
        alt="Philosophy Sorting Hat result card"
        style="display:block;max-width:100%;height:auto;"
      >
      <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;">${escapeHtml(text)}</pre>
    </section>
  `;
}

function copySelectedHtml(html) {
  const container = document.createElement("div");
  const selection = window.getSelection();
  const range = document.createRange();

  container.setAttribute("contenteditable", "true");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.innerHTML = html;
  document.body.appendChild(container);

  range.selectNodeContents(container);
  selection.removeAllRanges();
  selection.addRange(range);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    selection.removeAllRanges();
    container.remove();
  }

  return copied;
}

function copyPlainTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  return copied;
}

function getShareImageFilename(title) {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "philosophy-result"}.png`;
}

function showSharePreview(imageDataUrl, title) {
  let preview = document.querySelector("#share-preview");
  if (!preview) {
    preview = document.createElement("div");
    preview.id = "share-preview";
    preview.className = "share-preview";
    els.copyStatus.insertAdjacentElement("afterend", preview);
  }

  preview.innerHTML = `
    <p>Clipboard image sharing is blocked here. Use the full result image below.</p>
    <img src="${imageDataUrl}" alt="Full Philosophy Sorting Hat result card">
    <a class="text-link" href="${imageDataUrl}" download="${getShareImageFilename(title)}">Download image</a>
  `;
}

function hideSharePreview() {
  document.querySelector("#share-preview")?.remove();
}

async function createShareImageBlob(data) {
  const width = 1200;
  const measureCanvas = document.createElement("canvas");
  const measureContext = measureCanvas.getContext("2d");
  const measuredHeight = Math.ceil(drawShareCardContent(measureContext, data, width, 0, true));
  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = measuredHeight * scale;
  const context = canvas.getContext("2d");
  context.scale(scale, scale);
  drawShareCardContent(context, data, width, measuredHeight, false);
  return canvasToBlob(canvas);
}

async function copyResult() {
  const data = state.shareData || getShareData();
  const text = state.shareText || getShareText(data);
  let downloadableImageDataUrl = "";
  els.copyStatus.textContent = "Preparing share image...";
  hideSharePreview();

  downloadableImageDataUrl = await withTimeout(
    state.shareImageDataUrlPromise || Promise.resolve(""),
    1200
  ).catch(() => "");

  try {
    const imageBlob = await withTimeout(
      state.shareImagePromise || createShareImageBlob(data),
      1500
    );
    if (!imageBlob) {
      throw new Error("Share image unavailable.");
    }
    if (!downloadableImageDataUrl) {
      downloadableImageDataUrl = await withTimeout(blobToDataUrl(imageBlob), 800).catch(() => "");
    }

    if (navigator.clipboard?.write && window.ClipboardItem) {
      try {
        await withTimeout(
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": imageBlob,
              "text/plain": new Blob([text], { type: "text/plain" })
            })
          ]),
          1500
        );
        els.copyStatus.textContent = "Full result image copied. Paste it into a message or document.";
        return;
      } catch {
        await withTimeout(
          navigator.clipboard.write([
            new ClipboardItem({ "image/png": imageBlob })
          ]),
          1500
        );
        els.copyStatus.textContent = "Full result image copied. Paste it into a message or document.";
        return;
      }
    }
  } catch {
    // Fall through to text sharing when image clipboard is unavailable.
  }

  if (downloadableImageDataUrl && copySelectedHtml(getShareHtml(downloadableImageDataUrl, text))) {
    els.copyStatus.textContent = "Full result card copied. Paste it into a message or document.";
    return;
  }

  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error("Text clipboard unavailable.");
    }
    await withTimeout(navigator.clipboard.writeText(text), 1500);
    if (downloadableImageDataUrl) {
      showSharePreview(downloadableImageDataUrl, data.primary.title);
      els.copyStatus.textContent = "Full result text copied. The result image is shown below for saving or dragging.";
      return;
    }
    els.copyStatus.textContent = "Full result text copied. Image sharing is not available in this browser.";
  } catch {
    if (copyPlainTextFallback(text)) {
      if (downloadableImageDataUrl) {
        showSharePreview(downloadableImageDataUrl, data.primary.title);
        els.copyStatus.textContent = "Full result text copied. The result image is shown below for saving or dragging.";
        return;
      }
      els.copyStatus.textContent = "Full result text copied. Image sharing is not available in this browser.";
      return;
    }
    if (!downloadableImageDataUrl) {
      downloadableImageDataUrl = await withTimeout(
        state.shareImageDataUrlPromise || Promise.resolve(""),
        1200
      ).catch(() => "");
    }
    if (downloadableImageDataUrl) {
      showSharePreview(downloadableImageDataUrl, data.primary.title);
      els.copyStatus.textContent = "Clipboard sharing is blocked here. The full result image is shown below for saving or dragging.";
      return;
    }
    els.copyStatus.textContent = "Unable to copy automatically. Select the result text on this page to share it.";
  }
}

els.optionsList.addEventListener("change", (event) => {
  if (event.target.matches('input[name="answer"]')) {
    setSelectedAnswer(Number(event.target.value));
  }
});

els.quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.responses[getCurrentQuestion().id]?.length) return;

  if (shouldFinish()) {
    renderResult();
    return;
  }

  const existingNext = state.path[state.currentIndex + 1];
  const nextId = existingNext || chooseNextQuestion();
  if (!existingNext && nextId) {
    state.path.push(nextId);
  }
  state.currentIndex += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.backButton.addEventListener("click", () => {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.retakeButton.addEventListener("click", resetQuiz);
els.copyButton.addEventListener("click", copyResult);
els.viewCategoriesButton.addEventListener("click", toggleCategoryDirectory);

renderQuestion();
