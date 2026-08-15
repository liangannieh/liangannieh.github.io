const TYPES = {
  existentialist: {
    title: "存在主义者",
    family: "自由与意义",
    summary: "意义是被选择、被创造、并在行动中活出来的。",
    description: [
      "你的答案最接近存在主义。你被这样一个想法吸引：人生不会递给你一份写好的剧本。意义必须由自己选择、创造，并在行动中活出来。你看重本真、自由、责任，以及不躲在成规与借口背后、勇于成为自己的那份勇气。",
      "在最好的状态下，你对不确定坦诚，也认真对待个人责任。你的难处在于：当每一次选择都像是对整个自我的裁决时，自由会变得沉重。"
    ],
    thinkers: "克尔凯郭尔、萨特、波伏娃",
    readings: ["《存在主义是一种人道主义》", "《模棱两可的伦理学》", "《恐惧与颤栗》"]
  },
  absurdist: {
    title: "荒诞主义者",
    family: "自由与意义",
    summary: "宇宙也许不会回应，但你仍能清醒地活着。",
    description: [
      "你的答案最接近荒诞主义。你看见了人对意义的渴求与一个可能毫无回应的宇宙之间的张力。你没有在这张力下垮掉，而是以清醒、反抗、幽默与自由去面对它。",
      "在最好的状态下，你目光清明，却不臣服于绝望。你的难处是别让反讽变成对一切要求投入之事的疏离。"
    ],
    thinkers: "加缪、乌纳穆诺、卡夫卡",
    readings: ["《西西弗神话》", "《反抗者》", "《审判》"]
  },
  nihilist: {
    title: "虚无主义者",
    family: "自由与意义",
    summary: "承继而来的意义值得被毫不退缩地追问。",
    description: [
      "你的答案最接近哲学上的虚无主义。你对承继而来的意义、道德上的确信、宏大叙事与令人宽慰的幻象抱持怀疑。你追问价值究竟有没有根据，还是人们把偏好、恐惧、权力或习惯装扮成了真理。",
      "在最好的状态下，你的严格是一种澄清。你的难处在于：当旧有的确信被拆解之后，还能建起什么。"
    ],
    thinkers: "尼采、齐奥朗、施蒂纳",
    readings: ["《快乐的科学》", "《眼泪与圣徒》", "《唯一者及其所有物》"]
  },
  stoic: {
    title: "斯多亚主义者",
    family: "古代伦理",
    summary: "自由始于判断、自律与品格。",
    description: [
      "你的答案最接近斯多亚主义。你相信自由始于对自己的掌控。世界并不稳定，他人难以预料，命运说变就变，但你的判断、选择与品格始终是你自己的责任。",
      "在最好的状态下，你沉稳、有原则，不易被动摇。你的难处是记住：镇定不该变成对情感的回避。"
    ],
    thinkers: "爱比克泰德、马可·奥勒留、塞涅卡",
    readings: ["《手册》", "《沉思录》", "《道德书简》"]
  },
  epicurean: {
    title: "伊壁鸠鲁主义者",
    family: "古代伦理",
    summary: "好的生活是平静的快乐、友谊，以及免于恐惧。",
    description: [
      "你的答案最接近伊壁鸠鲁主义。你被简单的快乐、好的朋友、思想上的宁静，以及免于无谓恐惧的自由所吸引。你不信任身份地位的游戏、焦躁的野心，以及那些带来的焦虑多过喜悦的欲望。",
      "在最好的状态下，你明白幸福往往比人们预想的更安静。你的难处是别让安宁变成对那些值得关注的责任的退避。"
    ],
    thinkers: "伊壁鸠鲁、卢克莱修、菲洛德穆",
    readings: ["《致美诺凯乌斯的信》", "《物性论》", "《主要原理》"]
  },
  cynic: {
    title: "犬儒学派",
    family: "古代伦理",
    summary: "需要得更少、表演得更少，并拒绝对地位的崇拜。",
    description: [
      "你的答案最接近古代犬儒学派。你不信任社交表演、奢华、地位、虚荣与彬彬有礼的虚伪。你被直率的诚实所吸引，也认同好的生活也许意味着需要得更少、拒绝被震慑。",
      "在最好的状态下，你极其独立，难以被收买。你的难处在于：对成规的鄙夷可能硬化为对人的鄙夷。"
    ],
    thinkers: "第欧根尼、安提斯泰尼、底比斯的克拉特斯",
    readings: ["《第欧根尼言行录》", "《名哲言行录》", "《犬儒哲人文选》"]
  },
  aristotelian: {
    title: "亚里士多德主义者／德性伦理学者",
    family: "伦理与品格",
    summary: "通过品格、习惯与实践智慧成就卓越。",
    description: [
      "你的答案最接近亚里士多德的德性伦理学。你把好的生活看作经由习惯、品格、判断、友谊与实践智慧培育而成的东西。核心问题不只是该做什么，而是要成为怎样的人。",
      "在最好的状态下，你均衡、着眼成长、留意情境。你的难处在于：对品格的关注有时会低估运气、制度与不公。"
    ],
    thinkers: "亚里士多德、麦金太尔、菲莉帕·福特",
    readings: ["《尼各马可伦理学》", "《追寻美德》", "《自然的善》"]
  },
  kantian: {
    title: "康德主义者／义务论者",
    family: "伦理与原则",
    summary: "人有尊严，原则在压力之下依然重要。",
    description: [
      "你的答案最接近康德的义务论。你被建立在尊严、义务、原则与对人的尊重之上的伦理所吸引。你相信有些事即便能带来诱人的结果也不该做，因为人不是工具。",
      "在最好的状态下，你有原则、讲公道，并认真看待道德上的一致性。你的难处在于：当现实生活让不同义务彼此冲突时，规则可能变得僵硬。"
    ],
    thinkers: "康德、克里斯汀·科斯嘉德、奥诺拉·奥尼尔",
    readings: ["《道德形而上学奠基》", "《创造目的王国》", "《理性的建构》"]
  },
  utilitarian: {
    title: "功利主义者／后果论者",
    family: "伦理与后果",
    summary: "道德的问题是：什么真正减少了痛苦、改善了生活。",
    description: [
      "你的答案最接近功利主义或后果论伦理。你认为道德应当密切关注结果。如果最终受苦的人更多，良好的意图与优雅的原则就没那么要紧。",
      "在最好的状态下，你有人道关怀、能考虑规模，并专注于减少伤害。你的难处是：当整体收益变得过于抽象时，如何保护个体尊严与少数人的利益。"
    ],
    thinkers: "边沁、密尔、彼得·辛格",
    readings: ["《功利主义》", "《道德与立法原理导论》", "《实践伦理学》"]
  },
  care_ethicist: {
    title: "关怀伦理学者",
    family: "伦理与关系",
    summary: "道德生活始于关怀、依赖与具体的责任。",
    description: [
      "你的答案最接近关怀伦理学。你把道德看作植根于关注、脆弱、依赖，以及真实关系所生成的责任之中。抽象的规则与总体的结果固然重要，但它们可能忽略了你面前的这个人。",
      "在最好的状态下，你敏锐、有人情味，能觉察被忽视的需要。你的难处是别让关怀变成自我抹除或偏私。"
    ],
    thinkers: "卡罗尔·吉利根、内尔·诺丁斯、伊娃·基泰",
    readings: ["《不同的声音》", "《关怀》", "《爱的劳动》"]
  },
  pragmatist: {
    title: "实用主义者",
    family: "知识与实践",
    summary: "观念通过后果、修正与运用来证明自己。",
    description: [
      "你的答案最接近实用主义。比起一个观念在理论上听起来是否完美，你更在意它在实践中是否管用。真理、意义与伦理，都要经由经验、后果、修正与生活中的试验来检验。",
      "在最好的状态下，你灵活、乐于试验，不为空洞的意识形态所动。你的难处是别让「管用」滑落为短期的方便。"
    ],
    thinkers: "威廉·詹姆斯、约翰·杜威、皮尔士",
    readings: ["《实用主义》", "《经验与教育》", "《信念的确定》"]
  },
  skeptic: {
    title: "怀疑主义者",
    family: "知识与怀疑",
    summary: "确定性稀有，而怀疑可以是一种理智上的尊严。",
    description: [
      "你的答案最接近哲学上的怀疑主义。你对确定性保持谨慎，对过度自信十分敏感。你质疑预设、检视证据，并且不因为一个说法流行、传统或让人心安就接受它。",
      "在最好的状态下，你思维自律，难以被操纵。你的难处在于：持续悬置判断可能变成瘫痪。"
    ],
    thinkers: "皮浪、塞克斯都·恩披里柯、休谟",
    readings: ["《皮浪主义纲要》", "《人类理解研究》", "《自然宗教对话录》"]
  },
  empiricist: {
    title: "经验主义者／自然主义者",
    family: "知识与自然",
    summary: "从观察、证据、科学与自然世界出发。",
    description: [
      "你的答案最接近经验主义或自然主义。你把观察、证据、科学与自然世界当作理解实在的最佳起点。你对那些离可检验、可修正之物太远的解释保持警惕。",
      "在最好的状态下，你脚踏实地、好奇，面向现实。你的难处是：当价值、美与意识难以纳入测量时，仍要为它们留出余地。"
    ],
    thinkers: "洛克、休谟、蒯因",
    readings: ["《人类理解论》", "《人性论》", "《自然化的认识论》"]
  },
  platonist: {
    title: "柏拉图主义者／唯心论者",
    family: "形而上学与理想",
    summary: "在表象之下寻找更深的真理、理想与形式。",
    description: [
      "你的答案最接近柏拉图主义或哲学唯心论。你被这样一种可能吸引：表面的现象并非故事的全部。在寻常经验之下，你寻找更深的真理、理想、形式、模式或实在。",
      "在最好的状态下，你有远见，也有智性上的抱负。你的难处是保持与寻常经验的联系，而不把现实世界当作理想的劣质摹本。"
    ],
    thinkers: "柏拉图、普罗提诺、黑格尔",
    readings: ["《理想国》", "《会饮篇》", "《精神现象学》"]
  },
  daoist: {
    title: "道家",
    family: "亚洲哲学",
    summary: "智慧常常意味着简朴、顺势与不强求。",
    description: [
      "你的答案最接近道家哲学。你被简朴、顺势、平衡与不强求所吸引。你相信人生之所以出岔子，多半是因为人过度控制、过度命名、过度谋划，并想主宰那些本该顺之而行的东西。",
      "在最好的状态下，你从容、能适应，对自然的节律敏感。你的难处是辨认何时行动、结构或抵抗仍属必要。"
    ],
    thinkers: "老子、庄子、列子",
    readings: ["《道德经》", "《庄子》", "《列子》"]
  },
  buddhist: {
    title: "佛教哲学",
    family: "亚洲哲学",
    summary: "理解苦、无常、执著与慈悲。",
    description: [
      "你的答案最接近佛教哲学。你被关于苦、无常、执著、慈悲与解脱的问题所吸引。你感到许多痛苦来自对无常之物的抓取，或是把自我误认作某种固定不变的东西。",
      "在最好的状态下，你慈悲、善于省思，能松开对我执与贪求的抓握。你的难处是别让放下变成情感上的疏离。"
    ],
    thinkers: "佛陀、龙树、寂天",
    readings: ["《法句经》", "《心经》", "《入菩萨行论》"]
  },
  confucian: {
    title: "儒家／社群主义者",
    family: "亚洲哲学",
    summary: "好的生活由关系、责任与践行所成就。",
    description: [
      "你的答案最接近儒家或社群主义哲学。你把自我看作由关系、责任、传统与共同的实践所塑成。好的生活，是成为可信、仁厚，并在人伦之中各安其位的人。",
      "在最好的状态下，你重情义、重关系，认真对待社会的和谐。你的难处是：当群体的期待过于强大时，如何守护个体性与道德上的异议。"
    ],
    thinkers: "孔子、孟子、荀子",
    readings: ["《论语》", "《孟子》", "《荀子》"]
  },
  vedantic: {
    title: "吠檀多／印度哲学",
    family: "宗教与灵性",
    summary: "自我、实在、义务与解脱属于一个更深的灵性秩序。",
    description: [
      "你的答案最接近吠檀多或印度哲学。你被关于自我、终极实在、义务、意识与解脱的问题所吸引。可见的世界固然重要，但它指向一个更深的形而上与灵性秩序。",
      "在最好的状态下，你能把日常行动与终极问题一并把握。你的难处是把灵性的洞见转化为具体的责任。"
    ],
    thinkers: "商羯罗、罗摩奴阇、辨喜",
    readings: ["《薄伽梵歌》", "《奥义书》", "《梵经》"]
  },
  christian_personalist: {
    title: "基督教人格主义",
    family: "宗教与灵性",
    summary: "人拥有神圣的尊严，因为他被爱、被造、被召唤。",
    description: [
      "你的答案最接近基督教人格主义。你透过创造、恩典、爱、罪、救赎与人的神圣尊严来看待实在。道德生活不只是守规则或管理结果；它是对神圣之爱与邻人之责的回应。",
      "在最好的状态下，你把道德的严肃与怜悯结合在一起。你的难处是别让信仰变成道德主义或对体制的护短。"
    ],
    thinkers: "奥古斯丁、托马斯·阿奎那、多萝西·戴",
    readings: ["《忏悔录》", "《神学大全》选读", "《漫长的孤独》"]
  },
  jewish_covenantal: {
    title: "犹太立约思想",
    family: "宗教与灵性",
    summary: "意义在盟约、律法、记忆、争辩与修复中被活出来。",
    description: [
      "你的答案最接近犹太立约思想。你被一种由义务、诠释、记忆、共同体责任、公义与修复所塑造的生活所吸引。真理不只是被沉思的；它被争辩、被践行、被代代相传。",
      "在最好的状态下，你把伦理的严肃与历史的记忆结合起来。你的难处是在承继的义务与个人良知、多元并存之间取得平衡。"
    ],
    thinkers: "迈蒙尼德、马丁·布伯、列维纳斯",
    readings: ["《迷途指津》", "《我与你》", "《艰难的自由》"]
  },
  islamic_falsafa: {
    title: "伊斯兰哲学",
    family: "宗教与灵性",
    summary: "理性、启示、律法与神圣的独一性同属一个道德宇宙。",
    description: [
      "你的答案最接近伊斯兰哲学。你被理性、启示、律法、德性与神圣独一性之间的和谐与张力所吸引。知识应当引导整全的人趋向真理、公义与秩序井然的生活。",
      "在最好的状态下，你把理智、自律与虔敬融为一体。你的难处是在坚定的信念之外，仍保有诠释上的谦逊。"
    ],
    thinkers: "法拉比、伊本·西那、安萨里、伊本·鲁世德",
    readings: ["《哲学家的矛盾》", "《决定性论文》", "《治疗论》选读"]
  },
  mystical: {
    title: "神秘主义者／默观者",
    family: "宗教与灵性",
    summary: "终极的真理经由转化、静默与直接的相遇被接近。",
    description: [
      "你的答案最接近神秘主义或默观传统。你被直接的相遇、静默、转化，以及寻常语言的界限所吸引。概念固然重要，但它们不等同于与真实的接触。",
      "在最好的状态下，你在内心里认真，并对惊奇敞开。你的难处是让内在的深度与伦理的清明、共同的生活保持相连。"
    ],
    thinkers: "艾克哈特大师、鲁米、大德兰、西蒙娜·薇依",
    readings: ["《鲁米诗选》", "《七宝楼台》", "《重负与神恩》"]
  },
  humanist: {
    title: "人文主义者",
    family: "现代生活",
    summary: "人的尊严、创造力、教育与道德成长居于中心。",
    description: [
      "你的答案最接近人文主义。你把人的尊严、能动性、教育、创造力与道德成长放在世界观的近中心处。你相信人能够思考、关怀、建造、学习，并改善生活的条件。",
      "在最好的状态下，你慷慨、富有建设性，致力于人的兴盛。你的难处是避免对人性或进步抱持过于乐观的看法。"
    ],
    thinkers: "伊拉斯谟、玛莎·努斯鲍姆、贝尔·胡克斯",
    readings: ["《愚人颂》", "《培育人性》", "《越界的教学》"]
  },
  romantic: {
    title: "浪漫主义者",
    family: "现代生活",
    summary: "情感、美、想象与强度揭示出什么才重要。",
    description: [
      "你的答案最接近浪漫主义。你把情感、想象、美、自然、强度与独特性当作与真理相遇的方式。你不信任那些把生活压平为计算或纯粹实用成就的世界观。",
      "在最好的状态下，你鲜活、富有创造力，能感知他人斥为不切实际的经验。你的难处是别让强度变成自我沉溺。"
    ],
    thinkers: "卢梭、玛丽·沃斯通克拉夫特、席勒",
    readings: ["《一个孤独漫步者的遐想》", "《审美教育书简》", "《为女权辩护》"]
  },
  liberal_contractarian: {
    title: "自由主义者／社会契约论者",
    family: "政治哲学",
    summary: "自由、权利、公平、同意与制度使多元共处成为可能。",
    description: [
      "你的答案最接近自由主义或社会契约哲学。你在意权利、同意、公平、个人自由、宪法上的限制，以及那些让不同的人不必彼此支配就能共同生活的制度。",
      "在最好的状态下，你在自由与多元的问题上有原则。你的难处是看清：仅有形式上的权利，何时不足以克服物质不平等或社会排斥。"
    ],
    thinkers: "洛克、罗尔斯、朱迪丝·施克莱",
    readings: ["《政府论》下篇", "《正义论》", "《恐惧的自由主义》"]
  },
  marxist_critical: {
    title: "马克思主义者／批判理论家",
    family: "政治哲学",
    summary: "观念、道德与制度都须透过权力与物质生活来解读。",
    description: [
      "你的答案最接近马克思主义或批判理论。你会在寻常的道德语言之下寻找物质条件、阶级关系、意识形态、劳动与权力结构。你追问：眼下的安排让谁得了好处。",
      "在最好的状态下，你揭露隐蔽的支配，并坚持自由必须是社会性的，而不只是私人的。你的难处是在分析结构时保住个体的复杂性。"
    ],
    thinkers: "马克思、杜波依斯、阿多诺、安吉拉·戴维斯",
    readings: ["《1844年经济学哲学手稿》", "《黑人的灵魂》", "《启蒙辩证法》"]
  }
};

