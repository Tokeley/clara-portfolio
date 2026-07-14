export const siteContent = {
  name: "Clara Chemin",
  title: "Portfolio",
  contact: {
    email: "clarachemin.creates@gmail.com",
    phone: "+64 21 0883 0219",
    instagram: "@clarachemin.creates",
  },
  about: {
    heading: "Hi I\u2019m Clara",
    bio: [
      "I\u2019m an industrial designer with a background in physics, and I love working where the two overlap, designing objects and systems inspired by nature.",
      "Growing up on a boat and sailing from Brazil to New Zealand shaped how I think about both the world and design, teaching me to pay attention to context, responsiveness, and the systems things belong to. A boat only exists in relation to the ocean, and I approach design in a similar way.",
    ],
  },
  education: [
    {
      institution: "Te Herenga Waka\nVictoria University of Wellington",
      degree: "Bachelor of Design Innovation in Industrial Design",
      note: "Deans List 2024 - 2025",
    },
    {
      institution: "Te Herenga Waka\nVictoria University of Wellington",
      degree: "Bachelor of Science in Physics",
      note: "Deans List 2024 - 2025",
    },
  ],
  experience: [
    {
      role: "Designer",
      company: "Future You",
      location: "Remote",
      period: "2020 - Present",
      bullets: [
        "Designed presentations, documents, and memos between FutureYou and major corporate clients",
        "Supported cross-cultural communication in high-trust contexts, ensuring accuracy, tone, and cultural nuance",
        "Enabled collaboration across teams in the context of leadership development and sustainability",
      ],
    },
  ],
  languages: [
    { language: "Brazilian Portuguese", level: "Native Speaker" },
    { language: "English", level: "Fluent" },
    { language: "Spanish", level: "Conversational" },
  ],
  skills: {
    technical: ["Fusion 360", "Adobe Suite", "Blender", "Python", "LaTex"],
    personal: [
      "Creativity",
      "Ideation, prototyping and testing",
      "Interdisciplinary teamwork",
    ],
  },
  awards: [
    {
      title: "Lexus Design Awards 2025",
      subtitle: "Cradle | First Place",
      bullets: [
        "Awarded first place in the Lexus Design awards for my final capstone project",
        "Displayed Cradle at **New Zealand Design week 2026**",
      ],
    },
    {
      title: "Prime Minister\u2019s Design Scholarship",
      subtitle: "Brazil Study Tour | VUW & MAUA | 2025",
      bullets: [
        "Selected to Travel to Mau\u00e1 Institute of Technology, in S\u00e3o Paulo and participate in a cross cultural design tour",
        "Participated in a design challenge in partnership with INREA to create a gamified educational tool to support wheelchair training and maintenance.",
        "Engaged with Brazil\u2019s design and innovation industry through visits to organisations such as Natura, Chelles & Hayashi Design, and Cazoolo Lab.",
      ],
    },
  ],
  projects: [
    {
      number: "01",
      title: "CRADLE",
      slug: "cradle",
      product: "KELP REGENERATION SYSTEM",
      material: "CONCRETE / PRESSED ALUMINIUM",
      processes: "MARKET RESEARCH, DESIGN SYSTEM",
      date: "2025",
    },
    {
      number: "02",
      title: "TILT",
      slug: "tilt",
      product: "EXHIBITION PIECE",
      material: "KOZO PAPER / OILED MDF",
      processes: "3D SCANNED, LASER CUT",
      date: "2025",
    },
    {
      number: "03",
      title: "GROWING LIGHT",
      slug: "growing-light",
      product: "LAMP",
      material: "PLA PLASTIC / FELT",
      processes: "3D PRINTED, LASER CUT, CIRCUITRY",
      date: "2024",
    },
  ],
};

