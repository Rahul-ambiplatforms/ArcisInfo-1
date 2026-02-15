// SEOContent - 5-pillar AI surveillance content for search engine visibility
import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Link, HStack, Badge } from '@chakra-ui/react';

const HomeContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Complete AI Surveillance Ecosystem for India
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="900px" mx="auto">
            ArcisAI by Adiance delivers a STQC-certified, end-to-end AI surveillance ecosystem —
            intelligent cameras, cloud-native VMS, AI-powered analytics, Generative AI intelligence,
            mobile app, NVR solutions, and AI dashcam — engineered for the Indian market.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <HStack mb={3}><Badge colorScheme="blue">Hardware</Badge><Badge colorScheme="green">STQC</Badge></HStack>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/s-series" color="blue.600">AI Camera Series</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              S-Series premium and Eco-Series value AI cameras with on-device edge AI processing.
              STQC certified, BIS approved, 2MP to 8MP, IR night vision, IP67, built-in AI analytics.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="purple" mb={3}>Software</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">VMS & Cloud Dashboard</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Cloud-native VMS with centralized dashboard for live monitoring, intelligent playback,
              event-driven recording, multi-site management, and role-based access control.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="orange" mb={3}>Intelligence</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">AI-Powered Video Analytics</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              15+ deep-learning AI analytics on edge and cloud — face recognition, ANPR, people counting,
              crowd detection, intrusion, fire and smoke, PPE compliance, and behavioral analytics.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="red" mb={3}>Next-Gen</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Generative AI & NLP Intelligence</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              Next-generation Generative AI — natural language video search, automated incident reports,
              conversational camera querying, video summarization, and predictive threat analysis.
            </Text>
          </Box>
          <Box p={6} borderRadius="lg" border="1px solid" borderColor="gray.200" _hover={{ shadow: 'md' }}>
            <Badge colorScheme="teal" mb={3}>Ecosystem</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
              <Link as={RouterLink} to="/solution" color="blue.600">Mobile App, NVRs & Dashcam</Link>
            </Heading>
            <Text color="gray.600" fontSize="sm">
              ArcisAI mobile app, NVR solutions 4CH to 32CH, and AI dashcam with 4G, GPS, and ADAS.
            </Text>
          </Box>
        </SimpleGrid>
        <Box>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={4} textAlign="center">15+ AI-Powered Video Analytics</Heading>
          <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3}>
            {['Face Recognition', 'ANPR / LPR', 'People Counting', 'Crowd Detection',
              'Intrusion Detection', 'Fire & Smoke', 'PPE Compliance', 'Abandoned Object',
              'Vehicle Classification', 'Loitering Detection', 'Queue Management',
              'Behavioral Analytics', 'Number Plate Detection', 'Helmet Detection', 'Weapon Detection'].map((a, i) => (
              <Badge key={i} p={2} textAlign="center" colorScheme="blue" variant="subtle" fontSize="xs">{a}</Badge>
            ))}
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} pt={4}>
          {[{ number: '15+', label: 'AI Analytics' }, { number: '7', label: 'Certifications' }, { number: 'STQC', label: 'Government Certified' }, { number: '4-32CH', label: 'NVR Range' }, { number: 'Gen AI', label: 'NLP Intelligence' }].map((stat, i) => (
            <Box key={i} textAlign="center" p={4} bg="gray.50" borderRadius="md">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">{stat.number}</Text>
              <Text fontSize="sm" color="gray.500">{stat.label}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box bg="green.50" p={8} borderRadius="lg" textAlign="center">
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Certified Quality & Compliance</Heading>
          <Text color="gray.600" mb={4}>ArcisAI products are certified by leading standards bodies.</Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            {['STQC Certified', 'ISO 27001:2022', 'FCC Approved', 'RoHS Compliant', 'BIS Approved', 'CE Marked', 'ONVIF Profile S/T'].map((c, i) => (
              <Badge key={i} colorScheme="green" p={2} fontSize="xs">{c}</Badge>
            ))}
          </HStack>
        </Box>
        <Box bg="gray.50" p={8} borderRadius="lg" textAlign="center">
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Global Exhibition Presence</Heading>
          <Text color="gray.600" mb={4}>ArcisAI showcases at leading global security exhibitions.</Text>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            {['GITEX Dubai', 'IFSEC London', 'Convergence India', 'SmartTech Asia', 'ISC West'].map((e, i) => (
              <Badge key={i} colorScheme="purple" variant="outline" p={2} fontSize="xs">{e}</Badge>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Container>
  </Box>
);

const ProductContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>ArcisAI Camera Series — STQC Certified</Heading>
          <Text fontSize="lg" color="gray.600">Purpose-built AI cameras with edge intelligence for India.</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box p={6} bg="blue.50" borderRadius="lg">
            <Badge colorScheme="blue" mb={2}>Premium</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>S-Series — Premium AI Cameras</Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>4K resolution, advanced IR, on-device AI, IP67, STQC certified.</Text>
            <Link as={RouterLink} to="/s-series" color="blue.500" fontSize="sm" fontWeight="bold">View S-Series</Link>
          </Box>
          <Box p={6} bg="green.50" borderRadius="lg">
            <Badge colorScheme="green" mb={2}>Value</Badge>
            <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Eco-Series — Value AI Cameras</Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>2MP-5MP, IR night vision, cloud connectivity, BIS approved.</Text>
            <Link as={RouterLink} to="/eco-series" color="blue.500" fontSize="sm" fontWeight="bold">View Eco-Series</Link>
          </Box>
        </SimpleGrid>
        <Box p={6} bg="orange.50" borderRadius="lg">
          <Badge colorScheme="orange" mb={2}>Edge Intelligence</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Edge AI Analytics</Heading>
          <Text color="gray.600" mb={3}>On-device AI analytics reducing bandwidth and enabling real-time alerts.</Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {['Face Recognition', 'ANPR / LPR', 'People Counting', 'Intrusion Detection', 'Fire & Smoke', 'PPE Compliance', 'Object Detection', 'Motion Analytics'].map((a, i) => (
              <Badge key={i} p={2} textAlign="center" colorScheme="orange" variant="subtle" fontSize="xs">{a}</Badge>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={6} bg="red.50" borderRadius="lg">
          <Badge colorScheme="red" mb={2}>Next-Gen</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Generative AI Features</Heading>
          <Text color="gray.600">Natural language video search, automated incident summarization, and AI forensic analysis.</Text>
        </Box>
      </VStack>
    </Container>
  </Box>
);

const SolutionContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>ArcisAI Surveillance Solutions</Heading>
          <Text fontSize="lg" color="gray.600">Five integrated pillars — cameras, VMS, AI analytics, Generative AI, and ecosystem devices.</Text>
        </Box>
        <Box p={6} bg="orange.50" borderRadius="lg">
          <Badge colorScheme="orange" mb={2}>Intelligence</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>AI-Powered Video Analytics Suite</Heading>
          <Text color="gray.600" mb={3}>15+ deep-learning AI analytics on edge and cloud with automated alerts and SOP workflows.</Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {['Face Recognition', 'ANPR / LPR', 'People Counting', 'Crowd Detection', 'Intrusion Detection', 'Fire & Smoke', 'PPE Compliance', 'Abandoned Object', 'Vehicle Classification', 'Loitering Detection', 'Queue Management', 'Behavioral Analytics', 'Helmet Detection', 'Weapon Detection', 'Fall Detection'].map((a, i) => (
              <Badge key={i} p={2} textAlign="center" colorScheme="orange" variant="subtle" fontSize="xs">{a}</Badge>
            ))}
          </SimpleGrid>
        </Box>
        <Box p={6} bg="red.50" borderRadius="lg">
          <Badge colorScheme="red" mb={2}>Next-Gen</Badge>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>Generative AI & NLP Intelligence</Heading>
          <Text color="gray.600" mb={3}>Natural language intelligence — plain English queries, automated reports, predictive insights.</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {[{ title: 'NL Video Search', desc: 'Search footage using plain English' }, { title: 'Auto Incident Reports', desc: 'AI generates reports with timeline and evidence' }, { title: 'Conversational Querying', desc: 'Ask camera feeds questions naturally' }, { title: 'Predictive Analytics', desc: 'LLM-powered threat prediction' }].map((item, i) => (
              <Box key={i} p={3} bg="white" borderRadius="md">
                <Text fontWeight="bold" fontSize="sm" color="gray.700" mb={1}>{item.title}</Text>
                <Text fontSize="xs" color="gray.500">{item.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[{ title: 'Smart Cities', desc: 'Urban surveillance, traffic, public safety, emergency response.' }, { title: 'Retail & Commercial', desc: 'Footfall analytics, queue management, loss prevention with Gen AI.' }, { title: 'Industrial Safety', desc: 'PPE compliance, fire detection, perimeter security, Gen AI reports.' }].map((sol, i) => (
            <Box key={i} p={6} borderRadius="lg" border="1px solid" borderColor="gray.200">
              <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>{sol.title}</Heading>
              <Text color="gray.600" fontSize="sm">{sol.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

const AboutContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>About ArcisAI — Made for India</Heading>
          <Text fontSize="lg" color="gray.600">India first complete AI surveillance ecosystem by Adiance — STQC-certified hardware, cloud-native software, AI analytics, and Generative AI.</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={6} bg="blue.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>Made for India</Heading>
            <Text color="gray.600" fontSize="sm">STQC certified, BIS approved for government and enterprise.</Text>
          </Box>
          <Box p={6} bg="orange.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>AI-First Ecosystem</Heading>
            <Text color="gray.600" fontSize="sm">15+ AI analytics and Gen AI across cameras, VMS, app, NVRs, dashcam.</Text>
          </Box>
          <Box p={6} bg="purple.50" borderRadius="lg" textAlign="center">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>Global Recognition</Heading>
            <Text color="gray.600" fontSize="sm">GITEX, IFSEC, Convergence India. STQC, ISO 27001, FCC, BIS, CE, ONVIF.</Text>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" pt={4}>
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Link as={RouterLink} to="/s-series" color="blue.500" fontSize="sm">S-Series</Link>
            <Link as={RouterLink} to="/eco-series" color="blue.500" fontSize="sm">Eco-Series</Link>
            <Link as={RouterLink} to="/solution" color="blue.500" fontSize="sm">Solutions</Link>
            <Link as={RouterLink} to="/why-choose-arcisai" color="blue.500" fontSize="sm">Why ArcisAI</Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  </Box>
);

const SEOContent = () => {
  const location = useLocation();
  const path = location.pathname;
  if (path === '/') return <HomeContent />;
  if (path.startsWith('/s-series') || path.startsWith('/eco-series')) return <ProductContent />;
  if (path.startsWith('/solution')) return <SolutionContent />;
  if (path === '/about-us' || path === '/why-choose-arcisai') return <AboutContent />;
  return null;
};

export default SEOContent;
