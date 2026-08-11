'use client';
import React, { useMemo, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  SimpleGrid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  FaFilePdf,
  FaDownload,
  FaWifi,
  FaNetworkWired,
  FaMicrochip,
  FaBook,
  FaFolderOpen,
  FaRegFileAlt,
} from 'react-icons/fa';
import CustomButton from '../../Components/CustomButton';

// ---------------------------------------------------------------------------
// Content model — Section → Series → Documents
// New series go under `series: [...]`. New top-level sections (e.g. Datasheets)
// go as another entry in `sections`.
// ---------------------------------------------------------------------------
const sections = [
  {
    id: 'user-manuals',
    eyebrow: 'Section 01',
    title: 'User Manuals',
    description:
      'Installation, configuration, and operation guides for every ArcisAI camera series.',
    icon: FaBook,
    series: [
      {
        id: 'eco-series',
        title: 'Eco Series',
        description:
          'AI-powered CCTV cameras with edge processing — covers WiFi and PoE variants across Dome, Bullet, and Mini PT form factors.',
        documents: [
          {
            id: '3mp-dome-wifi-user-manual',
            title: '3MP Dome WiFi User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP Dome WiFi CCTV Camera. Covers camera installation, wireless network setup, video configuration, AI features, recording settings, troubleshooting, and ArcisAI mobile app integration.',
            fileType: 'PDF',
            fileSize: '26.6 MB',
            fileUrl: '/pdfs/DOME WIFI USER MANUAL.pdf',
            fileName: 'ArcisAI_3MP_Dome_WiFi_User_Manual.pdf',
            series: '3MP Dome WiFi',
          },
          {
            id: '3mp-bullet-wifi-user-manual',
            title: '3MP Bullet WiFi User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP Bullet WiFi CCTV Camera. Includes mounting instructions, WiFi connectivity, image settings, AI functions, storage configuration, remote access, and ArcisAI mobile app setup.',
            fileType: 'PDF',
            fileSize: '26.9 MB',
            fileUrl: '/pdfs/BULLET WIFI USER MANUAL.pdf',
            fileName: 'ArcisAI_3MP_Bullet_WiFi_User_Manual.pdf',
            series: '3MP Bullet WiFi',
          },
          {
            id: '3mp-minipt-wifi-user-manual',
            title: '3MP MiniPT WiFi User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP MiniPT WiFi CCTV Camera. Covers camera installation, wireless network configuration, pan-tilt controls, AI-enabled features, recording management, and ArcisAI mobile app operation.',
            fileType: 'PDF',
            fileSize: '27.2 MB',
            fileUrl: '/pdfs/Mini PT Wifi user manual.pdf',
            fileName: 'ArcisAI_3MP_MiniPT_WiFi_User_Manual.pdf',
            series: '3MP MiniPT WiFi',
          },
          {
            id: '3mp-dome-poe-user-manual',
            title: '3MP Dome PoE User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP Dome PoE CCTV Camera. Includes mounting procedures, PoE network setup, video optimization, AI analytics configuration, storage settings, and remote monitoring through the ArcisAI app.',
            fileType: 'PDF',
            fileSize: '26.9 MB',
            fileUrl: '/pdfs/dome POE user manual.pdf',
            fileName: 'ArcisAI_3MP_Dome_PoE_User_Manual.pdf',
            series: '3MP Dome PoE',
          },
          {
            id: '3mp-bullet-poe-user-manual',
            title: '3MP Bullet PoE User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP Bullet PoE CCTV Camera. Covers physical installation, PoE connectivity, image tuning, intelligent detection features, recording options, troubleshooting, and ArcisAI mobile app integration.',
            fileType: 'PDF',
            fileSize: '26.7 MB',
            fileUrl: '/pdfs/Bullet PoE User manual.pdf',
            fileName: 'ArcisAI_3MP_Bullet_PoE_User_Manual.pdf',
            series: '3MP Bullet PoE',
          },
          {
            id: '3mp-minipt-poe-user-manual',
            title: '3MP MiniPT PoE User Manual',
            description:
              'Complete installation, configuration, and operation guide for the ArcisAI 3MP MiniPT PoE CCTV Camera. Includes installation, PoE network configuration, pan-tilt operation, AI settings, recording management, remote access, and mobile app connectivity.',
            fileType: 'PDF',
            fileSize: '27.5 MB',
            fileUrl: '/pdfs/Mini PT PoE User Manual.pdf',
            fileName: 'ArcisAI_3MP_MiniPT_PoE_User_Manual.pdf',
            series: '3MP MiniPT PoE',
          },
        ],
      },
      // Add future series here (S Series, NVR, etc.)
    ],
  },
  {
    id: 'documents',
    eyebrow: 'Section 02',
    title: 'Documents',
    description:
      'Datasheets, integration guides, compliance documentation, and other technical resources.',
    icon: FaFolderOpen,
    series: [], // empty — placeholder until content is added
  },
];