const TYPE_ORDER = Object.keys(TYPES);
const TYPE_DETAILS = {
  existentialist: {
    notes: [
      "你的结果指向：自由既是负担也是馈赠——你想要一种能从内部认领的人生。",
      "你多半难以忍受那些让人逃避责任的角色、标签与说辞。",
      "适合你的下一个问题是：在确定性无法获得时，哪些承诺仍值得选择。"
    ],
    readings: [
      { title: "《存在主义是一种人道主义》", author: "萨特", note: "对自由、责任与自我造就的简明辩护。" },
      { title: "《模棱两可的伦理学》", author: "波伏娃", note: "把存在主义的自由与伦理、与他人连结起来。" },
      { title: "《恐惧与颤栗》", author: "克尔凯郭尔", note: "通向抉择、信仰、焦虑与内在性的一道颇具难度的入口。" }
    ]
  },
  absurdist: {
    notes: [
      "你的结果显示，你察觉到人的渴望与一个不予配合的宇宙之间的落差。",
      "你未必悲观；也许你只是不喜欢不诚实的安慰。",
      "你的核心任务是活得鲜明，而不必要求世界最终变得可解释。"
    ],
    readings: [
      { title: "《西西弗神话》", author: "加缪", note: "关于荒诞的清醒与反抗的经典陈述。" },
      { title: "《反抗者》", author: "加缪", note: "把荒诞主义发展为一种抵抗的伦理。" },
      { title: "《审判》", author: "卡夫卡", note: "把荒诞呈现为氛围而非论证的小说。" }
    ]
  },
  nihilist: {
    notes: [
      "你的结果指向对承继而来的价值体系与令人宽慰的解释的严厉怀疑。",
      "比起绝望，你也许更在意理智上的诚实：剥去虚假的意义之后，还剩下什么？",
      "难题在于决定：这份清醒应当止于拒绝、重建，还是一种更有纪律的沉默。"
    ],
    readings: [
      { title: "《快乐的科学》", author: "尼采", note: "现代关于「确定性之后的价值」诸问题的重要源头。" },
      { title: "《眼泪与圣徒》", author: "齐奥朗", note: "以格言体对否定与幻灭作出的锋利探索。" },
      { title: "《唯一者及其所有物》", author: "施蒂纳", note: "对固定理想与承继而来的抽象观念的激进攻击。" }
    ]
  },
  stoic: {
    notes: [
      "你的结果显示，你看重内在的自律甚于有利的境遇。",
      "你多半会明确区分什么属于自己——比如判断与举止——什么不属于。",
      "对你而言，富有成效的张力是：保持稳定，却不把自己封闭于温柔之外。"
    ],
    readings: [
      { title: "《手册》", author: "爱比克泰德", note: "最为凝练的斯多亚实践指南。" },
      { title: "《沉思录》", author: "马可·奥勒留", note: "关于自律、责任、必死与视角的私人省思。" },
      { title: "《道德书简》", author: "塞涅卡", note: "关于恐惧、愤怒、财富、悲伤与品格的可读随笔。" }
    ]
  },
  epicurean: {
    notes: [
      "你的结果显示，你被一种比野心所许诺的更安静的幸福观所吸引。",
      "你多半把友谊、节制与免于无谓恐惧看作重大的哲学成就。",
      "你的难处是守住安宁，同时不回避那些值得关注的责任。"
    ],
    readings: [
      { title: "《致美诺凯乌斯的信》", author: "伊壁鸠鲁", note: "关于快乐、恐惧、死亡与好生活的简短陈述。" },
      { title: "《物性论》", author: "卢克莱修", note: "以诗体呈现的伊壁鸠鲁式自然观与免于迷信的自由。" },
      { title: "《主要原理》", author: "伊壁鸠鲁", note: "简短的格言，显出伊壁鸠鲁伦理学的架构。" }
    ]
  },
  cynic: {
    notes: [
      "你的结果指向反矫饰：你想知道，当地位与表演被拿掉之后，什么才是真的。",
      "你对彬彬有礼的虚伪、奢华与社交剧场大概容忍度很低。",
      "需要留意的边界是：对成规的鄙夷，是否正在硬化为对人的鄙夷。"
    ],
    readings: [
      { title: "《第欧根尼言行录》", author: "第欧根尼传统", note: "通向犬儒式直率与简朴的最清晰入口。" },
      { title: "《名哲言行录》第六卷", author: "第欧根尼·拉尔修", note: "关于第欧根尼与犬儒谱系的古代记述。" },
      { title: "《犬儒哲人文选》", author: "罗伯特·多宾 编译", note: "一部便利的现代犬儒残篇选集。" }
    ]
  },
  aristotelian: {
    notes: [
      "你的结果显示，你认为伦理不只是做决定，更是长时间中的品格养成。",
      "你多半在意习惯、友谊、判断，以及一种兴盛生活的具体质地。",
      "你的难处是让品格之论不忽略运气、制度与不平等的起点。"
    ],
    readings: [
      { title: "《尼各马可伦理学》", author: "亚里士多德", note: "论德性、兴盛、习惯与实践智慧的核心文本。" },
      { title: "《追寻美德》", author: "麦金太尔", note: "德性伦理与传统塑造的道德生活的现代复兴之作。" },
      { title: "《自然的善》", author: "菲莉帕·福特", note: "对德性与人之善的简练当代辩护。" }
    ]
  },
  kantian: {
    notes: [
      "你的结果指向一种道德上的严肃：关乎尊严、一致性，以及什么能向他人辩明。",
      "你多半抗拒把人当作工具，即便结果颇具吸引力。",
      "压力点在于：当义务彼此冲突、没有哪条规则显得完备时，该如何处理棘手的个案。"
    ],
    readings: [
      { title: "《道德形而上学奠基》", author: "康德", note: "关于尊严、义务与普遍法则的经典源头。" },
      { title: "《创造目的王国》", author: "克里斯汀·科斯嘉德", note: "对康德式道德主体性的清晰当代发展。" },
      { title: "《理性的建构》", author: "奥诺拉·奥尼尔", note: "展示康德伦理如何应用于信任、义务与公共理性。" }
    ]
  },
  utilitarian: {
    notes: [
      "你的结果显示，如果后果让人们过得更糟，光有意图与原则并不够。",
      "你多半认为道德的严肃需要规模：苦难无论发生在哪里都要计入。",
      "你的难处是在总量式推理中，仍让个体的尊严保持可见。"
    ],
    readings: [
      { title: "《功利主义》", author: "密尔", note: "关于幸福、后果与道德计算的标准入门。" },
      { title: "《道德与立法原理导论》", author: "边沁", note: "系统形态的奠基性功利主义框架。" },
      { title: "《实践伦理学》", author: "彼得·辛格", note: "把后果论推理运用于疑难个案的当代范例。" }
    ]
  },
  care_ethicist: {
    notes: [
      "你的结果指向依赖、关注与具体责任所具有的道德分量。",
      "你多半不信任那些变得精巧、却忽略了身边脆弱之人的伦理体系。",
      "你的难处是深深地关怀，同时不让自己消失。"
    ],
    readings: [
      { title: "《不同的声音》", author: "卡罗尔·吉利根", note: "把关怀确立为一种道德声音的现代奠基之作。" },
      { title: "《关怀》", author: "内尔·诺丁斯", note: "把关怀发展为一种关系性的伦理实践。" },
      { title: "《爱的劳动》", author: "伊娃·基泰", note: "把关怀、依赖、残障与正义连结起来。" }
    ]
  },
  pragmatist: {
    notes: [
      "你的结果显示，你更信任在生活中受检验的东西，而非抽象的纯粹。",
      "你多半会问：一个观念做了什么，它如何改变行动，以及当现实回推时它能否被修正。",
      "你的难处是别让实践上的成功沦为单纯的方便。"
    ],
    readings: [
      { title: "《实用主义》", author: "威廉·詹姆斯", note: "最易读的实用主义气质的经典陈述。" },
      { title: "《经验与教育》", author: "约翰·杜威", note: "实用主义思想付诸实践的一个简短范例。" },
      { title: "《信念的确定》", author: "皮尔士", note: "关于探究、怀疑与信念的奠基性论文。" }
    ]
  },
  skeptic: {
    notes: [
      "你的结果指向有纪律的怀疑：你抗拒超出证据的自信。",
      "你多半把不确定看作一种诚实的理智姿态，而非失败。",
      "风险在于：当行动成为必要时，怀疑可能变成藏身之处。"
    ],
    readings: [
      { title: "《皮浪主义纲要》", author: "塞克斯都·恩披里柯", note: "关于怀疑式悬置判断的经典古代源头。" },
      { title: "《人类理解研究》", author: "休谟", note: "对因果与确定性提出的、可读的现代怀疑论挑战。" },
      { title: "《自然宗教对话录》", author: "休谟", note: "对宗教与形而上学论证的怀疑式检视。" }
    ]
  },
  empiricist: {
    notes: [
      "你的结果显示，实在应当通过观察、证据与修正来约束我们的主张。",
      "你多半更喜欢可问责的解释，而非漂亮的思辨。",
      "你的难处是为价值与意义留出余地，而不把它们化约为最易测量的东西。"
    ],
    readings: [
      { title: "《人类理解论》", author: "洛克", note: "关于知识与经验的奠基性经验论阐述。" },
      { title: "《人性论》", author: "休谟", note: "以实验方法处理人性的一次重大尝试。" },
      { title: "《自然化的认识论》", author: "蒯因", note: "沟通哲学、科学与自然主义的现代桥梁。" }
    ]
  },
  platonist: {
    notes: [
      "你的结果指向比直接表象更深的理想、形式与实在。",
      "你多半抗拒把真、美、善化约为欲望、效用或习俗。",
      "难处在于：让理想照亮寻常生活，而不是让寻常生活显得只是二流。"
    ],
    readings: [
      { title: "《理想国》", author: "柏拉图", note: "论形式、正义、教育与善的核心文本。" },
      { title: "《会饮篇》", author: "柏拉图", note: "从欲望上升到美本身的、更具文学性的一部作品。" },
      { title: "《精神现象学》", author: "黑格尔", note: "关于意识与历史的、颇具难度的现代唯心论阐述。" }
    ]
  },
  daoist: {
    notes: [
      "你的结果显示，智慧常常在于随势而动，而非主宰它。",
      "你多半不信任过度控制、过度命名，以及人把生活弄得比必要更沉重的习惯。",
      "你的难处是知道何时该让「不强求」让位于直接的行动。"
    ],
    readings: [
      { title: "《道德经》", author: "老子", note: "论无为、简朴与道的经典文本。" },
      { title: "《庄子》", author: "庄周", note: "关于自在、视角与自由的诙谐寓言。" },
      { title: "《列子》", author: "列子传统", note: "论从容、命运与自然的后期道家文集。" }
    ]
  },
  buddhist: {
    notes: [
      "你的结果指向苦、无常、执著与慈悲，把它们视为核心的哲学事实。",
      "你多半感到，我执与贪求让生活比必要更痛苦。",
      "你的难处是让放下保持温暖、投入而慈悲。"
    ],
    readings: [
      { title: "《法句经》", author: "传为佛陀所说", note: "关于苦、举止、觉察与解脱的平易偈颂。" },
      { title: "《心经》", author: "大乘佛教经典", note: "关于空与智慧的简短而深邃的经文。" },
      { title: "《入菩萨行论》", author: "寂天", note: "论慈悲、戒律与为他觉悟的重要论典。" }
    ]
  },
  confucian: {
    notes: [
      "你的结果显示，人是由关系、礼、角色与榜样所塑成的。",
      "你多半比起纯粹的个人表达，更认真看待责任、可信与仁厚的举止。",
      "你的难处是：当和谐变成压力时，仍要守护道德上的异议。"
    ],
    readings: [
      { title: "《论语》", author: "孔子及弟子", note: "论礼、仁、学与君子之行的核心源头。" },
      { title: "《孟子》", author: "孟子", note: "关于人性与道德修养的、较为乐观的儒家阐述。" },
      { title: "《荀子》", author: "荀子", note: "关于礼、约束与社会塑造的更为峻切的阐述。" }
    ]
  },
  vedantic: {
    notes: [
      "你的结果指向自我、意识、义务与解脱这些彼此相连的问题。",
      "你多半怀疑，寻常的身份并未穷尽自我最终是什么。",
      "你的难处是把形而上的洞见带回寻常的责任之中。"
    ],
    readings: [
      { title: "《薄伽梵歌》", author: "印度教经典", note: "论行动、义务、虔信、智慧与解脱的核心文本。" },
      { title: "《奥义书》", author: "印度教哲学经典", note: "论自我、终极实在与意识的奠基性文本。" },
      { title: "《梵经》", author: "跋达罗衍那", note: "吠檀多诠释的系统性源头。" }
    ]
  },
  christian_personalist: {
    notes: [
      "你的结果显示，人拥有神圣的尊严，因为他被爱、被造、被召唤。",
      "你多半把道德生活与怜悯、爱邻人、罪、救赎，以及在上帝面前的责任连在一起。",
      "你的难处是别让信仰硬化为道德主义或对体制的护短。"
    ],
    readings: [
      { title: "《忏悔录》", author: "奥古斯丁", note: "关于欲望、恩典、记忆与皈依的经典内省之作。" },
      { title: "《神学大全》选读", author: "托马斯·阿奎那", note: "关于德性、律法、上帝与道德生活的结构化阐述。" },
      { title: "《漫长的孤独》", author: "多萝西·戴", note: "对基督教人格主义、团结与怜悯的现代见证。" }
    ]
  },
  jewish_covenantal: {
    notes: [
      "你的结果指向盟约、律法、记忆、争辩与修复，把它们视为意义被活出来的方式。",
      "你多半把真理看作在活的共同体中被诠释与践行之物，而非仅供私下沉思。",
      "你的难处是在承继的义务与个人良知、多元并存之间取得平衡。"
    ],
    readings: [
      { title: "《迷途指津》", author: "迈蒙尼德", note: "犹太哲学中把理性与启示并置的一次重大尝试。" },
      { title: "《我与你》", author: "马丁·布伯", note: "论关系、临在与相遇的简短现代文本。" },
      { title: "《艰难的自由》", author: "列维纳斯", note: "论伦理、犹太教、责任与他者的文集。" }
    ]
  },
  islamic_falsafa: {
    notes: [
      "你的结果显示，理性、启示、律法、德性与神圣的独一性同属一个道德宇宙。",
      "你多半把知识看作应当引导整全的人趋向真理与公义的东西。",
      "你的难处是在坚定的信念之外，仍保有诠释上的谦逊。"
    ],
    readings: [
      { title: "《决定性论文》", author: "伊本·鲁世德", note: "关于哲学、理性与启示律法的经典论证。" },
      { title: "《哲学家的矛盾》", author: "安萨里", note: "自伊斯兰思想内部对哲学越界所作的重要批评。" },
      { title: "《治疗论》选读", author: "伊本·西那", note: "形而上学、心灵学与哲学神学的里程碑之作。" }
    ]
  },
  mystical: {
    notes: [
      "你的结果指向静默、转化，以及与超出寻常语言之物的直接相遇。",
      "你多半既不信任扁平的理性主义，也不信任那些不改变人的、纯属承继的公式。",
      "你的难处是让内在的深度对伦理的清明与共同的生活负责。"
    ],
    readings: [
      { title: "《鲁米诗选》", author: "鲁米", note: "关于渴慕、合一、爱与灵性转化的诗。" },
      { title: "《七宝楼台》", author: "大德兰", note: "一幅关于默观内在生活的经典地图。" },
      { title: "《重负与神恩》", author: "西蒙娜·薇依", note: "论专注、苦难、恩典与自我倒空的断片。" }
    ]
  },
  humanist: {
    notes: [
      "你的结果显示，尊严、教育、创造力与道德成长在你的世界观中居于中心。",
      "你多半相信人能够思考、关怀、建造并改善处境，而不必把每个答案都建立在神命或形而上的确定性之上。",
      "你的难处是避免对人性或进步抱持过于轻易的乐观。"
    ],
    readings: [
      { title: "《愚人颂》", author: "伊拉斯谟", note: "文艺复兴人文主义对矫饰与教条的机智批评。" },
      { title: "《培育人性》", author: "玛莎·努斯鲍姆", note: "对博雅教育、尊严与世界公民的辩护。" },
      { title: "《越界的教学》", author: "贝尔·胡克斯", note: "把教育视为自由与转化的人文主义构想。" }
    ]
  },
  romantic: {
    notes: [
      "你的结果指向情感、想象、美、自然与强度，把它们视为认知的方式。",
      "你多半抗拒那些把生活压平为计算、官僚或纯粹有用性的世界观。",
      "你的难处是给强度以纪律与关怀，使它不至于变成自我沉溺。"
    ],
    readings: [
      { title: "《一个孤独漫步者的遐想》", author: "卢梭", note: "关于内在性、自然与情感的沉思性源头。" },
      { title: "《审美教育书简》", author: "席勒", note: "浪漫时代关于美与自由的重要论证。" },
      { title: "《为女权辩护》", author: "玛丽·沃斯通克拉夫特", note: "衔接启蒙与浪漫、论尊严与教育的激情之作。" }
    ]
  },
  liberal_contractarian: {
    notes: [
      "你的结果显示，自由需要权利、公平、同意与持久的制度。",
      "你多半在意守护自由而多元的生活，不让某一群体支配其余的人。",
      "你的难处是看清：形式上的平等何时不足以修复物质或社会层面的排斥。"
    ],
    readings: [
      { title: "《政府论》下篇", author: "洛克", note: "关于权利、同意与正当政府的经典源头。" },
      { title: "《正义论》", author: "罗尔斯", note: "论公平、制度与政治自由主义的核心现代文本。" },
      { title: "《恐惧的自由主义》", author: "朱迪丝·施克莱", note: "以残酷与支配为核心的简练自由主义论证。" }
    ]
  },
  marxist_critical: {
    notes: [
      "你的结果指向官方道德语言之下的权力、劳动、意识形态与物质条件。",
      "你多半会追问：眼下的安排让谁得了好处，又是谁的苦难被说成天经地义。",
      "你的难处是在分析结构时保住个体的复杂性。"
    ],
    readings: [
      { title: "《1844年经济学哲学手稿》", author: "马克思", note: "论异化、劳动与人的生活的、可读的早期马克思文本。" },
      { title: "《黑人的灵魂》", author: "杜波依斯", note: "论种族、历史、社会结构与意识的奠基之作。" },
      { title: "《启蒙辩证法》", author: "阿多诺与霍克海默", note: "对理性、文化与支配的、艰深但影响深远的批判。" }
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
    title: "当人生向你索要意义时，你最被什么吸引…",
    copy: "选择最像你默认取向的那个答案。",
    mode: "single",
    answers: [
      { text: "选择一种我可以坦然认作自己的人生。", weights: { existentialist: 3, humanist: 1 } },
      { text: "面对宇宙的沉默，而不寻求虚假的安慰。", weights: { absurdist: 3, nihilist: 1 } },
      { text: "在表象之下发现一种更深的秩序。", weights: { platonist: 3, vedantic: 1, mystical: 1 } },
      { text: "忠实地活在一项神圣的召唤或盟约之中。", weights: { christian_personalist: 2, jewish_covenantal: 2, islamic_falsafa: 2 } },
      { text: "减少痛苦，改善真实的生活。", weights: { utilitarian: 2, care_ethicist: 2, humanist: 1 } },
      { text: "让意义更轻、更安静、更不勉强。", weights: { daoist: 3, epicurean: 1, buddhist: 1 } }
    ]
  },
  {
    id: "good-life",
    title: "好的生活最接近于…",
    copy: "选择最不显得矫揉造作的那种说法。",
    mode: "single",
    answers: [
      { text: "在品格、判断与友谊上培育出的卓越。", weights: { aristotelian: 3, stoic: 1 } },
      { text: "简单的快乐、心境的平和，以及可信赖的同伴。", weights: { epicurean: 3, daoist: 1 } },
      { text: "责任、礼仪、人伦与仁厚的举止。", weights: { confucian: 3, care_ethicist: 1, jewish_covenantal: 1 } },
      { text: "人的尊严、教育、创造力与道德成长。", weights: { humanist: 3, liberal_contractarian: 2 } },
      { text: "从执著、幻象或灵性的无明中解脱。", weights: { buddhist: 2, vedantic: 2, mystical: 1 } },
      { text: "拒绝虚荣、奢华、地位与社交剧场。", weights: { cynic: 3, nihilist: 1 } }
    ]
  },
  {
    id: "knowledge",
    title: "当有人提出一个重大主张时，你首先想要…",
    copy: "哪一种支持最有分量？",
    mode: "single",
    answers: [
      { text: "可以观察、检验或纠正的证据。", weights: { empiricist: 3, skeptic: 1 } },
      { text: "一个经得起细致追问的清晰论证。", weights: { skeptic: 2, kantian: 3, islamic_falsafa: 1 } },
      { text: "证明这个观念在人们照着生活时确实管用。", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "看见表面之下更深的模式。", weights: { platonist: 3, vedantic: 1 } },
      { text: "经由传统、注疏与实践检验过的智慧。", weights: { confucian: 2, jewish_covenantal: 2, christian_personalist: 1 } },
      { text: "足够的谦逊，承认确定性也许非我们所能及。", weights: { skeptic: 2, buddhist: 1, absurdist: 1 } }
    ]
  },
  {
    id: "suffering",
    title: "痛苦进入了画面。",
    copy: "哪一种回应显得最有智慧？",
    mode: "single",
    answers: [
      { text: "强化自身中那个能体面地迎接它的部分。", weights: { stoic: 2, kantian: 2, aristotelian: 1 } },
      { text: "看清那使它加剧的贪求、执著或幻象。", weights: { buddhist: 3, vedantic: 1 } },
      { text: "围绕「让尽可能多的人少受苦」来组织行动。", weights: { utilitarian: 3, marxist_critical: 1 } },
      { text: "守在我面前这个脆弱的人身旁。", weights: { care_ethicist: 3, christian_personalist: 1 } },
      { text: "拒绝虚假的安慰，直面其中的怪异。", weights: { absurdist: 3, nihilist: 1 } },
      { text: "在伤口之中寻找怜悯、修复或救赎。", weights: { christian_personalist: 2, jewish_covenantal: 1, mystical: 1 } }
    ]
  },
  {
    id: "transcendence",
    title: "超越的可能性让你觉得…",
    copy: "这不是问你正式相信什么，只是问你被什么吸引。",
    mode: "single",
    answers: [
      { text: "至关重要：实在最终奠基于神圣。", weights: { christian_personalist: 3, islamic_falsafa: 2, jewish_covenantal: 1 } },
      { text: "真实，但经由静默与转化比经由教义更能接近。", weights: { mystical: 3, vedantic: 1, buddhist: 1 } },
      { text: "这是关于终极意识或解脱的问题。", weights: { vedantic: 4, mystical: 1 } },
      { text: "一种高贵的可能，但理性必须仔细审视它。", weights: { platonist: 2, islamic_falsafa: 1, skeptic: 1 } },
      { text: "并无必要：自然世界已足够供人探究。", weights: { empiricist: 3, humanist: 1 } },
      { text: "可疑：超越可能成为逃避空无的一种方式。", weights: { nihilist: 3, cynic: 1, absurdist: 1 } }
    ]
  },
  {
    id: "ethics-priority",
    title: "在道德困境中，什么最先重要？",
    copy: "如果有不止一项都很重要，最多可选两项。",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "把每个人当作目的来尊重，绝不只当作工具。", weights: { kantian: 3, liberal_contractarian: 2 } },
      { text: "带来整体上最好的后果。", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "成为一个能够判断得当的人。", weights: { aristotelian: 3, stoic: 1 } },
      { text: "忠实地回应具体的需要与依赖。", weights: { care_ethicist: 3, confucian: 1 } },
      { text: "出于怜悯、公义与神圣的义务而行动。", weights: { christian_personalist: 1, jewish_covenantal: 2, islamic_falsafa: 2 } },
      { text: "拒绝虚伪、地位与惯常的托词。", weights: { cynic: 3, existentialist: 1 } }
    ]
  },
  {
    id: "society",
    title: "当社会失灵时，你的直觉是去追问…",
    copy: "你最先诉诸哪种诊断？",
    mode: "single",
    answers: [
      { text: "哪些制度已不再保护权利、公平与多元？", weights: { liberal_contractarian: 3, kantian: 2 } },
      { text: "眼下权力的物质安排让谁得了好处？", weights: { marxist_critical: 3, cynic: 1 } },
      { text: "哪些关系、角色与共同实践已经崩坏？", weights: { confucian: 3, aristotelian: 1 } },
      { text: "谁的尊严与发展正在被阻断？", weights: { humanist: 3, care_ethicist: 1 } },
      { text: "哪项政策会带来最好的具体结果？", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "公义、盟约或神圣的诫命在哪里被背弃了？", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "religion-posture",
    title: "宗教传统在其最好的状态下，是…",
    copy: "选择你觉得最有说服力的那个版本，即便你并无信仰。",
    mode: "single",
    answers: [
      { text: "对神圣之爱、恩典与邻人的一种有纪律的回应。", weights: { christian_personalist: 3, care_ethicist: 1 } },
      { text: "一种关于律法、记忆、争辩与修复的立约实践。", weights: { jewish_covenantal: 3, confucian: 1 } },
      { text: "理性、虔敬、律法与公义的一个完整取向。", weights: { islamic_falsafa: 3, kantian: 1 } },
      { text: "一条经由洞察自我与终极实在而通向解脱的道路。", weights: { vedantic: 3, mystical: 1 } },
      { text: "一条超出寻常语言与自我的默观之路。", weights: { mystical: 3, buddhist: 1 } },
      { text: "即便在最好的状态下，也是一种值得接受历史与社会批判的人的实践。", weights: { skeptic: 2, nihilist: 2, marxist_critical: 1 } }
    ]
  },
  {
    id: "self",
    title: "自我最好被理解为…",
    copy: "选择你觉得最可信的那种说法。",
    mode: "single",
    answers: [
      { text: "一项由选择、承诺与责任塑造的筹划。", weights: { existentialist: 3, humanist: 1 } },
      { text: "比我们以为的更不固定，而且一旦抓取就成为苦的来源。", weights: { buddhist: 3, daoist: 1 } },
      { text: "神圣尊严与天职的承载者。", weights: { christian_personalist: 2, islamic_falsafa: 1, jewish_covenantal: 1 } },
      { text: "一种可以研究的自然现象，无需形而上的夸饰。", weights: { empiricist: 3, skeptic: 1 } },
      { text: "一个由关系塑成、承担角色的人。", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "常常是一个好用却没有终极根据的故事。", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "power",
    title: "面对权力与制度，应当以什么姿态相待…",
    copy: "选择你的第一姿态。",
    mode: "single",
    answers: [
      { text: "权利、界限、同意与公开的辩明。", weights: { liberal_contractarian: 3, kantian: 2 } },
      { text: "对劳动、意识形态与支配的物质分析。", weights: { marxist_critical: 3, nihilist: 1 } },
      { text: "在其主张经得起审视之前，保持怀疑。", weights: { skeptic: 3, pragmatist: 1 } },
      { text: "要求它服务于具体的人的兴盛。", weights: { humanist: 2, utilitarian: 1, care_ethicist: 1 } },
      { text: "带着怀疑去留意：权力通常自我美化。", weights: { cynic: 3, absurdist: 1 } },
      { text: "把它当作在上帝、律法或神圣秩序面前的公义问题。", weights: { islamic_falsafa: 2, jewish_covenantal: 1, christian_personalist: 1 } }
    ]
  },
  {
    id: "uncertainty",
    title: "当你不确定什么是真的时，你会…",
    copy: "选择最像你的那个习惯。",
    mode: "single",
    answers: [
      { text: "先悬置判断，等这个主张赢得更多信任。", weights: { skeptic: 3, empiricist: 1 } },
      { text: "试一点小小的做法，看现实教给我什么。", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "把重点放在即便知识不全也要做得好上。", weights: { stoic: 3, kantian: 1 } },
      { text: "松开那种非要握有答案不可的需求。", weights: { buddhist: 2, daoist: 2 } },
      { text: "接受这份张力，继续生活，而不假装它已消失。", weights: { absurdist: 3, existentialist: 1 } },
      { text: "信赖一个经过检验的传统，同时继续诠释它。", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "beauty",
    title: "美之所以重要，是因为…",
    copy: "选择最不像是可有可无的那个答案。",
    mode: "single",
    answers: [
      { text: "它让情感、想象与强度说出真理。", weights: { romantic: 4, existentialist: 1 } },
      { text: "它指向寻常表面之外的理想。", weights: { platonist: 3, mystical: 1 } },
      { text: "它扩展了人的同情与可能性。", weights: { humanist: 2, care_ethicist: 1, confucian: 1 } },
      { text: "它能让荒诞变得可以忍受，而不把它解释掉。", weights: { absurdist: 3, nihilist: 1 } },
      { text: "它可以是人生中一种简单而有恢复力的快乐。", weights: { epicurean: 3, daoist: 1 } },
      { text: "它是人性的一部分，可以不加神秘化地加以研究。", weights: { empiricist: 3, skeptic: 1 } }
    ]
  },
  {
    id: "tradition",
    title: "对待传统，应当把它看作…",
    copy: "选择你默认的姿态。",
    mode: "single",
    answers: [
      { text: "一份活的遗产，能训练责任与敬重。", weights: { confucian: 3, jewish_covenantal: 1 } },
      { text: "一场可能掩盖权力、恐惧或懒惰的表演。", weights: { cynic: 3, marxist_critical: 1 } },
      { text: "一套只在仍然管用之处才值得保留的做法。", weights: { pragmatist: 3, skeptic: 1 } },
      { text: "品格养成的来源，但并不免于被评判。", weights: { aristotelian: 3, kantian: 1 } },
      { text: "一份要求忠实诠释的神圣遗产。", weights: { christian_personalist: 2, jewish_covenantal: 2, islamic_falsafa: 1 } },
      { text: "我承继来的材料，在选择自己时可留、可改、可弃。", weights: { existentialist: 3, romantic: 1 } }
    ]
  },
  {
    id: "rules",
    title: "规则之所以有价值，是当…",
    copy: "什么让一条规则具有正当性？",
    mode: "single",
    answers: [
      { text: "它们表达了尊重每个人尊严的义务。", weights: { kantian: 3, liberal_contractarian: 2 } },
      { text: "它们可靠地改善后果、减少伤害。", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "它们训练品格，而不取代判断。", weights: { aristotelian: 3, confucian: 1 } },
      { text: "它们保护脆弱的关系与具体的需要。", weights: { care_ethicist: 3, humanist: 1 } },
      { text: "它们植根于神圣的秩序、盟约或神圣律法。", weights: { islamic_falsafa: 2, jewish_covenantal: 2, christian_personalist: 1 } },
      { text: "它们够轻，不至于与生活的形状相抵触。", weights: { daoist: 3, epicurean: 1 } }
    ]
  },
  {
    id: "ambition",
    title: "野心是…",
    copy: "你最诚实的反应是什么？",
    mode: "single",
    answers: [
      { text: "若不加约束，往往只是虚荣的别名。", weights: { cynic: 2, stoic: 2 } },
      { text: "当它培育卓越与实践智慧时，是好的。", weights: { aristotelian: 3, humanist: 1 } },
      { text: "当它扩展自由或兴盛时，才值得。", weights: { humanist: 2, liberal_contractarian: 1, utilitarian: 1 } },
      { text: "一团能让人生鲜明、冒险而真实的火。", weights: { romantic: 3, existentialist: 1 } },
      { text: "一种该在它偷走安宁之前加以限制的欲望。", weights: { epicurean: 3, buddhist: 1 } },
      { text: "一个让竞争显得有意义的故事。", weights: { nihilist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "community",
    title: "个人自由与共同体彼此拉扯。",
    copy: "你偏向哪一边？",
    mode: "single",
    answers: [
      { text: "人是通过义务与关系而成为完整的。", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "没有任何共同体有权替我选择我的人生。", weights: { existentialist: 2, liberal_contractarian: 2 } },
      { text: "自由之所以重要，是因为人需要成长的余地。", weights: { humanist: 3, kantian: 1 } },
      { text: "共同体应当由它如何分配权力与劳动来评判。", weights: { marxist_critical: 3, utilitarian: 1 } },
      { text: "自我与共同体都该被轻轻地、慈悲地持守。", weights: { buddhist: 2, daoist: 1, confucian: 1 } },
      { text: "共同体由盟约、爱邻人或神圣的公义所约束。", weights: { jewish_covenantal: 2, christian_personalist: 1, islamic_falsafa: 1 } }
    ]
  },
  {
    id: "universe",
    title: "宇宙在根底上似乎是…",
    copy: "选择最接近你形而上「天气」的那种描述。",
    mode: "single",
    answers: [
      { text: "自然的、可观察的，并且没有义务符合我们的愿望。", weights: { empiricist: 3, skeptic: 1 } },
      { text: "由比表象更深的实在或理想所构造的。", weights: { platonist: 3, vedantic: 1 } },
      { text: "对人的价值保持沉默，无论我们讲什么故事。", weights: { nihilist: 3, absurdist: 1 } },
      { text: "被创造、被维系，并带有道德的分量。", weights: { christian_personalist: 2, islamic_falsafa: 2, jewish_covenantal: 1 } },
      { text: "一种可与之和谐的图式，而非一道待征服的难题。", weights: { daoist: 3, buddhist: 1 } },
      { text: "一种在转化中比在解释中更真切地被遭遇的奥秘。", weights: { mystical: 3, romantic: 1 } }
    ]
  },
  {
    id: "crisis",
    title: "在危机中，你最能派上用场的方式是…",
    copy: "你会自然承担什么角色？",
    mode: "single",
    answers: [
      { text: "保持镇定，专注于下一件该做的事。", weights: { stoic: 3, kantian: 1 } },
      { text: "为各种需要分出轻重缓急，以防止最大的伤害。", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "随着新信息出现而迅速调整。", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "以责任与信任把大家凝聚在一起。", weights: { confucian: 3, care_ethicist: 1 } },
      { text: "清楚而慈悲地看见恐惧，从而降低恐慌。", weights: { buddhist: 3, stoic: 1 } },
      { text: "在程序变得机械时，找回人的脉搏。", weights: { romantic: 2, humanist: 1, christian_personalist: 1 } }
    ]
  },
  {
    id: "education",
    title: "教育首先应当…",
    copy: "学习应当在人身上养成什么？",
    mode: "single",
    answers: [
      { text: "扩展尊严、自由、同情与人的可能性。", weights: { humanist: 3, liberal_contractarian: 2 } },
      { text: "使心灵转向真理、美与更高的理想。", weights: { platonist: 3, mystical: 1 } },
      { text: "教人如何审慎地探究实在。", weights: { empiricist: 3, skeptic: 1 } },
      { text: "培育品格、判断与追求卓越的习惯。", weights: { aristotelian: 3, stoic: 1 } },
      { text: "让人有能力在变动的条件下解决问题。", weights: { pragmatist: 3, utilitarian: 1 } },
      { text: "传递智慧、律法、记忆与有纪律的诠释。", weights: { jewish_covenantal: 2, islamic_falsafa: 1, confucian: 1 } }
    ]
  },
  {
    id: "time",
    title: "时间与无常让你想到…",
    copy: "哪个念头最熟悉？",
    mode: "single",
    answers: [
      { text: "问题在于抓取；慈悲依然可能。", weights: { buddhist: 3, daoist: 1 } },
      { text: "变化不归我支配，但我的回应归我。", weights: { stoic: 3, existentialist: 1 } },
      { text: "正因为时刻会流逝，美才重要。", weights: { romantic: 4, epicurean: 1 } },
      { text: "在焦虑把它们偷走之前，享受寻常的好东西。", weights: { epicurean: 3, buddhist: 1 } },
      { text: "记忆与礼仪让共同体在道德上保持清醒。", weights: { jewish_covenantal: 2, confucian: 2 } },
      { text: "流逝的时间本身没有教训；有限的机会要怎么用，由我决定。", weights: { existentialist: 3, absurdist: 1 } }
    ]
  },
  {
    id: "care",
    title: "当有人依赖你时，最核心的事实是…",
    copy: "选择在道德上让你觉得最真实的那句话。",
    mode: "single",
    answers: [
      { text: "他们具体的需要造成了一份任何理论都不该抹去的责任。", weights: { care_ethicist: 3, humanist: 1 } },
      { text: "他们仍须被当作人来尊重，而不是当作个案来管理。", weights: { kantian: 3, christian_personalist: 1, liberal_contractarian: 1 } },
      { text: "关系本身在时间中形成了义务。", weights: { confucian: 2, jewish_covenantal: 1, aristotelian: 1 } },
      { text: "慈悲应当松开那个想要功劳或掌控的自我。", weights: { buddhist: 2, mystical: 1, daoist: 1 } },
      { text: "正确的回应，是最能减少痛苦的那一个。", weights: { utilitarian: 3, pragmatist: 1 } },
      { text: "需要暴露的是制度的失败，而不只是个人的。", weights: { marxist_critical: 3, care_ethicist: 1 } }
    ]
  },
  {
    id: "select-attractions",
    title: "你在自己身上认出哪些冲动？",
    copy: "最多选两项。",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "把生活简化到几乎没有什么能占有我。", weights: { cynic: 2, epicurean: 1, daoist: 1 } },
      { text: "为彼此意见不合的人建立公平的制度。", weights: { liberal_contractarian: 3, kantian: 1 } },
      { text: "揭穿意识形态、阶级、支配或隐蔽的权力。", weights: { marxist_critical: 3, nihilist: 1 } },
      { text: "祈祷、默观，或在寻常语言之外聆听。", weights: { mystical: 3, christian_personalist: 1, vedantic: 1 } },
      { text: "在生活中检验观念，而不只是欣赏它们。", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "让经验变得鲜明、美好而深具个人性。", weights: { romantic: 3, existentialist: 1 } }
    ]
  },
  {
    id: "discomforts",
    title: "什么最让你不安？",
    copy: "如果有两项同等重要，最多可选两项。",
    mode: "multi",
    maxSelect: 2,
    answers: [
      { text: "价值也许除了人的投射之外并无根据。", weights: { nihilist: 3, skeptic: 1 } },
      { text: "我们对意义的需要，也许超出了实在所能给予的。", weights: { absurdist: 3, existentialist: 1 } },
      { text: "我可能靠借口过日子，而不是诚实地选择。", weights: { existentialist: 3, kantian: 1 } },
      { text: "贪求可能让我错过自己真正在过的这一生。", weights: { buddhist: 3, epicurean: 1 } },
      { text: "社会把支配当作正常甚至自然的事。", weights: { marxist_critical: 3, liberal_contractarian: 1 } },
      { text: "信仰或传统可能沦为空洞的表演。", weights: { christian_personalist: 1, jewish_covenantal: 1, islamic_falsafa: 1, cynic: 1 } },
      { text: "人可以一边成功，一边忽视那些造就了他的关系与责任。", weights: { confucian: 3, care_ethicist: 2, aristotelian: 1 } }
    ]
  },
  {
    id: "free-day",
    title: "你理想中的空闲一天包括…",
    copy: "选择听起来最能让你恢复元气的场景。",
    mode: "single",
    answers: [
      { text: "一顿悠长的饭、轻松的交谈，以及全无焦躁的奔忙。", weights: { epicurean: 3, confucian: 1 } },
      { text: "散步、音乐、天气，以及强烈地活着的感觉。", weights: { romantic: 3, daoist: 1 } },
      { text: "博物馆、实验室、档案，或写满观察的野外笔记。", weights: { empiricist: 3, skeptic: 1 } },
      { text: "随着这一天的展开而安静地移动。", weights: { daoist: 3, buddhist: 1 } },
      { text: "一场有分量的仪式，或与我有照顾之责的人相聚。", weights: { confucian: 2, jewish_covenantal: 1, care_ethicist: 1 } },
      { text: "静默、祈祷、研读或默观。", weights: { mystical: 2, christian_personalist: 1, islamic_falsafa: 1, vedantic: 1 } }
    ]
  },
  {
    id: "motto",
    title: "如果只能带一句箴言，你会带…",
    copy: "选择你照着活也最不会难为情的那一句。",
    mode: "single",
    answers: [
      { text: "以你的选择，成为你自己。", weights: { existentialist: 3, romantic: 1 } },
      { text: "守住判断；以德性迎接世界。", weights: { stoic: 3, kantian: 1 } },
      { text: "在力所能及处减少痛苦，让生活好一点。", weights: { utilitarian: 3, humanist: 1 } },
      { text: "行之有效者从之，行不通者改之，学不止息。", weights: { pragmatist: 3, empiricist: 1 } },
      { text: "放手，轻装而行，不去硬推那条河。", weights: { daoist: 3, buddhist: 1 } },
      { text: "爱、公义与真理所要求的，多于一己之身。", weights: { christian_personalist: 1, jewish_covenantal: 1, islamic_falsafa: 1, care_ethicist: 1 } }
    ]
  },
  {
    id: "ai-design",
    title: "在打造一套 AI 系统时，什么最应当主导它的设计？",
    copy: "当重要目标彼此竞争时，选择你会最先确立的原则。",
    mode: "single",
    answers: [
      { text: "有些权利与人的尊严，绝不可为更好的性能而牺牲。", weights: { kantian: 3, liberal_contractarian: 2 } },
      { text: "检验它的真实影响，并持续修改以减少伤害、改善结果。", weights: { utilitarian: 3, pragmatist: 2, empiricist: 1 } },
      { text: "让受影响的人在它的设计、规则与申诉程序上有实质的发言权。", weights: { care_ethicist: 2, confucian: 2, liberal_contractarian: 1 } },
      { text: "审视谁提供了劳动与数据、谁掌控这套系统、谁从中获益。", weights: { marxist_critical: 3, cynic: 1 } },
      { text: "把它设计成增强人的判断与能力，而不是悄悄取而代之。", weights: { aristotelian: 3, humanist: 2 } },
      { text: "在后果尚不明朗时，让它的使用保持有限、可撤回并受到密切监测。", weights: { skeptic: 3, empiricist: 2 } }
    ]
  },
  {
    id: "ai-authorship",
    title: "当 AI 协助创作以你的名义呈现的东西时，什么最重要？",
    copy: "想想一封信、一份报告、一幅图像或一段音乐。",
    mode: "single",
    answers: [
      { text: "对它是怎么做出来的保持诚实，不把不是我做的工作算在自己头上。", weights: { kantian: 3, liberal_contractarian: 1 } },
      { text: "使用它是否在不造成比替代方案更多伤害的前提下改进了结果。", weights: { utilitarian: 3, pragmatist: 2 } },
      { text: "保留足够的理解与练习，好让我自己的判断与能力仍在长进。", weights: { aristotelian: 3, humanist: 1 } },
      { text: "这套系统如何取得训练材料，是否有人的劳动正被剥削。", weights: { marxist_critical: 3, care_ethicist: 1 } },
      { text: "成果是否仍表达了某种我真心选择并愿意为之负责的东西。", weights: { existentialist: 3, romantic: 1 } },
      { text: "我是否在用效率来逃避亏欠另一个人的那份关注或用心。", weights: { care_ethicist: 3, confucian: 1, christian_personalist: 1 } }
    ]
  },
  {
    id: "faith-reason",
    title: "信仰与理性应当…",
    copy: "选择你觉得最说得通的那种关系。",
    mode: "single",
    answers: [
      { text: "携手并行，让理性加深虔敬与律法。", weights: { islamic_falsafa: 3, christian_personalist: 1 } },
      { text: "在一个活的传统内部彼此争辩。", weights: { jewish_covenantal: 3, skeptic: 1 } },
      { text: "一同朝向爱、怜悯与具体的人。", weights: { christian_personalist: 3, care_ethicist: 1 } },
      { text: "在语言穷尽之处，让位于默观的洞见。", weights: { mystical: 3, vedantic: 1 } },
      { text: "相对于证据与自然解释而言，处于次要位置。", weights: { empiricist: 3, humanist: 1 } },
      { text: "被当作需要批判的人的产物来对待。", weights: { marxist_critical: 2, nihilist: 2, cynic: 1 } },
      { text: "在培育感恩、责任与良好关系的实践中相遇。", weights: { confucian: 3, pragmatist: 1, aristotelian: 1 } }
    ]
  }
];

const ROUTES = {
  meta: {
    label: "重大观念",
    format: "meta",
    resultTitle: "一条概念式的入口",
    resultDescription: "你选择通过明说的观念、区分与第一原理来接近哲学。这是本测验中观察到的一种偏好，而非固定的人格类型。"
  },
  scenario: {
    label: "日常抉择",
    format: "scenario",
    resultTitle: "一条情境式的入口",
    resultDescription: "你选择从细小的决定、熟悉的摩擦与日常生活的质地开始。这是本测验中观察到的一种偏好，而非固定的人格类型。"
  },
  visual: {
    label: "透过艺术",
    format: "visual",
    resultTitle: "一条诠释式的入口",
    resultDescription: "你选择通过图像、注视、多义与视角来接近观念。这是本测验中观察到的一种偏好，而非固定的人格类型。"
  },
  mixed: {
    label: "各样都来一点",
    format: "mixed",
    resultTitle: "一条探索式的入口",
    resultDescription: "你在直接的观念、日常的处境与图像之间穿行，而不是只依赖通向哲学的某一道门。"
  }
};

const MIXED_FORMAT_SEQUENCE = ["scenario", "visual", "meta"];

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
  route: null,
  initialRoute: null,
  routePickerOpen: true,
  currentIndex: 0,
  path: [...QUESTION_SEEDS],
  responses: {},
  responseFormats: {},
  shareData: null,
  shareText: "",
  shareImagePromise: null,
  shareImageDataUrlPromise: null
};

const els = {
  routeView: document.querySelector("#route-view"),
  routeGrid: document.querySelector("#route-grid"),
  routeActions: document.querySelector("#route-actions"),
  cancelRouteButton: document.querySelector("#cancel-route-button"),
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  quizForm: document.querySelector("#quiz-form"),
  questionCount: document.querySelector("#question-count"),
  questionMode: document.querySelector("#question-mode"),
  progressFill: document.querySelector("#progress-fill"),
  questionTitle: document.querySelector("#question-title"),
  questionCopy: document.querySelector("#question-copy"),
  questionMedia: document.querySelector("#question-media"),
  optionsList: document.querySelector("#options-list"),
  backButton: document.querySelector("#back-button"),
  nextButton: document.querySelector("#next-button"),
  resultTitle: document.querySelector("#result-title"),
  resultSummary: document.querySelector("#result-summary"),
  resultDescription: document.querySelector("#result-description"),
  secondaryResult: document.querySelector("#secondary-result"),
  resultThinkers: document.querySelector("#result-thinkers"),
  thinkingStyleTitle: document.querySelector("#thinking-style-title"),
  thinkingStyleDescription: document.querySelector("#thinking-style-description"),
  affinityList: document.querySelector("#affinity-list"),
  readingList: document.querySelector("#reading-list"),
  retakeButton: document.querySelector("#retake-button"),
  anotherRouteButton: document.querySelector("#another-route-button"),
  copyButton: document.querySelector("#copy-button"),
  copyStatus: document.querySelector("#copy-status"),
  viewCategoriesButton: document.querySelector("#view-categories-button"),
  categoryDirectory: document.querySelector("#category-directory"),
  categoryList: document.querySelector("#category-list")
};

const questionById = Object.fromEntries(QUESTIONS.map((question) => [question.id, question]));

function getFormatForQuestion(questionId) {
  const route = state.route || "meta";
  if (route !== "mixed") return ROUTES[route].format;
  const pathIndex = Math.max(0, state.path.indexOf(questionId));
  return MIXED_FORMAT_SEQUENCE[pathIndex % MIXED_FORMAT_SEQUENCE.length];
}

function getQuestionPresentation(question) {
  const format = getFormatForQuestion(question.id);
  let variant = null;

  if (format === "scenario" && typeof SCENARIO_VARIANTS !== "undefined") {
    variant = SCENARIO_VARIANTS[question.id];
  } else if (format === "visual" && typeof VISUAL_VARIANTS !== "undefined") {
    variant = VISUAL_VARIANTS[question.id];
  }

  if (!variant) {
    return { ...question, format: "meta", artwork: null, prompt: "" };
  }

  return {
    ...question,
    ...variant,
    format,
    artwork: format === "visual" && typeof ARTWORKS !== "undefined"
      ? ARTWORKS[variant.artwork]
      : null,
    answers: question.answers.map((answer, index) => ({
      ...answer,
      text: variant.answers[index]
    }))
  };
}

function showRoutePicker() {
  state.routePickerOpen = true;
  els.quizView.classList.add("is-hidden");
  els.resultView.classList.add("is-hidden");
  els.routeView.classList.remove("is-hidden");
  els.routeActions.classList.toggle("is-hidden", !state.route);
  els.questionCount.textContent = state.route ? ROUTES[state.route].label : "选择一条路线";
  document.querySelectorAll(".route-card").forEach((card) => {
    card.classList.toggle("is-current", card.dataset.route === state.route);
    card.setAttribute("aria-pressed", card.dataset.route === state.route ? "true" : "false");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function chooseRoute(route) {
  if (!ROUTES[route]) return;
  state.route = route;
  state.initialRoute ||= route;
  state.routePickerOpen = false;
  els.routeView.classList.add("is-hidden");
  els.resultView.classList.add("is-hidden");
  els.quizView.classList.remove("is-hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
  focusQuestionHeading();
}

function getThinkingStyle() {
  const answeredIds = getAnsweredQuestionIds();
  const counts = { meta: 0, scenario: 0, visual: 0 };
  answeredIds.forEach((id) => {
    const format = state.responseFormats[id] || "meta";
    counts[format] = (counts[format] || 0) + 1;
  });
  const usedFormats = Object.entries(counts).filter(([, count]) => count > 0);
  const dominant = [...usedFormats].sort((a, b) => b[1] - a[1])[0];
  const exploratory = usedFormats.length >= 3
    || (usedFormats.length > 1 && dominant[1] / answeredIds.length < 0.7);

  if (exploratory) return ROUTES.mixed;
  const routeForFormat = Object.values(ROUTES).find((route) => route.format === dominant?.[0]);
  return routeForFormat || ROUTES[state.initialRoute] || ROUTES.meta;
}

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
  const prefix = state.path.slice(0, state.currentIndex + 1);
  const future = state.path.slice(state.currentIndex + 1);
  future.forEach((questionId) => {
    delete state.responses[questionId];
    delete state.responseFormats[questionId];
  });
  const remainingSeeds = QUESTION_SEEDS.filter((id) => !prefix.includes(id));
  state.path = [...prefix, ...remainingSeeds];
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

  state.responseFormats[question.id] = getFormatForQuestion(question.id);

  truncateFuture();
  renderQuestion();
  document.querySelector(`#${question.id}-a${index}`)?.focus();
}

function focusQuestionHeading() {
  window.setTimeout(() => els.questionTitle.focus({ preventScroll: true }), 0);
}

function renderQuestion() {
  const baseQuestion = getCurrentQuestion();
  const question = getQuestionPresentation(baseQuestion);
  const selected = state.responses[baseQuestion.id] || [];
  const answered = getAnsweredQuestionIds().length;
  const projectedTotal = Math.max(MAX_QUESTIONS, state.path.length);
  const progress = Math.min((answered / projectedTotal) * 100, 96);
  const isMulti = question.mode === "multi";
  const formatLabels = {
    meta: "重大观念",
    scenario: "日常抉择",
    visual: "透过艺术"
  };

  els.questionCount.textContent = `第 ${state.currentIndex + 1} 题`;
  els.questionMode.textContent = `${formatLabels[question.format]} · ${isMulti ? `最多选 ${question.maxSelect} 项` : "单选"}`;
  els.progressFill.style.width = `${progress}%`;
  els.questionTitle.textContent = question.title;
  els.questionCopy.textContent = question.format === "visual" ? "" : question.copy;
  els.questionCopy.classList.toggle("is-hidden", question.format === "visual");
  els.backButton.disabled = state.currentIndex === 0;
  els.nextButton.disabled = selected.length === 0;
  els.nextButton.textContent = shouldFinish() ? "查看结果" : "下一题";

  if (question.format === "visual" && question.artwork) {
    const artwork = question.artwork;
    els.questionMedia.innerHTML = `
      <figure class="artwork-card">
        <img src="${escapeHtml(artwork.src)}" alt="${escapeHtml(artwork.alt)}">
        <figcaption class="artwork-caption">
          <p><strong>${escapeHtml(artwork.title)}</strong><br>${escapeHtml(artwork.artist)}${artwork.year ? `，${escapeHtml(artwork.year)}` : ""}</p>
          ${artwork.sourceUrl ? `<a href="${escapeHtml(artwork.sourceUrl)}" target="_blank" rel="noopener noreferrer">作品出处</a>` : ""}
        </figcaption>
      </figure>
    `;
  } else {
    els.questionMedia.innerHTML = "";
  }

  els.optionsList.innerHTML = question.answers.map((answer, index) => {
    const optionId = `${question.id}-a${index}`;
    const checked = selected.includes(index) ? "checked" : "";
    const selectedClass = selected.includes(index) ? " is-selected" : "";
    const inputType = isMulti ? "checkbox" : "radio";

    return `
      <label class="option${selectedClass}" for="${optionId}">
        <input id="${optionId}" type="${inputType}" name="answer" value="${index}" ${checked}>
        <span>${escapeHtml(answer.text)}</span>
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
  const thinkingStyle = getThinkingStyle();

  els.routeView.classList.add("is-hidden");
  els.quizView.classList.add("is-hidden");
  els.resultView.classList.remove("is-hidden");
  els.categoryDirectory.classList.add("is-hidden");
  els.viewCategoriesButton.textContent = "查看所有哲学门类";
  els.viewCategoriesButton.setAttribute("aria-expanded", "false");
  els.questionCount.textContent = `${confidence.answered} 道题`;
  els.progressFill.style.width = "100%";

  els.resultTitle.textContent = primary.title;
  els.resultSummary.textContent = primary.summary;
  els.resultDescription.innerHTML = `
    ${primary.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <div class="result-notes">
      <h3>这意味着什么</h3>
      <ul>
        ${primaryDetails.notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;
  els.secondaryResult.textContent = `${secondary.title}：${secondary.summary}`;
  els.resultThinkers.textContent = primary.thinkers;
  els.thinkingStyleTitle.textContent = thinkingStyle.resultTitle;
  els.thinkingStyleDescription.textContent = thinkingStyle.resultDescription;
  els.readingList.innerHTML = primaryDetails.readings.map((reading) => `
    <article class="reading-item">
      <h4>${reading.title}</h4>
      <p class="reading-author">${reading.author}</p>
      <p>${reading.note}</p>
    </article>
  `).join("");
  els.affinityList.innerHTML = ranked.slice(0, 6).map((result) => {
    const percent = Math.round((result.score / topScore) * 100);
    const scoreLabel = percent === 100 ? "最高" : `${percent}/100`;
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
    ? "查看所有哲学门类"
    : "隐藏所有哲学门类";
  els.viewCategoriesButton.setAttribute("aria-expanded", String(!isHidden));
}

function resetQuiz({ chooseRouteAgain = false } = {}) {
  state.currentIndex = 0;
  state.path = [...QUESTION_SEEDS];
  state.responses = {};
  state.responseFormats = {};
  state.shareData = null;
  state.shareText = "";
  state.shareImagePromise = null;
  state.shareImageDataUrlPromise = null;
  hideSharePreview();
  els.resultView.classList.add("is-hidden");
  els.copyStatus.textContent = "";

  if (chooseRouteAgain) {
    state.route = null;
    state.initialRoute = null;
    showRoutePicker();
  } else {
    state.initialRoute = state.route;
    els.routeView.classList.add("is-hidden");
    els.quizView.classList.remove("is-hidden");
    renderQuestion();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getShareData() {
  const ranked = scoreResponses();
  const primary = ranked[0];
  const secondary = ranked[1];
  const primaryDetails = TYPE_DETAILS[primary.key];
  const topScore = Math.max(primary.score, 1);
  const thinkingStyle = getThinkingStyle();
  const affinities = ranked.slice(0, 6).map((result) => ({
    title: result.title,
    score: Math.round((result.score / topScore) * 100)
  }));

  return {
    primary,
    secondary,
    details: primaryDetails,
    thinkingStyle,
    affinities
  };
}

function getShareText(data = getShareData()) {
  const { primary, secondary, details, thinkingStyle, affinities } = data;
  return [
    `我的「哲学分院帽」结果：${primary.title}`,
    "",
    primary.summary,
    "",
    ...primary.description,
    "",
    "这意味着什么",
    ...details.notes.map((note) => `- ${note}`),
    "",
    `次要影响：${secondary.title}`,
    secondary.summary,
    "",
    `我进入这些问题的方式：${thinkingStyle.resultTitle}`,
    thinkingStyle.resultDescription,
    "",
    `相近的思想家：${primary.thinkers}`,
    "",
    "最高的契合度",
    ...affinities.map((result) => `- ${result.title}：${result.score === 100 ? "最高" : `${result.score}/100`}`),
    "",
    "建议的入门读物",
    ...details.readings.map((reading) => `- ${reading.title}，${reading.author}：${reading.note}`)
  ].join("\n");
}

const NO_LINE_START = /^[，。、；：？！）】」』〉》”’%·…—]/;

function wrapCanvasText(context, text, maxWidth) {
  const lines = [];
  let line = "";

  const flush = () => {
    if (line) {
      lines.push(line);
      line = "";
    }
  };

  // Chinese text has no spaces, so measure and break character by character,
  // treating runs of Latin letters and digits as single unbreakable tokens.
  const tokens = String(text).match(/[A-Za-z0-9]+(?:[.'-][A-Za-z0-9]+)*|\s+|[\s\S]/g) || [];

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      if (line && context.measureText(`${line} `).width <= maxWidth) {
        line += " ";
      }
      return;
    }

    const testLine = line + token;
    if (context.measureText(testLine).width <= maxWidth) {
      line = testLine;
      return;
    }

    // Chinese typesetting forbids starting a line with closing or connecting
    // punctuation, so let those characters hang past the measured width.
    if (line && NO_LINE_START.test(token)) {
      line = testLine;
      return;
    }

    flush();
    line = token;
  });

  flush();
  return lines.length ? lines : [""];
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
    context.font = `${weight} ${size}px Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", system-ui, sans-serif`;
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
    context.fillText("哲学", margin + 22, y + 29);
    context.textAlign = "left";
  }

  setFont(24, 650);
  if (!measureOnly) {
    context.fillStyle = "#465943";
    context.fillText("哲学分院帽", margin + 60, y + 30);
  }
  // Han glyphs sit taller above the baseline than Latin ones, so the headline
  // needs more clearance below the wordmark than the English card gives it.
  y += 96;

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
    context.fillText("这意味着什么", margin, y);
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
    context.fillText("次要影响", margin, y);
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
    context.fillText("相近的思想家", margin + columnWidth + columnGap, rightY);
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
    context.fillText("最高的契合度", margin, y);
  }
  y += 36;

  affinities.forEach((result) => {
    setFont(20, 650);
    if (!measureOnly) {
      context.fillStyle = "#20211e";
      context.fillText(result.title, margin, y);
      context.fillStyle = "#70736b";
      context.textAlign = "right";
      context.fillText(result.score === 100 ? "最高" : `${result.score}/100`, width - margin, y);
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
    context.fillText("建议的入门读物", margin, y);
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
    context.fillText("哲学分院帽", margin, y + 20);
  }

  return y + margin + 24;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("无法生成分享图片。"));
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
      window.setTimeout(() => reject(new Error("操作超时。")), timeoutMs);
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
        alt="哲学分院帽结果卡片"
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
    <p>此处无法通过剪贴板分享图片。请使用下方的完整结果图片。</p>
    <img src="${imageDataUrl}" alt="完整的哲学分院帽结果卡片">
    <a class="text-link" href="${imageDataUrl}" download="${getShareImageFilename(title)}">下载图片</a>
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
  els.copyStatus.textContent = "正在准备分享图片…";
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
      throw new Error("分享图片不可用。");
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
        els.copyStatus.textContent = "完整的结果图片已复制。可粘贴到消息或文档中。";
        return;
      } catch {
        await withTimeout(
          navigator.clipboard.write([
            new ClipboardItem({ "image/png": imageBlob })
          ]),
          1500
        );
        els.copyStatus.textContent = "完整的结果图片已复制。可粘贴到消息或文档中。";
        return;
      }
    }
  } catch {
    // 当剪贴板无法处理图片时，退回到文本分享。
  }

  if (downloadableImageDataUrl && copySelectedHtml(getShareHtml(downloadableImageDataUrl, text))) {
    els.copyStatus.textContent = "完整的结果卡片已复制。可粘贴到消息或文档中。";
    return;
  }

  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error("文本剪贴板不可用。");
    }
    await withTimeout(navigator.clipboard.writeText(text), 1500);
    if (downloadableImageDataUrl) {
      showSharePreview(downloadableImageDataUrl, data.primary.title);
      els.copyStatus.textContent = "完整的结果文字已复制。结果图片显示在下方，可保存或拖走。";
      return;
    }
    els.copyStatus.textContent = "完整的结果文字已复制。此浏览器不支持分享图片。";
  } catch {
    if (copyPlainTextFallback(text)) {
      if (downloadableImageDataUrl) {
        showSharePreview(downloadableImageDataUrl, data.primary.title);
        els.copyStatus.textContent = "完整的结果文字已复制。结果图片显示在下方，可保存或拖走。";
        return;
      }
      els.copyStatus.textContent = "完整的结果文字已复制。此浏览器不支持分享图片。";
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
      els.copyStatus.textContent = "此处的剪贴板分享被阻止。完整的结果图片显示在下方，可保存或拖走。";
      return;
    }
    els.copyStatus.textContent = "无法自动复制。请在本页选中结果文字来分享。";
  }
}

els.optionsList.addEventListener("change", (event) => {
  if (event.target.matches('input[name="answer"]')) {
    setSelectedAnswer(Number(event.target.value));
  }
});

els.routeGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".route-card");
  if (card) chooseRoute(card.dataset.route);
});

els.cancelRouteButton.addEventListener("click", () => chooseRoute(state.route));

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
  focusQuestionHeading();
});

els.backButton.addEventListener("click", () => {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
  focusQuestionHeading();
});

els.retakeButton.addEventListener("click", () => resetQuiz());
els.anotherRouteButton.addEventListener("click", () => resetQuiz({ chooseRouteAgain: true }));
els.copyButton.addEventListener("click", copyResult);
els.viewCategoriesButton.addEventListener("click", toggleCategoryDirectory);

showRoutePicker();