export const cradleContent = {
  title: "Cradle",
  tagline:
    "is a circular system designed to regenerate kelp forests by turning their predators into profit.",
  steps: [
    {
      number: 1,
      title: "Step 1:",
      description:
        "Protect kelp in the ocean through a cradle barrier that traps kina.",
    },
    {
      number: 2,
      title: "Step 2:",
      description: "Process this kina into a premium sea food product.",
    },
    {
      number: 3,
      title: "Step 3:",
      description:
        "Sell to consumers while educating them on the initiative they are supporting.",
    },
  ],
  threeStepsIntro: "It does so in three steps:",
  problem: {
    heading: "The Problem",
    items: [
      {
        caption:
          "Kelp forests are collapsing due to overfishing and bottom trawling.",
      },
      {
        caption:
          "This causes a kina overpopulation, eating kelp leading to large barrens where kelp used to be.",
      },
      {
        caption:
          "Giant kelp are a keystone species; without them their ecosystem collapses: no fish, no biodiversity, no sustainability.",
      },
    ],
  },
  research: {
    paragraphs: [
      "New Zealand is deeply connected to the ocean, culturally, economically, and ecologically.",
      "Aquaculture is one of our key growth sectors, but not currently sustainable.",
      "Carbon storage is highly profitable but kelp are excluded. There is NZ$7.9 million in carbon storage in the Hauraki Gulf alone if barrens were restored.",
    ],
    papers: [
      "Urchinomics: Kelp restoration through urchin economy.",
      "Testing the efficacy of sea urchin exclusion methods for restoring kelp by Sharma et al.",
      "Consumer preferences for seafood sustainability attributes: A comparative study of 12 markets by Schrobback et al.",
      "Aquaculture investment opportunities in New Zealand by New Zealand Trade and Enterprise.",
      "Assessing the carbon storage value of kelp forest restoration in the Hauraki Gulf Marine Park, New Zealand: Lessons from no-take Marine Protected Areas by Qu et al.",
    ],
  },
  productDetail: {
    left: "Designed to fit into the ocean aesthetically, Cradle is at home in the ecosystem.",
    right:
      "Its geometry is designed to let currents and other smaller sea life to pass through, while trapping kina in its lip, allowing divers to easily locate and harvest them.",
  },
  packaging: {
    left: "Made from pressed aluminium, the packaging has the shape of a kina shell creating instant association and consumer recognition.",
    right:
      "The marketing informs consumer what they are supporting, as research shows people pay a premium for sustainable products which is then used to fund the regeneration effort.",
  },
  usageScenario: {
    heading: "Product Usage Scenario",
    steps: [
      "DESIGNED IN TWO REPEATING PARTS FOR EASE OF MANUFACTURE AND TRANSPORT",
      "IT\u2019S ASSEMBLED ON SITE INTO TWO HALVES AND PLACED AROUND KELP HOLD FASTS",
      "AND ATTACHED TO THE SEA FLOOR BY METAL PINS",
      "IT PROTECTS KELP WHILE TRAPPING KINA IN IDENTIFIABLE PLACES TO BE REMOVED BY DIVERS",
      "THIS KINA IS THEN PROCESSED INTO A PREMIUM SEAFOOD PRODUCT",
      "AND SOLD IN PACKAGING DESIGNED FOR CUSTOMER RECOGNITION AND STORY TELLING.",
    ],
  },
  circularSystem: {
    heading: "Circular Design System",
    nodes: [
      "PROTECT KELP",
      "TRAP KINA",
      "REMOVE KINA",
      "PROCESS KINA",
      "TURN TO PREMIUM PRODUCT",
      "EDUCATE AND SELL TO CONSUMERS",
      "FUND REGENERATION",
    ],
  },
  designWeek: {
    heading: "Display at New Zealand Design Week",
  },
  processTimeline: {
    nodes: [
      { label: "RESEARCH AND\nSIMILAR PRODUCTS", position: { row: 0, col: 1 } },
      { label: "DEVELOPMENTAL\nSKETCHES", position: { row: 0, col: 2 } },
      { label: "EARLY CAD\nMODELS", position: { row: 1, col: 1 } },
      { label: "FIRST\nPROTOTYPE", position: { row: 2, col: 0 } },
      { label: "BACK TO THE\nDRAWING BOARD", position: { row: 2, col: 2 } },
      { label: "FIRST PACKAGING\nMODEL", position: { row: 3, col: 1 } },
      { label: "FINAL\nDRAWINGS", position: { row: 3, col: 0 } },
      { label: "FURTHER CAD\nMODELS", position: { row: 3, col: 2 } },
      { label: "FINAL CRADLE\nMODEL", position: { row: 4, col: 2 } },
      { label: "FINAL PACKAGING\nMODEL", position: { row: 4, col: 1 } },
      { label: "FINISHED\nPRODUCT", position: { row: 5, col: 0 } },
    ],
  },
};

