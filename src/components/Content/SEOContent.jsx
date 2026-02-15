import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Heading, Text, SimpleGrid, VStack, Link, HStack, Badge
} from '@chakra-ui/react';

/* ─────────────────────────── HOME PAGE CONTENT ─────────────────────────── */
const HomeContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" mb={4}>
            Complete AI Surveillance Ecosystem — Cameras, Software &amp; Cloud Intelligence
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="900px" mx="auto">
            ArcisAI by Adiance delivers an integrated AI surveillance ecosystem combining intelligent
            cameras, a powerful mobile app, video management software (VMS), cloud-based dashboard,
            NVR solutions, and 15+ AI analytics — all STQC certified and built for the Indian market.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Badge colorScheme="blue" mb={2}>STQC Certified</Badge>
            <Heading as="h3" fontSize="lg" color="#1a1a2e" mb={3}>
              AI-Powered Camera Series
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              S-Series premium and Eco-Series cameras with built-in edge AI processing. Features
              include face recognition, ANPR, people counting, intrusion detection, and fire/smoke
              detection — all processed at the edge for instant alerts with minimal bandwidth usage.
              Available in bullet, dome, PTZ, and fisheye configurations.
            </Text>
            <Link as={RouterLink} to="/s-series" color="#1a1a2e" fontWeight="600" fontSize="sm">
              Explore S-Series &rarr;
            </Link>
          </Box>

          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Badge colorScheme="green" mb={2}>Cloud-Based</Badge>
            <Heading as="h3" fontSize="lg" color="#1a1a2e" mb={3}>
              VMS &amp; Cloud Dashboard
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              STQC-certified video management software with centralized cloud dashboard for
              multi-site monitoring. Live view, playback, AI event search, health monitoring, and
              automated alerts accessible from any browser. Manage hundreds of cameras from a
              single unified interface with role-based access control.
            </Text>
            <Link as={RouterLink} to="/solution/vms" color="#1a1a2e" fontWeight="600" fontSize="sm">
              Explore VMS Platform &rarr;
            </Link>
          </Box>

          <Box p={6} bg="gray.50" borderRadius="xl" border="1px solid" borderColor="gray.100">
            <Badge colorScheme="purple" mb={2}>Mobile Ready</Badge>
            <Heading as="h3" fontSize="lg" color="#1a1a2e" mb={3}>
              ArcisAI Mobile App
            </Heading>
            <Text color="gray.600" fontSize="sm" mb={3}>
              Full-featured mobile surveillance app for iOS and Android with live streaming,
              instant push notifications for AI alerts, remote playback, PTZ control, and two-way
              audio. Monitor your entire camera network from anywhere with military-grade encrypted
              connections and biometric app security.
            </Text>
            <Link as={RouterLink} to="/solution/app" color="#1a1a2e" fontWeight="600" fontSize="sm">
              Download ArcisAI App &rarr;
            </Link>
          </Box>
        </SimpleGrid>

        <Box mt={6} p={8} bg="gray.50" borderRadius="xl">
          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="gray.800" mb={4}>
            15+ AI Analytics Built Into Every Camera
          </Heading>
          <Text color="gray.600" mb={4}>
            Every ArcisAI camera comes pre-loaded with advanced AI analytics that work out of the box.
            From facial recognition and automatic number plate recognition (ANPR) to crowd detection,
            abandoned object detection, people counting, and PPE compliance monitoring — our edge AI
            processing delivers real-time alerts without the need for additional servers or software
            licenses.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            {['Face Recognition', 'ANPR/LPR', 'People Counting', 'Crowd Detection',
              'Intrusion Alert', 'Fire Detection', 'PPE Compliance', 'Loitering Detection',
              'Abandoned Object', 'Vehicle Classification', 'Line Crossing', 'Zone Analytics',
              'Smoke Detection', 'Weapon Detection', 'Heatmap Analytics'].map((item) => (
              <Box key={item} p={2} bg="white" borderRadius="md" textAlign="center" border="1px solid" borderColor="gray.200">
                <Text fontSize="xs" color="gray.700" fontWeight="500">{item}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={4}>
          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>NVR Solutions</Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              Professional-grade network video recorders from 4-channel to 32-channel configurations
              with built-in AI processing, PoE support, and seamless integration with ArcisAI cameras.
              Support H.265+ compression for maximum storage efficiency with up to 8MP recording
              resolution.
            </Text>
            <Link as={RouterLink} to="/nvr" color="#1a1a2e" fontWeight="600" fontSize="sm">
              View NVR Range &rarr;
            </Link>
          </Box>

          <Box p={6} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>AI Dashcam</Heading>
            <Text color="gray.600" fontSize="sm" mb={2}>
              Intelligent vehicle dashcam with 4G connectivity, GPS tracking, ADAS (Advanced Driver
              Assistance System), driver monitoring, and cloud-based fleet management. Real-time
              vehicle tracking, driver behavior analysis, and incident recording with tamper-proof
              cloud backup.
            </Text>
            <Link as={RouterLink} to="/dashcam" color="#1a1a2e" fontWeight="600" fontSize="sm">
              Explore Dashcam &rarr;
            </Link>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mt={4}>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#1a1a2e">15+</Text>
            <Text fontSize="xs" color="gray.600">AI Analytics</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#1a1a2e">7</Text>
            <Text fontSize="xs" color="gray.600">Certifications</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#1a1a2e">STQC</Text>
            <Text fontSize="xs" color="gray.600">Govt. Certified</Text>
          </Box>
          <Box p={4} bg="#EBF5FF" borderRadius="lg" textAlign="center">
            <Text fontWeight="700" fontSize="2xl" color="#1a1a2e">4CH-32CH</Text>
            <Text fontSize="xs" color="gray.600">NVR Range</Text>
          </Box>
        </SimpleGrid>

        <Box mt={4}>
          <Heading as="h3" fontSize="xl" color="gray.800" mb={3}>
            Certified Quality &amp; Global Standards
          </Heading>
          <Text color="gray.600" mb={3}>
            ArcisAI products carry 7 major certifications ensuring the highest quality and compliance
            standards: STQC (Government of India), ISO 27001:2022 (Information Security), FCC
            (Federal Communications Commission), RoHS (Restriction of Hazardous Substances),
            BIS (Bureau of Indian Standards), CE (European Conformity), and ONVIF (Open Network
            Video Interface Forum) for universal interoperability.
          </Text>
          <Text color="gray.600" fontSize="sm">
            As a proud participant in global security exhibitions including GITEX Dubai, IFSEC London,
            Convergence India, SmartTech Asia, and ISC West, ArcisAI continues to set benchmarks
            in AI-powered surveillance technology for the Indian and international markets.
          </Text>
        </Box>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── PRODUCT PAGE CONTENT ───────────────────────── */
const ProductContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" textAlign="center">
          AI Surveillance Cameras with Edge Intelligence
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="900px" mx="auto">
          ArcisAI cameras combine high-resolution imaging with built-in AI processing for real-time
          analytics at the edge. No additional servers needed — intelligence is embedded directly
          in the camera hardware for instant threat detection and automated alerts.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box p={6} borderLeft="4px solid" borderColor="#1a1a2e" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>S-Series Premium</Heading>
            <Text color="gray.600" fontSize="sm">
              Professional-grade AI cameras with advanced chipsets for complex analytics. Support
              simultaneous multi-model AI inference including face recognition + ANPR + people
              counting running concurrently. Available in 2MP to 8MP resolutions with motorized
              varifocal lenses and IP67/IK10 weather and vandal resistance ratings.
            </Text>
          </Box>
          <Box p={6} borderLeft="4px solid" borderColor="#1a1a2e" bg="gray.50" borderRadius="lg">
            <Heading as="h3" fontSize="lg" color="gray.800" mb={2}>Eco-Series Value</Heading>
            <Text color="gray.600" fontSize="sm">
              Cost-effective AI surveillance for budget-conscious deployments without compromising
              on intelligence. Pre-loaded with essential AI analytics including motion detection,
              intrusion alert, and people counting. Perfect for retail stores, small offices,
              and residential complexes.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── SOLUTION PAGE CONTENT ──────────────────────── */
const SolutionContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={8} align="stretch">
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" textAlign="center">
          End-to-End AI Surveillance Solutions
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="900px" mx="auto">
          From smart city deployments and traffic management to retail analytics and industrial
          safety monitoring, ArcisAI provides complete, turnkey surveillance solutions tailored
          to India's unique infrastructure and compliance requirements.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={5} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Smart Cities</Heading>
            <Text color="gray.600" fontSize="sm">
              Integrated city surveillance with traffic monitoring, public safety analytics, and
              centralized command center support for municipal and government deployments.
            </Text>
          </Box>
          <Box p={5} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Retail &amp; Commercial</Heading>
            <Text color="gray.600" fontSize="sm">
              Customer footfall analytics, heatmap generation, queue management, and loss prevention
              with facial recognition for VIP customer identification and banned person alerts.
            </Text>
          </Box>
          <Box p={5} bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Industrial Safety</Heading>
            <Text color="gray.600" fontSize="sm">
              PPE compliance monitoring, hazardous zone intrusion detection, fire and smoke alerts,
              and worker safety analytics for manufacturing plants and construction sites.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── ABOUT PAGE CONTENT ─────────────────────────── */
const AboutContent = () => (
  <Box py={{ base: 10, md: 16 }} bg="white">
    <Container maxW="1200px">
      <VStack spacing={6} align="stretch">
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} color="gray.800" textAlign="center">
          About ArcisAI by Adiance
        </Heading>
        <Text color="gray.600" fontSize="lg" textAlign="center" maxW="900px" mx="auto">
          ArcisAI is a brand by Adiance, dedicated to making AI surveillance accessible, affordable,
          and effective for the Indian market. With STQC certification and 7 international quality
          certifications, we deliver enterprise-grade security technology that meets both Indian
          government standards and global compliance requirements.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Made for India</Heading>
            <Text color="gray.600" fontSize="sm">
              Designed specifically for Indian infrastructure, climate conditions, and compliance
              requirements. STQC and BIS certified for government and enterprise projects.
            </Text>
          </Box>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Complete Ecosystem</Heading>
            <Text color="gray.600" fontSize="sm">
              From camera hardware to mobile apps, VMS software, cloud platform, NVRs, and
              dashcams — everything designed to work seamlessly together.
            </Text>
          </Box>
          <Box p={6} textAlign="center" bg="gray.50" borderRadius="xl">
            <Heading as="h3" fontSize="md" color="#1a1a2e" mb={2}>Global Recognition</Heading>
            <Text color="gray.600" fontSize="sm">
              Showcased at GITEX Dubai, IFSEC London, Convergence India, SmartTech Asia, and
              ISC West — earning recognition as an emerging leader in AI surveillance.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

/* ─────────────────────────── MAIN SEO CONTENT ROUTER ────────────────────── */
const SEOContent = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/') {
    return <HomeContent />;
  }
  if (path.startsWith('/s-series') || path.startsWith('/eco-series')) {
    return <ProductContent />;
  }
  if (path.startsWith('/solution')) {
    return <SolutionContent />;
  }
  if (path === '/about-us' || path === '/why-choose-arcisai') {
    return <AboutContent />;
  }
  return null;
};

export default SEOContent;
