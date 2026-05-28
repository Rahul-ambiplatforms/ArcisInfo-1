'use client';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Icon,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

const API_BASE_URL = 'https://vmukti.com/backend/api/version';
const PAGE_SIZE = 10;

const cornerStyle = {
  position: 'absolute',
  borderColor: '#A4FF79',
  width: '10px',
  height: '10px',
  zIndex: 1,
};

function formatDate(s) {
  if (!s) return '-';
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return '-';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

function filenameFromDisposition(header, fallback) {
  if (!header || !header.includes('filename=')) return fallback;
  return header.split('filename=')[1].replace(/["']/g, '').trim() || fallback;
}

function triggerBlobDownload(blob, filename) {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

const VersionTable = ({
  // Page hero
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,

  // Data + endpoints
  listPath, // e.g. "/app/getAllApps"
  downloadPath, // e.g. "/app/download"
  fileType, // "app" | "firmware"
  fileFallbackName, // "applicationFiles.zip" | "firmwareFiles.zip"

  // Table
  firstColumnLabel, // "App Name" | "Model Number"
  firstColumnField, // "appName" | "cameraName"
  searchPlaceholder,
}) => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadingKey, setDownloadingKey] = useState(null); // `${id}:${type}`

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}${listPath}`, { timeout: 10000 });
        if (cancelled) return;
        if (res.data?.success && Array.isArray(res.data.data)) {
          setData(res.data.data);
        } else {
          setError('Failed to fetch data');
        }
      } catch {
        if (!cancelled) setError('Failed to load data. Please try again later.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [listPath]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;
    const q = searchQuery.toLowerCase();
    return data.filter((row) => {
      const primary = String(row[firstColumnField] || row.appName || row.cameraName || '').toLowerCase();
      const version = String(row.versionName || '').toLowerCase();
      const model = String(row.modelNumber || '').toLowerCase();
      return primary.includes(q) || version.includes(q) || model.includes(q);
    });
  }, [data, searchQuery, firstColumnField]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, currentPage]);

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages) setCurrentPage(p);
  };

  const handleDownload = async (id, type) => {
    const key = `${id}:${type}`;
    setDownloadingKey(key);
    try {
      const res = await axios.get(`${API_BASE_URL}${downloadPath}/${id}?type=${type}`, {
        responseType: 'blob',
        timeout: 60000,
      });
      const fallback = type === 'releaseNotes' ? 'releaseNotes.txt' : fileFallbackName;
      const filename = filenameFromDisposition(res.headers['content-disposition'], fallback);
      triggerBlobDownload(new Blob([res.data]), filename);
    } catch (err) {
      let message = 'Download failed';
      try {
        if (err.response?.data) {
          const txt = await err.response.data.text?.();
          if (txt) {
            try {
              const j = JSON.parse(txt);
              if (j?.message) message = j.message;
            } catch {
              /* keep default */
            }
          }
        }
      } catch {
        /* keep default */
      }
      toast({
        title: 'Download failed',
        description: message,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setDownloadingKey(null);
    }
  };

  const pageNumbers = useMemo(() => {
    // Compact window: first, last, current ± 1, and ellipses
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const set = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
    const arr = [...set].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
    const out = [];
    for (let i = 0; i < arr.length; i++) {
      out.push(arr[i]);
      if (i < arr.length - 1 && arr[i + 1] - arr[i] > 1) out.push('…');
    }
    return out;
  }, [totalPages, currentPage]);

  return (
    <Box bg="#171717" minH="100vh" pt={{ base: '40px', md: '60px' }} pb={{ base: '60px', md: '100px' }}>
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Hero */}
        <VStack spacing={4} mb={{ base: 8, md: 12 }} textAlign="center" align="center">
          <Text
            fontSize={{ base: '11px', md: '12px' }}
            fontWeight="600"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="#A4FF79"
          >
            {eyebrow}
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '32px', md: '52px' }}
            fontWeight="400"
            color="white"
            lineHeight="1.15"
            maxW="900px"
          >
            {titleLead}{' '}
            <Text as="span" bgGradient="linear(90deg, #A4FF79, #7F56D9)" bgClip="text">
              {titleAccent}
            </Text>
          </Heading>
          <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="720px" lineHeight="1.7">
            {subtitle}
          </Text>
        </VStack>

        {/* Search */}
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: 'stretch', sm: 'flex-end' }}
          align={{ base: 'stretch', sm: 'center' }}
          gap={3}
          mb={6}
        >
          <InputGroup maxW={{ base: '100%', sm: '380px' }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
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
          {searchQuery && (
            <Button
              variant="outline"
              size="md"
              onClick={() => setSearchQuery('')}
              color="gray.300"
              borderColor="whiteAlpha.300"
              borderRadius="0"
              _hover={{ bg: 'whiteAlpha.100', borderColor: '#A4FF79', color: '#A4FF79' }}
            >
              Clear
            </Button>
          )}
        </Flex>

        {/* Body */}
        {loading && (
          <Flex justify="center" align="center" py={20}>
            <Spinner size="lg" color="#A4FF79" thickness="3px" />
          </Flex>
        )}

        {!loading && error && (
          <Box
            position="relative"
            bg="rgba(255, 80, 80, 0.04)"
            border="1px solid"
            borderColor="rgba(255, 80, 80, 0.35)"
            p={8}
            textAlign="center"
            color="red.200"
          >
            {error}
          </Box>
        )}

        {!loading && !error && filteredData.length === 0 && (
          <Box
            position="relative"
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid"
            borderColor="whiteAlpha.100"
            p={10}
            textAlign="center"
            color="gray.400"
          >
            <Box {...cornerStyle} top="-1px" left="-1px" borderTop="1px solid" borderLeft="1px solid" />
            <Box {...cornerStyle} top="-1px" right="-1px" borderTop="1px solid" borderRight="1px solid" />
            <Box {...cornerStyle} bottom="-1px" left="-1px" borderBottom="1px solid" borderLeft="1px solid" />
            <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />
            {data.length === 0
              ? 'Nothing available yet. Please check back later.'
              : 'No results found. Try a different search.'}
          </Box>
        )}

        {!loading && !error && filteredData.length > 0 && (
          <>
            <Box
              position="relative"
              bg="rgba(255, 255, 255, 0.03)"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Box {...cornerStyle} top="-1px" left="-1px" borderTop="1px solid" borderLeft="1px solid" />
              <Box {...cornerStyle} top="-1px" right="-1px" borderTop="1px solid" borderRight="1px solid" />
              <Box {...cornerStyle} bottom="-1px" left="-1px" borderBottom="1px solid" borderLeft="1px solid" />
              <Box {...cornerStyle} bottom="-1px" right="-1px" borderBottom="1px solid" borderRight="1px solid" />

              <TableContainer>
                <Table variant="unstyled" size="md">
                  <Thead bg="rgba(164, 255, 121, 0.06)">
                    <Tr>
                      <Th
                        color="#A4FF79"
                        fontSize="11px"
                        letterSpacing="0.14em"
                        textTransform="uppercase"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        py={4}
                      >
                        {firstColumnLabel}
                      </Th>
                      <Th
                        color="#A4FF79"
                        fontSize="11px"
                        letterSpacing="0.14em"
                        textTransform="uppercase"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        py={4}
                      >
                        Version
                      </Th>
                      <Th
                        color="#A4FF79"
                        fontSize="11px"
                        letterSpacing="0.14em"
                        textTransform="uppercase"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        py={4}
                      >
                        Uploaded On
                      </Th>
                      <Th
                        color="#A4FF79"
                        fontSize="11px"
                        letterSpacing="0.14em"
                        textTransform="uppercase"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        py={4}
                      >
                        Release Notes
                      </Th>
                      <Th
                        color="#A4FF79"
                        fontSize="11px"
                        letterSpacing="0.14em"
                        textTransform="uppercase"
                        borderBottom="1px solid"
                        borderColor="whiteAlpha.200"
                        py={4}
                      >
                        Download
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {pageData.map((row) => {
                      const notesKey = `${row._id}:releaseNotes`;
                      const fileKey = `${row._id}:${fileType}`;
                      return (
                        <Tr
                          key={row._id}
                          _hover={{ bg: 'rgba(164, 255, 121, 0.04)' }}
                          transition="background 0.15s ease"
                        >
                          <Td
                            color="white"
                            borderBottom="1px solid"
                            borderColor="whiteAlpha.100"
                            py={4}
                            fontWeight="500"
                          >
                            {row[firstColumnField] || row.appName || row.cameraName || '-'}
                          </Td>
                          <Td color="gray.300" borderBottom="1px solid" borderColor="whiteAlpha.100" py={4}>
                            {row.versionName || '-'}
                          </Td>
                          <Td color="gray.400" borderBottom="1px solid" borderColor="whiteAlpha.100" py={4}>
                            {formatDate(row.updatedAt || row.uploadedAt || row.createdAt)}
                          </Td>
                          <Td borderBottom="1px solid" borderColor="whiteAlpha.100" py={4}>
                            <Button
                              size="sm"
                              variant="ghost"
                              color="#A4FF79"
                              borderRadius="0"
                              isLoading={downloadingKey === notesKey}
                              loadingText="Fetching"
                              leftIcon={<Icon as={FaFileAlt} boxSize={3.5} />}
                              _hover={{ bg: 'rgba(164, 255, 121, 0.1)' }}
                              onClick={() => handleDownload(row._id, 'releaseNotes')}
                            >
                              View
                            </Button>
                          </Td>
                          <Td borderBottom="1px solid" borderColor="whiteAlpha.100" py={4}>
                            <Button
                              size="sm"
                              variant="outline"
                              color="#A4FF79"
                              borderColor="rgba(164, 255, 121, 0.5)"
                              borderRadius="0"
                              isLoading={downloadingKey === fileKey}
                              loadingText="Downloading"
                              leftIcon={<Icon as={FaDownload} boxSize={3.5} />}
                              _hover={{ bg: 'rgba(164, 255, 121, 0.12)', borderColor: '#A4FF79' }}
                              onClick={() => handleDownload(row._id, fileType)}
                            >
                              Download
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            {/* Pagination */}
            <Flex
              mt={6}
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align="center"
              gap={3}
            >
              <Text color="gray.500" fontSize="sm">
                Showing {(currentPage - 1) * PAGE_SIZE + 1}–
                {Math.min(currentPage * PAGE_SIZE, filteredData.length)} of {filteredData.length}
              </Text>

              <HStack spacing={2}>
                <Button
                  size="sm"
                  variant="outline"
                  borderRadius="0"
                  color="gray.300"
                  borderColor="whiteAlpha.300"
                  isDisabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  _hover={{ bg: 'whiteAlpha.100', borderColor: '#A4FF79', color: '#A4FF79' }}
                >
                  Previous
                </Button>
                {pageNumbers.map((p, i) =>
                  p === '…' ? (
                    <Text key={`e-${i}`} color="gray.500" px={1}>
                      …
                    </Text>
                  ) : (
                    <Button
                      key={p}
                      size="sm"
                      variant={p === currentPage ? 'solid' : 'outline'}
                      borderRadius="0"
                      minW="36px"
                      bg={p === currentPage ? '#A4FF79' : 'transparent'}
                      color={p === currentPage ? 'black' : 'gray.300'}
                      borderColor={p === currentPage ? '#A4FF79' : 'whiteAlpha.300'}
                      onClick={() => goToPage(p)}
                      _hover={
                        p === currentPage
                          ? { bg: '#8be669' }
                          : { bg: 'whiteAlpha.100', borderColor: '#A4FF79', color: '#A4FF79' }
                      }
                    >
                      {p}
                    </Button>
                  )
                )}
                <Button
                  size="sm"
                  variant="outline"
                  borderRadius="0"
                  color="gray.300"
                  borderColor="whiteAlpha.300"
                  isDisabled={currentPage >= totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  _hover={{ bg: 'whiteAlpha.100', borderColor: '#A4FF79', color: '#A4FF79' }}
                >
                  Next
                </Button>
              </HStack>
            </Flex>
          </>
        )}
      </Container>
    </Box>
  );
};

export default VersionTable;