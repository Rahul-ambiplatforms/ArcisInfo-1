'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  Textarea,
  Select,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Divider,
  useToast,
  Image,
  Icon,
  IconButton,
  Spinner,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { useDropzone } from 'react-dropzone';
import NewsListPage from './NewsListPage';
import { SlateEditor } from './SlateEditor';
import { createNews, updateNews } from '../../../api/news';
import { uploadFile, deleteFile } from '../../../api/files';
import {
  contentToSlate,
  slateToContentString,
} from '../../../../utils/slateContent';

const API_IMAGE_URL =
  'https://res.cloudinary.com/dzs02ecai/image/upload/v1760695912/upload_arcis';

const DEFAULT_CATEGORIES = [
  'Announcement',
  'Press Release',
  'Event',
  'Product Launch',
  'Award',
  'Partnership',
  'General',
];

function slugify(str = '') {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function toDateInputValue(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const FileUploadBox = ({ onFileUpload, file, isLoading }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxSize: 10 * 1024 * 1024,
    onDrop: (accepted) => {
      if (accepted.length > 0) onFileUpload(accepted[0]);
    },
  });

  const getImageSource = (f) => {
    if (!f) return null;
    if (typeof f === 'string') return f;
    if (f instanceof File) return URL.createObjectURL(f);
    if (f.path) return f.path;
    return null;
  };

  return (
    <Box
      {...getRootProps()}
      h="180px"
      bg="gray.100"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
      border="2px dashed"
      borderColor="gray.300"
      _hover={{ bg: 'gray.200', cursor: 'pointer' }}
      position="relative"
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <Flex direction="column" align="center" justify="center">
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#9678E1"
            size="lg"
          />
          <Text mt={2} fontSize="sm" color="gray.600">
            Uploading...
          </Text>
        </Flex>
      ) : file ? (
        <>
          <Image
            src={getImageSource(file)}
            alt="Uploaded"
            maxH="160px"
            maxW="100%"
            objectFit="contain"
          />
          <IconButton
            icon={<FaTrash />}
            aria-label="Remove image"
            size="sm"
            colorScheme="red"
            position="absolute"
            top={2}
            right={2}
            onClick={(e) => {
              e.stopPropagation();
              onFileUpload(null);
            }}
          />
        </>
      ) : (
        <>
          <Icon as={IoIosArrowUp} boxSize={6} color="#9678E1" />
          <Text fontWeight="medium" mt={2} fontSize="sm">
            Drag and drop an image here, or click to upload
          </Text>
          <Text fontSize="xs" color="gray.500" mt={1} textAlign="center">
            JPG, PNG, WEBP, SVG (max 10MB) — recommend 16:9
          </Text>
        </>
      )}
    </Box>
  );
};

// `content` is held in form state as a Slate node array (the SlateEditor's
// native format). Stored content — Slate JSON or legacy plain text — is
// converted on load via contentToSlate and serialized back on submit.
const buildFormData = (news) => {
  if (!news) {
    return {
      title: '',
      urlWords: '',
      category: 'Announcement',
      brief: '',
      content: contentToSlate(''),
      status: 'published',
      publishedAt: toDateInputValue(new Date()),
    };
  }
  return {
    title: news.title || '',
    urlWords: news.urlWords || '',
    category: news.category || 'Announcement',
    brief: news.brief || '',
    content: contentToSlate(news.content || ''),
    status: news.status || 'published',
    publishedAt: toDateInputValue(news.publishedAt || news.createdAt),
  };
};

