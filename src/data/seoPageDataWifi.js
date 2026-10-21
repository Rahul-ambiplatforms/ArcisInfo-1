// seoPageDataWifi.js — ArcisAI WiFi CCTV cluster
//
// Every specification below is taken from the published Eco Series WiFi
// datasheets in public/pdfs (AD-90AIWFBDP and AD-90AIWFBDP-PTZ). Nothing here is
// estimated. If a spec is not in those datasheets it is not claimed on the page.
//
// Certification wording is deliberate and should not be loosened: the camera
// carries BIS-ER registration R-72003735 (IS 13252 part 1 / IEC 60950-1) and the
// Video Management System is STQC-certified. Hardware and software certifications
// are separate things, and conflating them is exactly the kind of claim a larger
// competitor can rebut. Keep them distinct.
//
// Scope note: this cluster is deliberately small — one hub plus four West India
// pages with genuinely different local content. Mass-producing city x WiFi
// combinations would repeat the thin-content problem already logged as SEO-012.
//
// Each page carries two calls to action: one for end customers and one for
// prospective partners, because dealers searching these terms currently have no
// route to register interest from a product page (CRO-006).

const WIFI_SPECS = [
  { label: "Resolution", value: "3MP" },
  { label: "WiFi Band", value: "2.4 GHz" },
  { label: "IR Range", value: "Up to 20M" },
  { label: "Protection", value: "IP66" },
];

