'use client';
import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, InputGroup, InputLeftElement, Tag, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { SearchIcon } from '@chakra-ui/icons';

const faqCategories = {
  'Products': [
    { q: "What types of AI cameras does ArcisAI offer?", a: "ArcisAI offers two main camera series: the S-Series Premium line (AI Bullet, PTZ, and Dome cameras with 4G SIM, WiFi, and PoE variants) and the ECO-Series value line for budget-conscious deployments. All cameras feature built-in edge AI processing for face recognition, ANPR, crowd analytics, and behavioral detection." },
    { q: "What is the ArcisAI Bridge Device?", a: "The ArcisAI Bridge Device (ABD) is an edge computing appliance that connects existing ONVIF-compatible cameras to ArcisAI's cloud platform, adding AI analytics capabilities without replacing your current cameras. It supports up to 16 camera streams per device." },
    { q: "What is ArcisGPT?", a: "ArcisGPT is ArcisAI's GenAI-powered video intelligence platform that enables natural language search across surveillance footage. Users can ask questions in plain English — like 'Show me the red car that entered the parking lot at 3pm' — and instantly retrieve relevant video clips and evidence." },
    { q: "What is ArcisAI Cloud VMS?", a: "ArcisAI Cloud VMS is a cloud-based and on-premise video management system for centralized monitoring, AI-powered alerts, smart playback, and multi-site management. It supports up to 10,000+ cameras per deployment and is STQC certified." },
    { q: "What AI analytics are built into ArcisAI cameras?", a: "ArcisAI cameras include 20+ built-in AI analytics: face recognition, ANPR (license plate reading), crowd counting and density, intrusion detection, line crossing, abandoned object detection, fire and smoke detection, PPE compliance, behavioral analytics, loitering detection, vehicle classification, and more." },
    { q: "What connectivity options do ArcisAI cameras support?", a: "ArcisAI cameras are available in three connectivity variants: PoE (Power over Ethernet) for wired deployments, WiFi for wireless installations, and 4G SIM for remote locations without internet infrastructure. All variants support edge AI processing." },
    { q: "What is the difference between S-Series and ECO-Series cameras?", a: "S-Series cameras are the premium line with the highest resolution (up to 8MP/4K), advanced edge AI processing, robust metal housings, and extended temperature range. ECO-Series cameras offer core AI capabilities at a more accessible price point, ideal for SMBs and budget-conscious deployments." },
    { q: "Do ArcisAI cameras support night vision?", a: "Yes, all ArcisAI cameras feature infrared (IR) night vision with ranges up to 80 meters depending on the model. S-Series PTZ cameras also support smart IR with adaptive illumination that adjusts based on zoom level." },
  ],
  'Compliance & Certifications': [
    { q: "Are ArcisAI cameras NDAA compliant?", a: "Yes. ArcisAI cameras are fully NDAA Section 889 compliant with zero Chinese-manufactured components in the supply chain. ArcisAI cameras are manufactured by Adiance Technologies with a fully transparent, non-Chinese supply chain, making them suitable for US federal, state, and local government deployments." },
    { q: "What is STQC certification?", a: "STQC (Standardisation Testing and Quality Certification) is a certification from the Indian government's Ministry of Electronics and IT that validates product quality, security, and reliability. ArcisAI is one of the few AI camera manufacturers with STQC certification for both cameras and VMS." },
    { q: "Are ArcisAI cameras GDPR compliant?", a: "Yes. ArcisAI cameras and Cloud VMS support full GDPR compliance with features including privacy zone masking, consent-based face recognition, data minimization controls, configurable retention policies, and the right to erasure. On-premise deployment options ensure data sovereignty within the EU/UK." },
    { q: "Do ArcisAI cameras meet ONVIF standards?", a: "Yes, all ArcisAI cameras are ONVIF Profile S and Profile T compliant, ensuring interoperability with third-party VMS platforms including Milestone, Genetec, and others." },
    { q: "Are ArcisAI cameras suitable for US government contracts?", a: "Yes. ArcisAI cameras meet NDAA Section 889 compliance, are non-Chinese manufactured, and support SOC 2 security standards. They are suitable for federal, state, and local government deployments including GSA schedule procurements." },
    { q: "What data privacy features do ArcisAI cameras offer?", a: "ArcisAI cameras include dynamic privacy masking zones, face blurring options, on-device AI processing (data never leaves the camera unless configured), encrypted video streams (TLS 1.3), configurable data retention, and role-based access controls." },
    { q: "Are ArcisAI cameras compliant with UAE data sovereignty requirements?", a: "Yes. ArcisAI supports on-premise and hybrid deployment options that keep data within UAE borders. The cameras meet NDAA compliance and support Arabic language interfaces." },
    { q: "Does ArcisAI comply with the EU AI Act?", a: "ArcisAI is designed with EU AI Act readiness in mind. Our cameras provide transparency features including AI analytics audit logs, configurable analytics boundaries, consent management tools, and documentation of AI model capabilities and limitations." },
  ],
  'Technical Specifications': [
    { q: "What resolution do ArcisAI cameras support?", a: "ArcisAI cameras range from 2MP (1080p) to 8MP (4K Ultra HD) resolution depending on the model and series. S-Series PTZ cameras support up to 8MP with 25x optical zoom." },
    { q: "What is edge AI processing?", a: "Edge AI processing means the AI analytics (face recognition, ANPR, object detection, etc.) run directly on the camera hardware, not in the cloud. This results in faster detection (sub-100ms), lower bandwidth usage (up to 80% reduction), and analytics that work even without internet connectivity." },
    { q: "What is the operating temperature range?", a: "S-Series cameras operate from -40°C to +60°C (-40°F to +140°F) with IP67 weather resistance. ECO-Series cameras support -30°C to +50°C. This makes them suitable for extreme environments from desert heat to arctic cold." },
    { q: "What video compression formats are supported?", a: "ArcisAI cameras support H.265+ (Smart Codec), H.265, H.264+, and H.264 video compression. H.265+ typically reduces storage requirements by up to 70% compared to H.264 while maintaining video quality." },
    { q: "How many cameras can ArcisAI Cloud VMS manage?", a: "ArcisAI Cloud VMS scales from single-site installations to enterprise deployments managing 10,000+ cameras across multiple locations. The platform supports centralized management with distributed edge processing." },
    { q: "What network bandwidth do ArcisAI cameras require?", a: "Bandwidth depends on resolution and compression: a 4MP camera with H.265+ typically uses 2-4 Mbps for continuous streaming. Edge AI processing significantly reduces bandwidth by only transmitting relevant events and metadata instead of continuous full-resolution video." },
    { q: "Do ArcisAI cameras support two-way audio?", a: "Yes, select S-Series models include built-in microphones and speakers for two-way audio communication. This is useful for remote visitor management, deterrence announcements, and emergency communication." },
    { q: "What storage options are available?", a: "ArcisAI supports multiple storage tiers: on-camera SD card storage (up to 256GB), on-premise NVR storage, ArcisAI Cloud storage, and hybrid combinations. Edge AI enables intelligent storage — only recording and uploading events of interest rather than continuous footage." },
  ],
  'Deployment & Installation': [
    { q: "How long does a typical ArcisAI deployment take?", a: "Single-site deployments of 10-50 cameras typically take 1-3 days including physical installation and cloud VMS configuration. Enterprise multi-site deployments are phased with a dedicated project manager. Cloud VMS setup is same-day — cameras auto-register once connected." },
    { q: "Can ArcisAI cameras work with my existing VMS?", a: "Yes. All ArcisAI cameras support ONVIF and RTSP protocols, making them compatible with major third-party VMS platforms including Milestone, Genetec, Nx Witness, and others. You can also use ArcisAI's own Cloud VMS for the richest AI analytics experience." },
    { q: "Do you provide installation services in the US?", a: "Yes, ArcisAI has certified installation partners across major US metropolitan areas. We also support remote commissioning for IT teams who prefer self-installation, with plug-and-play setup that requires minimal technical expertise." },
    { q: "Do you provide installation services in the UAE?", a: "Yes, ArcisAI has certified installation partners across all 7 emirates including Dubai, Abu Dhabi, Sharjah, and Ajman. We provide 24/7 technical support with Arabic language capability." },
    { q: "Can I mix ArcisAI cameras with my existing cameras?", a: "Yes. The ArcisAI Bridge Device connects existing ONVIF cameras to ArcisAI's cloud platform, enabling a mixed deployment. You can gradually migrate to ArcisAI hardware while maintaining visibility across all cameras in a single dashboard." },
    { q: "What internet bandwidth is needed for cloud VMS?", a: "For cloud connectivity, we recommend minimum 5 Mbps upload per 10 cameras using H.265+ with edge AI event-based uploading. For full continuous cloud recording, bandwidth requirements increase based on camera count and resolution." },
  ],
  'Pricing & Licensing': [
    { q: "How much do ArcisAI cameras cost?", a: "ArcisAI camera pricing varies by series and model. S-Series premium cameras range from $299-$1,499 USD per camera. ECO-Series value cameras range from $149-$599 USD. Contact our sales team for volume pricing and enterprise quotes." },
    { q: "Is there a per-camera annual license fee?", a: "ArcisAI does not charge per-camera annual license fees for edge AI analytics — these capabilities are built into the camera hardware. Cloud VMS licensing is available in flexible tiers based on features and camera count, starting at $99/month for small deployments." },
    { q: "How does ArcisAI pricing compare to Verkada?", a: "ArcisAI typically delivers 40-60% lower total cost of ownership compared to Verkada over a 5-year period. The key savings come from no per-camera annual licensing fees, lower cloud storage costs due to edge AI processing, and competitive hardware pricing." },
    { q: "Do you offer enterprise volume discounts?", a: "Yes. Enterprise deployments of 100+ cameras qualify for significant volume discounts on both hardware and Cloud VMS licensing. Contact our enterprise sales team at karanc@adiance.com for customized pricing." },
    { q: "Is there a free trial available?", a: "Yes. ArcisAI offers a free demo and pilot program where qualified enterprises can evaluate cameras and Cloud VMS in their environment before committing to a full deployment. Contact us to request a demo." },
    { q: "What is the warranty on ArcisAI cameras?", a: "All ArcisAI cameras come with a standard 3-year manufacturer warranty covering hardware defects. Extended warranty options up to 5 years are available. The Cloud VMS includes ongoing updates and security patches as part of the subscription." },
  ],
  'Comparison with Competitors': [
    { q: "How does ArcisAI compare to Hikvision?", a: "ArcisAI is an NDAA-compliant alternative to Hikvision with superior built-in AI analytics. While Hikvision offers competitive pricing, it is banned under NDAA Section 889 for US federal agencies due to cybersecurity concerns. ArcisAI offers edge AI processing, zero Chinese components, and equivalent or better AI capabilities without the compliance risk." },
    { q: "How does ArcisAI compare to Verkada?", a: "ArcisAI offers similar cloud-managed camera simplicity as Verkada but with key advantages: true edge AI processing (vs cloud-dependent), no per-camera annual licensing fees, hybrid cloud/on-premise deployment, and 4G SIM connectivity options. Total cost of ownership is typically 40-60% lower than Verkada." },
    { q: "How does ArcisAI compare to Rhombus?", a: "Both ArcisAI and Rhombus offer cloud-managed AI cameras. ArcisAI differentiates with deeper edge AI analytics (20+ types vs basic detection), ArcisGPT GenAI video search, 4G SIM cameras for remote sites, and the Bridge Device for legacy camera integration. ArcisAI is better suited for large enterprise deployments." },
    { q: "How does ArcisAI compare to Axis Communications?", a: "Axis is a respected legacy brand. ArcisAI represents the next generation with AI built into every camera by default, GenAI video search via ArcisGPT, and cloud-native architecture. ArcisAI delivers more AI capability per dollar with lower total cost of ownership." },
    { q: "Is ArcisAI a Hikvision replacement?", a: "Yes. ArcisAI is purpose-built as an NDAA-compliant alternative to Hikvision. Cameras support ONVIF and RTSP for compatibility with existing VMS platforms. Adiance offers migration assessment services and trade-in programs for organizations replacing Hikvision infrastructure." },
    { q: "Why choose ArcisAI over Chinese camera brands?", a: "Beyond NDAA compliance, ArcisAI offers superior AI capabilities built directly into camera hardware, transparent supply chain, no known cybersecurity vulnerabilities, STQC certification, and responsive global support. Chinese brands face increasing regulatory restrictions worldwide." },
  ],
  'Industries & Use Cases': [
    { q: "What industries does ArcisAI serve?", a: "ArcisAI serves enterprise customers across corporate offices, retail chains, banking and finance, healthcare, education, smart cities, government, defense, manufacturing, logistics and warehousing, construction, hospitality, and transportation infrastructure." },
    { q: "How is ArcisAI used in smart city projects?", a: "ArcisAI cameras are deployed in smart city projects for traffic management (ANPR), crowd analytics in public spaces, incident detection, integrated command and control centers (ICCC), perimeter security, and AI-powered video search for law enforcement investigations." },
    { q: "Can ArcisAI cameras detect fire and smoke?", a: "Yes. ArcisAI cameras include built-in fire and smoke detection AI that identifies flames and smoke patterns in real-time, triggering instant alerts. This is particularly valuable for manufacturing facilities, warehouses, and forests where early detection saves lives and property." },
    { q: "How does ArcisAI help retail businesses?", a: "ArcisAI provides retail-specific analytics including customer counting, heat mapping, dwell time analysis, queue management, theft detection, and demographic analytics. These insights help retailers optimize store layouts, staffing, and merchandising while reducing shrinkage." },
    { q: "Is ArcisAI suitable for construction sites?", a: "Yes. ArcisAI 4G SIM cameras are ideal for construction sites with no internet infrastructure. Built-in AI monitors PPE compliance (hard hats, vests, boots), restricted zone intrusion, equipment tracking, and progress documentation — all powered by edge AI." },
    { q: "Can ArcisAI cameras be used for traffic management?", a: "Yes. ArcisAI cameras feature ANPR (Automatic Number Plate Recognition) with support for multi-country license plates, vehicle classification, speed estimation, wrong-way detection, and traffic flow analytics. They integrate with traffic management systems and toll plazas." },
  ],
};

const FAQHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(faqCategories)];

  const allFaqs = Object.entries(faqCategories).flatMap(([category, faqs]) =>
    faqs.map(faq => ({ ...faq, category }))
  );

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedFaqs = activeCategory === 'All'
    ? Object.entries(faqCategories).reduce((acc, [cat, faqs]) => {
        const filtered = faqs.filter(faq =>
          searchQuery === '' ||
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) acc[cat] = filtered;
        return acc;
      }, {})
    : { [activeCategory]: filteredFaqs };

  // Generate FAQ schema for all questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <Box bg="#171717" minH="100vh" pt={{ base: "100px", md: "120px" }} pb="80px">
      <Helmet>
        <title>ArcisAI FAQ | Enterprise AI CCTV Camera Questions Answered</title>
        <meta name="description" content="Comprehensive FAQ hub for ArcisAI enterprise AI CCTV cameras. Find answers about NDAA compliance, edge AI analytics, pricing, deployment, technical specs, and how ArcisAI compares to Hikvision, Verkada, and Rhombus." />
        <meta name="keywords" content="ArcisAI FAQ, AI CCTV questions, NDAA compliant cameras FAQ, enterprise surveillance FAQ, ArcisAI pricing, edge AI cameras, Hikvision alternative FAQ, Verkada comparison, cloud VMS questions" />
        <link rel="canonical" href="https://arcisai.io/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Hero Section */}
        <VStack spacing={4} mb={10} textAlign="center">
          <Heading as="h1" size="2xl" color="white" fontFamily="WixMadeforDisplay">
            Frequently Asked Questions
          </Heading>
          <Text color="gray.400" fontSize="lg" maxW="700px">
            Everything you need to know about ArcisAI enterprise AI cameras, cloud VMS, compliance, pricing, and deployment.
          </Text>

          {/* Search */}
          <InputGroup maxW="600px" mt={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="white"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ borderColor: '#00d4ff', boxShadow: '0 0 0 1px #00d4ff' }}
              borderRadius="full"
              size="lg"
            />
          </InputGroup>
        </VStack>

        {/* Category Filters */}
        <Wrap spacing={3} mb={10} justify="center">
          {categories.map(cat => (
            <WrapItem key={cat}>
              <Tag
                size="lg"
                variant={activeCategory === cat ? 'solid' : 'outline'}
                bg={activeCategory === cat ? '#00d4ff' : 'transparent'}
                color={activeCategory === cat ? 'black' : 'gray.400'}
                borderColor="whiteAlpha.300"
                cursor="pointer"
                onClick={() => setActiveCategory(cat)}
                _hover={{ bg: activeCategory === cat ? '#00d4ff' : 'whiteAlpha.100' }}
                borderRadius="full"
                px={5}
                py={2}
                fontFamily="WixMadeforDisplay"
              >
                {cat}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* FAQ Content */}
        <VStack spacing={8} align="stretch">
          {Object.entries(groupedFaqs).map(([category, faqs]) => (
            <Box key={category}>
              <Heading as="h2" size="lg" color="#00d4ff" mb={4} fontFamily="WixMadeforDisplay">
                {category}
              </Heading>
              <Accordion allowMultiple>
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} border="1px solid" borderColor="whiteAlpha.100" mb={2} borderRadius="lg" overflow="hidden">
                    <h3>
                      <AccordionButton py={4} px={6} _hover={{ bg: 'whiteAlpha.50' }}>
                        <Box flex="1" textAlign="left" color="white" fontWeight="600" fontSize="md" fontFamily="WixMadeforDisplay">
                          {faq.q}
                        </Box>
                        <AccordionIcon color="gray.400" />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4} px={6} color="gray.300" fontSize="md" lineHeight="1.7">
                      {faq.a || faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}
        </VStack>

        {/* Bottom CTA */}
        <Box textAlign="center" mt={16} p={10} bg="whiteAlpha.50" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.100">
          <Heading as="h2" size="lg" color="white" mb={3} fontFamily="WixMadeforDisplay">
            Still Have Questions?
          </Heading>
          <Text color="gray.400" mb={6}>
            Our team is ready to help you find the right AI surveillance solution for your enterprise.
          </Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Box as="a" href="/contact-us" bg="#00d4ff" color="black" px={8} py={3} borderRadius="full" fontWeight="bold" _hover={{ bg: '#00b8d9' }} fontFamily="WixMadeforDisplay">
              Contact Sales
            </Box>
            <Box as="a" href="/contact-us?type=demo" border="1px solid" borderColor="#00d4ff" color="#00d4ff" px={8} py={3} borderRadius="full" fontWeight="bold" _hover={{ bg: 'whiteAlpha.100' }} fontFamily="WixMadeforDisplay">
              Request Demo
            </Box>
          </HStack>
        </Box>

        {/* SEO Content Block */}
        <Box mt={16} color="gray.500" fontSize="sm" lineHeight="1.8" data-speakable="true">
          <Heading as="h2" size="md" color="gray.400" mb={4}>About ArcisAI Enterprise AI CCTV Cameras</Heading>
          <Text mb={3}>
            ArcisAI by Adiance Technologies is a leading manufacturer of enterprise AI-powered CCTV cameras serving businesses across the United States, United Arab Emirates, United Kingdom, Singapore, and India. Our product lineup includes the S-Series Premium AI cameras (Bullet, PTZ, Dome with 4G SIM, WiFi, and PoE variants), ECO-Series value cameras, the Bridge Device for legacy camera integration, Cloud VMS for centralized management, and ArcisGPT for GenAI-powered video search.
          </Text>
          <Text mb={3}>
            All ArcisAI cameras feature true edge AI processing — running face recognition, ANPR, crowd analytics, fire detection, PPE compliance monitoring, and 20+ analytics types directly on the camera hardware. This delivers sub-100ms detection speeds, 80% bandwidth reduction compared to cloud-processed video, and analytics that work even during internet outages.
          </Text>
          <Text>
            ArcisAI cameras are NDAA Section 889 compliant with zero Chinese-manufactured components, STQC certified, GDPR ready, and support hybrid cloud/on-premise deployment. Whether you are replacing Hikvision due to NDAA requirements, evaluating alternatives to Verkada or Rhombus for better value, or deploying AI cameras for the first time, ArcisAI provides enterprise-grade intelligent surveillance trusted by organizations worldwide.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQHub;
