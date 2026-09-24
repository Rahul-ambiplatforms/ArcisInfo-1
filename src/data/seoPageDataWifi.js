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
          "Two WiFi models cover most requirements. The AD-90AIWFBDP is an outdoor WiFi pan-tilt camera at 3MP with a fixed 4mm lens, 68 degree field of view, DWDR and 3D noise reduction, running H.264/H.265 over HTTPS and RTSPS. The AD-90AIWFBDP-PTZ adds fuller pan-tilt-zoom coverage and supports both cloud storage and microSD up to 256GB. Both operate up to 50 degrees Celsius on a 12V 1A supply and draw modest power, which matters when a site runs on backup.",
        features: [
          "AD-90AIWFBDP — outdoor WiFi PT, 3MP, IR to 20M, microSD to 128GB",
          "AD-90AIWFBDP-PTZ — WiFi PTZ, IEEE 802.11b/g/n, cloud plus microSD to 256GB",
          "Both: two-way audio, human detection, ONVIF, IP66, 4000V lightning protection",
          "4G and PoE variants available where WiFi is not the right fit",
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
        a: "The Eco Series WiFi models operate on 2.4GHz, which gives better range and wall penetration than 5GHz — usually the more useful trade-off for cameras placed away from the router. Each unit also has a wired Ethernet port, so you can switch to cable later without replacing the camera.",
      },
      {
        q: "What resolution do the WiFi cameras record at?",
        a: "3MP, with a main stream of 2304x1296 and a sub stream of 800x488. Video is compressed using H.264/H.265, so recordings stay manageable on a microSD card or in cloud storage.",
      },
      {
        q: "Can I use these outdoors?",
        a: "Yes. Both WiFi models are IP66 rated with 4000V lightning protection and operate up to 50 degrees Celsius, so they are built for Indian outdoor conditions rather than being indoor cameras sold optimistically.",
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
      "WiFi CCTV cameras in Ahmedabad from ArcisAI — 3MP wireless, IP66 outdoor, BIS-ER R-72003735 certified. Ahmedabad head office means same-day support. Dealer enquiries welcome.",
    keywords: [
      "wifi cctv camera Ahmedabad", "wireless cctv camera Ahmedabad",
      "wifi security camera Ahmedabad", "cctv dealer Ahmedabad",
      "wifi camera installation Ahmedabad", "BIS certified wifi camera Gujarat",
    ],
    heroTitle: "WiFi CCTV Cameras in Ahmedabad",
    heroSubtitle: "Head office in Ahmedabad | BIS-ER R-72003735 | Same-day support",
    heroDescription:
      "ArcisAI is headquartered in Ahmedabad, which means the shortest support and installation turnaround anywhere in the country. Wireless 3MP cameras for shops on CG Road, offices along SG Highway, housing societies in Satellite and Bopal, and rented premises where cable runs are not an option.",
    category: "city",
    sections: [
      {
        title: "Where WiFi makes sense in Ahmedabad",
        content:
          "Ahmedabad's retail corridors and older commercial buildings are full of premises where a wired install means damaging a finished interior or negotiating with a landlord. Shops on CG Road and Law Garden, clinics and offices in Navrangpura, and rented units across Prahladnagar are the natural fit for wireless cameras that mount in minutes on an existing broadband line. Housing societies in Satellite, Bopal and South Bopal use them for common areas, lifts and parking where running conduit to every point would be disproportionate. For industrial estates at Naroda, Vatva and Odhav with patchy connectivity, 4G variants are usually the better answer, and we will say so.",
        stats: WIFI_SPECS,
        features: [
          "Head office in Ahmedabad — fastest install and service turnaround in Gujarat",
          "3MP wireless cameras, IP66 rated for Gujarat's summer heat",
          "Two-way audio for shopfronts, reception areas and society gates",
          "Human detection on the camera, so alerts are not triggered by every passing vehicle",
          "4G alternatives recommended where a site's broadband is unreliable",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you install WiFi CCTV in Ahmedabad directly?",
        a: "Yes. Ahmedabad is our head office city, so installation and service are handled locally with the shortest response time of anywhere we operate.",
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
    cta: {
      title: "WiFi cameras in Ahmedabad — quote or partnership",
      description:
        "Request a quote or a free site survey, or register as a dealer if you sell and install security equipment in Gujarat.",
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
