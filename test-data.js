const IMG = "assets/test6-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts, image = "") => ({ id, type: "paired", prompt, points: parts.length, parts, image });

const sections = [
  { key: "A", label: "A", title: "Listen and write the letter.", note: "Listen carefully and choose a, b, or c.", points: 4, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["a. infect", "b. inhale", "c. scrape"], "b. inhale", "Inhale means to breathe air into your lungs. The correct letter is b."),
    choice("A2", "2.", ["a. cells", "b. fluid", "c. virus"], "c. virus", "A virus is a tiny infectious agent that can cause illness. The correct letter is c."),
    choice("A3", "3.", ["a. paralyze", "b. infect", "c. shrink"], "c. shrink", "Shrink means to become smaller. The correct letter is c."),
    choice("A4", "4.", ["a. common cold", "b. microscope", "c. mucus"], "a. common cold", "The common cold is a frequent viral illness. The correct letter is a.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Use the word bank: virus, swallowed, dead, expand, scrape, infect. One word is extra.", points: 5, questions: [
    input("B1", "1. The top layer of our skin is made up of ___ cells.", ["dead"], "The outer layer contains dead skin cells that are continually replaced."),
    input("B2", "2. Something that can produce sickness is a ___.", ["virus"], "A virus can enter living cells and cause an infection."),
    input("B3", "3. She ___ her medicine. She'll feel better soon.", ["swallowed"], "Swallowed is the past form of swallow: she took the medicine into her body through her mouth."),
    input("B4", "4. You can ___ another person if you touch them when you are sick.", ["infect"], "Infect means to pass a disease-causing organism to another person."),
    input("B5", "5. A balloon will ___ if you blow into it.", ["expand"], "Expand means to become larger as air fills the balloon.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences with the correct words. Then match them to the pictures.", note: "Write the missing word, then choose picture a, b, c, or d. The labels are below the clean original illustrations.", points: 8, sectionImage: IMG + "c-picture-strip.png", questions: [
    paired("C1", "1. Scientists use a ___ to study different kinds of sicknesses.", [
      { key: "word", label: "Missing word", type: "input", answers: ["microscope"], explanation: "A microscope makes very small objects visible for scientific study." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows a scientist using a microscope." }
    ]),
    paired("C2", "2. We can't see the ___ in our body. They are too small.", [
      { key: "word", label: "Missing word", type: "input", answers: ["cells"], explanation: "Cells are the tiny basic units that make up living things." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows body cells." }
    ]),
    paired("C3", "3. I am ___ to the flu, but my friend isn't.", [
      { key: "word", label: "Missing word", type: "input", answers: ["immune"], explanation: "If you are immune to an illness, your body can resist it." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a represents protection from illness, so it matches immune." }
    ]),
    paired("C4", "4. Every winter, I get the ___ cold.", [
      { key: "word", label: "Missing word", type: "input", answers: ["common"], explanation: "Common cold is the fixed name for this frequent respiratory illness." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows a child with symptoms of a common cold." }
    ])
  ]},
  { key: "D", label: "D", title: "Write the words in the correct order to make sentences.", note: "Use correct adjective order and punctuation.", points: 3, questions: [
    input("D1", "1. purple / I / backpack / big, / have / a", ["I have a big purple backpack", "I have a big, purple backpack"], "Size comes before color: a big purple backpack."),
    input("D2", "2. keys / small, / box / wooden / the / are / old, / in / The", ["The keys are in the small old wooden box", "The keys are in the small, old, wooden box"], "The adjectives follow the order size + age + material: small, old, wooden."),
    input("D3", "3. sunset / saw / orange / We / the / beautiful,", ["We saw the beautiful orange sunset", "We saw the beautiful, orange sunset"], "The sentence begins with the subject We, followed by saw and the noun phrase the beautiful, orange sunset.")
  ]},
  { key: "E", label: "E", title: "Check the correct answer.", note: "Choose the adjective order that sounds natural in English.", points: 4, questions: [
    choice("E1", "1. The scientist wears a ___ lab coat.", ["a. clean, white", "b. white, clean"], "a. clean, white", "Condition comes before color: clean, white."),
    choice("E2", "2. He saw the ___ virus in the microscope.", ["a. dangerous, tiny", "b. tiny, dangerous"], "b. tiny, dangerous", "Size normally comes before quality or effect here: tiny, dangerous."),
    choice("E3", "3. The dog had a ___ bark.", ["a. scary, loud", "b. loud, scary"], "b. loud, scary", "The source answer uses loud, scary: the sound is first described by volume, then by its effect."),
    choice("E4", "4. I ate a ___ orange.", ["a. delicious, round", "b. round, delicious"], "a. delicious, round", "Opinion comes before shape: delicious, round.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order. Then match them to the pictures.", note: "Write a complete sentence, adding a comma where necessary, then choose picture a, b, or c.", points: 6, sectionImage: IMG + "f-picture-strip.png", questions: [
    paired("F1", "1. big / house / We / new / a / have / wood", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["We have a big new wood house", "We have a big, new, wood house"], explanation: "Use subject + have + noun phrase. The adjectives follow size + age + material." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Picture c shows the house." }
    ]),
    paired("F2", "2. swallowed / the / red / medicine / bad-tasting / I", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["I swallowed the bad-tasting red medicine", "I swallowed the bad-tasting, red medicine"], explanation: "Opinion or taste comes before color: bad-tasting, red medicine." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Picture a shows the child swallowing medicine." }
    ]),
    paired("F3", "3. see / fascinating / cells / I / the / round / tiny / can", [
      { key: "sentence", label: "Sentence", type: "input", answers: ["I can see the fascinating tiny round cells", "I can see the fascinating, tiny, round cells"], explanation: "The order is opinion + size + shape: fascinating, tiny, round." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Picture b shows tiny round cells." }
    ])
  ]},
  { key: "H", label: "H", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 4, audio: "assets/audio-h.mp3", questions: [
    choice("H1", "1.", ["T", "F"], "T", "Statement 1 is true according to the recording."),
    choice("H2", "2.", ["T", "F"], "F", "Statement 2 is false according to the recording."),
    choice("H3", "3.", ["T", "F"], "T", "Statement 3 is true according to the recording."),
    choice("H4", "4.", ["T", "F"], "T", "Statement 4 is true according to the recording.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences.", note: "Use each anatomical picture to identify the missing word.", points: 4, questions: [
    input("I1", "1. Your ___ beats quickly when you are excited.", ["heart"], "The heart is the muscular organ that pumps blood around the body.", IMG + "i1.png"),
    input("I2", "2. You can sometimes see your ___ under your skin.", ["veins"], "Veins are blood vessels that carry blood back toward the heart.", IMG + "i2.png"),
    input("I3", "3. I can feel my ___ move when I breathe.", ["diaphragm"], "The diaphragm is the muscle below the lungs that moves during breathing.", IMG + "i3.png"),
    input("I4", "4. When I inhale, air goes into my ___.", ["lungs"], "The lungs are the organs where the body takes in oxygen.", IMG + "i4.png")
  ]},
  { key: "J", label: "J", title: "Unscramble and match.", note: "Unscramble the body word, then choose its definition.", points: 8, questions: [
    paired("J1", "1. t e s i a e r r", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["arteries"], explanation: "The letters form arteries." },
      { key: "match", label: "Definition", type: "choice", options: ["a. The heart does this to move blood around the body.", "b. This is a tube in your neck that lets air into your lungs.", "c. This is a group of body parts that work together.", "d. These are like tubes and carry blood from the heart."], answers: ["d. These are like tubes and carry blood from the heart."], explanation: "Arteries carry blood away from the heart, so they match d." }
    ]),
    paired("J2", "2. h r a t a e c", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["trachea"], explanation: "The letters form trachea." },
      { key: "match", label: "Definition", type: "choice", options: ["a. The heart does this to move blood around the body.", "b. This is a tube in your neck that lets air into your lungs.", "c. This is a group of body parts that work together.", "d. These are like tubes and carry blood from the heart."], answers: ["b. This is a tube in your neck that lets air into your lungs."], explanation: "The trachea is the windpipe, so it matches b." }
    ]),
    paired("J3", "3. m s e y s t", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["system"], explanation: "The letters form system." },
      { key: "match", label: "Definition", type: "choice", options: ["a. The heart does this to move blood around the body.", "b. This is a tube in your neck that lets air into your lungs.", "c. This is a group of body parts that work together.", "d. These are like tubes and carry blood from the heart."], answers: ["c. This is a group of body parts that work together."], explanation: "A body system is a group of organs and parts that work together, so it matches c." }
    ]),
    paired("J4", "4. s p p m u", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["pumps"], explanation: "The letters form pumps." },
      { key: "match", label: "Definition", type: "choice", options: ["a. The heart does this to move blood around the body.", "b. This is a tube in your neck that lets air into your lungs.", "c. This is a group of body parts that work together.", "d. These are like tubes and carry blood from the heart."], answers: ["a. The heart does this to move blood around the body."], explanation: "The heart pumps blood, so it matches a." }
    ])
  ]},
  { key: "K", label: "K", title: "Check the correct answer.", note: "Choose used to for a past habit or state that has changed; use the simple past for a finished event.", points: 4, questions: [
    choice("K1", "1. I ___ my bike to school. Now I go by bus.", ["a. used to ride", "b. rode"], "a. used to ride", "Now I go by bus shows that the earlier repeated habit changed, so use used to ride."),
    choice("K2", "2. She ___ very early yesterday morning.", ["a. used to wake up", "b. woke up"], "b. woke up", "Yesterday morning is one finished time, so use the simple past woke up."),
    choice("K3", "3. Phillip plays basketball after school now, but he ___ chess.", ["a. used to play", "b. played"], "a. used to play", "Now contrasts a present habit with a different past habit, so use used to play."),
    choice("K4", "4. They ___ every day last week.", ["a. used to go swimming", "b. went swimming"], "b. went swimming", "Last week is a finished time period, so use the simple past went swimming.")
  ]},
  { key: "L", label: "L", title: "Complete the sentences. Use used to where possible.", note: "Use the word bank: make, watch, play, hate, go. Select used to only for a past habit or state contrasted with the present.", points: 4, questions: [
    input("L1", "1. She ___ vegetables, but now she likes them.", ["used to hate"], "The contrast with now shows a past state that changed: used to hate."),
    input("L2", "2. I ___ a lot of TV last week because I was sick.", ["watched"], "Last week is a finished time, so use the simple past watched."),
    input("L3", "3. We ___ to the movies, but now we're too busy.", ["used to go"], "The contrast with now shows a past habit that changed: used to go."),
    input("L4", "4. Yesterday, he ___ a cake for my birthday.", ["made"], "Yesterday identifies one finished event, so use the simple past made.")
  ]},
  { key: "M", label: "M", title: "Complete the sentences for each set of pictures.", note: "Use the simple present for picture a (now) and used to for picture b (past).", points: 6, questions: [
    paired("M1", "1. walk", [
      { key: "a", label: "a. I ___ to school today.", type: "input", answers: ["walk"], explanation: "Today describes the present routine, so use the simple present walk." },
      { key: "b", label: "b. I ___ to school.", type: "input", answers: ["used to walk"], explanation: "The past picture shows an old habit, so use used to walk." }
    ], IMG + "m1-picture-strip.png"),
    paired("M2", "2. think", [
      { key: "a", label: "a. I ___ exercise is boring.", type: "input", answers: ["think"], explanation: "This is the person's present opinion, so use think." },
      { key: "b", label: "b. I ___ exercise was boring.", type: "input", answers: ["used to think"], explanation: "This was the person's earlier opinion, so use used to think." }
    ], IMG + "m2-picture-strip.png"),
    paired("M3", "3. play", [
      { key: "a", label: "a. He ___ soccer every day.", type: "input", answers: ["plays"], explanation: "He is third-person singular, so the simple present verb takes -s: plays." },
      { key: "b", label: "b. He ___ soccer years ago.", type: "input", answers: ["used to play"], explanation: "Years ago and the past picture describe an earlier habit, so use used to play." }
    ], IMG + "m3-picture-strip.png")
  ]}
];
