const SCENARIO_VARIANTS = {
  meaning: {
    title: "Your Saturday plans fall through at the last minute. What do you do with the afternoon?",
    copy: "Pick the response closest to what you would actually do—not the one that sounds most impressive.",
    answers: [
      "Make a new plan that feels like mine, even if nobody else would choose it.",
      "Accept that the afternoon does not need a purpose and do something anyway.",
      "Use the quiet time to step back and think about what really matters to me.",
      "Spend the time on a commitment, practice, or person I already care about.",
      "Find one useful thing I can do for someone who could use the help.",
      "Go for a walk, make some tea, and let the afternoon take its own shape."
    ]
  },
  "good-life": {
    title: "It is Sunday night. Which kind of weekend leaves you most satisfied?",
    copy: "Choose the version you would most like to have lived, even if it was not exciting.",
    answers: [
      "I practiced something, handled a hard task well, and made time for a good friend.",
      "I ate well, rested, laughed with people I trust, and never felt rushed.",
      "I showed up for family, neighbors, or a community routine people count on.",
      "I learned something, made something, and helped another person feel more capable.",
      "I slowed down and felt less caught up in wanting things or comparing myself with others.",
      "I spent little, needed little, and ignored the pressure to make the weekend look impressive."
    ]
  },
  knowledge: {
    title: "A friend swears that a cheap household trick removes every stain. Before using it on your favorite shirt, you…",
    copy: "What would most influence whether you trust the advice?",
    answers: [
      "Look for a trustworthy test, check the care label, and see what the evidence says.",
      "Ask them to explain why it should work and whether the explanation holds together.",
      "Try it first on an old sock and judge it by what happens.",
      "Understand what generally removes this kind of stain, not just whether this trick works once.",
      "Ask someone experienced whose methods have held up over many years.",
      "Wait; one confident story is not enough to know."
    ]
  },
  suffering: {
    title: "You miss the bus, spill coffee on yourself, and receive a sharp message—all before 9 a.m. What helps you reset?",
    copy: "Choose the response most likely to keep one bad morning from taking over the rest of the day.",
    answers: [
      "Take a breath, regain my composure, and deal with the next thing calmly.",
      "Notice whether replaying the morning in my head is making it feel even worse.",
      "Fix the practical causes so the same mess is less likely tomorrow.",
      "Call someone kind or pay attention to another person who is also having a hard day.",
      "Admit that the morning is awful without forcing a cheerful lesson onto it.",
      "Apologize if I snapped at anyone, fix what I can, and give the day a fresh start."
    ]
  },
  transcendence: {
    title: "While washing dishes, a patch of evening light suddenly makes the kitchen feel strangely beautiful. Your reaction is closest to…",
    copy: "No special belief is required. Pick the response that feels least forced.",
    answers: [
      "For a moment, ordinary life feels held by something divine.",
      "The moment feels real, but explaining it would make it smaller.",
      "For a moment, I forget myself and feel connected to something larger.",
      "It makes me wonder whether beauty points to something deeper, though I am not sure.",
      "Light, attention, and a tired brain are enough to explain a lovely moment.",
      "It is a beautiful feeling, but I do not need to turn it into a message from the universe."
    ]
  },
  "ethics-priority": {
    title: "A coworker takes food from the shared fridge because they forgot lunch and have no money. What matters most when you judge it?",
    copy: "Choose up to two considerations you would genuinely weigh first.",
    answers: [
      "The food belongs to someone else, and that person's rights still matter.",
      "I would focus on the response that causes the least harm to everyone involved.",
      "The rule matters, but a sensible person also has to judge the particular situation.",
      "The coworker is hungry and struggling; their immediate need matters most.",
      "Showing mercy to someone in need matters more than punishing them.",
      "I would ask why someone at this workplace cannot afford lunch in the first place."
    ]
  },
  society: {
    title: "The washing machines in your apartment building keep breaking, and nothing changes. What do you do first?",
    copy: "Choose the instinct that would guide your first move.",
    answers: [
      "Check what the landlord is required to provide, document the problem, and make a formal complaint.",
      "Find out why rent is being collected while basic repairs keep being delayed.",
      "Get neighbors talking so people can coordinate loads and take shared responsibility.",
      "Check who is being hit hardest—especially people with children, disabilities, or little spare time.",
      "Compare repair options and push for the one most likely to work quickly.",
      "Appeal to a basic moral obligation: accepting rent while withholding a livable home is wrong, not merely inconvenient."
    ]
  },
  "religion-posture": {
    title: "A neighbor invites you to an important religious holiday gathering. What would you most want to understand while you are there?",
    copy: "Choose what you would pay closest attention to, whether or not you are religious.",
    answers: [
      "Seeing how the faith encourages love, forgiveness, and care for other people.",
      "Taking part in a tradition that connects people with earlier generations.",
      "Seeing how prayer, study, daily habits, and concern for justice fit together.",
      "Learning how the practice helps people become less self-centered and more at peace.",
      "Experiencing a kind of quiet or attention that is hard to explain in words.",
      "Appreciating the ritual while still noticing any empty habits or unfair power behind it."
    ]
  },
  self: {
    title: "While clearing a closet, you find clothes and photographs from a version of yourself you barely recognize. You think…",
    copy: "Which reaction sounds most like you?",
    answers: [
      "I became someone else through the choices and commitments I made after that.",
      "There may never have been one fixed self underneath all these changing versions.",
      "Despite the changes, there is something valuable in every version of me.",
      "The changes probably come from ordinary changes in my brain, body, and experiences.",
      "Each version makes sense when I remember the people and responsibilities in my life then.",
      "The idea of one true self may just be a useful story I keep editing."
    ]
  },
  power: {
    title: "A manager changes everyone's schedule without asking and says, ‘That's just how it has to be.’ Your first response is…",
    copy: "Pick what you would be most likely to do or ask.",
    answers: [
      "Ask for the reasons and for a fair process that gives employees a voice.",
      "Ask who gains flexibility and who is expected to absorb the cost.",
      "Do not accept the explanation until the manager can support it.",
      "Point out what the change will actually do to people's health and family lives.",
      "Push past the confident tone and ask what the manager is not saying.",
      "Say that being in charge does not cancel the duty to treat people fairly."
    ]
  },
  uncertainty: {
    title: "A houseplant starts drooping, and you cannot tell whether it needs more water, less water, or something else. You…",
    copy: "Choose the habit that sounds most like your ordinary problem-solving style.",
    answers: [
      "Hold off until I have better information about the plant and its conditions.",
      "Change one small thing and watch what happens.",
      "Give it sensible care without needing a perfect diagnosis first.",
      "Stop hovering over it; sometimes the urge to control everything is the problem.",
      "Accept that I may guess wrong and care for it anyway.",
      "Follow a method that experienced growers have tested, while staying ready to adjust it."
    ]
  },
  beauty: {
    title: "At a thrift shop, you keep returning to a painting that would match nothing in your home. Why might you buy it?",
    copy: "Choose the reason most likely to win you over.",
    answers: [
      "It makes a feeling vivid that ordinary language cannot quite capture.",
      "Something about its shapes and balance makes the whole room feel more ordered.",
      "It makes me imagine another person's life or see something from a new angle.",
      "Its oddness makes the world feel less dull and predictable.",
      "It would be a small, reliable pleasure each time I passed it.",
      "I am curious about how the materials, colors, and visual effects work on me."
    ]
  },
  tradition: {
    title: "Your family insists that a holiday dish must be made exactly the old way, even though almost nobody likes one ingredient. You…",
    copy: "What is your default reaction?",
    answers: [
      "Keep making it the old way; shared rituals are part of how a family stays connected.",
      "Question whether ‘tradition’ is just being used to avoid an honest conversation.",
      "Change the ingredient; traditions should keep working for the people who practice them.",
      "Learn the old recipe first, then decide carefully how to improve it.",
      "Preserve it carefully because inherited practices can carry sacred meaning.",
      "It is just a recipe I inherited; I am free to keep it, change it, or drop it."
    ]
  },
  rules: {
    title: "Your building bans bicycles from the hallway, but one neighbor has nowhere else safe to keep theirs. What should happen?",
    copy: "Choose the principle that should decide the case—not a complete plan that tries to include every consideration.",
    answers: [
      "Use a standard that could be applied fairly to anyone in the same situation.",
      "Compare the actual risks and allow whichever option is likely to cause less harm overall.",
      "Let someone familiar with the building judge this particular case rather than apply the rule mechanically.",
      "The needs of anyone who depends on a clear, accessible hallway should decide the issue.",
      "Treat safe passage and protection of a neighbor's property as real duties, even when meeting both takes extra work.",
      "Allow the bicycle unless it actually obstructs someone; the rule should yield to the circumstances."
    ]
  },
  ambition: {
    title: "A promotion would bring more money and status but also longer hours. What weighs most heavily?",
    copy: "Pick the thought most likely to decide it for you.",
    answers: [
      "Whether I want the work itself, or merely want other people to be impressed.",
      "Whether the role would help me grow more capable and make better decisions.",
      "Whether the extra money and influence would genuinely improve people's lives.",
      "Whether the challenge would make me feel energized and more fully myself.",
      "Whether chasing more would quietly take away the peace I already have.",
      "Whether ‘moving up’ is mostly a story that keeps everyone competing."
    ]
  },
  community: {
    title: "You planned a quiet evening alone, but your neighbors ask for help setting up a block gathering. You lean toward…",
    copy: "Choose the pull you would feel most strongly.",
    answers: [
      "Helping, because reciprocal habits—showing up now and receiving help later—are how a neighborhood works.",
      "Keeping my evening; other people do not automatically get to decide how I use my life.",
      "Helping if the gathering will make people feel more connected and welcome.",
      "Asking who always does the setup and whether the work is being shared fairly.",
      "Not treating either plan as sacred; I can decide based on what feels right that evening.",
      "Helping because care for neighbors is a moral obligation even if nobody ever returns the favor."
    ]
  },
  universe: {
    title: "During a power outage, you step outside and notice far more stars than usual. What thought arrives first?",
    copy: "Choose the reaction that feels most familiar, even if it lasts only a moment.",
    answers: [
      "I want to know what I am actually seeing and how those stars work.",
      "The pattern makes me feel there may be a deeper order behind what I can see.",
      "The universe is enormous and gives no sign that my daily worries matter.",
      "The night feels created rather than accidental, and I feel responsible for how I live in it.",
      "I stop trying to explain it and simply enjoy being part of the night.",
      "The feeling itself tells me more than a scientific or religious explanation would."
    ]
  },
  crisis: {
    title: "Smoke starts pouring from the oven while several people are talking at once. What role do you naturally take?",
    copy: "Pick what you would probably do in the first minute.",
    answers: [
      "Stay composed, turn off the heat, and do the next right thing in order.",
      "Get people away from danger and deal first with whatever could cause the most harm.",
      "Check what is actually burning and adapt as new information comes in.",
      "Give people clear roles and keep everyone from working against one another.",
      "Lower the panic so people can see and respond clearly.",
      "Notice who is frightened or overwhelmed and make sure they are okay."
    ]
  },
  education: {
    title: "A community center can fund only one new after-school program. Which proposal attracts you most?",
    copy: "Choose what you would most want young people to gain from it.",
    answers: [
      "A creative program that builds confidence, imagination, and understanding of other people.",
      "Art, literature, and big ideas that help students think about truth and beauty.",
      "Hands-on science that teaches careful observation and how to test a claim.",
      "A craft or sport that develops character through practice and good coaching.",
      "A repair-and-design lab where students solve real problems and revise failed attempts.",
      "Language, history, and local traditions taught by people who know them firsthand."
    ]
  },
  time: {
    title: "A favorite mug slips from your hand and breaks. After the first annoyance, you think…",
    copy: "Choose the reaction closest to the one you would actually have.",
    answers: [
      "I notice the urge to undo the loss, then let the broken mug go instead of clinging to it.",
      "I could not control the accident, but I can control what I do next.",
      "The fact that it could break is part of why all those ordinary mornings with it mattered.",
      "I replace it without much ceremony; tea can still be pleasant without this particular mug.",
      "I will remember the person or occasion connected to it and keep that story alive.",
      "The accident has no lesson of its own; I decide whether it becomes a nuisance, a memory, or nothing much."
    ]
  },
  care: {
    title: "Your roommate is sick on a day when you already have too much to do. What feels most important?",
    copy: "Pick the thought most likely to guide what you actually do.",
    answers: [
      "They need help right now, and that matters more than my general plans for the day.",
      "Ask what they want and respect them as a person, not a problem to manage.",
      "Living together has created duties between us over time.",
      "Help without making a show of it or taking over decisions they can make themselves.",
      "Do whatever will help most while still keeping my other commitments under control.",
      "Notice how work, money, and housing can turn an ordinary illness into a crisis."
    ]
  },
  "select-attractions": {
    title: "You unexpectedly get two free hours at home. Which activities genuinely tempt you?",
    copy: "Choose up to two—not what you think you ought to choose.",
    answers: [
      "Clear out a drawer, cancel something unnecessary, or make life a little simpler.",
      "Read about a local issue or help make a shared rule fairer.",
      "Look into who benefits from a local problem everyone else treats as normal.",
      "Sit quietly, pray, meditate, or listen without filling the time.",
      "Repair something by trying, adjusting, and learning how it works.",
      "Draw, cook, play music, take photographs, or make the afternoon feel vivid."
    ]
  },
  discomforts: {
    title: "Which ordinary moment is most likely to keep bothering you after everyone else has moved on?",
    copy: "Choose up to two if two feel equally hard to shrug off.",
    answers: [
      "Someone says ‘that's just wrong’ but cannot explain why beyond personal preference.",
      "A cheerful slogan promises that everything happens for a reason.",
      "A friend blames circumstances for a choice they plainly made.",
      "Someone spends the whole meal comparing what everyone owns or wants next.",
      "A badly paid worker is blamed for a problem created by the people above them.",
      "People perform a meaningful ritual for appearances but ignore what it asks of them.",
      "Someone is praised for succeeding while treating the people who supported them as disposable."
    ]
  },
  "free-day": {
    title: "Tomorrow is unexpectedly free. Which plan sounds most restorative?",
    copy: "Pick the day you would actually be happiest to wake up to.",
    answers: [
      "Cook something slowly, share a long meal, and talk with people I trust.",
      "Walk without headphones, listen to music later, and notice the weather changing.",
      "Visit a museum, take something apart, browse an archive, or follow a question for hours.",
      "Make almost no plan and let one quiet activity lead to the next.",
      "Join a family, neighborhood, or community gathering where my presence matters.",
      "Spend part of the day in stillness, prayer, serious reading, or contemplation."
    ]
  },
  motto: {
    title: "You put one reminder on your phone's lock screen for a difficult week. Which one would help?",
    copy: "Choose the line you would be most willing to follow on an ordinary Tuesday.",
    answers: [
      "Your choices are how you become yourself.",
      "Control your judgment; do the next right thing.",
      "Reduce suffering where it is actually within reach.",
      "Try, notice, revise, and keep learning.",
      "Loosen your grip and stop forcing the day.",
      "Love, justice, and truth ask more than self-interest."
    ]
  },
  "ai-design": {
    title: "A school is designing an AI tutor that students may use every day. What should the team prioritize first?",
    copy: "Choose the principle that should lead the design when learning, safety, cost, and convenience compete.",
    answers: [
      "Firm protections for students' privacy, dignity, and equal treatment, even if those limits reduce performance.",
      "A way to measure what students actually learn and experience, then revise the tutor when results are poor.",
      "A meaningful role for students, teachers, and families in setting its rules and correcting its mistakes.",
      "A review of whose work and data built it, who controls it, and who benefits financially from its use.",
      "A design that strengthens students' understanding and judgment instead of doing the difficult thinking for them.",
      "A small, reversible trial with close monitoring until the school understands where the tutor can go wrong."
    ]
  },
  "ai-authorship": {
    title: "You need to send a difficult apology. An AI tool can draft it in seconds. What most determines whether using the draft is acceptable?",
    copy: "Choose the consideration you would treat as decisive, even if several matter.",
    answers: [
      "It must not misrepresent what I did, understood, or personally contributed to the message.",
      "Use it if the result is clearer and less likely to cause harm than what I would send unaided.",
      "I need to revise it closely enough that doing this difficult task still develops my own judgment.",
      "I would consider whose writing trained the tool and who profits from that uncredited labor.",
      "Every sentence I send must express something I genuinely mean and choose to stand behind.",
      "If writing it myself is part of the attention I owe this person, convenience is not a reason to outsource that care."
    ]
  },
  "faith-reason": {
    title: "At dinner, one person gives thanks for the meal and another says luck, labor, and science explain it perfectly well. Where do you lean?",
    copy: "Choose the response that would feel most natural in the conversation.",
    answers: [
      "We can understand how the meal got here and still be grateful to something beyond ourselves.",
      "People within a religious tradition should keep discussing and rethinking what gratitude means.",
      "The better view is the one that makes us more loving and attentive to the people at the table.",
      "Simply giving thanks may express something that an argument cannot put into words.",
      "The evidence about nature and human labor explains the meal; religion adds little.",
      "Both comments reflect people's history, needs, and place in society, so I would examine that first.",
      "Keep the practice if it helps people become grateful and responsible, even when they explain it differently."
    ]
  }
};