const seoPageDataWifi = {

  // ── HUB ────────────────────────────────────────────────────────────────────
  "wifi-cctv-camera": {
    slug: "wifi-cctv-camera",
    title: "WiFi CCTV Camera India | BIS-ER Certified Wireless Security | ArcisAI",
    metaDescription:
      "ArcisAI WiFi CCTV cameras — 3MP, 2.4GHz wireless, two-way audio, human detection, IP66 outdoor rated. BIS-ER R-72003735 certified and made in India. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera", "wifi cctv camera india", "wireless cctv camera",
      "wifi security camera india", "wifi camera for home", "outdoor wifi cctv camera",
      "BIS certified wifi camera", "made in india wifi cctv camera",
      "wifi ptz camera india", "wireless security camera india",
    ],
    showSectionContent: true,
    datasheets: [
      { label: "AD-90AIWFBDP datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP.pdf" },
      { label: "AD-90AIWFBDP-PTZ datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP-%20PTZ.pdf" },
      { label: "S-Series Dome WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20Dome%20WiFi.pdf" },
      { label: "S-Series Bullet WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20Bullet%20WiFi.pdf" },
      { label: "S-Series PTZ WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20PTZ%20WiFi.pdf" },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/products/ad-90aiwfbdp", label: "AD-90AIWFBDP outdoor WiFi pan-tilt camera" },
      { href: "/products/ad-90aiwfbdp-ptz", label: "AD-90AIWFBDP-PTZ WiFi camera" },
      { href: "/compare/4g-cameras-vs-wifi-cameras", label: "4G versus WiFi cameras" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    heroTitle: "WiFi CCTV Cameras, Made in India and BIS-ER Certified",
    heroSubtitle: "3MP wireless surveillance | BIS-ER R-72003735 | STQC-certified VMS",
    heroDescription:
      "No cable runs, no trenching, no rewiring. ArcisAI WiFi cameras connect over your existing 2.4GHz network and reach places a wired camera cannot justify — rented premises, finished interiors, temporary sites and homes. They carry BIS-ER registration R-72003735, which is what makes a camera legal to sell in India, and they are manufactured in India rather than rebadged.",
    category: "product",
    sections: [
      {
        title: "Why WiFi, and where it genuinely wins",
        content:
          "WiFi is the right choice when running cable is the expensive part of the job, not the camera. A finished shop interior, a rented office, a home where drilling through walls is unwelcome, a warehouse mezzanine, a site that will move in six months — in each case a wireless camera goes up in minutes rather than a day. It is not the right choice everywhere, and ArcisAI sells 4G and PoE variants for the cases where it is not: sites with no reliable broadband, or long outdoor runs where a dedicated wired backbone is better. The honest rule is that WiFi wins where the network already exists and the cabling does not.",
        stats: WIFI_SPECS,
        features: [
          "3MP resolution — 2304x1296 main stream, 800x488 sub stream",
          "2.4GHz WiFi, with wired Ethernet as a fallback on the same unit",
          "Two-way audio with built-in microphone and speaker",
          "Human detection and motion detection on the camera itself",
          "IR night vision up to 20 metres with intelligent fill light",
          "IP66 weather rating and 4000V lightning protection for outdoor use",
          "microSD storage up to 128GB, plus cloud storage support",
          "ONVIF support, so it works with third-party recorders and VMS",
        ],
      },
      {
        title: "What BIS-ER certification actually means for you",
        content:
          "Since 1 April 2026, CCTV sold in India must meet BIS Essential Requirements. This is not a marketing badge — it is the difference between equipment you can legally sell and install and equipment you cannot. ArcisAI WiFi cameras carry BIS-ER registration R-72003735 under IS 13252 (part 1) / IEC 60950-1, and the Video Management System is separately STQC-certified. Those are two distinct certifications covering hardware and software respectively, and it is worth knowing which any supplier actually holds. You can check any brand's certificate yourself using our free verifier rather than taking a claim on trust.",
        features: [
          "BIS-ER registration R-72003735 — verifiable on the BIS register",
          "IS 13252 (part 1) / IEC 60950-1 conformity",
          "STQC-certified Video Management System, certified separately from the hardware",
          "Manufactured in India, not imported and rebadged",
          "Check any brand's certificate with our free BIS-ER and STQC verifier tool",
        ],
      },
      {
        title: "The range",
        content:
          "Two WiFi models cover most requirements. The AD-90AIWFBDP is an outdoor WiFi pan-tilt camera at 3MP with a fixed 4mm lens, 68 degree field of view, DWDR and 3D noise reduction, running H.264/H.265 over HTTPS and RTSPS. The AD-90AIWFBDP-PTZ is the taller of the two (315 mm) and supports both cloud storage and microSD up to 256GB. Both run from a DC12V supply: 1A for the AD-90AIWFBDP and up to 15W for the AD-90AIWFBDP-PTZ.",
        features: [
          "AD-90AIWFBDP — outdoor WiFi PT, 3MP, IR to 20M, microSD to 128GB",
          "AD-90AIWFBDP-PTZ — WiFi PTZ, IEEE 802.11b/g/n, cloud plus microSD to 256GB",
          "AD-90AIWFBDP datasheet: two-way audio, human detection, ONVIF, IP66, 4000V lightning protection; confirm the same for the AD-90AIWFBDP-PTZ with our team",
          "4G and PoE variants available where WiFi is not the right fit",
        ],
      },
      {
        title: "AD-90AIWFBDP vs AD-90AIWFBDP-PTZ: how the two models compare",
        content:
          "Both models share a 3MP sensor, a 4mm fixed lens, a 2304x1296 main stream and 2.4GHz WiFi. ONVIF support and the IP66 rating are stated on the AD-90AIWFBDP datasheet; confirm them for the AD-90AIWFBDP-PTZ with our team. The practical differences are storage, night lighting and physical size, set out below from the published datasheets.",
        features: [
          "Storage: AD-90AIWFBDP takes microSD up to 128GB; AD-90AIWFBDP-PTZ supports cloud storage and microSD up to 256GB",
          "Night vision: AD-90AIWFBDP has IR up to 20 metres with intelligent fill light; AD-90AIWFBDP-PTZ has six infrared LEDs plus white light, 20 to 30 metres infrared and 15 to 20 metres white light",
          "Wireless: AD-90AIWFBDP is 2.4GHz WiFi; AD-90AIWFBDP-PTZ is 2.4GHz IEEE 802.11b/g/n",
          "Operating range: AD-90AIWFBDP up to 50 degrees Celsius; AD-90AIWFBDP-PTZ from minus 20 to 50 degrees Celsius",
          "Power: AD-90AIWFBDP runs on DC12V 1A; AD-90AIWFBDP-PTZ runs on DC12V at up to 15W",
          "Size: AD-90AIWFBDP is 165 x 191.5 x 132.8 mm; AD-90AIWFBDP-PTZ is 150 x 162 x 315 mm and weighs 850g",
          "Datasheets: arcisai.io/pdfs/AD-90AIWFBDP.pdf for the first model; the PTZ datasheet is available from our team",
        ],
      },
      {
        title: "Power, internet and installation: what a WiFi camera still needs",
        content:
          "WiFi describes how the video travels, not how the camera is powered. Both ArcisAI WiFi models need a DC12V power supply at the camera, so you still need a power point or a power run, even though no network cable is required. Live viewing and cloud storage depend on your internet connection; the camera also has a wired Ethernet port if you later want to move off WiFi. Recording to a microSD card is stored on the camera itself.",
        features: [
          "Power cable needed: yes, DC12V at the camera; only the network cable is removed",
          "Network: 2.4GHz WiFi, with a 10/100M wired Ethernet port on the same unit",
          "Remote viewing and cloud storage need a working internet connection",
          "Local storage: microSD in the camera",
          "Installation and after-sales support: Contact the ArcisAI team for installation and after-sales support",
        ],
      },
    ],
    faqs: [
      {
        q: "Are ArcisAI WiFi CCTV cameras certified to sell in India?",
        a: "Yes. The cameras carry BIS-ER registration R-72003735 under IS 13252 (part 1) / IEC 60950-1, which is the requirement for CCTV sold in India since 1 April 2026. The Video Management System holds a separate STQC certification. Hardware and software certifications are distinct, and you can verify any brand's certificate using our free verifier tool.",
      },
      {
        q: "Does the WiFi camera work on 5GHz networks?",
        a: "The Eco Series WiFi models operate on 2.4GHz, while the S-Series WiFi dome, bullet and PTZ datasheets list 2.4GHz and 5GHz. 2.4GHz gives better range and wall penetration than 5GHz — usually the more useful trade-off for cameras placed away from the router. Each unit also has a wired Ethernet port, so you can switch to cable later without replacing the camera.",
      },
      {
        q: "What resolution do the WiFi cameras record at?",
        a: "3MP, with a main stream of 2304x1296 and a sub stream of 800x488. Video is compressed using H.264/H.265, so recordings stay manageable on a microSD card or in cloud storage.",
      },
      {
        q: "Can I use these outdoors?",
        a: "Yes, the AD-90AIWFBDP is IP66 rated with 4000V lightning protection and operates up to 50 degrees Celsius. The AD-90AIWFBDP-PTZ datasheet lists minus 20 to 50 degrees Celsius but does not state an ingress rating, so confirm that with our team. The S-Series WiFi dome, bullet and PTZ datasheets also list IP66.",
      },
      {
        q: "How much storage do they support?",
        a: "The AD-90AIWFBDP supports microSD up to 128GB. The PTZ model supports microSD up to 256GB and cloud storage. Both can also stream to a third-party recorder over ONVIF.",
      },
      {
        q: "Should I choose WiFi or 4G?",
        a: "Choose WiFi when the site already has reliable broadband and the cost of the job is in the cabling. Choose 4G when there is no dependable network at the location. ArcisAI makes both, so the answer depends on the site rather than on what we happen to sell.",
      },
      {
        q: "Is a WiFi CCTV camera really wireless? Does it still need a power cable?",
        a: "The video is wireless, the power is not. Both ArcisAI WiFi models need a DC12V power supply at the camera. Only the network cable is removed, which is usually the expensive and disruptive part of an installation.",
      },
      {
        q: "What is the difference between the AD-90AIWFBDP and the AD-90AIWFBDP-PTZ?",
        a: "Both are 3MP, 2.4GHz WiFi cameras with two-way audio. The AD-90AIWFBDP takes microSD up to 128GB, has IR night vision up to 20 metres, and its datasheet lists IP66 and ONVIF. The AD-90AIWFBDP-PTZ supports cloud storage and microSD up to 256GB, and adds white light alongside infrared for night coverage.",
      },
      {
        q: "Do I need internet for the camera to work?",
        a: "Remote live viewing and cloud storage need a working internet connection. Footage recorded to the microSD card is stored on the camera itself. For sites with no dependable broadband, ArcisAI also makes 4G cameras.",
      },
      {
        q: "How much does an ArcisAI WiFi camera cost?",
        a: "Pricing depends on the model, quantity and any cloud storage plan, so we quote against your requirement rather than publish a single price. Use the Request a Quote button on this page and our team will share current pricing, or dealer pricing if you install or resell.",
      },
      {
        q: "Do you appoint dealers and distributors for WiFi cameras?",
        a: "Yes. We are actively appointing partners across India and particularly across the western states. If you install, resell or distribute security equipment, you can register interest below and our channel team will share territory availability and commercial terms.",
      },
    ],
    cta: {
      title: "Get WiFi camera pricing, or become a partner",
      description:
        "End customers: request a quote or a free site assessment. Dealers, installers and distributors: register your interest and we will send territory availability and commercial terms.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-cctv-camera",
    },
  },

  // ── WEST INDIA ─────────────────────────────────────────────────────────────
  "wifi-cctv-camera-ahmedabad": {
    slug: "wifi-cctv-camera-ahmedabad",
    title: "WiFi CCTV Camera in Ahmedabad | BIS-ER Certified | ArcisAI",
    metaDescription:
      "WiFi CCTV cameras in Ahmedabad from ArcisAI — 3MP wireless, IP66 outdoor, BIS-ER R-72003735 certified. ArcisAI is headquartered in Ahmedabad. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera Ahmedabad", "wireless cctv camera Ahmedabad",
      "wifi security camera Ahmedabad", "cctv dealer Ahmedabad",
      "wifi camera installation Ahmedabad", "BIS certified wifi camera Gujarat",
    ],
    heroTitle: "WiFi CCTV Cameras in Ahmedabad",
    heroSubtitle: "Head office in Ahmedabad | BIS-ER R-72003735",
    heroDescription:
      "ArcisAI is headquartered in Ahmedabad. Contact the team to confirm installation and support options for your site. Wireless 3MP cameras for shops on CG Road, offices along SG Highway, housing societies in Satellite and Bopal, and rented premises where cable runs are not an option.",
    category: "city",
    showSectionContent: true,
    sections: [
      {
        title: "Where WiFi makes sense in Ahmedabad",
        content:
          "Ahmedabad's retail corridors and older commercial buildings are full of premises where a wired install means damaging a finished interior or negotiating with a landlord. Shops on CG Road and Law Garden, clinics and offices in Navrangpura, and rented units across Prahladnagar are the natural fit for wireless cameras that mount in minutes on an existing broadband line. Housing societies in Satellite, Bopal and South Bopal use them for common areas, lifts and parking where running conduit to every point would be disproportionate. For industrial estates at Naroda, Vatva and Odhav with patchy connectivity, 4G variants are usually the better answer, and we will say so.",
        stats: WIFI_SPECS,
        features: [
          "ArcisAI head office is in Ahmedabad; contact the team to confirm installation and support for your site",
          "3MP wireless cameras, IP66 rated for Gujarat's summer heat",
          "Two-way audio for shopfronts, reception areas and society gates",
          "Human detection on the camera, so alerts are not triggered by every passing vehicle",
          "4G alternatives recommended where a site's broadband is unreliable",
        ],
      },
      {
        title: "Which ArcisAI WiFi camera suits Ahmedabad",
        content:
          "For shops on CG Road, offices and clinics, and housing society common areas, the WiFi dome suits indoor and covered positions, the WiFi bullet suits entrances and outdoor walls, and a pan-tilt model suits wider areas within WiFi range. For Naroda, Vatva and Odhav industrial estates with patchy connectivity, ask about 4G or PoE instead. Share the site details and the team will recommend a model rather than a default.",
        features: [
          "Indoor and covered positions: WiFi dome camera",
          "Entrances and outdoor walls: WiFi bullet camera",
          "Wider areas within WiFi range: WiFi PTZ and pan-tilt cameras",
          "Weak broadband or long cable runs: ask about 4G or PoE models",
        ],
      },
    ],
    faqs: [
      {
        q: "Can ArcisAI install WiFi CCTV in Ahmedabad?",
        a: "Ahmedabad is our head office city. Contact the team with your location and requirement to confirm site survey and installation options for your site.",
      },
      {
        q: "Are these cameras legal to sell and install in Gujarat?",
        a: "Yes. They carry BIS-ER registration R-72003735, which is the national requirement for CCTV sold in India since 1 April 2026, and the Video Management System is separately STQC-certified.",
      },
      {
        q: "I run a CCTV business in Ahmedabad. Can I become a dealer?",
        a: "Yes, we are appointing partners across Gujarat. Register your interest and our channel team will share territory availability and commercial terms.",
      },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/cctv-cameras-ahmedabad", label: "AI CCTV cameras in Ahmedabad" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "WiFi cameras in Ahmedabad — quote or partnership",
      description:
        "Request a quote or a site survey, or register as a dealer if you sell and install security equipment in Gujarat.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera&city=ahmedabad",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-ahmedabad",
    },
  },

  "wifi-cctv-camera-mumbai": {
    slug: "wifi-cctv-camera-mumbai",
    title: "WiFi CCTV Camera in Mumbai | BIS-ER Certified Wireless | ArcisAI",
    metaDescription:
      "WiFi CCTV cameras in Mumbai from ArcisAI — 3MP wireless, IP66, BIS-ER R-72003735 certified, made in India. Ideal for rented and space-constrained premises. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera Mumbai", "wireless cctv camera Mumbai",
      "wifi security camera Mumbai", "cctv dealer Mumbai",
      "wifi camera for shop Mumbai", "BIS certified wifi camera Maharashtra",
    ],
    heroTitle: "WiFi CCTV Cameras in Mumbai",
    heroSubtitle: "Built for rented and space-constrained premises | BIS-ER R-72003735",
    heroDescription:
      "In a city where most commercial space is rented and structural changes need permission, wireless cameras solve a problem wired systems create. 3MP IP66 cameras that mount on an existing broadband connection, for shops, clinics, offices and residential buildings across the city.",
    category: "city",
    showSectionContent: true,
    sections: [
      {
        title: "Why wireless suits Mumbai specifically",
        content:
          "Mumbai's commercial property is overwhelmingly leased, and landlords rarely welcome conduit through finished walls. That single fact makes WiFi cameras a better commercial fit here than in cities with more owner-occupied premises. Retail in Dadar, Andheri and Lower Parel, clinics and consulting rooms across the suburbs, and co-working and small offices in BKC all share the same constraint: the tenancy is shorter than the life of the cabling. Wireless cameras move with the business. Larger campuses and long outdoor perimeters are still better served by PoE, and we will recommend that where it applies rather than selling wireless into a job it does not suit.",
        stats: WIFI_SPECS,
        features: [
          "Installs without structural changes — suits leased premises",
          "IP66 rated, which matters through the Mumbai monsoon",
          "Two-way audio for shopfronts and reception desks",
          "microSD storage on the camera, so footage survives a network outage",
          "Moves with you at the end of a tenancy",
        ],
      },
      {
        title: "Which ArcisAI WiFi camera suits Mumbai",
        content:
          "For rented shops, clinics and offices, the WiFi dome suits indoor and covered positions, the WiFi bullet suits entrances and outdoor walls, and a pan-tilt model suits wider areas within WiFi range. For larger campuses and long outdoor perimeters, ask about 4G or PoE instead. Share the site details and the team will recommend a model rather than a default.",
        features: [
          "Indoor and covered positions: WiFi dome camera",
          "Entrances and outdoor walls: WiFi bullet camera",
          "Wider areas within WiFi range: WiFi PTZ and pan-tilt cameras",
          "Weak broadband or long cable runs: ask about 4G or PoE models",
        ],
      },
    ],
    faqs: [
      {
        q: "Will these cameras handle the Mumbai monsoon?",
        a: "The outdoor models are IP66 rated with 4000V lightning protection, which is the appropriate specification for monsoon exposure. Placement still matters — we advise on mounting positions during the site assessment.",
      },
      {
        q: "Can I take the cameras with me if I move premises?",
        a: "Yes, and that is a large part of why wireless suits Mumbai. There is no fixed cabling to abandon, so the system relocates with the business.",
      },
      {
        q: "Are you appointing dealers in Mumbai and Maharashtra?",
        a: "Yes. Register your interest and our channel team will confirm territory availability and commercial terms.",
      },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/cctv-cameras-mumbai", label: "AI CCTV cameras in Mumbai" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "WiFi cameras in Mumbai — quote or partnership",
      description:
        "Request a quote or site assessment, or register as a dealer if you sell and install security equipment in Maharashtra.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera&city=mumbai",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-mumbai",
    },
  },

  "wifi-cctv-camera-pune": {
    slug: "wifi-cctv-camera-pune",
    title: "WiFi CCTV Camera in Pune | BIS-ER Certified Wireless | ArcisAI",
    metaDescription:
      "WiFi CCTV cameras in Pune from ArcisAI — 3MP wireless, IP66 outdoor, BIS-ER R-72003735 certified. For offices, societies and rented premises. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera Pune", "wireless cctv camera Pune",
      "wifi security camera Pune", "cctv dealer Pune",
      "wifi camera for society Pune", "BIS certified wifi camera Pune",
    ],
    heroTitle: "WiFi CCTV Cameras in Pune",
    heroSubtitle: "For offices, societies and rented premises | BIS-ER R-72003735",
    heroDescription:
      "Wireless 3MP cameras for Pune's IT offices, housing societies and retail premises — installed without cable runs, certified to BIS-ER R-72003735, and manufactured in India.",
    category: "city",
    showSectionContent: true,
    sections: [
      {
        title: "WiFi cameras across Pune",
        content:
          "Pune combines a large IT and services office base with some of the fastest residential society development in the west. Offices in Hinjewadi, Kharadi and Magarpatta frequently occupy fitted-out floors where additional cabling is restricted by the building management. Housing societies across Baner, Wakad and Kothrud need coverage of gates, lifts, parking and common areas, where the cost of a wired install is driven by distance rather than camera count. Wireless cameras address both, provided the building's network reaches the mounting point — which we confirm during the site assessment rather than assuming.",
        stats: WIFI_SPECS,
        features: [
          "Suits fitted-out offices where additional cabling is restricted",
          "Society common areas, gates, lifts and parking without trenching",
          "Human detection reduces false alerts in busy shared spaces",
          "Two-way audio at gates and reception points",
          "Site assessment confirms network coverage before anything is quoted",
        ],
      },
      {
        title: "Which ArcisAI WiFi camera suits Pune",
        content:
          "For fitted-out offices and housing society gates, lifts and parking, the WiFi dome suits indoor and covered positions, the WiFi bullet suits entrances and outdoor walls, and a pan-tilt model suits wider areas within WiFi range. For positions where the building network does not reach, ask about 4G or PoE instead. Share the site details and the team will recommend a model rather than a default.",
        features: [
          "Indoor and covered positions: WiFi dome camera",
          "Entrances and outdoor walls: WiFi bullet camera",
          "Wider areas within WiFi range: WiFi PTZ and pan-tilt cameras",
          "Weak broadband or long cable runs: ask about 4G or PoE models",
        ],
      },
    ],
    faqs: [
      {
        q: "Is WiFi reliable enough for a housing society?",
        a: "It depends on whether the society's network reaches the mounting points, which is exactly what the site assessment establishes. Where coverage is weak at a gate or far corner, we would recommend PoE or 4G for those specific positions rather than forcing wireless everywhere.",
      },
      {
        q: "Do the cameras keep recording if the internet drops?",
        a: "Yes. Footage is written to the onboard microSD card, so a network outage does not mean lost recording.",
      },
      {
        q: "Are you appointing dealers in Pune?",
        a: "Yes, across Maharashtra. Register your interest and our channel team will be in touch with territory availability.",
      },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/cctv-cameras-pune", label: "AI CCTV cameras in Pune" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "WiFi cameras in Pune — quote or partnership",
      description:
        "Request a quote or site survey, or register as a dealer if you sell and install security equipment in Pune.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera&city=pune",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-pune",
    },
  },

  "wifi-cctv-camera-surat": {
    slug: "wifi-cctv-camera-surat",
    title: "WiFi CCTV Camera in Surat | BIS-ER Certified Wireless | ArcisAI",
    metaDescription:
      "WiFi CCTV cameras in Surat from ArcisAI — 3MP wireless, IP66, BIS-ER R-72003735 certified, made in India. For textile markets, showrooms and offices. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera Surat", "wireless cctv camera Surat",
      "wifi security camera Surat", "cctv dealer Surat",
      "wifi camera for shop Surat", "BIS certified wifi camera Surat",
    ],
    heroTitle: "WiFi CCTV Cameras in Surat",
    heroSubtitle: "For textile markets, showrooms and offices | BIS-ER R-72003735",
    heroDescription:
      "Wireless 3MP cameras for Surat's textile markets, diamond trade offices and retail showrooms — mounted without disturbing a finished interior, and certified under BIS-ER R-72003735.",
    category: "city",
    showSectionContent: true,
    sections: [
      {
        title: "WiFi cameras for Surat's trading floors and showrooms",
        content:
          "Surat's textile markets are dense, subdivided and constantly being refitted, which makes permanent cabling awkward and short-lived. Individual shops inside the larger market complexes often cannot run cable beyond their own unit at all. Wireless cameras give each trader independent coverage on their own connection. Showrooms and diamond trade offices in Athwa and Adajan have the opposite constraint — interiors that have been finished to a standard nobody wants drilled. In both cases the camera goes up without touching the building. Where a unit has no dependable broadband, a 4G model is the more sensible recommendation.",
        stats: WIFI_SPECS,
        features: [
          "Per-unit coverage inside subdivided market complexes",
          "No damage to finished showroom interiors",
          "Two-way audio for counters and entrances",
          "Onboard microSD recording independent of the building network",
          "4G alternatives where a unit's broadband is unreliable",
        ],
      },
      {
        title: "Which ArcisAI WiFi camera suits Surat",
        content:
          "For market units, showrooms and trade offices, the WiFi dome suits indoor and covered positions, the WiFi bullet suits entrances and outdoor walls, and a pan-tilt model suits wider areas within WiFi range. For units with no dependable broadband, ask about 4G or PoE instead. Share the site details and the team will recommend a model rather than a default.",
        features: [
          "Indoor and covered positions: WiFi dome camera",
          "Entrances and outdoor walls: WiFi bullet camera",
          "Wider areas within WiFi range: WiFi PTZ and pan-tilt cameras",
          "Weak broadband or long cable runs: ask about 4G or PoE models",
        ],
      },
    ],
    faqs: [
      {
        q: "Can each shop in a market complex have its own system?",
        a: "Yes. Each camera runs on that unit's own WiFi connection and records to its own storage, so coverage does not depend on the complex having shared infrastructure.",
      },
      {
        q: "Are the cameras certified for sale in India?",
        a: "Yes, under BIS-ER registration R-72003735, with the Video Management System separately STQC-certified.",
      },
      {
        q: "Are you appointing dealers in Surat?",
        a: "Yes, across Gujarat. Register your interest and our channel team will share territory availability and commercial terms.",
      },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/cctv-cameras-surat", label: "AI CCTV cameras in Surat" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "WiFi cameras in Surat — quote or partnership",
      description:
        "Request a quote or site survey, or register as a dealer if you sell and install security equipment in Surat.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera&city=surat",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-surat",
    },
  },

  // ── PRODUCT-TYPE PAGES (Eco WiFi PT / PTZ + S-Series WiFi dome, bullet, PTZ) ──
  // Specs below are copied from the published datasheets in public/pdfs
  // (S Series Dome WiFi / Bullet WiFi / PTZ WiFi, AD-90AIWFBDP, AD-90AIWFBDP-PTZ).
  // Not stated on a datasheet = not claimed here. Open datasheet gaps are listed
  // in the audit report (e.g. no model code on the S-Series WiFi sheets, PTZ
  // sheet prints "AD-90AIWFBDP" as its model number, no BIS registration number
  // on the S-Series WiFi sheets, dimensions on the dome/PTZ sheets look copied).

  "wifi-cctv-camera-dome": {
    slug: "wifi-cctv-camera-dome",
    title: "WiFi Dome CCTV Camera India | 3MP Dual-Band, Two-Way Audio | ArcisAI",
    metaDescription:
      "ArcisAI S-Series WiFi dome CCTV camera: 3MP, 2.4 and 5GHz WiFi, two-way audio, IP66, microSD up to 256GB, ONVIF. See specs and request a quote.",
    keywords: [
      "wifi dome cctv camera", "wifi dome camera india", "wireless dome camera",
      "indoor wifi cctv camera", "wifi camera with two-way audio", "onvif wifi camera",
    ],
    heroTitle: "WiFi Dome CCTV Camera for Indoor and Covered Areas",
    heroSubtitle: "ArcisAI S-Series WiFi dome | 3MP | 2.4 and 5GHz WiFi | Two-way audio",
    heroDescription:
      "A low-profile 3MP dome camera that connects over WiFi, so only a power point is needed at the mounting position. Specifications on this page come from the published S-Series WiFi dome datasheet.",
    category: "product",
    showSectionContent: true,
    sections: [
      {
        title: "When a WiFi dome camera is the right choice",
        content:
          "A dome housing is compact and unobtrusive, which suits shops, offices, reception areas, corridors and other places where people notice a large camera. WiFi removes the network cable, so the install is limited to the camera mount and a power supply. It works best where the existing WiFi signal already reaches the mounting point; if it does not, a PoE or 4G model is the better choice for that position.",
        features: [
          "Shops, clinics and offices where drilling a cable route is not practical",
          "Rented premises where the system needs to move with the business",
          "Corridors, reception counters and entrances inside a building",
          "Positions where the WiFi signal is already strong and a power point is close",
        ],
      },
      {
        title: "S-Series WiFi dome: key specifications",
        content:
          "These values are taken from the ArcisAI S-Series Dome WiFi datasheet. The same imaging platform is listed on the bullet and PTZ WiFi datasheets, so the form factor, rather than the picture quality, decides which model fits a position.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "WiFi", value: "2.4 / 5GHz" },
          { label: "Protection", value: "IP66" },
          { label: "Storage", value: "TF up to 256GB" },
        ],
        features: [
          "2304 x 1296 main stream at up to 30fps; 800 x 448 sub stream",
          "1/2.8 inch CMOS sensor, 4mm fixed lens, 68 degree horizontal and 41 degree vertical view",
          "0.1 lux colour and 0.01 lux black and white minimum illumination",
          "H.264 / H.265 compression with dual stream support",
          "Smart IR with white light; the datasheet lists IR distance up to 50M",
          "Two-way audio with built-in microphone and speaker",
          "Wall, ceiling and pole mounting; IP66 and lightning protection listed",
        ],
      },
      {
        title: "Connectivity, power and storage",
        content:
          "WiFi describes how video travels, not how the camera is powered. The camera needs a DC12V supply at the mounting point, and remote viewing needs a working internet connection. Footage can also be recorded locally to a TF (microSD) card.",
        features: [
          "WiFi: IEEE 802.11 b/g/n, 2.4GHz and 5.0GHz supported",
          "Power: DC 12V 1A, up to 12W; the camera also has an Ethernet connection",
          "Local storage: TF card up to 256GB (card and power adapter are optional accessories)",
          "Operating temperature listed as 0 to 60 degrees Celsius",
          "Warranty listed on the datasheet: 2 years",
        ],
      },
      {
        title: "AI events, apps and compatibility",
        content:
          "The datasheet lists on-camera events and open integration options, which matters if the camera will join an existing recorder or video management system.",
        features: [
          "Events: motion, human, face, line cross, area, missing object, unattended baggage and customer traffic statistics",
          "Viewing through a web browser and the ArcisAI mobile app on iOS and Android",
          "ONVIF 2.4, RTSP and an open API for third-party VMS integration; Milestone and Genetec support listed",
          "AES 256 encryption, signed firmware and password protection listed",
        ],
      },
      {
        title: "Certification and datasheet status",
        content:
          "Camera hardware certification and video management software certification are separate things. The S-Series WiFi dome datasheet lists FCC, BIS, CE and RoHS approvals but does not print a model-specific BIS-ER registration number. Ask the ArcisAI team to confirm the registration that applies to this exact model before you order, and check any registration number on the official BIS portal. Our certifications page explains how hardware and software certificates differ.",
        features: [
          "Hardware: confirm the model-specific BIS-ER registration with the team",
          "Software: video management software certification is covered separately",
          "Verify any certificate yourself with the certificate verifier tool",
        ],
      },
      {
        title: "Dome, bullet or PTZ?",
        content:
          "Choose the dome for discreet indoor and covered positions, the bullet for a fixed outdoor view, and the PTZ when one camera has to cover a wide area by moving. If your site has no dependable broadband, ask about a 4G model instead of WiFi.",
        features: [
          "Dome: discreet fixed view for indoor and covered areas",
          "Bullet: fixed outdoor view, see the WiFi bullet page",
          "PTZ: pan and tilt coverage, see the WiFi PTZ page",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a WiFi dome CCTV camera?",
        a: "A WiFi dome camera is a dome-shaped CCTV camera that sends video over WiFi instead of a network cable. ArcisAI's S-Series WiFi dome is a 3MP camera with two-way audio, microSD storage and ONVIF support.",
      },
      {
        q: "Does a WiFi dome camera still need a power cable?",
        a: "Yes. The datasheet lists a DC 12V 1A supply, so you need a power point or power run at the mounting position. Only the network cable is removed.",
      },
      {
        q: "Does the ArcisAI WiFi dome work on 5GHz WiFi?",
        a: "The S-Series WiFi dome datasheet lists IEEE 802.11 b/g/n with 2.4GHz and 5.0GHz support.",
      },
      {
        q: "How much storage can I use?",
        a: "The datasheet lists TF (microSD) card storage up to 256GB. The card is an optional accessory. Footage can also be viewed remotely over the internet.",
      },
      {
        q: "Does it work with third-party recorders or VMS?",
        a: "The datasheet lists ONVIF 2.4, RTSP and an open API, with Milestone and Genetec support. Confirm your exact recorder or VMS with the ArcisAI team before purchase.",
      },
      {
        q: "Is this WiFi dome BIS-ER certified?",
        a: "The datasheet lists BIS among its approvals but does not print a model-specific registration number. Please ask the ArcisAI team to confirm the registration for this model, and verify it on the official BIS portal.",
      },
    ],
    datasheets: [
      { label: "S-Series Dome WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20Dome%20WiFi.pdf" },
      { label: "Dome WiFi user manual (PDF)", href: "/pdfs/DOME%20WIFI%20USER%20MANUAL.pdf" },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ camera" },
      { href: "/compare/4g-cameras-vs-wifi-cameras", label: "4G versus WiFi cameras" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "Get a WiFi dome recommendation or quote",
      description:
        "Tell us about the site and we will recommend WiFi, PoE or 4G for each position. Dealers and installers can register interest too.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera-dome",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-cctv-camera-dome",
    },
  },

  "wifi-cctv-camera-bullet": {
    slug: "wifi-cctv-camera-bullet",
    title: "WiFi Bullet CCTV Camera India | 3MP Outdoor, IP66 | ArcisAI",
    metaDescription:
      "ArcisAI S-Series WiFi bullet CCTV camera: 3MP, 2.4 and 5GHz WiFi, IR up to 50M, IP66, two-way audio, microSD up to 256GB. See specs and get a quote.",
    keywords: [
      "wifi bullet cctv camera", "outdoor wifi cctv camera", "wireless bullet camera india",
      "wifi bullet camera with night vision", "ip66 wifi camera", "3mp wifi cctv camera",
    ],
    heroTitle: "WiFi Bullet CCTV Camera for Outdoor and Perimeter Views",
    heroSubtitle: "ArcisAI S-Series WiFi bullet | 3MP | IP66 | 2.4 and 5GHz WiFi",
    heroDescription:
      "A fixed-view 3MP bullet camera for entrances, shopfronts, yards and boundaries, connected over WiFi. Specifications come from the published S-Series WiFi bullet datasheet.",
    category: "product",
    showSectionContent: true,
    sections: [
      {
        title: "When a WiFi bullet camera is the right choice",
        content:
          "A bullet camera gives a fixed, directional view and is the usual choice for covering a gate, shopfront, driveway or boundary wall. The datasheet lists IP66 protection, so it is intended for outdoor mounting. As with any WiFi camera, the signal has to reach the mounting point, and the camera still needs power there.",
        features: [
          "Shopfronts, building entrances and gates",
          "Driveways, yards and parking areas within WiFi range",
          "Boundary walls and building corners where a fixed view is enough",
          "Sites where cable routes are difficult but a power point is available",
        ],
      },
      {
        title: "S-Series WiFi bullet: key specifications",
        content:
          "These values come from the ArcisAI S-Series Bullet WiFi datasheet. It lists the same imaging platform as the dome and PTZ WiFi datasheets.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "WiFi", value: "2.4 / 5GHz" },
          { label: "Protection", value: "IP66" },
          { label: "Storage", value: "TF up to 256GB" },
        ],
        features: [
          "2304 x 1296 main stream at up to 30fps; 800 x 448 sub stream",
          "1/2.8 inch CMOS sensor, 4mm fixed lens, 68 degree horizontal and 41 degree vertical view",
          "0.1 lux colour and 0.01 lux black and white minimum illumination",
          "Smart IR with white light; the datasheet lists IR distance up to 50M",
          "Two-way audio with built-in microphone and speaker",
          "Wall, ceiling and pole mounting; lightning protection listed",
          "Dimensions 96 x 283.5 x 213 mm; product weight 500g",
        ],
      },
      {
        title: "Connectivity, power and storage",
        content:
          "The camera needs a DC12V supply at the mounting point and a working internet connection for remote viewing. Footage can also be written to a TF (microSD) card.",
        features: [
          "WiFi: IEEE 802.11 b/g/n, 2.4GHz and 5.0GHz supported",
          "Power: DC 12V 1A, up to 12W; the camera also has an Ethernet connection",
          "Local storage: TF card up to 256GB (optional accessory)",
          "Operating temperature listed as 0 to 60 degrees Celsius",
          "Warranty listed on the datasheet: 2 years",
        ],
      },
      {
        title: "AI events, apps and compatibility",
        content:
          "The datasheet lists on-camera events and open integration options for use with an existing recorder or video management system.",
        features: [
          "Events: motion, human, face, line cross, area, missing object, unattended baggage and customer traffic statistics",
          "Viewing through a web browser and the ArcisAI mobile app on iOS and Android",
          "ONVIF 2.4, RTSP and an open API; Milestone and Genetec support listed",
          "AES 256 encryption, signed firmware and password protection listed",
        ],
      },
      {
        title: "Certification and datasheet status",
        content:
          "Camera hardware certification and video management software certification are separate. The S-Series WiFi bullet datasheet lists FCC, BIS, CE and RoHS approvals but does not print a model-specific BIS-ER registration number. Ask the ArcisAI team to confirm the registration for this exact model before you order, and verify it on the official BIS portal.",
        features: [
          "Hardware: confirm the model-specific BIS-ER registration with the team",
          "Software: video management software certification is covered separately",
          "Verify any certificate with the certificate verifier tool",
        ],
      },
      {
        title: "Bullet, dome or PTZ?",
        content:
          "Choose the bullet for a fixed outdoor view, the dome for discreet indoor and covered positions, and the PTZ when one camera has to cover a wide area by moving. Where there is no dependable broadband, ask about a 4G model.",
        features: [
          "Bullet: fixed outdoor view",
          "Dome: discreet fixed view for indoor and covered areas, see the WiFi dome page",
          "PTZ: pan and tilt coverage, see the WiFi PTZ page",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a WiFi bullet CCTV camera?",
        a: "A WiFi bullet camera is a fixed-view, tube-shaped CCTV camera that sends video over WiFi instead of a network cable. ArcisAI's S-Series WiFi bullet is a 3MP camera with IP66 protection, two-way audio and microSD storage.",
      },
      {
        q: "Can I use the WiFi bullet camera outdoors?",
        a: "The datasheet lists an IP66 waterproof standard and lightning protection, and wall, ceiling and pole mounting. Placement still matters, so describe your site to the team for advice.",
      },
      {
        q: "How far does the night vision reach?",
        a: "The datasheet lists IR distance up to 50M, with white light illumination of 15 to 20M. Real coverage depends on the scene, so ask for a demonstration if distance matters.",
      },
      {
        q: "Does it need a power cable?",
        a: "Yes. The datasheet lists a DC 12V 1A supply. Only the network cable is removed by using WiFi.",
      },
      {
        q: "How much storage does it support?",
        a: "TF (microSD) cards up to 256GB are listed. The card is an optional accessory.",
      },
      {
        q: "Is this WiFi bullet BIS-ER certified?",
        a: "The datasheet lists BIS among its approvals but does not print a model-specific registration number. Ask the ArcisAI team to confirm the registration for this model, and verify it on the official BIS portal.",
      },
    ],
    datasheets: [
      { label: "S-Series Bullet WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20Bullet%20WiFi.pdf" },
      { label: "Bullet WiFi user manual (PDF)", href: "/pdfs/BULLET%20WIFI%20USER%20MANUAL.pdf" },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ camera" },
      { href: "/compare/4g-cameras-vs-wifi-cameras", label: "4G versus WiFi cameras" },
      { href: "/resources/wifi-cctv-camera-buying-guide", label: "WiFi CCTV camera buying guide" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "Get a WiFi bullet recommendation or quote",
      description:
        "Tell us about the site and we will recommend WiFi, PoE or 4G for each position. Dealers and installers can register interest too.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera-bullet",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-cctv-camera-bullet",
    },
  },

  "wifi-cctv-camera-ptz": {
    slug: "wifi-cctv-camera-ptz",
    title: "WiFi PTZ Camera India | 3MP Pan-Tilt, Outdoor | ArcisAI",
    metaDescription:
      "ArcisAI WiFi PTZ and pan-tilt CCTV cameras: 3MP, 350 degree pan, two-way audio, microSD storage. Compare the S-Series WiFi PTZ with the AD-90AIWFBDP models.",
    keywords: [
      "wifi ptz camera", "wifi ptz camera india", "wireless pan tilt camera",
      "outdoor wifi ptz cctv camera", "wifi pan tilt zoom camera", "ptz camera with two-way audio",
    ],
    heroTitle: "WiFi PTZ and Pan-Tilt CCTV Cameras",
    heroSubtitle: "ArcisAI S-Series WiFi PTZ | AD-90AIWFBDP | AD-90AIWFBDP-PTZ",
    heroDescription:
      "Pan-tilt cameras that cover a wide area from a single position over WiFi. ArcisAI lists three WiFi pan-tilt options: the S-Series WiFi PTZ and the Eco Series AD-90AIWFBDP and AD-90AIWFBDP-PTZ.",
    category: "product",
    showSectionContent: true,
    sections: [
      {
        title: "When a WiFi PTZ camera is the right choice",
        content:
          "A pan-tilt camera can move to cover a yard, courtyard, shop floor or parking area that would otherwise need several fixed cameras. Over WiFi, the install is just a mount, a power supply and a signal that reaches the position. If the signal is weak or the site has no dependable broadband, a PoE or 4G model is the better choice for that position.",
        features: [
          "Yards, courtyards and open parking areas",
          "Shop floors and showrooms where one camera should cover a wide view",
          "Sites where running cable to the mounting position is difficult",
          "Positions within reliable WiFi range with power available",
        ],
      },
      {
        title: "S-Series WiFi PTZ: key specifications",
        content:
          "These values come from the ArcisAI S-Series PTZ WiFi datasheet, which lists the same imaging platform as the dome and bullet WiFi datasheets plus pan and tilt ranges.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "Pan Range", value: "350 deg" },
          { label: "Tilt Range", value: "0 to 90 deg" },
          { label: "Protection", value: "IP66" },
        ],
        features: [
          "2304 x 1296 main stream at up to 30fps; 800 x 448 sub stream",
          "1/2.8 inch CMOS sensor, 4mm lens, 68 degree horizontal and 41 degree vertical view",
          "WiFi: IEEE 802.11 b/g/n, 2.4GHz and 5.0GHz supported",
          "Power: DC 12V 1.5A, up to 15W",
          "TF card storage up to 256GB; two-way audio with built-in microphone and speaker",
          "Wall, ceiling and pole mounting; IP66 and lightning protection listed",
          "Warranty listed on the datasheet: 2 years",
        ],
      },
      {
        title: "Eco Series WiFi pan-tilt models: AD-90AIWFBDP and AD-90AIWFBDP-PTZ",
        content:
          "ArcisAI also lists two Eco Series WiFi pan-tilt models, each with its own page and datasheet. The AD-90AIWFBDP is a 3MP outdoor WiFi pan-tilt camera on 2.4GHz WiFi with microSD up to 128GB. The AD-90AIWFBDP-PTZ is a 3MP model on 2.4GHz WiFi that supports cloud storage and microSD up to 256GB.",
        features: [
          "AD-90AIWFBDP: 2.4GHz WiFi, IR up to 20M, microSD up to 128GB, IP66 and 4000V lightning protection listed",
          "AD-90AIWFBDP-PTZ: 2.4GHz IEEE 802.11b/g/n, cloud storage and microSD up to 256GB, infrared plus white light, minus 20 to 50 degrees Celsius",
          "Open the model pages for the full datasheet values",
        ],
      },
      {
        title: "Which WiFi pan-tilt camera should I choose?",
        content:
          "The S-Series PTZ lists dual-band WiFi, a 350 degree pan range and a 0 to 90 degree tilt range. The Eco Series models are 2.4GHz WiFi cameras with different storage and night-lighting options. If you are unsure, describe the site and the team will suggest a model, or recommend a PoE or 4G model where WiFi is not the right fit.",
        features: [
          "Need dual-band WiFi and listed pan and tilt ranges: S-Series WiFi PTZ",
          "Need a 2.4GHz outdoor pan-tilt with microSD up to 128GB: AD-90AIWFBDP",
          "Need cloud storage and microSD up to 256GB with infrared and white light: AD-90AIWFBDP-PTZ",
        ],
      },
      {
        title: "Certification and datasheet status",
        content:
          "The AD-90AIWFBDP datasheets print BIS-ER registration R-72003735 (IS 13252 part 1 / IEC 60950-1). The S-Series WiFi PTZ datasheet lists BIS among its approvals without a model-specific registration number, so ask the ArcisAI team to confirm the registration for the model you choose. Hardware and video management software certification are separate; see the certifications page.",
        features: [
          "Hardware: confirm the model-specific BIS-ER registration with the team",
          "Software: video management software certification is covered separately",
          "Verify any certificate with the certificate verifier tool",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a WiFi PTZ camera?",
        a: "A WiFi PTZ camera is a pan-tilt (and, on some models, zoom) CCTV camera that sends video over WiFi. It can be steered to cover a wide area from one mounting position instead of using several fixed cameras.",
      },
      {
        q: "What pan and tilt range does the ArcisAI WiFi PTZ have?",
        a: "The S-Series PTZ WiFi datasheet lists a 350 degree pan range and a 0 to 90 degree tilt range.",
      },
      {
        q: "Does a WiFi PTZ camera need a power cable?",
        a: "Yes. The S-Series PTZ WiFi datasheet lists DC 12V 1.5A. Only the network cable is removed by using WiFi.",
      },
      {
        q: "Which models does ArcisAI list for WiFi pan-tilt?",
        a: "The S-Series WiFi PTZ, the Eco Series AD-90AIWFBDP and the Eco Series AD-90AIWFBDP-PTZ. Each has a datasheet in our documents section.",
      },
      {
        q: "How much storage can a WiFi PTZ use?",
        a: "The S-Series WiFi PTZ and the AD-90AIWFBDP-PTZ list TF (microSD) up to 256GB, and the AD-90AIWFBDP lists up to 128GB. The AD-90AIWFBDP-PTZ datasheet also lists cloud storage.",
      },
      {
        q: "Is a WiFi PTZ camera BIS-ER certified?",
        a: "The AD-90AIWFBDP datasheets print BIS-ER registration R-72003735. The S-Series WiFi PTZ datasheet does not print a model-specific number, so please ask the team to confirm it for your model and verify it on the official BIS portal.",
      },
    ],
    datasheets: [
      { label: "S-Series PTZ WiFi datasheet (PDF)", href: "/pdfs/S%20Series%20PTZ%20WiFi.pdf" },
      { label: "AD-90AIWFBDP datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP.pdf" },
      { label: "AD-90AIWFBDP-PTZ datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP-%20PTZ.pdf" },
      { label: "Mini PT WiFi user manual (PDF)", href: "/pdfs/Mini%20PT%20Wifi%20user%20manual.pdf" },
    ],
    relatedPages: [
      { href: "/products/ad-90aiwfbdp", label: "AD-90AIWFBDP outdoor WiFi pan-tilt camera" },
      { href: "/products/ad-90aiwfbdp-ptz", label: "AD-90AIWFBDP-PTZ WiFi camera" },
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-dome", label: "WiFi dome CCTV camera" },
      { href: "/wifi-cctv-camera-bullet", label: "WiFi bullet CCTV camera" },
      { href: "/compare/4g-cameras-vs-wifi-cameras", label: "4G versus WiFi cameras" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "Get a WiFi PTZ recommendation or quote",
      description:
        "Tell us about the site and we will recommend the right pan-tilt model, or PoE or 4G where WiFi is not suitable. Dealers and installers can register interest too.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=wifi-cctv-camera-ptz",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=wifi-cctv-camera-ptz",
    },
  },

  // ── MODEL PAGES (served at /products/<model>; see app/products/[productSlug]) ──
  "ad-90aiwfbdp": {
    slug: "ad-90aiwfbdp",
    category: "products",
    model: "AD-90AIWFBDP",
    productName: "ArcisAI AD-90AIWFBDP Outdoor WiFi PT Camera",
    showSectionContent: true,
    title: "AD-90AIWFBDP Outdoor WiFi PT Camera | 3MP, IP66 | ArcisAI",
    metaDescription:
      "AD-90AIWFBDP: ArcisAI 3MP outdoor WiFi pan-tilt camera with 2.4GHz WiFi, two-way audio, IP66, microSD up to 128GB and ONVIF. Specs and datasheet.",
    keywords: [
      "AD-90AIWFBDP", "outdoor wifi pt camera", "3mp wifi pan tilt camera",
      "wifi cctv camera with two-way audio", "BIS-ER wifi camera",
    ],
    heroTitle: "AD-90AIWFBDP: Outdoor WiFi Pan-Tilt Camera",
    heroSubtitle: "3MP | 2.4GHz WiFi | IP66 | Two-way audio | microSD up to 128GB",
    heroDescription:
      "The AD-90AIWFBDP is a 3MP outdoor WiFi pan-tilt camera from ArcisAI (manufacturer: Adiance). Every specification on this page is taken from the published datasheet.",
    sections: [
      {
        title: "AD-90AIWFBDP overview",
        content:
          "The AD-90AIWFBDP is listed on its datasheet as an outdoor WiFi PT camera with a 3MP sensor, a fixed 4mm lens and infrared night vision up to 20M. It connects over 2.4GHz WiFi, has a 10/100M Ethernet port, and records to a microSD card up to 128GB. It needs a DC12V power supply at the mounting position.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "WiFi", value: "2.4GHz" },
          { label: "IR Range", value: "Up to 20M" },
          { label: "Protection", value: "IP66" },
        ],
        features: [
          "Model: AD-90AIWFBDP, product name outdoor WiFi PT, make ArcisAI, manufacturer Adiance",
          "Video: main stream 2304 x 1296, sub stream 800 x 488, up to 15fps, H.264 / H.265",
          "Image: 1/3 inch CMOS sensor, 4mm fixed lens, DWDR, 3D DNR, 0.1 lux colour and 0.01 lux black and white",
          "Night: colour mode with intelligent fill light, IR up to 20M",
          "PTZ listed as supported",
        ],
      },
      {
        title: "Connectivity, audio and storage",
        content:
          "Audio is two-way, with a built-in microphone and speaker. The datasheet lists HTTPS and RTSPS protocols and ONVIF support, which helps when the camera has to work with a third-party recorder or video management system.",
        features: [
          "WiFi 2.4G and wired Ethernet 10/100M adaptive",
          "SD card up to 128GB",
          "Audio: AAC and G711, built-in microphone and speaker",
          "Detection: motion detection and human detection supported",
          "Protocols: HTTPS and RTSPS; ONVIF supported",
        ],
      },
      {
        title: "Power, protection and size",
        content:
          "The datasheet lists IP66 protection with 4000V lightning protection, operation up to 50 degrees Celsius and a DC12V 1A supply.",
        features: [
          "Power: DC12V, 1A",
          "Protection: IP66, 4000V lightning protection",
          "Operating conditions: up to 50 degrees Celsius",
          "Dimensions: 165 x 191.5 x 132.8 mm",
        ],
      },
      {
        title: "Certification",
        content:
          "The datasheet prints BIS-ER registration R-72003735 with IS 13252 (part 1) / IEC 60950-1 and a reference to the BIS website. This is camera hardware certification. Video management software certification is separate; see the certifications page, and verify any certificate on the official portals.",
        features: [
          "BIS-ER registration printed on the datasheet: R-72003735",
          "Standard printed on the datasheet: IS 13252 (part 1) / IEC 60950-1",
          "Verify with the certificate verifier tool or the official BIS portal",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the AD-90AIWFBDP?",
        a: "The AD-90AIWFBDP is a 3MP outdoor WiFi pan-tilt camera from ArcisAI with 2.4GHz WiFi, two-way audio, IP66 protection and microSD storage up to 128GB.",
      },
      {
        q: "Does the AD-90AIWFBDP support ONVIF?",
        a: "Yes. The datasheet lists ONVIF support, along with HTTPS and RTSPS protocols.",
      },
      {
        q: "Can the AD-90AIWFBDP be used outdoors?",
        a: "The datasheet lists IP66 protection, 4000V lightning protection and operation up to 50 degrees Celsius.",
      },
      {
        q: "How much storage does it support?",
        a: "The datasheet lists SD card storage up to 128GB. Remote viewing needs an internet connection.",
      },
      {
        q: "What power supply does it need?",
        a: "DC12V at 1A. WiFi removes the network cable, but the camera still needs power at its mounting position.",
      },
      {
        q: "Where can I download the AD-90AIWFBDP datasheet?",
        a: "The datasheet is linked on this page, and all manuals and datasheets are listed in the documents section.",
      },
    ],
    datasheets: [
      { label: "AD-90AIWFBDP datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP.pdf" },
      { label: "Mini PT WiFi user manual (PDF)", href: "/pdfs/Mini%20PT%20Wifi%20user%20manual.pdf" },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/products/ad-90aiwfbdp-ptz", label: "AD-90AIWFBDP-PTZ WiFi camera" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/tools/certificate-verifier", label: "Certificate verifier" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "Request a quote for the AD-90AIWFBDP",
      description:
        "Tell us the site and quantity and we will quote against your requirement. Dealers and installers can register interest too.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=ad-90aiwfbdp",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=ad-90aiwfbdp",
    },
  },

  "ad-90aiwfbdp-ptz": {
    slug: "ad-90aiwfbdp-ptz",
    category: "products",
    model: "AD-90AIWFBDP-PTZ",
    productName: "ArcisAI AD-90AIWFBDP-PTZ WiFi Camera",
    showSectionContent: true,
    title: "AD-90AIWFBDP-PTZ WiFi Camera | 3MP, Cloud and microSD | ArcisAI",
    metaDescription:
      "AD-90AIWFBDP-PTZ: ArcisAI 3MP WiFi camera with 2.4GHz WiFi, cloud storage, microSD up to 256GB, infrared plus white light and two-way audio. Datasheet specs.",
    keywords: [
      "AD-90AIWFBDP-PTZ", "wifi ptz camera with cloud storage", "wifi camera microsd 256gb",
      "wifi camera with white light", "3mp wifi ptz camera",
    ],
    heroTitle: "AD-90AIWFBDP-PTZ: WiFi Camera with Cloud and microSD Storage",
    heroSubtitle: "3MP | 2.4GHz WiFi | Cloud storage | microSD up to 256GB",
    heroDescription:
      "The AD-90AIWFBDP-PTZ is a 3MP WiFi camera from ArcisAI with infrared and white-light night lighting. Every specification on this page is taken from the published datasheet.",
    sections: [
      {
        title: "AD-90AIWFBDP-PTZ overview",
        content:
          "The AD-90AIWFBDP-PTZ datasheet lists a 1/3 inch CMOS sensor, a 4mm fixed focal length lens, a 2304 x 1296 main stream and 2.4GHz IEEE 802.11b/g/n WiFi. It supports cloud storage and a TF card up to 256GB, and has six infrared LEDs plus white light for night coverage. It needs a DC12V supply at the mounting position.",
        stats: [
          { label: "Resolution", value: "3MP" },
          { label: "WiFi", value: "2.4GHz" },
          { label: "Storage", value: "Cloud + TF 256GB" },
          { label: "Night", value: "IR + white light" },
        ],
        features: [
          "Video: main stream 2304 x 1296, sub stream 800 x 488, up to 15fps, H.264 / H.265 with dual stream",
          "Image: 1/3 inch CMOS sensor, 4mm fixed lens, 3D digital noise reduction, digital WDR, ICR infrared filter",
          "Night: 6 infrared LEDs plus white light; infrared 20 to 30 metres, white light 15 to 20 metres",
          "Wireless: WiFi 2.4G, IEEE 802.11b/g/n; wired RJ45 10/100M adaptive port",
        ],
      },
      {
        title: "Audio, storage and power",
        content:
          "The datasheet lists audio input and output specifications and storage options including cloud and TF card up to 256GB. Working temperature is listed as minus 20 to 50 degrees Celsius with humidity less than 80 percent.",
        features: [
          "Audio input: 1k ohm impedance, 2Vp-P level; output: 8 ohm impedance, 1W",
          "Storage: cloud storage and TF card up to 256GB",
          "Power: DC12V, up to 15W",
          "Working temperature: minus 20 to 50 degrees Celsius, humidity less than 80 percent",
        ],
      },
      {
        title: "Size and what the datasheet does not state",
        content:
          "Dimensions are 150 x 162 x 315 mm and weight is 850g. This datasheet does not state an ingress protection rating, ONVIF support or on-camera detection features, and it prints the model number as AD-90AIWFBDP. Please ask the ArcisAI team to confirm these points for the PTZ model before you order.",
        features: [
          "Dimensions: 150 x 162 x 315 mm; weight 850g",
          "Not stated on this datasheet: IP rating, ONVIF, detection features",
          "Confirm the exact model code and these points with the team",
        ],
      },
      {
        title: "Certification",
        content:
          "The datasheet prints BIS-ER registration R-72003735 with IS 13252 (part 1) / IEC 60950-1. This is camera hardware certification. Video management software certification is separate; see the certifications page, and verify any certificate on the official portals.",
        features: [
          "BIS-ER registration printed on the datasheet: R-72003735",
          "Standard printed on the datasheet: IS 13252 (part 1) / IEC 60950-1",
          "Verify with the certificate verifier tool or the official BIS portal",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the AD-90AIWFBDP-PTZ?",
        a: "The AD-90AIWFBDP-PTZ is a 3MP WiFi camera from ArcisAI with 2.4GHz WiFi, cloud storage, TF card storage up to 256GB and infrared plus white-light night lighting.",
      },
      {
        q: "How is it different from the AD-90AIWFBDP?",
        a: "Both are 3MP, 2.4GHz WiFi cameras. The AD-90AIWFBDP lists microSD up to 128GB and IR up to 20M. The AD-90AIWFBDP-PTZ lists cloud storage, microSD up to 256GB, infrared plus white light, and a larger body.",
      },
      {
        q: "How far does the night lighting reach?",
        a: "The datasheet lists infrared at 20 to 30 metres and white light at 15 to 20 metres.",
      },
      {
        q: "What storage does it support?",
        a: "Cloud storage and a TF card up to 256GB are listed. Remote viewing and cloud storage need an internet connection.",
      },
      {
        q: "Does the datasheet state an IP rating or ONVIF support?",
        a: "No. This datasheet does not state either, so please ask the ArcisAI team to confirm them for this model.",
      },
      {
        q: "Is the AD-90AIWFBDP-PTZ BIS-ER certified?",
        a: "The datasheet prints BIS-ER registration R-72003735 under IS 13252 (part 1) / IEC 60950-1. Verify it on the official BIS portal.",
      },
    ],
    datasheets: [
      { label: "AD-90AIWFBDP-PTZ datasheet (PDF)", href: "/pdfs/AD-90AIWFBDP-%20PTZ.pdf" },
      { label: "Mini PT WiFi user manual (PDF)", href: "/pdfs/Mini%20PT%20Wifi%20user%20manual.pdf" },
    ],
    relatedPages: [
      { href: "/wifi-cctv-camera", label: "WiFi CCTV cameras in India" },
      { href: "/wifi-cctv-camera-ptz", label: "WiFi PTZ and pan-tilt cameras" },
      { href: "/products/ad-90aiwfbdp", label: "AD-90AIWFBDP outdoor WiFi pan-tilt camera" },
      { href: "/certifications", label: "ArcisAI certifications" },
      { href: "/tools/certificate-verifier", label: "Certificate verifier" },
      { href: "/documents", label: "Documents and user manuals" },
      { href: "/support", label: "Support" },
    ],
    cta: {
      title: "Request a quote for the AD-90AIWFBDP-PTZ",
      description:
        "Tell us the site and quantity and we will quote against your requirement. Dealers and installers can register interest too.",
      buttonText: "Request a Quote",
      buttonLink: "/contact-us?interest=ad-90aiwfbdp-ptz",
      secondaryButtonText: "Become a Partner",
      secondaryButtonLink: "/become-a-distributor?source=ad-90aiwfbdp-ptz",
    },
  },

  // ── SUPPORTING GUIDE ──────────────────────────────────────────────────────
  // Added per the ArcisAI Accelerated WiFi CCTV SEO & GEO Sprint (Day 6):
  // a single buying guide covering WiFi-vs-wired decision factors, linked
  // from and to the hub + city pages via getWifiLinks() (resolveSeoPageData.js).
  // Every spec claim here reuses only what WIFI_SPECS / the hub entry above
  // already state — nothing new is asserted about range, battery, or pricing
  // that isn't already published, per the standing rule against inventing
  // data. Network/storage guidance (bandwidth, retention math) is general
  // engineering fact, not an ArcisAI-specific claim.
  "wifi-cctv-camera-buying-guide": {
    slug: "wifi-cctv-camera-buying-guide",
    title: "WiFi CCTV Camera Buying Guide 2026 | WiFi vs Wired | ArcisAI",
    metaDescription:
      "How to choose a WiFi CCTV camera in India: WiFi vs PoE vs 4G, range and bandwidth, storage options, indoor/outdoor selection, AI detection, and a BIS-ER certification checklist.",
    keywords: [
      "wifi cctv camera buying guide", "wifi vs poe cctv", "wifi vs wired cctv camera",
      "wifi vs 4g cctv camera", "how to choose wifi cctv camera",
      "wifi cctv camera checklist india", "wireless cctv camera guide",
    ],
    heroTitle: "WiFi CCTV Camera Buying Guide",
    heroSubtitle: "WiFi vs PoE vs 4G, storage, range and a certification checklist",
    heroDescription:
      "A practical guide to choosing between WiFi, PoE and 4G CCTV cameras, sizing storage and bandwidth correctly, and confirming certification before you buy — written for Indian buyers evaluating options for a home, shop, office or industrial site.",
    category: "resources",
    sections: [
      {
        title: "WiFi vs PoE vs 4G — which connection type fits your site",
        content:
          "The three connection types solve different problems, and the right choice depends on what already exists at the site, not on which is 'better' in the abstract. WiFi cameras connect over an existing 2.4GHz network — no cable run, so they suit finished interiors, rented premises and sites where drilling or trenching is unwelcome or impossible. PoE (Power over Ethernet) cameras run a single cable that carries both power and data — more reliable for permanent, high-camera-count installations such as a new-build warehouse or a large office where cabling is planned in from the start, because a wired link doesn't compete with other WiFi traffic and doesn't depend on router range. 4G cameras use a SIM card and need no local network infrastructure at all — the right choice for a site with no broadband, or a temporary location such as a construction site or event.",
        features: [
          "WiFi: fastest to install, needs an existing 2.4GHz network in range",
          "PoE: most reliable for permanent, multi-camera, new-build installations",
          "4G: works with no local network at all, at the cost of a SIM data plan",
          "Many sites mix connection types by area rather than standardising on one",
        ],
      },
      {
        title: "Range, bandwidth and storage — getting the sizing right",
        content:
          "A WiFi camera's usable range depends on walls, interference from other 2.4GHz devices, and the router's own coverage — the general rule is that if a phone gets a full-strength WiFi signal at the mounting point, the camera will connect reliably; if the signal is marginal, either move the router, add an extender, or use a wired connection instead. On bandwidth: a 3MP stream compressed in H.264/H.265 uses noticeably less data than raw video, but router capacity still matters once several cameras share one network — check how many camera connections your router and internet plan can realistically support before ordering more units than the network can carry. On storage: onboard microSD recording keeps footage local to the camera and independent of network uptime, while cloud storage adds an ongoing subscription cost but survives a stolen or damaged camera. Retention length is a simple multiplication — resolution and frame rate determine footage size per hour, multiplied by how many days you need to keep — so confirm the card capacity or cloud plan against your actual retention requirement rather than assuming a default is enough.",
        features: [
          "Check phone WiFi signal strength at the mount point before buying",
          "Confirm how many simultaneous camera connections your router/plan supports",
          "microSD storage keeps footage local; cloud storage survives camera theft or damage",
          "Size storage against your actual retention requirement, not a default assumption",
        ],
      },
      {
        title: "Indoor vs outdoor selection",
        content:
          "An outdoor-rated camera needs a weather-resistance rating (commonly IP66 or better) and protection against electrical surges from lightning strikes on exposed cabling or antennas — an indoor-only camera installed outdoors will fail faster from moisture and temperature cycling even if it initially appears to work. Night vision range matters more outdoors, where there is no ambient light source after dark; confirm the IR range in metres against the actual distance you need to cover, not just the presence of 'night vision' as a feature. For India specifically, an operating temperature range that covers summer heat (camera bodies mounted outdoors run hotter than ambient air) is worth checking rather than assuming.",
        features: [
          "Outdoor: confirm an IP-rating and surge/lightning protection, not just 'weatherproof'",
          "Confirm IR night-vision range in metres against your actual coverage distance",
          "Check the stated operating temperature range covers local summer conditions",
        ],
      },
      {
        title: "AI detection features worth checking",
        content:
          "Basic motion detection alerts on any movement, including trees, shadows and passing vehicles, which produces enough false alerts that most people eventually mute notifications entirely. Human detection and other AI-based event filters are trained to distinguish a person (or vehicle, depending on the model) from other motion, cutting false alerts substantially. When comparing cameras, ask specifically what the AI detection distinguishes — 'AI' on a spec sheet can mean anything from real on-device human detection to a marketing label on ordinary motion sensing — and, where possible, ask for a demonstration rather than relying on the spec sheet alone.",
        features: [
          "Plain motion detection alerts on any movement, including irrelevant motion",
          "Human/vehicle detection filters out most false alerts from plain motion",
          "Ask what the 'AI' on a spec sheet actually distinguishes before buying",
          "Ask for a live demonstration rather than relying on the spec sheet alone",
        ],
      },
      {
        title: "Certification checklist before you buy",
        content:
          "Since 1 April 2026, CCTV sold in India must meet BIS Essential Requirements (BIS-ER) — this is a legal registration, not an optional badge, and it is worth confirming before purchase rather than after. A camera's BIS-ER registration number can be checked independently on the BIS register; do not accept a supplier's claim without a checkable number. Separately, if the product includes a Video Management System (VMS) or app, ask whether that software itself carries a distinct certification (such as STQC) — hardware and software certifications are not the same thing, and a certified camera does not automatically mean the software behind it has been evaluated.",
        features: [
          "BIS-ER registration is a legal requirement for CCTV sold in India since 1 April 2026",
          "Verify the registration number on the BIS register — don't accept a claim on trust",
          "Ask whether the VMS/app software carries its own separate certification",
          "Use a free certificate verifier tool where the supplier offers one",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I choose WiFi, PoE, or a 4G CCTV camera?",
        a: "It depends on the site, not on which is inherently better. WiFi suits finished interiors and rented premises where you cannot run cable. PoE suits permanent, multi-camera, new-build installations where reliability matters more than installation speed. 4G suits sites with no local broadband at all. Many installations mix all three by area.",
      },
      {
        q: "How much WiFi range do I actually need?",
        a: "If a phone gets a strong WiFi signal at the exact spot you plan to mount the camera, the camera will typically connect reliably. A marginal phone signal at that spot usually means a marginal camera connection too — move the router, add an extender, or use a wired camera at that location instead.",
      },
      {
        q: "Is microSD storage or cloud storage better for a WiFi CCTV camera?",
        a: "microSD keeps footage local to the camera and doesn't depend on network uptime or an ongoing subscription, but it's lost if the camera itself is stolen or damaged. Cloud storage survives that scenario but adds a recurring cost. Many buyers use both — microSD as the primary record, cloud as backup for critical areas.",
      },
      {
        q: "What does BIS-ER certification actually guarantee?",
        a: "It confirms the camera has been registered against India's Essential Requirements for electronic products — a legal requirement for CCTV sold in India since 1 April 2026. It does not by itself certify the software (VMS/app) behind the camera, which is typically a separate certification such as STQC. Always verify the registration number independently rather than accepting a supplier's claim.",
      },
      {
        q: "Does ArcisAI sell WiFi, PoE and 4G cameras?",
        a: "Yes. ArcisAI's WiFi range covers finished interiors and rented premises; the wired S-Series and Eco-Series ranges suit permanent installations; and 4G variants are available for sites without reliable local broadband. Contact us with your site details for a specific recommendation.",
      },
    ],
    cta: {
      title: "Not sure which connection type fits your site?",
      description:
        "Tell us about the location and we'll recommend WiFi, PoE or 4G based on what's actually there — not a generic default.",
      buttonText: "Request a Recommendation",
      buttonLink: "/contact-us?resource=wifi-cctv-camera-buying-guide",
      secondaryButtonText: "See WiFi Cameras",
      secondaryButtonLink: "/wifi-cctv-camera",
    },
  },
};

export default seoPageDataWifi;
