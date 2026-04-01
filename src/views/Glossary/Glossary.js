'use client';
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box, Container, Heading, Text, Input, InputGroup, InputLeftElement,
  VStack, HStack, SimpleGrid, Badge, Divider, Button, Wrap, WrapItem,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Link as ChakraLink
} from "@chakra-ui/react";
import NextLink from "next/link";

const glossaryTerms = [
  // AI & Analytics
  { term: "Edge AI", definition: "Artificial intelligence processing that occurs directly on the camera device rather than on a remote server or cloud. Edge AI cameras contain dedicated neural processing units (NPUs) that run AI models locally, enabling sub-300ms alert delivery, offline operation, and data sovereignty since video never leaves the premises.", category: "AI & Analytics", related: ["NPU", "Cloud AI", "On-Device Processing"] },
  { term: "Cloud AI", definition: "AI processing where video is transmitted from cameras to remote cloud servers for analysis. Cloud AI introduces network latency (typically 2-10 seconds), requires continuous internet connectivity, and incurs recurring per-camera subscription fees. Contrast with Edge AI which processes locally.", category: "AI & Analytics", related: ["Edge AI", "SaaS", "Hybrid Cloud"] },
  { term: "NPU (Neural Processing Unit)", definition: "A specialized AI chip designed for running deep learning inference. In AI cameras, dedicated NPUs handle tasks like facial recognition, object detection, and behavioral analysis without using the main image processor. Typical enterprise camera NPUs deliver 2-16 TOPS (Tera Operations Per Second).", category: "AI & Analytics", related: ["Edge AI", "TOPS", "Deep Learning"] },
  { term: "TOPS (Tera Operations Per Second)", definition: "A measure of AI processing performance, indicating trillions of operations per second. Higher TOPS enables running more complex AI models simultaneously. Enterprise AI cameras typically range from 2-16 TOPS.", category: "AI & Analytics", related: ["NPU", "Edge AI"] },
  { term: "Deep Learning", definition: "A subset of machine learning using multi-layered neural networks to learn from large datasets. In video surveillance, deep learning models are trained on millions of images to recognize faces, license plates, objects, and behaviors with high accuracy.", category: "AI & Analytics", related: ["Neural Network", "AI Model", "Training Data"] },
  { term: "Object Detection", definition: "An AI capability that identifies and locates specific objects within a video frame, such as people, vehicles, packages, or weapons. Modern object detection runs in real-time on edge AI cameras, classifying objects by type and tracking their movement.", category: "AI & Analytics", related: ["Object Classification", "Object Tracking", "Deep Learning"] },
  { term: "Behavioral Analytics", definition: "AI analysis that detects specific human behaviors in video, including loitering, aggression, slip-and-fall, running, crowd formation, and other anomalous patterns. Behavioral analytics go beyond simple motion detection to understand what people are doing.", category: "AI & Analytics", related: ["Anomaly Detection", "Loitering Detection", "AI Analytics"] },
  { term: "Generative AI Video Search", definition: "A technology that enables natural language queries across surveillance footage. Operators type descriptions like 'find all red vehicles near gate B yesterday afternoon' and the AI translates the query into structured metadata searches. ArcisAI's implementation is called ArcisGPT.", category: "AI & Analytics", related: ["ArcisGPT", "Natural Language Processing", "Video Search"] },
  { term: "ArcisGPT", definition: "ArcisAI's proprietary generative AI video search platform. ArcisGPT allows security operators to search surveillance footage using natural language queries instead of traditional timestamp and filter-based approaches. It processes queries against edge AI metadata for rapid forensic analysis.", category: "AI & Analytics", related: ["Generative AI Video Search", "Natural Language Processing"] },
  { term: "Heat Mapping", definition: "A visual analytics technique that aggregates movement data over time to show areas of high and low activity. In surveillance, heat maps reveal traffic patterns, dwell times, and underutilized spaces. Used in retail for store layout optimization and in facilities for space planning.", category: "AI & Analytics", related: ["People Counting", "Dwell Time", "Traffic Flow"] },

  // Facial Recognition & Biometrics
  { term: "Facial Recognition", definition: "An AI technology that identifies or verifies individuals by analyzing facial features from video footage. Enterprise implementations use facial recognition for access control, VIP alerting, and security watchlist matching. Modern edge AI cameras process facial recognition locally for privacy compliance.", category: "Biometrics", related: ["Biometric Data", "Face Detection", "Enrollment Database"] },
  { term: "ANPR (Automatic Number Plate Recognition)", definition: "Also known as LPR (License Plate Recognition). An AI capability that reads vehicle license plates in real-time from video footage. Used for parking management, traffic enforcement, access control, and law enforcement. Advanced ANPR systems read plates at speeds exceeding 200 km/h.", category: "Biometrics", related: ["LPR", "Vehicle Recognition", "Traffic Management"] },
  { term: "LPR (License Plate Recognition)", definition: "See ANPR. License Plate Recognition is the alternate term for Automatic Number Plate Recognition, more commonly used in North America.", category: "Biometrics", related: ["ANPR"] },
  { term: "People Counting", definition: "An AI analytic that accurately counts individuals entering and exiting defined zones. Bidirectional counting maintains real-time occupancy numbers. Used for building occupancy compliance, retail traffic analysis, and transport passenger flow. AI-based counting achieves 95-98% accuracy.", category: "Biometrics", related: ["Occupancy Management", "Footfall Analytics", "Crowd Density"] },
  { term: "Crowd Density Estimation", definition: "An AI capability that estimates the number and density distribution of people in open areas. Unlike people counting at fixed points, density estimation works across wide scenes. Used for event safety management, emergency planning, and public space monitoring.", category: "Biometrics", related: ["People Counting", "Crowd Analytics", "Event Safety"] },

  // Compliance & Certifications
  { term: "NDAA (National Defense Authorization Act)", definition: "U.S. federal legislation. Section 889 specifically prohibits federal agencies and contractors from procuring video surveillance equipment from certain Chinese manufacturers including Hikvision, Dahua, and their subsidiaries. NDAA compliance has become a de facto enterprise standard beyond government.", category: "Compliance", related: ["Section 889", "TAA", "FCC Ban"] },
  { term: "Section 889", definition: "The specific section of the NDAA that prohibits telecommunications and video surveillance equipment from Huawei, ZTE, Hytera, Hikvision, Dahua, and their subsidiaries. Applies to federal procurement and extends to contractors and subcontractors.", category: "Compliance", related: ["NDAA", "Hikvision Ban", "Dahua Ban"] },
  { term: "STQC (Standardization Testing and Quality Certification)", definition: "An Indian government certification body under the Ministry of Electronics and IT. STQC certification verifies that surveillance equipment meets Indian quality, security, and interoperability standards. Required for many government procurement projects in India.", category: "Compliance", related: ["BIS", "Make in India", "Government Procurement"] },
  { term: "ONVIF (Open Network Video Interface Forum)", definition: "An open industry standard for IP-based physical security products. ONVIF profiles (S for streaming, T for advanced streaming, G for recording) ensure interoperability between cameras, VMS platforms, and other security devices from different manufacturers. Essential for avoiding vendor lock-in.", category: "Compliance", related: ["Profile S", "Profile T", "Profile G", "Interoperability"] },
  { term: "GDPR (General Data Protection Regulation)", definition: "European Union regulation governing the collection and processing of personal data, including biometric data from surveillance cameras. GDPR requires lawful basis for processing, data minimization, and individual rights including data deletion. Edge AI processing simplifies GDPR compliance.", category: "Compliance", related: ["Data Sovereignty", "Privacy", "Biometric Data"] },
  { term: "CCPA/CPRA", definition: "California Consumer Privacy Act / California Privacy Rights Act. State-level privacy regulations governing how businesses collect and use personal information, including biometric data from surveillance cameras. CCPA grants California residents rights over their personal data.", category: "Compliance", related: ["GDPR", "Privacy", "Data Rights"] },
  { term: "NERC CIP", definition: "North American Electric Reliability Corporation Critical Infrastructure Protection standards. A set of cybersecurity and physical security requirements for entities that operate the bulk electric system. Includes requirements for electronic access control, physical security of critical cyber assets, and incident reporting.", category: "Compliance", related: ["Critical Infrastructure", "Cybersecurity", "Power Grid Security"] },

  // Camera Hardware
  { term: "IP Camera", definition: "Internet Protocol camera — a digital video camera that transmits data over an IP network. Unlike analog CCTV cameras that require dedicated coaxial cabling, IP cameras use standard Ethernet or WiFi connectivity. Modern IP cameras support resolutions up to 32MP and include on-board AI processing.", category: "Hardware", related: ["PoE", "ONVIF", "Network Camera"] },
  { term: "PoE (Power over Ethernet)", definition: "A technology that delivers both data and electrical power over a single Ethernet cable to IP cameras. PoE eliminates the need for separate power cables, simplifying installation. Standards include IEEE 802.3af (15.4W), 802.3at (30W), and 802.3bt (60-90W) for cameras with higher power AI processors.", category: "Hardware", related: ["802.3af", "802.3at", "Ethernet"] },
  { term: "PTZ Camera", definition: "Pan-Tilt-Zoom camera — a motorized camera that can rotate horizontally (pan), vertically (tilt), and optically zoom to provide flexible coverage. AI-enhanced PTZ cameras can automatically track detected objects, follow preset patrol routes, and zoom to areas of interest based on AI triggers.", category: "Hardware", related: ["Auto-Tracking", "Preset Patrol", "Optical Zoom"] },
  { term: "IP67", definition: "An Ingress Protection rating indicating a device is completely dust-tight (6) and protected against temporary submersion in water up to 1 meter for 30 minutes (7). Enterprise outdoor cameras require IP67 or higher for reliable operation in rain, dust, and adverse weather.", category: "Hardware", related: ["IP66", "Weatherproof", "Ingress Protection"] },
  { term: "IK10", definition: "The highest impact resistance rating on the IK scale, indicating a device can withstand 20 joules of impact energy (equivalent to a 5kg mass dropped from 40cm). Vandal-resistant cameras use IK10-rated housings for deployment in public and high-risk areas.", category: "Hardware", related: ["Vandal Resistant", "Impact Rating", "Dome Camera"] },
  { term: "ISP (Image Signal Processor)", definition: "A specialized processor in cameras that converts raw sensor data into viewable images. Advanced ISPs perform noise reduction, wide dynamic range processing, color correction, and low-light enhancement. ISP quality directly affects AI analytics accuracy.", category: "Hardware", related: ["WDR", "Low-Light", "Sensor"] },
  { term: "WDR (Wide Dynamic Range)", definition: "A camera technology that handles scenes with both very bright and very dark areas simultaneously. WDR combines multiple exposures to produce balanced images. Essential for cameras facing windows, building entrances, or other high-contrast environments. Measured in decibels (dB); 120dB+ is considered true WDR.", category: "Hardware", related: ["ISP", "HDR", "Backlight Compensation"] },

  // System Architecture
  { term: "VMS (Video Management System)", definition: "Software that manages video from multiple IP cameras, providing live monitoring, recording, playback, and analytics. Enterprise VMS platforms support thousands of cameras across multiple sites. Leading VMS platforms include Milestone XProtect, Genetec Security Center, and manufacturer-specific solutions.", category: "Architecture", related: ["NVR", "CMS", "Recording Server"] },
  { term: "NVR (Network Video Recorder)", definition: "A dedicated hardware appliance that records video from IP cameras. NVRs provide centralized storage and management for camera deployments. Modern NVRs may include AI processing capabilities for cameras that lack edge AI. Contrast with DVR (Digital Video Recorder) used with analog cameras.", category: "Architecture", related: ["VMS", "DVR", "Recording"] },
  { term: "ICCC (Integrated Command and Control Center)", definition: "A centralized operations facility that aggregates data from cameras, sensors, traffic systems, and emergency services for unified smart city management. ICCCs provide real-time situational awareness, incident management, and data-driven decision making for municipal operations.", category: "Architecture", related: ["Smart City", "Command Center", "Situational Awareness"] },
  { term: "Hybrid Cloud", definition: "An architecture where cameras process AI analytics locally (edge) while using cloud services for optional functions like remote access, multi-site management, and long-term archival. Hybrid cloud ensures cameras operate at full capability without internet while providing cloud benefits when available.", category: "Architecture", related: ["Edge AI", "Cloud VMS", "On-Premise"] },
  { term: "Bridge Device", definition: "An edge-to-cloud gateway device that connects on-premises camera networks to cloud management platforms. The ArcisAI Bridge Device enables remote monitoring and cloud backup without requiring cameras to communicate directly with cloud servers, maintaining data sovereignty while adding cloud accessibility.", category: "Architecture", related: ["Edge Gateway", "Cloud Bridge", "Hybrid Cloud"] },
  { term: "Data Sovereignty", definition: "The principle that data is subject to the laws and governance of the country or region where it is collected or stored. For surveillance, data sovereignty means keeping video footage within the deploying organization's physical and jurisdictional boundaries. Edge AI cameras inherently support data sovereignty.", category: "Architecture", related: ["GDPR", "Privacy", "Edge AI", "On-Premise"] },

  // Detection Types
  { term: "Intrusion Detection", definition: "An AI analytic that detects unauthorized entry into defined zones. AI-based intrusion detection distinguishes between humans, vehicles, and animals, dramatically reducing false alarms compared to motion-based systems. Zones can be configured with different sensitivity levels and response rules.", category: "Detection", related: ["Perimeter Security", "Virtual Fence", "Line Crossing"] },
  { term: "Line Crossing Detection", definition: "An AI analytic that detects when objects cross a virtual line drawn on the camera view. AI enhancement adds directional awareness (detecting crossing in one or both directions), object classification (alerting only on specific object types), and scheduling capabilities.", category: "Detection", related: ["Intrusion Detection", "Virtual Tripwire", "Perimeter"] },
  { term: "Loitering Detection", definition: "An AI analytic that identifies individuals or vehicles remaining in a defined area longer than a configured threshold. Used to detect potential surveillance, suspicious behavior, or policy violations in areas with expected transient traffic like ATM vestibules or loading docks.", category: "Detection", related: ["Behavioral Analytics", "Dwell Time", "Anomaly Detection"] },
  { term: "Abandoned Object Detection", definition: "An AI capability that identifies objects left unattended in monitored areas. The camera learns the baseline scene and detects when new stationary objects appear and remain for longer than a configured threshold. Critical for transportation hubs, public spaces, and government facilities.", category: "Detection", related: ["Object Detection", "Suspicious Package", "Transportation Security"] },
  { term: "Smoke and Fire Detection", definition: "Visual AI analytics that detect smoke plumes and flame signatures in video footage. Works at greater distances than traditional smoke detectors, functions outdoors, and distinguishes between smoke, steam, and dust. Essential for large open spaces, outdoor areas, and industrial environments.", category: "Detection", related: ["Fire Safety", "Industrial Safety", "Environmental Monitoring"] },
  { term: "PPE Detection", definition: "Personal Protective Equipment detection — an AI analytic that verifies workers are wearing required safety gear including hard hats, safety vests, gloves, safety glasses, and respirators. Automated PPE compliance monitoring replaces inconsistent manual inspections.", category: "Detection", related: ["Workplace Safety", "Compliance Monitoring", "Industrial"] },
  { term: "Tailgating Detection", definition: "An AI analytic that detects when unauthorized individuals follow authorized personnel through secured access points without presenting their own credentials. Essential for mantraps, server rooms, and restricted areas.", category: "Detection", related: ["Access Control", "Piggybacking", "Physical Security"] }
];