const cornerStyle = {
  position: 'absolute',
  borderColor: '#A4FF79',
  width: '10px',
  height: '10px',
  zIndex: 1,
};

function getConnectivity(seriesLabel) {
  if (/wifi/i.test(seriesLabel)) return 'WiFi';
  if (/poe/i.test(seriesLabel)) return 'PoE';
  return 'Eco-Series';
}

const CONNECTIVITY_META = {
  WiFi:         { color: '#22D3EE', icon: FaWifi,         label: 'WiFi'    },
  PoE:          { color: '#A78BFA', icon: FaNetworkWired, label: 'PoE'     },
  'Eco-Series': { color: '#FBBF24', icon: FaMicrochip,    label: 'Eco-Series' },
};

const FILTERS = ['All', 'WiFi', 'PoE'];

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------
const DocumentCard = ({ doc }) => {
  const connectivity = getConnectivity(doc.series);
  const meta = CONNECTIVITY_META[connectivity];
  const accent = meta.color;
  const accentSoft = `${accent}1f`;
  const accentLine = `${accent}59`;

  return (
    <Box
      position="relative"
      bgGradient="linear(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))"
      border="1px solid"
      borderColor="rgba(255,255,255,0.07)"
      h="100%"
      display="flex"
      flexDirection="column"
      transition="all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)"
      _hover={{
        borderColor: accentLine,
        transform: 'translateY(-3px)',
        boxShadow: `0 28px 48px -24px ${accent}59, 0 0 0 1px ${accent}26 inset`,
      }}
      sx={{
        '&:hover .doc-accent':    { width: '100%' },
        '&:hover .doc-icon-wrap': { bg: accentSoft, borderColor: accentLine },
        '&:hover .doc-chip':      { boxShadow: `0 0 0 1px ${accent}66, 0 0 14px -4px ${accent}` },
      }}
    >
      <Box {...cornerStyle} borderColor={accent} top="-1px" left="-1px"     borderTop="1px solid" borderLeft="1px solid" />
      <Box {...cornerStyle} borderColor={accent} top="-1px" right="-1px"    borderTop="1px solid" borderRight="1px solid" />
      <Box {...cornerStyle} borderColor={accent} bottom="-1px" left="-1px"  borderBottom="1px solid" borderLeft="1px solid" />
      <Box {...cornerStyle} borderColor={accent} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

      <Box
        className="doc-accent"
        position="absolute"
        top={0}
        left={0}
        h="2px"
        w="48px"
        bg={accent}
        transition="width 0.35s ease"
      />

      <Box p={{ base: 4, md: 5 }} flex="1" display="flex" flexDirection="column">
        <Flex justify="space-between" align="flex-start" mb={4} gap={2}>
          <Flex
            className="doc-icon-wrap"
            w="44px"
            h="44px"
            align="center"
            justify="center"
            flexShrink={0}
            bg="rgba(255, 255, 255, 0.04)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            transition="all 0.25s ease"
          >
            <Icon as={FaFilePdf} w={5} h={5} color={accent} />
          </Flex>

          <HStack
            className="doc-chip"
            spacing="6px"
            px="8px"
            py="5px"
            bg={accentSoft}
            border="1px solid"
            borderColor={accentLine}
            transition="box-shadow 0.3s ease"
            flexShrink={0}
          >
            <Icon as={meta.icon} w="10px" h="10px" color={accent} />
            <Text fontSize="10px" fontWeight="600" letterSpacing="0.08em" textTransform="uppercase" color={accent}>
              {meta.label}
            </Text>
          </HStack>
        </Flex>

        <Text
          fontSize="10px"
          fontWeight="600"
          letterSpacing="0.12em"
          textTransform="uppercase"
          color="gray.400"
          border="1px solid"
          borderColor="whiteAlpha.200"
          px="8px"
          py="2px"
          mb={3}
          alignSelf="flex-start"
        >
          {doc.series}
        </Text>

        <Heading
          as="h3"
          fontSize={{ base: '16px', md: '17px' }}
          fontWeight="500"
          color="white"
          mb={2}
          lineHeight="1.3"
        >
          {doc.title}
        </Heading>

        <Text
          color="gray.400"
          fontSize="13px"
          lineHeight="1.6"
          mb={4}
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {doc.description}
        </Text>

        <Box flex="1" />

        <Box pt={3} borderTop="1px solid" borderColor="whiteAlpha.100">
          <HStack spacing={2} color="gray.500" fontSize="11px" mb={3}>
            <Text fontWeight="600" color="gray.400">{doc.fileType}</Text>
            <Box w="3px" h="3px" bg="whiteAlpha.400" borderRadius="full" />
            <Text>{doc.fileSize}</Text>
          </HStack>

          <Box
            as="a"
            href={doc.fileUrl}
            download={doc.fileName || true}
            rel="noopener"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="6px"
            w="100%"
            px="12px"
            py="9px"
            fontSize="12px"
            fontWeight="600"
            letterSpacing="0.04em"
            color={accent}
            border="1px solid"
            borderColor={accentLine}
            bg="transparent"
            transition="all 0.2s ease"
            sx={{ textDecoration: 'none' }}
            _hover={{
              bg: accentSoft,
              borderColor: accent,
              boxShadow: `0 0 0 1px ${accent}33`,
            }}
          >
            <Icon as={FaDownload} w={3} h={3} />
            Download
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// ---------------------------------------------------------------------------
// Section / Series headers
// ---------------------------------------------------------------------------
const SectionHeader = ({ section, totalDocs }) => (
  <Flex
    align={{ base: 'flex-start', md: 'center' }}
    direction={{ base: 'column', md: 'row' }}
    justify="space-between"
    gap={4}
    mb={{ base: 6, md: 8 }}
    pb={5}
    borderBottom="1px solid"
    borderColor="whiteAlpha.100"
    position="relative"
  >
    <Box
      position="absolute"
      bottom="-1px"
      left={0}
      h="2px"
      w="64px"
      bgGradient="linear(90deg, #A4FF79, #22D3EE)"
    />

    <HStack spacing={4} align="center">
      <Flex
        w={{ base: '48px', md: '54px' }}
        h={{ base: '48px', md: '54px' }}
        align="center"
        justify="center"
        bg="rgba(164, 255, 121, 0.08)"
        border="1px solid"
        borderColor="rgba(164, 255, 121, 0.3)"
        flexShrink={0}
      >
        <Icon as={section.icon} w={5} h={5} color="#A4FF79" />
      </Flex>
      <Box>
        <Text
          fontSize="11px"
          fontWeight="600"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color="#A4FF79"
          mb={1}
        >
          {section.eyebrow}
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: '26px', md: '32px' }}
          fontWeight="400"
          color="white"
          lineHeight="1.15"
        >
          {section.title}
        </Heading>
      </Box>
    </HStack>

    <Box maxW={{ base: '100%', md: '440px' }}>
      <Text color="gray.400" fontSize={{ base: '13px', md: '14px' }} lineHeight="1.6">
        {section.description}
      </Text>
      {typeof totalDocs === 'number' && (
        <Text mt={2} color="gray.500" fontSize="12px">
          {totalDocs} document{totalDocs === 1 ? '' : 's'} available
        </Text>
      )}
    </Box>
  </Flex>
);

