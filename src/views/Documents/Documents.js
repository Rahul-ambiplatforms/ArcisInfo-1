'use client';
import React from 'react';
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
} from '@chakra-ui/react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import CustomButton from '../../Components/CustomButton';

// Single source of truth for the documents list. Drop a new entry here
// and it shows up on the page — no other code change needed.
const documents = [
  {
    id: 'eco-series-user-manual',
    title: 'Eco-Series User Manual',
    description:
      'Complete installation, configuration, and operation guide for ArcisAI Eco-Series AI CCTV cameras. Covers mounting, network setup, edge AI configuration, and the ArcisAI mobile app.',
    fileType: 'PDF',
    fileSize: '41.5 MB',
    fileUrl: '/pdfs/User_manual_Eco-Series.pdf',
    fileName: 'ArcisAI_Eco-Series_User_Manual.pdf',
    category: 'User Manual',
    series: 'Eco-Series',
  },
];

// Reuse the sci-fi corner motif (same vocabulary as ProductList / AISolutionIndustry)
const cornerStyle = {
  position: 'absolute',
  borderColor: '#A4FF79',
  width: '10px',
  height: '10px',
  zIndex: 1,
};

const DocumentCard = ({ doc }) => {
  return (
    <Box
      position="relative"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid"
      borderColor="whiteAlpha.100"
      p={{ base: 5, md: 7 }}
      transition="all 0.25s ease"
      _hover={{
        bg: 'rgba(164, 255, 121, 0.04)',
        borderColor: 'rgba(164, 255, 121, 0.35)',
      }}
    >
      {/* Sci-fi corner ticks — match the rest of the site */}
      <Box {...cornerStyle} top="-1px" left="-1px" borderTop="1px solid" borderLeft="1px solid" />
      <Box {...cornerStyle} top="-1px" right="-1px" borderTop="1px solid" borderRight="1px solid" />
      <Box {...cornerStyle} bottom="-1px" left="-1px" borderBottom="1px solid" borderLeft="1px solid" />
      <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 7 }} align={{ md: 'center' }}>
        {/* PDF icon column */}
        <Flex
          flexShrink={0}
          w={{ base: '64px', md: '80px' }}
          h={{ base: '64px', md: '80px' }}
          align="center"
          justify="center"
          bg="rgba(164, 255, 121, 0.08)"
          border="1px solid"
          borderColor="rgba(164, 255, 121, 0.25)"
        >
          <Icon as={FaFilePdf} w={{ base: 7, md: 9 }} h={{ base: 7, md: 9 }} color="#A4FF79" />
        </Flex>

        {/* Body */}
        <Box flex="1">
          <HStack spacing={2} mb={2} flexWrap="wrap">
            <Text
              as="span"
              fontSize="11px"
              fontWeight="600"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="#A4FF79"
              border="1px solid rgba(164, 255, 121, 0.4)"
              px="8px"
              py="2px"
            >
              {doc.category}
            </Text>
            <Text
              as="span"
              fontSize="11px"
              fontWeight="500"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="gray.400"
              border="1px solid"
              borderColor="whiteAlpha.200"
              px="8px"
              py="2px"
            >
              {doc.series}
            </Text>
          </HStack>

          <Heading
            as="h2"
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight="500"
            color="white"
            mb={2}
            lineHeight="1.3"
          >
            {doc.title}
          </Heading>

          <Text
            color="gray.400"
            fontSize={{ base: '14px', md: '15px' }}
            lineHeight="1.7"
            mb={4}
          >
            {doc.description}
          </Text>

          <HStack
            spacing={4}
            color="gray.500"
            fontSize="12px"
            mb={5}
            divider={<Box w="1px" h="12px" bg="whiteAlpha.300" />}
          >
            <Text>{doc.fileType}</Text>
            <Text>{doc.fileSize}</Text>
          </HStack>
        </Box>

        {/* Download CTA — real <a download> so the browser saves the file
            instead of opening the PDF inline, and so it still works if JS fails. */}
        <Box flexShrink={0}>
          <CustomButton
            as="a"
            href={doc.fileUrl}
            download={doc.fileName || true}
            rel="noopener"
            width={{ base: '100%', md: '180px' }}
            height="46px"
            fontSize="14px"
            fontWeight="600"
            bgColor="rgba(164, 255, 121, 0.08)"
            hoverBgColor="rgba(164, 255, 121, 0.16)"
            borderColor="#A4FF79"
            hoverBorderColor="#A4FF79"
            textColor="#A4FF79"
            hoverTextColor="#A4FF79"
            sx={{ textDecoration: 'none' }}
          >
            <HStack spacing={2}>
              <Icon as={FaDownload} w={3.5} h={3.5} />
              <Text as="span">Download</Text>
            </HStack>
          </CustomButton>
        </Box>
      </Flex>
    </Box>
  );
};

const Documents = () => {
  return (
    <Box bg="#171717" minH="100vh" pt={{ base: '40px', md: '60px' }} pb={{ base: '60px', md: '100px' }}>
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Hero */}
        <VStack spacing={4} mb={{ base: 10, md: 14 }} textAlign="center" align="center">
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
            <Text as="span" bgGradient="linear(90deg, #A4FF79, #7F56D9)" bgClip="text">
              User Manuals
            </Text>
          </Heading>
          <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="720px" lineHeight="1.7">
            Download official ArcisAI user manuals, datasheets, and product guides. Everything you need to install, configure, and operate ArcisAI cameras and the Cloud VMS.
          </Text>
        </VStack>

        {/* Document list */}
        <SimpleGrid columns={1} spacing={{ base: 5, md: 6 }}>
          {documents.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </SimpleGrid>

        {/* Bottom CTA — consistent with FAQ/Glossary footer pattern */}
        <Box
          textAlign="center"
          mt={{ base: 14, md: 20 }}
          p={{ base: 8, md: 10 }}
          bg="rgba(255, 255, 255, 0.03)"
          border="1px solid"
          borderColor="whiteAlpha.100"
          position="relative"
        >
          <Box {...cornerStyle} top="-1px" left="-1px" borderTop="1px solid" borderLeft="1px solid" />
          <Box {...cornerStyle} top="-1px" right="-1px" borderTop="1px solid" borderRight="1px solid" />
          <Box {...cornerStyle} bottom="-1px" left="-1px" borderBottom="1px solid" borderLeft="1px solid" />
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