const categories = [...new Set(glossaryTerms.map(t => t.category))];
const letters = [...new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))].sort();

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter(t => {
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          return t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
        }
        return true;
      })
      .filter(t => !selectedCategory || t.category === selectedCategory)
      .filter(t => !selectedLetter || t.term[0].toUpperCase() === selectedLetter)
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory, selectedLetter]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "AI Video Surveillance Glossary",
    description: "Comprehensive glossary of AI video surveillance terminology covering edge AI, NDAA compliance, camera hardware, analytics, and system architecture.",
    url: "https://www.arcisai.io/glossary",
    publisher: { "@type": "Organization", name: "ArcisAI", url: "https://www.arcisai.io" },
    hasPart: glossaryTerms.map(t => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://www.arcisai.io/glossary"
    }))
  };

  return (
    <>
      <Helmet>
        <title>{`AI Video Surveillance Glossary | ${glossaryTerms.length}+ Terms Explained | ArcisAI`}</title>
        <meta name="description" content={`Comprehensive glossary of ${glossaryTerms.length}+ AI video surveillance terms. Covering edge AI, NDAA compliance, facial recognition, ANPR, camera specifications, VMS architecture, and more.`} />
        <meta name="keywords" content="AI CCTV glossary, video surveillance terminology, NDAA definition, edge AI meaning, ANPR explained, security camera terms, VMS definition, ONVIF explained" />
        <link rel="canonical" href="https://www.arcisai.io/glossary" />
        <meta property="og:title" content={`AI Video Surveillance Glossary | ${glossaryTerms.length}+ Terms | ArcisAI`} />
        <meta property="og:description" content="The definitive reference for AI video surveillance terminology. From edge AI to NDAA compliance, every term explained." />
        <meta property="og:url" content="https://www.arcisai.io/glossary" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <Box bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="1200px">
          <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} fontSize="xs" textTransform="uppercase" letterSpacing="wider">
            Knowledge Base
          </Badge>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} fontWeight="700">
            AI Video Surveillance Glossary
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.700" maxW="700px" mb={6}>
            {glossaryTerms.length}+ terms covering edge AI, NDAA compliance, camera hardware, analytics capabilities, and system architecture. The definitive reference for enterprise security professionals.
          </Text>
          <InputGroup maxW="500px" size="lg">
            <InputLeftElement pointerEvents="none" color="whiteAlpha.500" fontSize="xl">
              &#128269;
            </InputLeftElement>
            <Input
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSelectedLetter(null); }}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.300"
              color="white"
              _placeholder={{ color: "whiteAlpha.500" }}
              _focus={{ borderColor: "whiteAlpha.600", bg: "whiteAlpha.200" }}
            />
          </InputGroup>
        </Container>
      </Box>

      {/* Filters */}
      <Box bg="#f8f9fa" py={6} borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="1200px">
          <VStack spacing={4} align="stretch">
            {/* Category Filter */}
            <Wrap spacing={2}>
              <WrapItem>
                <Badge
                  cursor="pointer"
                  px={3} py={1} borderRadius="full" fontSize="sm"
                  bg={!selectedCategory ? "#0a0a0a" : "white"}
                  color={!selectedCategory ? "white" : "gray.600"}
                  border="1px solid"
                  borderColor={!selectedCategory ? "#0a0a0a" : "gray.300"}
                  onClick={() => setSelectedCategory(null)}
                  _hover={{ opacity: 0.8 }}
                >
                  All Categories
                </Badge>
              </WrapItem>
              {categories.map(cat => (
                <WrapItem key={cat}>
                  <Badge
                    cursor="pointer"
                    px={3} py={1} borderRadius="full" fontSize="sm"
                    bg={selectedCategory === cat ? "#0a0a0a" : "white"}
                    color={selectedCategory === cat ? "white" : "gray.600"}
                    border="1px solid"
                    borderColor={selectedCategory === cat ? "#0a0a0a" : "gray.300"}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    _hover={{ opacity: 0.8 }}
                  >
                    {cat}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            {/* A-Z Filter */}
            <HStack spacing={1} flexWrap="wrap">
              {letters.map(letter => (
                <Button
                  key={letter} size="xs" variant="ghost"
                  fontWeight={selectedLetter === letter ? "800" : "500"}
                  color={selectedLetter === letter ? "#0a0a0a" : "gray.500"}
                  bg={selectedLetter === letter ? "gray.200" : "transparent"}
                  onClick={() => { setSelectedLetter(selectedLetter === letter ? null : letter); setSearchQuery(""); }}
                  minW="28px"
                >
                  {letter}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Terms */}
      <Box py={{ base: 12, md: 16 }} bg="white">
        <Container maxW="1200px">
          <Text color="gray.500" mb={8} fontSize="sm">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
            {selectedCategory && ` in ${selectedCategory}`}
            {selectedLetter && ` starting with ${selectedLetter}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </Text>

          <Accordion allowMultiple>
            {filteredTerms.map((item, idx) => (
              <AccordionItem key={idx} border="1px solid" borderColor="gray.100" borderRadius="lg" mb={3} overflow="hidden">
                <AccordionButton py={4} px={6} _hover={{ bg: "gray.50" }}>
                  <Box flex="1" textAlign="left">
                    <HStack spacing={3}>
                      <Heading as="h3" size="sm" color="#0a0a0a">{item.term}</Heading>
                      <Badge fontSize="xs" colorScheme="gray" variant="subtle">{item.category}</Badge>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} px={6}>
                  <Text color="gray.700" fontSize="md" lineHeight="1.7" mb={3}>
                    {item.definition}
                  </Text>
                  {item.related && item.related.length > 0 && (
                    <HStack spacing={2} flexWrap="wrap">
                      <Text fontSize="xs" color="gray.500" fontWeight="600">Related:</Text>
                      {item.related.map((r, i) => (
                        <Badge key={i} fontSize="xs" colorScheme="blue" variant="subtle" cursor="pointer"
                          onClick={() => { setSearchQuery(r); setSelectedCategory(null); setSelectedLetter(null); }}>
                          {r}
                        </Badge>
                      ))}
                    </HStack>
                  )}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredTerms.length === 0 && (
            <Box textAlign="center" py={16}>
              <Text color="gray.400" fontSize="lg">No terms match your search.</Text>
              <Button mt={4} onClick={() => { setSearchQuery(""); setSelectedCategory(null); setSelectedLetter(null); }}>
                Clear Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* SEO Content Block */}
      <Box bg="#f8f9fa" py={{ base: 12, md: 16 }}>
        <Container maxW="900px">
          <Heading as="h2" size="lg" mb={6} color="#0a0a0a">Understanding AI Video Surveillance Technology</Heading>
          <VStack spacing={4} align="stretch">
            <Text color="gray.700" lineHeight="1.8">
              The AI video surveillance industry uses specialized terminology that spans artificial intelligence, networking, compliance regulations, and physical security. This glossary provides clear definitions for enterprise security professionals, IT decision-makers, and procurement teams evaluating modern camera systems.
            </Text>
            <Text color="gray.700" lineHeight="1.8">
              Key concepts include the distinction between edge AI processing (where analytics happen on the camera) and cloud AI (where video is sent to remote servers for analysis). This architectural choice affects everything from alert latency and bandwidth consumption to data privacy compliance and total cost of ownership.
            </Text>
            <Text color="gray.700" lineHeight="1.8">
              Compliance frameworks like NDAA Section 889, GDPR, and CCPA increasingly influence camera procurement decisions. Understanding these regulations and their technical implications helps organizations select camera systems that satisfy both current requirements and anticipated future mandates.
            </Text>
          </VStack>
          <Divider my={8} />
          <HStack spacing={4} justify="center">
            <Button as={NextLink} href="/faq" variant="outline" colorScheme="gray">Browse FAQs</Button>
            <Button as={NextLink} href="/contact-us" bg="#0a0a0a" color="white" _hover={{ bg: "#1a1a1a" }}>Contact Sales</Button>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Glossary;
