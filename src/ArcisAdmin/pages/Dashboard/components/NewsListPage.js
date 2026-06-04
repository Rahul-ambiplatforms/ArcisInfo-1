'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Divider,
  Spinner,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useToast,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Heading,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CloseIcon } from '@chakra-ui/icons';
import { getAdminNews, deleteNews } from '../../../api/news';

const IMAGE_BASE_URL =
  'https://res.cloudinary.com/dzs02ecai/image/upload/f_auto,q_auto,w_400/v1761637680/upload_arcis';

function resolveImage(image) {
  if (!image) return '/images/ArcisAi.webp';
  if (/^https?:\/\//i.test(image) || image.startsWith('data:')) return image;
  return `${IMAGE_BASE_URL}/${image}`;
}

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString();
}

const NewsListPage = ({ onEditNews }) => {
  const [items, setItems] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toDelete, setToDelete] = useState(null);
  const [confirmTitle, setConfirmTitle] = useState('');
  const toast = useToast();

  const fetchList = async () => {
    try {
      setIsLoading(true);
      const res = await getAdminNews({
        page: 1,
        limit: 200,
        status: statusFilter,
        search: searchQuery,
      });
      if (res?.status === 'success') {
        setItems(Array.isArray(res.data) ? res.data : []);
      }
    } catch (err) {
      toast({
        title: 'Error fetching news',
        description: err?.message || 'Could not load news',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [statusFilter, searchQuery]);

  const handleDeleteClick = (item) => {
    setToDelete(item);
    setConfirmTitle('');
    onOpen();
  };

  const isTitleMatch = () => {
    const expected = (toDelete?.title || '').trim().toLowerCase();
    const entered = confirmTitle.trim().toLowerCase();
    return expected.length > 0 && entered === expected;
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteNews(toDelete._id);
      toast({
        title: 'News deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
      fetchList();
    } catch (err) {
      toast({
        title: 'Failed to delete news',
        description: err?.message || 'Unknown error',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Flex
        align={{ base: 'stretch', md: 'center' }}
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        gap={3}
        p={4}
        borderBottom="1px solid"
        borderColor="gray.200"
        bg="white"
        position="sticky"
        top="0"
        zIndex={1}
      >
        <Heading size="sm" color="#9678E1">
          Existing news
        </Heading>
        <Flex gap={3} align="center" flexWrap="wrap">
          <InputGroup w={{ base: 'full', md: '260px' }}>
            <Input
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              borderRadius="8px"
              _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
            />
            {searchQuery && (
              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  aria-label="Clear"
                  icon={<CloseIcon boxSize={3} />}
                  onClick={() => setSearchQuery('')}
                />
              </InputRightElement>
            )}
          </InputGroup>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            w="140px"
            borderRadius="8px"
            _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
          >
            <option value="all">All status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </Select>
        </Flex>
      </Flex>

      {isLoading ? (
        <Center py={10}>
          <Spinner size="xl" color="#9678E1" thickness="4px" />
        </Center>
      ) : items.length === 0 ? (
        <Box p={8} textAlign="center" color="gray.500">
          No news yet. Click <strong>Create new</strong> to add one.
        </Box>
      ) : (
        <Box>
          {items.map((item, idx) => (
            <Box key={item._id}>
              <Flex p={4} align="center" _hover={{ bg: 'gray.50' }} gap={3}>
                <Text color="gray.500" fontSize="sm" w="120px">
                  {formatDate(item.publishedAt || item.createdAt)}
                </Text>
                <Image
                  src={resolveImage(item.image)}
                  alt={item.title}
                  borderRadius="10px"
                  boxSize="60px"
                  objectFit="cover"
                />
                <Box flex={1} pr={4}>
                  <Text
                    fontSize="sm"
                    color="black"
                    fontWeight="medium"
                    mb={1}
                    noOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" noOfLines={2}>
                    {item.brief || '—'}
                  </Text>
                </Box>
                <Text
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="medium"
                  textTransform="capitalize"
                  bg={item.status === 'published' ? 'green.100' : 'yellow.100'}
                  color={
                    item.status === 'published' ? 'green.700' : 'yellow.700'
                  }
                  mr={3}
                >
                  {item.status}
                </Text>
                <Flex gap={2}>
                  <IconButton
                    icon={<EditIcon />}
                    aria-label="Edit news"
                    colorScheme="green"
                    variant="ghost"
                    size="sm"
                    onClick={() => onEditNews(item)}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete news"
                    colorScheme="red"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteClick(item)}
                  />
                </Flex>
              </Flex>
              {idx < items.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete News</ModalHeader>
          <ModalBody>
            <Text mb={2}>This action cannot be undone.</Text>
            <Text mt={2} fontWeight="bold">
              News title:
            </Text>
            <Text mb={3}>{toDelete?.title}</Text>
            <Text fontSize="sm" color="gray.600" mb={2}>
              To confirm, type the news title exactly as shown above.
            </Text>
            <Input
              placeholder="Enter news title to confirm"
              value={confirmTitle}
              onChange={(e) => setConfirmTitle(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={handleConfirmDelete}
              isDisabled={!isTitleMatch()}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NewsListPage;