export const tiltContent = {
  title: "Tilt",
  description:
    "Tilt is an object made for exhibition, it explores human movement through the constrains of flat pack design and manufacture taking the 3D to 2D and back to 3D.",
  descriptionExtended:
    "Made of a body scan sliced into a paper spring, and a movable plinth; it invites interaction to be tilted from side to side, cycling through the body and only showing it whole when in movement.",
  brief: {
    heading: "The Brief",
    items: [
      "**Digital manufacture** is a growing opportunity for countries like New Zealand to hold our own in global manufacturing.",
      "This includes the use and manipulation of **3D scans** as a way to quickly iterate and create objects using real world parameters.",
      "This project applies this in a **digital first exhibition** context with a physical artefact as the exhibit, and a **plinth** for its exhibition.",
    ],
    sidebar: [
      "**Laser cutting is a widely available digital manufacturing tool**, it\u2019s adaptable to a large range of materials and processes so it\u2019s to be the primary technology explored.",
      "The project is **constrained to 422000 mm3** which can be visualised as a 75mm\u00d775mm\u00d775mm cube, but this **volume can be represented in any shape**.",
      "The design is parametric in its methods, **making design a dialogue** between me the designer, the computer, and laser profile cutting.",
    ],
  },
  productProcess: {
    heading: "Product Process",
    steps: [
      "CAPTURED 164 IMAGES OF MY BODY WITH A 3D SCANNER AND TURNED INTO A LOW POLY 3D MODEL",
      "SECTIONED INTO 30 EQUAL SLICES COVERING THE BODY FROM HEAD TO TOE",
      "PROFILE CUT THE INTERSECTION OF THE BODY WITH EACH SLICE AND ARRANGED INTO A FLAT PACKED ACCORDION",
      "LASER CUT OUT OF KOZO PAPER WITH HAND DYED EDGES THEN FOLDED BACK INTO A 3D OBJECT",
      "PLINTH IS ENGRAVED AND LASER CUT OUT OF MDF THEN STAINED AND ASSEMBLED",
      "TOGETHER THEY FORM AN EXHIBITION PIECE, INVITING AUDIENCES TO TILT THE PLINTH AND SHOW THE BODY IN MOTION",
    ],
  },
  bodyText: {
    left: "Tilt explores the body in movement and how as people we are never truly in one state but constantly moving through many. It\u2019s designed to be interacted with, the plinth tilting from side to side when lowered by a finger cycling through the body in a chaining movement.",
    right:
      "Through a collaboration with a writer and in response to the artefact, a poem was created and engraved along the plinth\u2019s edge. It brings to the forefront the feeling of flipping book pages and how we are all stories.",
  },
  poem: {
    author: "Poem by Emily Gambril",
    text: "From shifting clay, we erupt into the ether, filling\nvast nothings with patterns of breath. we erode\nand thrash and borrow from the earth\nputting everything we find back inside ourselves.\nendings are about bodies.\nBones betray the weightless, something slips\nlife returns to the dense grip of clay.",
  },
  processTimeline: {
    nodes: [
      { label: "INSPIRATION", position: { row: 0, col: 1 } },
      { label: "3D SCAN\nCOLLECTION", position: { row: 1, col: 1 } },
      { label: "DEVELOPMENTAL\nSKETCHES", position: { row: 0, col: 2 } },
      { label: "CAD MODELS", position: { row: 2, col: 0 } },
      { label: "ACRYLIC SHEET METAL\nFOLDING MODELS", position: { row: 2, col: 2 } },
      { label: "MATERIAL\nTESTING", position: { row: 3, col: 0 } },
      { label: "CAD\nMODELS", position: { row: 3, col: 1 } },
      { label: "FIRST\nPROTOTYPES", position: { row: 3, col: 2 } },
      { label: "PLINTH\nDRAWINGS", position: { row: 4, col: 0 } },
      { label: "PLINTH\nMODELS", position: { row: 4, col: 1 } },
      { label: "TECHNICAL\nDRAWINGS + POEM", position: { row: 5, col: 2 } },
      { label: "FINISHED\nPRODUCT", position: { row: 5, col: 0 } },
    ],
  },
};