const SeriesHeader = ({ series, visibleCount }) => (
  <Flex
    align={{ base: 'flex-start', md: 'center' }}
    direction={{ base: 'column', md: 'row' }}
    justify="space-between"
    gap={3}
    mb={6}
  >
    <HStack spacing={3} align="center">
      <Box w="8px" h="8px" bg="#A4FF79" boxShadow="0 0 10px #A4FF79" />
      <Heading
        as="h3"
        fontSize={{ base: '20px', md: '24px' }}
        fontWeight="500"
        color="white"
        letterSpacing="0.01em"
      >
        {series.title}
      </Heading>
      <Text
        fontSize="11px"
        fontWeight="600"
        letterSpacing="0.08em"
        color="#A4FF79"
        bg="rgba(164, 255, 121, 0.1)"
        border="1px solid rgba(164, 255, 121, 0.3)"
        px="8px"
        py="2px"
      >
        {visibleCount}
      </Text>
    </HStack>
    {series.description && (
      <Text
        color="gray.500"
        fontSize="13px"
        lineHeight="1.55"
        maxW={{ base: '100%', md: '560px' }}
      >
        {series.description}
      </Text>
    )}
  </Flex>
);

// Sub-group header used inside a series (e.g. "WiFi Cameras", "PoE Cameras")
const SubGroupHeader = ({ label, count, accent }) => (
  <Flex align="center" gap={3} mb={4}>
    <Box h="1px" w="20px" bg={accent} />
    <Text
      fontSize="11px"
      fontWeight="700"
      letterSpacing="0.18em"
      textTransform="uppercase"
      color={accent}
    >
      {label}
    </Text>
    <Text fontSize="11px" color="gray.500">
      {count} {count === 1 ? 'model' : 'models'}
    </Text>
    <Box flex="1" h="1px" bgGradient={`linear(90deg, ${accent}40, transparent)`} />
  </Flex>
);


