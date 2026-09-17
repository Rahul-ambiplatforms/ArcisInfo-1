// seoPageData4G.js — ArcisAI 4G SIM camera category hub
//
// Companion to seoPageDataWifi.js. WiFi and 4G are separate product categories
// serving different site conditions, not competing alternatives — a site either
// has dependable broadband or it does not. They are deliberately given equal
// standing rather than one being positioned as the winner.
//
// Specifications come from the published Eco Series 4G datasheet in public/pdfs
// (AD-90AI4GBDP). Nothing is estimated. Note the genuine hardware differences
// against the WiFi models: a larger 1/2.8" sensor and 4400V lightning protection,
// against 1/3" and 4000V on the WiFi units.
//
// Certification wording matches the rest of the site and must stay precise:
// BIS-ER registration R-72003735 covers the camera hardware; STQC certification
// covers the Video Management System. They are separate certifications.

const seoPageData4G = {

  "4g-cctv-camera": {
    slug: "4g-cctv-camera",
    title: "4G SIM CCTV Camera India | BIS-ER Certified | ArcisAI",
    metaDescription:
      "ArcisAI 4G SIM CCTV cameras — 3MP, works on cellular with no broadband required, two-way audio, human detection, IP66. BIS-ER R-72003735 certified, made in India. Dealer enquiries welcome.",
    keywords: [
      "4g cctv camera", "4g sim camera", "sim card cctv camera",
      "4g security camera india", "cctv camera without internet",
      "4g ptz camera", "outdoor 4g cctv camera", "BIS certified 4g camera",
      "made in india 4g cctv camera",
    ],
    heroTitle: "4G SIM CCTV Cameras for Sites With No Broadband",
    heroSubtitle: "3MP cellular surveillance | BIS-ER R-72003735 | STQC-certified VMS",
    heroDescription:
      "Some sites will never have reliable broadband — a construction plot, a farm, a remote warehouse, a site that exists for six months. A 4G camera takes a SIM and works, with no fixed line to install or wait for. ArcisAI 4G cameras carry BIS-ER registration R-72003735 and are manufactured in India.",
    category: "product",
    sections: [
      {
        title: "When 4G is the right category",
        content:
          "The deciding question is simple: does the location have dependable broadband? If yes, a WiFi or PoE camera is usually the better value, because there is no recurring data cost. If no — or if the connection is shared, unreliable, or belongs to someone else — a 4G camera removes the dependency entirely. That covers construction sites, farms and agricultural land, remote warehousing and yards, under-construction buildings, temporary installations, and any site where waiting for a broadband connection would delay the security going live. It also covers sites where a wired connection is a vulnerability, because there is no cable for someone to cut.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "Sensor", value: "1/2.8\" CMOS" },
          { label: "IR Range", value: "Up to 20M" },
          { label: "Protection", value: "IP66" },
        ],
        features: [
          "Works on a cellular SIM — no broadband connection required at the site",
          "3MP resolution — 2304x1296 main stream, 800x488 sub stream",
          "1/2.8\" CMOS sensor, larger than the WiFi models' 1/3\" sensor",
          "Two-way audio with built-in microphone and speaker",
          "Human detection and motion detection on the camera itself",
          "IR night vision up to 20 metres with intelligent fill light",
          "IP66 rated with 4400V lightning protection — built for exposed outdoor sites",
          "microSD storage up to 128GB, so recording survives a network drop",
          "Ethernet port as well, if the site later gets a fixed connection",
        ],
      },
      {
        title: "What it costs to run, honestly",
        content:
          "A 4G camera carries a recurring data cost that a WiFi camera does not. That is the trade-off, and it is worth being straight about it: over several years on a site that has perfectly good broadband, WiFi is the cheaper choice. The case for 4G is not that it is cheaper — it is that it works where nothing else does, and that it goes live immediately rather than waiting on a line installation. On a construction site where the security needs to be running next week, that difference matters more than the data plan.",
        features: [
          "Recurring SIM data cost — the genuine trade-off against WiFi",
          "No installation wait for a fixed broadband line",
          "No cable to cut, and no dependence on someone else's network",
          "Onboard microSD recording continues through a cellular outage",
          "Ethernet port included, so the camera is not stranded if the site gets broadband later",
        ],
      },
      {
        title: "Certification",
        content:
          "Since 1 April 2026, CCTV sold in India must meet BIS Essential Requirements. ArcisAI 4G cameras carry BIS-ER registration R-72003735 under IS 13252 (part 1) / IEC 60950-1, and the Video Management System holds a separate STQC certification. These are two distinct certifications covering hardware and software. You can check any brand's certificate yourself with our free verifier rather than relying on a claim.",
        features: [
          "BIS-ER registration R-72003735 — verifiable on the BIS register",
          "IS 13252 (part 1) / IEC 60950-1 conformity",
          "STQC-certified Video Management System, certified separately from the hardware",
          "Manufactured in India, not imported and rebadged",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need internet at the site for a 4G camera?",
        a: "No. That is the point of the category. The camera uses a cellular SIM, so it needs mobile network coverage rather than a broadband line. If the site has dependable broadband, a WiFi or PoE camera is usually better value because there is no recurring data cost.",
      },
      {
        q: "What is the difference between your 4G and WiFi cameras?",
        a: "They are different categories for different site conditions, not better and worse versions of the same thing. 4G uses a cellular SIM and works where there is no broadband; WiFi uses an existing 2.4GHz network and has no recurring data cost. The 4G models also use a larger 1/2.8 inch sensor and 4400V lightning protection, against 1/3 inch and 4000V on the WiFi units.",
      },
      {
        q: "How much data does a 4G camera use?",
        a: "It depends on resolution, frame rate and how much motion the camera sees, so we size the data plan against the specific site during the assessment rather than quoting a figure that will not hold. Recording to the onboard microSD card and streaming only on events keeps usage substantially lower than continuous streaming.",
      },
      {
        q: "Does recording stop if the mobile network drops?",
        a: "No. Footage is written to the onboard microSD card, so a cellular outage does not mean lost recording.",
      },
      {
        q: "Are the 4G cameras certified to sell in India?",
        a: "Yes, under BIS-ER registration R-72003735 (IS 13252 part 1 / IEC 60950-1). The Video Management System is separately STQC-certified. Hardware and software certifications are distinct, and you can verify any brand's certificate with our free verifier tool.",
      },
      {
        q: "Do you appoint dealers and distributors for 4G cameras?",
        a: "Yes, across India. If you install, resell or distribute security equipment, register your interest and our channel team will share territory availability and commercial terms.",
      },
    ],
    cta: {
      title: "Get 4G camera pricing, or become a partner",
      description:
        "End customers: request a quote or a free site assessment, including help sizing the data plan. Dealers, installers and distributors: register your interest and we will send territory availability and commercial terms.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=4g-cctv-camera",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=4g-cctv-camera",
    },
  },
};

export default seoPageData4G;