export const growingLightContent = {
  title: "Growing Light",
  description:
    "Growing Light is a modular light sculpture made to start connection and conversation through play.",
  descriptionExtended:
    "Made up of five modules that can be connected in any configuration the lamp can be built and unbuilt in endless ways.",
  descriptionExtra:
    "Activated through a proximity sensor the lamp itself craves interaction growing light when people are near.",
  brief: {
    heading: "The Brief",
    items: [
      "Light is a powerful design medium with lighting being a prominent industrial design sector, how can it be explores in an object?",
      "Human interaction and responsiveness are where design comes to life so how does this object respond and react?",
      "This project applies this with a circuitry context with the use of an arduino, sensors and coding to create a responsive lit object.",
    ],
    sidebar: [
      "**Nature** is greatly connected with **mental and physical wellbeing** something needed in New Zealand as poor mental wellbeing is increasing in every age group according to stats NZ.",
      "Research done in Wellington shows that **interaction with indoor plants reduces psychological and physiological stress** when it replaces a computer based task.",
      "This heavily inspired the direction of this project to creating an **interactive nature based lighting product**.",
    ],
  },
  usageScenario: {
    heading: "Product Usage Scenario",
    steps: [
      "MADE UP OF FOUR MODULES THAT CAN BE CONNECTED TO THE BASE IN ANY COMBINATION",
      "CREATING A LAMP THAT IS GROWN THROUGH YOUR INTERACTION",
      "LIGHTING WHEN YOU COME NEAR THROUGH A PROXIMITY SENSOR",
      "COVERED IN FELTED WOOL IT\u2019S SOFT AND ORGANIC TO TOUCH",
      "THE FLOWER STEMS CAN BE BENT TO ANY DESIRED LIGHT DIRECTION",
      "IT INVITES YOU TO CONNECT AND RECONNECT EACH MODULE GROWING IT DIFFERENTLY EVERY TIME",
    ],
  },
  processTimeline: {
    nodes: [
      { label: "INSPIRATION", position: { row: 0, col: 1 } },
      { label: "DEVELOPMENTAL\nSKETCHES", position: { row: 1, col: 0 } },
      { label: "MARKET SEARCH\nAND OPPORTUNITIES", position: { row: 1, col: 2 } },
      { label: "FIRST CAD\nMODELS", position: { row: 2, col: 0 } },
      { label: "FIRST\nPROTOTYPE", position: { row: 2, col: 1 } },
      { label: "BASE AND PIR\nPROXIMITY SENSOR", position: { row: 3, col: 0 } },
      { label: "BODY\nITERATIONS", position: { row: 3, col: 2 } },
      { label: "WIRING\nAND CODING", position: { row: 4, col: 0 } },
      { label: "LAMPSHADE\nDESIGN", position: { row: 4, col: 2 } },
      { label: "FINISHED\nPRODUCT", position: { row: 5, col: 0 } },
    ],
  },
};