const CreateNewsForm = ({ news, onSaved, onCancelEdit }) => {
  const toast = useToast();
  const [isImageUploading, setIsImageUploading] = useState(false);
  // Seed state from `news` synchronously: the SlateEditor only reads its
  // value on mount, so it must be correct on the first render. The parent
  // remounts this form via `key` whenever the edited item changes.
  const [imagePath, setImagePath] = useState(news?.image || '');
  const [formData, setFormData] = useState(() => buildFormData(news));

  useEffect(() => {
    setFormData(buildFormData(news));
    setImagePath(news?.image || '');
  }, [news]);

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && !news && !prev.urlWords) {
        next.urlWords = slugify(value);
      }
      return next;
    });
  };

  const handleImageUpload = async (file) => {
    try {
      setIsImageUploading(true);
      if (file) {
        const res = await uploadFile(file);
        if (res?.status === 'success') {
          setImagePath(res.data.filename);
        }
      } else {
        if (imagePath && !/^https?:\/\//i.test(imagePath)) {
          try {
            await deleteFile(imagePath);
          } catch {
            // ignore — image may already be gone
          }
        }
        setImagePath('');
      }
    } catch (err) {
      toast({
        title: 'Image upload failed',
        description: err?.message || 'Could not upload image',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsImageUploading(false);
    }
  };

  const validate = () => {
    if (!formData.title.trim()) return 'Title is required';
    if (!formData.urlWords.trim()) return 'URL slug is required';
    if (!formData.brief.trim()) return 'Brief description is required';
    return null;
  };

  const handleSubmit = async (statusOverride) => {
    const errMsg = validate();
    if (errMsg) {
      toast({
        title: 'Missing required fields',
        description: errMsg,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const payload = {
      title: formData.title.trim(),
      urlWords: slugify(formData.urlWords),
      category: formData.category,
      brief: formData.brief.trim(),
      // Slate JSON stored in the existing string field ('' when left empty).
      content: slateToContentString(formData.content),
      image: imagePath,
      status: statusOverride || formData.status,
      publishedAt: formData.publishedAt
        ? new Date(formData.publishedAt).toISOString()
        : new Date().toISOString(),
    };

    try {
      const res = news
        ? await updateNews(news._id, payload)
        : await createNews(payload);
      if (res?.status === 'success') {
        toast({
          title: news ? 'News updated' : 'News created',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        if (statusOverride === 'published' || payload.status === 'published') {
          window.open(`/news/${payload.urlWords}`, '_blank');
        }
        onSaved?.();
      } else {
        throw new Error(res?.message || 'Save failed');
      }
    } catch (err) {
      toast({
        title: news ? 'Failed to update news' : 'Failed to create news',
        description: err?.message || 'Unknown error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const imageForDisplay = imagePath
    ? /^https?:\/\//i.test(imagePath)
      ? { path: imagePath }
      : { path: `${API_IMAGE_URL}/${imagePath}` }
    : null;

  return (
    <Box p={{ base: 4, md: 6 }} maxW="900px" mx="auto">
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel fontWeight="medium">Title</FormLabel>
          <Input
            placeholder="News headline..."
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="medium">URL slug</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" width="195px">
              <Box
                as="span"
                bg="#e5e7eb"
                color="#111827"
                p={2}
                borderRadius="md"
                fontWeight="semibold"
                fontSize="sm"
              >
                https://arcisai.io/news/
              </Box>
            </InputLeftElement>
            <Input
              placeholder="your-news-url-words"
              value={formData.urlWords}
              onChange={(e) => handleChange('urlWords', e.target.value)}
              pl="205px"
              _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
            />
          </InputGroup>
        </FormControl>

        <HStack spacing={4} align="stretch">
          <FormControl flex="1">
            <FormLabel fontWeight="medium">Category</FormLabel>
            <Select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
            >
              {DEFAULT_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl flex="1">
            <FormLabel fontWeight="medium">Published date</FormLabel>
            <Input
              type="date"
              value={formData.publishedAt}
              onChange={(e) => handleChange('publishedAt', e.target.value)}
              _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
            />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel fontWeight="medium">Main image</FormLabel>
          <FileUploadBox
            onFileUpload={handleImageUpload}
            file={imageForDisplay}
            isLoading={isImageUploading}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="medium">Brief</FormLabel>
          <Textarea
            placeholder="Short summary shown on the news card (1–3 sentences)..."
            value={formData.brief}
            onChange={(e) => handleChange('brief', e.target.value)}
            rows={3}
            _focus={{ borderColor: '#9678E1', boxShadow: 'none' }}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="medium">Full content (optional)</FormLabel>
          <SlateEditor
            value={formData.content}
            onChange={(value) => handleChange('content', value)}
            placeholder="Full article body shown on the detail page. Leave empty if the brief is enough."
            showColorOption={true}
            fontSize="lg"
          />
        </FormControl>

        <Divider borderStyle="dashed" />

        <HStack spacing={3}>
          <Button
            leftIcon={<FaUpload />}
            bg="#38A169"
            color="white"
            _hover={{ bg: '#2F855A' }}
            onClick={() => handleSubmit('draft')}
          >
            Save as draft
          </Button>
          <Button
            leftIcon={<FaUpload />}
            bg="#9678E1"
            color="white"
            _hover={{ bg: '#8266C9' }}
            onClick={() => handleSubmit('published')}
          >
            {news ? 'Publish update' : 'Publish news'}
          </Button>
          {news && (
            <Button variant="outline" onClick={onCancelEdit}>
              Cancel edit
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

const CreateNewsPage = () => {
  const [activeView, setActiveView] = useState('create');
  const [editingNews, setEditingNews] = useState(null);

  const handleEdit = (item) => {
    setEditingNews(item);
    setTimeout(() => setActiveView('create'), 0);
  };

  const handleSaved = () => {
    setEditingNews(null);
    setActiveView('existing');
  };

  return (
    <Box bg="gray.50" minH="100vh" py={6} pt="6%">
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        overflow="hidden"
        position="relative"
      >
        <Box
          p={3}
          borderBottom="1px"
          borderColor="gray.200"
          position="sticky"
          top={0}
          bg="white"
          zIndex={2}
        >
          <Flex justify="space-between" align="center">
            <Heading size="md" fontWeight="semibold" color="#9678E1">
              {activeView === 'create'
                ? editingNews
                  ? 'Modify your existing news'
                  : 'Create/manage your news here.'
                : 'Edit/delete your existing news'}
            </Heading>
            <Flex bg="gray.100" borderRadius="full" p="2px" overflow="hidden">
              <Button
                onClick={() => {
                  setActiveView('create');
                  setEditingNews(null);
                }}
                bg={activeView === 'create' ? '#9678E1' : 'transparent'}
                color={activeView === 'create' ? 'white' : '#9678E1'}
                borderRadius="full"
                size="md"
                px={6}
                _hover={{
                  bg: activeView === 'create' ? '#7645f4ff' : 'gray.200',
                }}
                mr="1px"
              >
                {editingNews ? 'Editing' : 'Create new'}
              </Button>
              <Button
                onClick={() => {
                  setActiveView('existing');
                  setEditingNews(null);
                }}
                bg={activeView === 'existing' ? '#9678E1' : 'transparent'}
                color={activeView === 'existing' ? 'white' : '#9678E1'}
                borderRadius="full"
                size="md"
                px={6}
                _hover={{
                  bg: activeView === 'existing' ? '#7645f4ff' : 'gray.200',
                }}
              >
                Existing news
              </Button>
            </Flex>
          </Flex>
        </Box>
        {activeView === 'create' ? (
          <CreateNewsForm
            key={editingNews?._id || 'new'}
            news={editingNews}
            onSaved={handleSaved}
            onCancelEdit={() => {
              setEditingNews(null);
              setActiveView('existing');
            }}
          />
        ) : (
          <NewsListPage onEditNews={handleEdit} />
        )}
      </Box>
    </Box>
  );
};

export default CreateNewsPage;