// ---------------------------------------------------------------------------
// Section content
// ---------------------------------------------------------------------------
const EmptySection = ({ message }) => (
  <Box
    position="relative"
    bgGradient="linear(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))"
    border="1px dashed"
    borderColor="whiteAlpha.150"
    p={{ base: 10, md: 14 }}
    textAlign="center"
  >
    <Box {...cornerStyle} top="-1px" left="-1px"     borderTop="1px solid" borderLeft="1px solid" />
    <Box {...cornerStyle} top="-1px" right="-1px"    borderTop="1px solid" borderRight="1px solid" />
    <Box {...cornerStyle} bottom="-1px" left="-1px"  borderBottom="1px solid" borderLeft="1px solid" />
    <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

    <Flex
      w="56px"
      h="56px"
      mx="auto"
      mb={4}
      align="center"
      justify="center"
      bg="rgba(255, 255, 255, 0.04)"
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Icon as={FaRegFileAlt} w={6} h={6} color="gray.500" />
    </Flex>
    <Text color="gray.300" fontSize="md" fontWeight="500" mb={2}>
      Nothing here yet
    </Text>
    <Text color="gray.500" fontSize="sm" maxW="420px" mx="auto">
      {message}
    </Text>
  </Box>
);

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------
const Documents = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const allDocs = useMemo(
    () => sections.flatMap((s) => s.series.flatMap((sr) => sr.documents)),
    [],
  );

  const counts = useMemo(() => {
    const base = { All: allDocs.length };
    allDocs.forEach((d) => {
      const c = getConnectivity(d.series);
      base[c] = (base[c] || 0) + 1;
    });
    return base;
  }, [allDocs]);

  const matchesDoc = (d) => {
    if (filter !== 'All' && getConnectivity(d.series) !== filter) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.series.toLowerCase().includes(q)
    );
  };

  const isFiltering = query.trim() !== '' || filter !== 'All';

  return (
    <Box
      bg="#0E1014"
      bgImage="radial-gradient(circle at 20% 0%, rgba(34, 211, 238, 0.06), transparent 45%), radial-gradient(circle at 80% 30%, rgba(167, 139, 250, 0.05), transparent 50%)"
      minH="100vh"
      pt={{ base: '40px', md: '60px' }}
      pb={{ base: '60px', md: '100px' }}
    >
      <Container maxW="1320px" px={{ base: 4, md: 8 }}>
        {/* Hero */}
        <VStack spacing={4} mb={{ base: 8, md: 10 }} textAlign="center" align="center">
          <Text
            fontSize={{ base: '11px', md: '12px' }}
            fontWeight="600"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="#A4FF79"
          >
            Resources
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '32px', md: '52px' }}
            fontWeight="400"
            color="white"
            lineHeight="1.15"
            maxW="900px"
          >
            Documents &amp;{' '}
            <Text as="span" bgGradient="linear(90deg, #A4FF79, #22D3EE)" bgClip="text">
              User Manuals
            </Text>
          </Heading>
          <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="720px" lineHeight="1.7">
            Download official ArcisAI user manuals, datasheets, and product guides. Everything you need to install, configure, and operate ArcisAI cameras and the Cloud VMS.
          </Text>
        </VStack>

        {/* Controls: search + filter chips */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={3}
          mb={{ base: 10, md: 14 }}
          align={{ md: 'center' }}
          justify="space-between"
        >
          <InputGroup maxW={{ base: '100%', md: '360px' }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product, series or feature"
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              color="white"
              _placeholder={{ color: 'gray.500' }}
              _focus={{ borderColor: '#A4FF79', boxShadow: '0 0 0 1px #A4FF79' }}
              borderRadius="0"
              size="md"
            />
          </InputGroup>

          <HStack spacing={2} flexWrap="wrap">
            {FILTERS.map((f) => {
              const active = filter === f;
              const meta = f !== 'All' ? CONNECTIVITY_META[f] : null;
              const color = meta ? meta.color : '#A4FF79';
              return (
                <Button
                  key={f}
                  size="sm"
                  variant="outline"
                  borderRadius="0"
                  fontWeight="600"
                  letterSpacing="0.06em"
                  textTransform="uppercase"
                  fontSize="11px"
                  px={3}
                  bg={active ? color : 'transparent'}
                  color={active ? 'black' : 'gray.300'}
                  borderColor={active ? color : 'whiteAlpha.300'}
                  onClick={() => setFilter(f)}
                  _hover={
                    active
                      ? { bg: color, filter: 'brightness(1.08)' }
                      : { bg: 'whiteAlpha.100', color, borderColor: color }
                  }
                >
                  {f}
                  <Text
                    as="span"
                    ml={2}
                    fontSize="10px"
                    opacity={active ? 0.8 : 0.6}
                  >
                    {counts[f] || 0}
                  </Text>
                </Button>
              );
            })}
          </HStack>
        </Flex>

        {/* Sections */}
        <VStack spacing={{ base: 14, md: 20 }} align="stretch">
          {sections.map((section) => {
            const sectionTotal = section.series.reduce(
              (sum, sr) => sum + sr.documents.length,
              0,
            );

            // For each series in this section: compute visible docs given the active query/filter.
            const filteredSeries = section.series.map((sr) => ({
              ...sr,
              _visible: sr.documents.filter(matchesDoc),
            }));

            const sectionHasMatches =
              filteredSeries.some((sr) => sr._visible.length > 0);

            return (
              <Box as="section" key={section.id}>
                <SectionHeader section={section} totalDocs={sectionTotal} />

                {/* No content at all in this section */}
                {section.series.length === 0 && (
                  <EmptySection message="No documents have been published in this section yet. Check back soon." />
                )}

                {/* Section has series, but filtering hid everything */}
                {section.series.length > 0 && !sectionHasMatches && isFiltering && (
                  <Box
                    position="relative"
                    bg="rgba(255, 255, 255, 0.03)"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    p={{ base: 8, md: 10 }}
                    textAlign="center"
                  >
                    <Box {...cornerStyle} top="-1px" left="-1px"     borderTop="1px solid" borderLeft="1px solid" />
                    <Box {...cornerStyle} top="-1px" right="-1px"    borderTop="1px solid" borderRight="1px solid" />
                    <Box {...cornerStyle} bottom="-1px" left="-1px"  borderBottom="1px solid" borderLeft="1px solid" />
                    <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

                    <Text color="gray.300" fontSize="md" mb={2}>
                      No documents in this section match your search.
                    </Text>
                    <Button
                      mt={3}
                      size="sm"
                      variant="outline"
                      borderRadius="0"
                      color="#A4FF79"
                      borderColor="rgba(164, 255, 121, 0.5)"
                      _hover={{ bg: 'rgba(164, 255, 121, 0.1)', borderColor: '#A4FF79' }}
                      onClick={() => { setQuery(''); setFilter('All'); }}
                    >
                      Reset filters
                    </Button>
                  </Box>
                )}

                {/* Render series with at least one visible document */}
                <VStack spacing={{ base: 10, md: 12 }} align="stretch">
                  {filteredSeries.map((sr) => {
                    if (sr._visible.length === 0) return null;

                    const wifiDocs = sr._visible.filter((d) => getConnectivity(d.series) === 'WiFi');
                    const poeDocs  = sr._visible.filter((d) => getConnectivity(d.series) === 'PoE');
                    const other    = sr._visible.filter(
                      (d) => getConnectivity(d.series) !== 'WiFi' && getConnectivity(d.series) !== 'PoE',
                    );

                    return (
                      <Box
                        key={sr.id}
                        position="relative"
                        bg="rgba(255,255,255,0.015)"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        p={{ base: 5, md: 7 }}
                      >
                        {/* outer corner ticks on the series block */}
                        <Box {...cornerStyle} top="-1px" left="-1px"     borderTop="1px solid" borderLeft="1px solid" />
                        <Box {...cornerStyle} top="-1px" right="-1px"    borderTop="1px solid" borderRight="1px solid" />
                        <Box {...cornerStyle} bottom="-1px" left="-1px"  borderBottom="1px solid" borderLeft="1px solid" />
                        <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

                        <SeriesHeader series={sr} visibleCount={sr._visible.length} />

                        {wifiDocs.length > 0 && (
                          <Box mb={poeDocs.length > 0 ? { base: 8, md: 10 } : 0}>
                            <SubGroupHeader
                              label="WiFi Cameras"
                              count={wifiDocs.length}
                              accent={CONNECTIVITY_META.WiFi.color}
                            />
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 5 }}>
                              {wifiDocs.map((doc) => (
                                <DocumentCard key={doc.id} doc={doc} />
                              ))}
                            </SimpleGrid>
                          </Box>
                        )}

                        {poeDocs.length > 0 && (
                          <Box>
                            <SubGroupHeader
                              label="PoE Cameras"
                              count={poeDocs.length}
                              accent={CONNECTIVITY_META.PoE.color}
                            />
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 5 }}>
                              {poeDocs.map((doc) => (
                                <DocumentCard key={doc.id} doc={doc} />
                              ))}
                            </SimpleGrid>
                          </Box>
                        )}

                        {/* Fallback: if a future series has docs that aren't WiFi/PoE,
                            render them in a plain grid so nothing disappears. */}
                        {other.length > 0 && (
                          <Box mt={wifiDocs.length > 0 || poeDocs.length > 0 ? { base: 8, md: 10 } : 0}>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 4, md: 5 }}>
                              {other.map((doc) => (
                                <DocumentCard key={doc.id} doc={doc} />
                              ))}
                            </SimpleGrid>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            );
          })}
        </VStack>

        {/* Bottom CTA */}
        <Box
          textAlign="center"
          mt={{ base: 14, md: 20 }}
          p={{ base: 8, md: 10 }}
          bg="rgba(255, 255, 255, 0.03)"
          border="1px solid"
          borderColor="whiteAlpha.100"
          position="relative"
        >
          <Box {...cornerStyle} top="-1px" left="-1px"     borderTop="1px solid" borderLeft="1px solid" />
          <Box {...cornerStyle} top="-1px" right="-1px"    borderTop="1px solid" borderRight="1px solid" />
          <Box {...cornerStyle} bottom="-1px" left="-1px"  borderBottom="1px solid" borderLeft="1px solid" />
          <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

          <Heading as="h2" fontSize={{ base: '24px', md: '30px' }} fontWeight="400" color="white" mb={3}>
            Can&apos;t find what you&apos;re looking for?
          </Heading>
          <Text color="gray.400" mb={6} maxW="560px" mx="auto">
            Our team can share spec sheets, integration guides, or compliance documentation tailored to your deployment.
          </Text>
          <Flex justify="center">
            <CustomButton
              as="a"
              onClick={() => window.open('/contact-us', '_self')}
              width="180px"
              height="46px"
              fontSize="14px"
              fontWeight="600"
            >
              Contact Sales
            </CustomButton>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Documents;
