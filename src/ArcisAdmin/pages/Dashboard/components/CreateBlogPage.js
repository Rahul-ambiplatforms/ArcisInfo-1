"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  Divider,
  useColorModeValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  useToast,
  Select,
  RadioGroup,
  Radio,
  Checkbox,
  InputLeftElement, 
  Spinner,
} from "@chakra-ui/react";
import {
  FaUpload,
  FaImage,
  FaEye,
  FaPlus,
  FaHeading,
  FaQuestion,
  FaCode,
  FaTrash,
  FaParagraph,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Reorder } from "framer-motion";
import { MdDragIndicator } from "react-icons/md";
import BlogListPage from "./BlogListPage";
import { useDropzone } from "react-dropzone";
import { SlateEditor, createEmptyParagraph } from "./SlateEditor";
import BlogPreview from "./BlogPreview";
import { createBlog, updateBlog } from "../../../api/blogs";
import { uploadFile, deleteFile } from "../../../api/files";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL || "http://localhost:5000";
const API_IMAGE_URL =
  "https://res.cloudinary.com/dzs02ecai/image/upload/v1760695912/upload_arcis";

const createNewComponent = (type) => {
  const newComponent = {
    id: `component-${Date.now()}`,
    type,
    content: {},
  };

  if (type === "faq") {
    newComponent.question = "";
    newComponent.answer = createEmptyParagraph();
  } else if (type === "cta") {
    newComponent.content = {
      ctaText: "",
      buttonText: "",
      buttonLink: "",
      noFollow: false,
    };
  } else if (["h2", "h3", "h4", "p"].includes(type)) {
    newComponent.content.text = createEmptyParagraph();
  } else if (type === "imageVideo") {
    newComponent.content = {
      description: "",
      imageIndex: null,
      imagePath: null,
      file: null,
    };
  } else if (type === "schema") {
    newComponent.content.schemaData = "";
  }
  return newComponent;
};

const CreateBlogPage = () => {
  const [activeView, setActiveView] = useState("create");
  const [editingBlog, setEditingBlog] = useState(null);
  const [preserveUpdatedAt, setPreserveUpdatedAt] = useState(false);
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleEditBlog = (blog) => {
    // console.log("blog editing data", blog);
    setEditingBlog(blog);
    setTimeout(() => {
      setActiveView("create");
    }, 0);
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
            <HStack spacing={4} align="center">
              <Heading size="md" fontWeight="semibold" color="#9678E1">
                {activeView === "create"
                  ? editingBlog
                    ? "Modify your existing blog"
                    : "Create/manage your blogs here."
                  : "Edit/delete your existing blogs"}
              </Heading>
              {activeView === "create" && editingBlog &&  (
                <Checkbox
                  isChecked={preserveUpdatedAt}
                  onChange={(e) => setPreserveUpdatedAt(e.target.checked)}
                  colorScheme="purple"
                >
                  Minor update (keep previous date)
                </Checkbox>
              )}
            </HStack>
            <Flex bg="gray.100" borderRadius="full" p="2px" overflow="hidden">
              <Button
                onClick={() => {
                  setActiveView("create");
                  setEditingBlog(null);
                }}
                bg={activeView === "create" ? "#9678E1" : "transparent"}
                color={activeView === "create" ? "white" : "#9678E1"}
                borderRadius="full"
                size="md"
                px={6}
                _hover={{
                  bg: activeView === "create" ? "#7645f4ff" : "gray.200",
                }}
                _active={{
                  bg: activeView === "create" ? "#9678E1" : "gray.300",
                }}
                mr="1px"
              >
                {editingBlog ? "Editing" : "Create new"}
              </Button>
              <Button
                onClick={() => {
                  setActiveView("existing");
                  setEditingBlog(null);
                }}
                bg={activeView === "existing" ? "#9678E1" : "transparent"}
                color={activeView === "existing" ? "white" : "#9678E1"}
                borderRadius="full"
                size="md"
                px={6}
                _hover={{
                  bg: activeView === "existing" ? "#7645f4ff" : "gray.200",
                }}
                _active={{
                  bg: activeView === "existing" ? "#9678E1" : "gray.300",
                }}
              >
                Existing blogs
              </Button>
            </Flex>
          </Flex>
        </Box>
        {activeView === "create" ? (
          <CreateBlogForm
            key={editingBlog?._id || "new"}
            blog={editingBlog}
            preserveUpdatedAt={preserveUpdatedAt}
          />
        ) : (
          <BlogListPage onEditBlog={handleEditBlog} />
        )}
      </Box>
    </Box>
  );
};

const CreateBlogForm = ({ blog, preserveUpdatedAt }) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [headingsAndImages, setHeadingsAndImages] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [faqTitle, setFaqTitle] = useState("");
  const [showFaqTitleInput, setShowFaqTitleInput] = useState(false);
  const toast = useToast();
  const [editorKey, setEditorKey] = useState(Date.now());
  const [isAddComponentModalOpen, setIsAddComponentModalOpen] = useState(false);
  const [addComponentIndex, setAddComponentIndex] = useState(null);

  const openAddComponentModal = (index) => {
    setAddComponentIndex(index);
    setIsAddComponentModalOpen(true);
  };

  const closeAddComponentModal = () => {
    setIsAddComponentModalOpen(false);
    setAddComponentIndex(null);
  };

  const addComponentInPosition = (position, type) => {
    if (addComponentIndex === null || !type) return;
    const newComponent = createNewComponent(type);
    const insertionIndex =
      position === "above" ? addComponentIndex : addComponentIndex + 1;
    const newHeadingsAndImages = [...headingsAndImages];
    newHeadingsAndImages.splice(insertionIndex, 0, newComponent);
    setHeadingsAndImages(newHeadingsAndImages);
    closeAddComponentModal();
  };

  const [mainImagePath, setMainImagePath] = useState("");
  const [newMainImage, setNewMainImage] = useState(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [uploadingComponents, setUploadingComponents] = useState(new Set());
  const [formData, setFormData] = useState({
    urlWords: "",
    metaTitle: "",
    metaDescription: "",
    blogTitle: "",
    blogAuthor: "",
    imageText: "",
    status: "draft",
    brief: createEmptyParagraph(),
  });

  const resetForm = () => {
    setFormData({
      urlWords: "",
      metaTitle: "",
      metaDescription: "",
      blogTitle: "",
      blogAuthor: "",
      imageText: "",
      status: "draft",
      brief: createEmptyParagraph(),
    });
    setMainImagePath("");
    setNewMainImage(null);
    setHeadingsAndImages([]);
    setFaqs([]);
    setFaqTitle("");
    setShowFaqTitleInput(false);
    setSchemas([]);
    setEditorKey(Date.now());
  };

  useEffect(() => {
    if (!blog) {
      resetForm();
      return;
    }

    try {
      resetForm();
      const newFormData = {
        urlWords: blog.metadata?.urlWords || "",
        metaTitle: blog.metadata?.metaTitle || "",
        metaDescription: blog.metadata?.metaDescription || "",
        blogTitle: blog.content?.title || "",
        blogAuthor: blog?.content?.blogAuthor || "",
        imageText: blog.content?.imageText || "",
        brief: blog.content?.brief || createEmptyParagraph(),
      };
      setFormData(newFormData);

      if (blog.content?.mainImage) {
        setMainImagePath(blog.content.mainImage);
      }

      const mappedHeadingsAndImages = (
        blog.content?.headingsAndImages || []
      ).map((item) => {
        if (item.type === "imageVideo") {
          let imagePath = null;
          if (typeof item.content?.imageIndex === "number") {
            imagePath = `/uploads/image-${item.content.imageIndex}.png`;
          } else if (item.content?.imagePath) {
            imagePath = item.content.imagePath;
          }
          return {
            ...item,
            content: {
              ...item.content,
              description: item.content?.description || "",
              imagePath: imagePath,
              file: null,
            },
          };
        }
        return item;
      });
      setHeadingsAndImages(mappedHeadingsAndImages);
      setFaqs(blog.content?.faqs?.items || []);
      setFaqTitle(blog.content?.faqs?.title || "");
      setShowFaqTitleInput(blog.content?.faqs?.items?.length > 0);
      const mappedSchemas = (blog.content?.schemas || []).map((schema) => ({
        ...schema,
        content: {
          schemaData: schema.content?.schemaData || schema.content || "",
        },
      }));
      setSchemas(mappedSchemas);
    } catch (error) {
      console.error("Error updating form data:", error);
      toast({
        title: "Error loading blog data",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [blog]);

  const handleComponentImageUpload = async (id, file) => {
    try {
      if (file) {
        // Add component to uploading set
        setUploadingComponents(prev => new Set(prev).add(id));
        
        const uploadResponse = await uploadFile(file);
        if (uploadResponse.status === "success") {
          const filename = uploadResponse.data.filename;
          setHeadingsAndImages((prevItems) =>
            prevItems.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  content: {
                    ...item.content,
                    imagePath: filename,
                    file: null,
                  },
                };
              }
              return item;
            })
          );
        }
      } else {
        setHeadingsAndImages((prevItems) =>
          prevItems.map((item) => {
            if (item.id === id) {
              if (item.content.imagePath) {
                deleteFile(item.content.imagePath).catch((error) => {
                  console.error("Error deleting file:", error);
                });
              }
              return {
                ...item,
                content: { ...item.content, imagePath: null, file: null },
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.error("Error handling image upload:", error);
      toast({
        title: "Error uploading image",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      // Remove component from uploading set
      setUploadingComponents(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.blogAuthor ||
      !formData.urlWords ||
      !formData.metaTitle ||
      !formData.metaDescription ||
      !formData.blogTitle
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const processedHeadingsAndImages = headingsAndImages.map((item) => {
      if (item.type === "imageVideo") {
        return {
          id: item.id,
          type: item.type,
          content: {
            description: item.content.description || "",
            imagePath: item.content.imagePath,
            imageIndex: null,
          },
        };
      }
      return {
        id: item.id,
        type: item.type,
        content: item.content,
      };
    });

    const blogData = {
      metadata: {
        urlWords: formData.urlWords,
        metaTitle: formData.metaTitle,
        metaDescription: formData.metaDescription,
      },
      content: {
        title: formData.blogTitle,
        blogAuthor: formData.blogAuthor,
        imageText: formData.imageText || "",
        mainImage: mainImagePath,
        brief: formData.brief,
        headingsAndImages: processedHeadingsAndImages,
        faqs: {
          title: faqTitle,
          items: faqs.map((faq) => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
          })),
        },
        schemas: schemas.map((schema) => ({
          id: schema.id,
          content: schema.content,
        })),
      },
      status: formData.status || "draft",
      options: {
        preserveUpdatedAt: Boolean(preserveUpdatedAt),
        previousUpdatedAt: blog?.updatedAt || blog?.metadata?.updatedAt || null,
      },
    };

    try {
      let response;
      if (blog) {
        response = await updateBlog(blog._id, blogData);
      } else {
        response = await createBlog(blogData);
      }
      if (response.status === "success") {
        if (response.status === "success") {
          const blogUrl = `/blog/${formData.urlWords}`;
          window.open(blogUrl, "_blank");
        }
        toast({
          title: blog
            ? "Blog updated successfully"
            : "Blog created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        if (!blog) {
          resetForm();
        }
      }
    } catch (error) {
      toast({
        title: blog ? "Failed to update blog" : "Failed to create blog",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleImageUpload = async (file) => {
    try {
      setIsImageUploading(true);
      if (file) {
        const uploadResponse = await uploadFile(file);
        if (uploadResponse.status === "success") {
          setMainImagePath(uploadResponse.data.filename);
          setNewMainImage(null);
        }
      } else {
        if (mainImagePath) {
          await deleteFile(mainImagePath);
        }
        setMainImagePath("");
        setNewMainImage(null);
      }
    } catch (error) {
      toast({
        title: "Error uploading image",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsImageUploading(false);
    }
  };

  const addHeadingElement36px = () => addComponent("h2");
  const addHeadingElement20px = () => addComponent("h3");
  const addHeadingElement16px = () => addComponent("h4");
  const addTextElement16px = () => addComponent("p");
  const addImageVideo = () => addComponent("imageVideo");
  const addCTA = () => addComponent("cta");
  const addFAQ = () => {
    if (faqs.length === 0) {
      setShowFaqTitleInput(true);
    }
    addComponent("faq");
  };
  const addSchema = () => addComponent("schema");

  const addComponent = (type) => {
    const newComponent = createNewComponent(type);
    if (["h2", "h3", "h4", "p", "imageVideo", "cta"].includes(type)) {
      setHeadingsAndImages((prev) => [...prev, newComponent]);
    } else if (type === "faq") {
      setFaqs((prev) => [...prev, newComponent]);
    } else if (type === "schema") {
      setSchemas((prev) => [...prev, newComponent]);
    }
  };

  const handleDeleteComponent = async (id, array, setArray) => {
    if (array === faqs) {
      const newArray = array.filter((component) => component.id !== id);
      setArray(newArray);
      if (newArray.length === 0) {
        setShowFaqTitleInput(false);
      }
      return;
    }
    if (array === headingsAndImages) {
      const componentToDelete = array.find((item) => item.id === id);
      if (
        componentToDelete?.type === "imageVideo" &&
        componentToDelete.content.imagePath
      ) {
        try {
          await deleteFile(componentToDelete.content.imagePath);
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      }
    }
    setArray(array.filter((component) => component.id !== id));
  };

  const updateComponentContent = (id, field, value, array, setArray) => {
    setArray(
      array.map((component) =>
        component.id === id
          ? { ...component, content: { ...component.content, [field]: value } }
          : component
      )
    );
  };

  const updateFAQField = (id, field, value) => {
    setFaqs(
      faqs.map((component) =>
        component.id === id ? { ...component, [field]: value } : component
      )
    );
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Flex position="relative" minH="calc(100vh - 100px)">
      <Box
        w="250px"
        borderRight="1px"
        borderColor={borderColor}
        p={4}
        position="sticky"
        top="80px"
        height="calc(100vh - 100px)"
        overflowY="auto"
        bg="white"
      >
        <Text fontSize="sm" fontWeight="medium" mb={4}>
          Select options to Add more
        </Text>
        <VStack spacing={3} align="stretch">
          <ComponentOption
            icon={FaHeading}
            title="Heading H2"
            subtitle="36px"
            onClick={addHeadingElement36px}
            showPlusIcon
          />
          <ComponentOption
            icon={FaHeading}
            title="Heading H3"
            subtitle="20px"
            onClick={addHeadingElement20px}
            showPlusIcon
          />
          <ComponentOption
            icon={FaHeading}
            title="Heading H4"
            subtitle="16px"
            onClick={addHeadingElement16px}
            showPlusIcon
          />
          <ComponentOption
            icon={FaParagraph}
            title="Paragraph"
            subtitle="16px"
            onClick={addTextElement16px}
            showPlusIcon
          />
          <ComponentOption
            icon={FaImage}
            title="Image/Video"
            subtitle="Media"
            onClick={addImageVideo}
            showPlusIcon
          />
          <ComponentOption
            icon={FaExternalLinkAlt}
            title="Add CTA"
            subtitle="Call to Action"
            color="green.500"
            onClick={addCTA}
            showPlusIcon
          />
          <ComponentOption
            icon={FaQuestion}
            title="Add FAQ"
            subtitle="Question + Ans"
            color="red.500"
            onClick={addFAQ}
            showPlusIcon
          />
          <ComponentOption
            icon={FaCode}
            title="Add Schema"
            subtitle="Schema"
            onClick={addSchema}
            showPlusIcon
          />
        </VStack>
        <HStack mt={6} spacing={2}>
          <Button
            leftIcon={<FaEye />}
            variant="outline"
            colorScheme="purple"
            color="#9678E1"
            size="sm"
            borderRadius="md"
            onClick={onOpen}
          >
            Preview
          </Button>
          <Button
            leftIcon={<FaUpload />}
            onClick={() => {
              formData.status = "draft";
              handleSubmit();
            }}
            colorScheme="green"
            bg="#38A169"
            color="white"
            size="sm"
            borderRadius="md"
          >
            Save Draft
          </Button>
        </HStack>
        <Button
          leftIcon={<FaUpload />}
          width="full"
          mt="2"
          onClick={() => {
            formData.status = "published";
            handleSubmit();
          }}
          colorScheme="purple"
          bg="#9678E1"
          color="white"
          size="sm"
          borderRadius="md"
        >
          {blog ? "Publish Updated Blog" : "Publish Blog"}
        </Button>
      </Box>
      <Box flex={1} p={4} overflowY="auto" height="calc(100vh - 100px)">
        <VStack spacing={4} align="stretch">
          <Text fontWeight="medium" mb={1}>
            URL words
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              width="185px" // Set a fixed width to contain the URL prefix
            >
              <Box
                as="span" // Use span for inline behavior
                bg="#e5e7eb"
                color="#111827"
                p={2}
                borderRadius="md"
                fontWeight="semibold"
                fontSize="sm"
              >
                https://arcisai.io/blog/
              </Box>
            </InputLeftElement>
            <Input
              placeholder="your-url-words"
              value={formData.urlWords}
              onChange={(e) => handleFormChange("urlWords", e.target.value)}
              pl="190px" // Add padding to prevent the input text from overlapping the prefix
            />
          </InputGroup>
          <Text fontWeight="medium" mb={1}>
            Meta Title
          </Text>
          <FormInput
            placeholder="Write your meta title"
            value={formData.metaTitle}
            onChange={(e) => handleFormChange("metaTitle", e.target.value)}
          />
          <Text fontWeight="medium" mb={1}>
            Meta Description
          </Text>
          <FormInput
            placeholder="Write your meta description"
            value={formData.metaDescription}
            onChange={(e) =>
              handleFormChange("metaDescription", e.target.value)
            }
          />
          <Divider borderStyle="dashed" />
          <Text fontWeight="medium" mb={1}>
            Blog Title
          </Text>
          <FormInput
            placeholder="Write your blog title"
            value={formData.blogTitle}
            onChange={(e) => handleFormChange("blogTitle", e.target.value)}
          />
          <Text fontWeight="medium" mb={1}>
            Author
          </Text>
          <Select
            placeholder={
              formData.blogAuthor ? formData.blogAuthor : "Select an author"
            }
            size="md"
            borderRadius="md"
            value={formData.blogAuthor}
            onChange={(e) => handleFormChange("blogAuthor", e.target.value)}
          >
            {["Hardik Sanghvi", "Kushal Sanghvi", "Parimal Panchal"].map(
              (author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              )
            )}
          </Select>
          <Text fontWeight="medium" mb={1}>
            Main Image
          </Text>
          <FormInput
            placeholder="Write text for image/video/etc"
            value={formData.imageText}
            onChange={(e) => handleFormChange("imageText", e.target.value)}
          />
          <FileUploadBox
            onFileUpload={handleImageUpload}
            file={
              newMainImage ||
              (mainImagePath
                ? { path: `${API_IMAGE_URL}/${mainImagePath}` }
                : null)
            }
            isLoading={isImageUploading}
          />
          <Divider borderStyle="dashed" />
          <Text fontWeight="medium" mb={1}>
            Brief
          </Text>
          <SlateEditor
            key={editorKey}
            value={formData.brief}
            onChange={(value) => {
              setFormData((prev) => ({ ...prev, brief: value }));
            }}
            placeholder="Write your brief..."
            showColorOption={true}
            fontSize="md"
          />
          <Divider borderStyle="dashed" mt={4} />
          <Text fontWeight="bold">
            Content Elements (Headings, Images, Paragraphs, CTAs)
          </Text>
          <Reorder.Group
            as="div"
            axis="y"
            values={headingsAndImages}
            onReorder={(newOrder) => setHeadingsAndImages(newOrder)}
            style={{ listStyleType: "none", paddingLeft: 0, width: "100%" }}
          >
            {headingsAndImages.map((component, index) => (
              <Reorder.Item key={component.id} value={component}>
                <Box
                  mb={4}
                  bg="white"
                  borderRadius="md"
                  boxShadow="sm"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={3}
                >
                  <Flex align="center" mb={2}>
                    <Box
                      color="gray.400"
                      mr={2}
                      cursor="grab"
                      _active={{ cursor: "grabbing" }}
                    >
                      <Icon as={MdDragIndicator} />
                    </Box>
                    <Text fontWeight="bold" flex="1">
                      {component.type === "h2"
                        ? "Heading H2"
                        : component.type === "h3"
                        ? "Heading H3"
                        : component.type === "h4"
                        ? "Heading H4"
                        : component.type === "p"
                        ? "Paragraph"
                        : component.type === "imageVideo"
                        ? "Image/Video"
                        : component.type === "cta"
                        ? "Call to Action"
                        : "Unknown Component"}
                    </Text>
                    <IconButton
                      icon={<FaPlus />}
                      aria-label="Add component"
                      size="sm"
                      variant="ghost"
                      onClick={() => openAddComponentModal(index)}
                    />
                    <IconButton
                      icon={<FaTrash />}
                      aria-label="Delete component"
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      onClick={() =>
                        handleDeleteComponent(
                          component.id,
                          headingsAndImages,
                          setHeadingsAndImages
                        )
                      }
                    />
                  </Flex>
                  {component.type === "imageVideo" &&
                    component.content.imagePath && (
                      <Box mb={2}>
                        <Text fontSize="sm" color="gray.600">
                          Current image: {component.content.imagePath}
                        </Text>
                      </Box>
                    )}
                  <DynamicComponent
                    component={component}
                    onContentChange={(field, value) =>
                      updateComponentContent(
                        component.id,
                        field,
                        value,
                        headingsAndImages,
                        setHeadingsAndImages
                      )
                    }
                    onFileUpload={(file) =>
                      handleComponentImageUpload(component.id, file)
                    }
                    isUploading={uploadingComponents.has(component.id)}
                  />
                </Box>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <>
            <Divider borderStyle="dashed" />
            <Flex align="center" justify="space-between">
              <Text fontWeight="bold">FAQs</Text>
              {showFaqTitleInput && (
                <FormInput
                  placeholder="Enter FAQ section title"
                  value={faqTitle}
                  onChange={(e) => setFaqTitle(e.target.value)}
                  width="70%"
                />
              )}
            </Flex>
            <Reorder.Group
              as="div"
              axis="y"
              values={faqs}
              onReorder={(newOrder) => setFaqs(newOrder)}
              style={{ listStyleType: "none", paddingLeft: 0, width: "100%" }}
            >
              {faqs.map((component) => (
                <Reorder.Item key={component.id} value={component}>
                  <Box
                    mb={4}
                    bg="white"
                    borderRadius="md"
                    boxShadow="sm"
                    borderWidth="1px"
                    borderColor="gray.200"
                    p={3}
                  >
                    <Flex align="center" mb={2}>
                      <Box
                        color="gray.400"
                        mr={2}
                        cursor="grab"
                        _active={{ cursor: "grabbing" }}
                      >
                        <Icon as={MdDragIndicator} />
                      </Box>
                      <Text fontWeight="bold" flex="1">
                        FAQ
                      </Text>
                      <IconButton
                        icon={<FaTrash />}
                        aria-label="Delete component"
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() =>
                          handleDeleteComponent(component.id, faqs, setFaqs)
                        }
                      />
                    </Flex>
                    <FAQComponent
                      component={component}
                      onFieldChange={updateFAQField}
                    />
                  </Box>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </>
          <>
            <Divider borderStyle="dashed" />
            <Text fontWeight="bold" mb={4}>
              Schemas
            </Text>
            <VStack spacing={4} align="stretch">
              {schemas.map((component) => (
                <Box
                  key={component.id}
                  bg="white"
                  borderRadius="md"
                  boxShadow="sm"
                  borderWidth="1px"
                  borderColor="gray.200"
                  p={3}
                >
                  <Flex align="center" mb={2}>
                    <Text fontWeight="bold" flex="1">
                      Schema
                    </Text>
                    <IconButton
                      icon={<FaTrash />}
                      aria-label="Delete component"
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      onClick={() =>
                        handleDeleteComponent(component.id, schemas, setSchemas)
                      }
                    />
                  </Flex>
                  <Textarea
                    placeholder="Enter JSON schema"
                    rows={6}
                    borderRadius="md"
                    resize="vertical"
                    value={component.content.schemaData || ""}
                    onChange={(e) =>
                      updateComponentContent(
                        component.id,
                        "schemaData",
                        e.target.value,
                        schemas,
                        setSchemas
                      )
                    }
                  />
                </Box>
              ))}
            </VStack>
          </>
          <HStack>
            <Button
              colorScheme="green"
              bg="#38A169"
              color="white"
              onClick={() => {
                formData.status = "draft";
                handleSubmit();
              }}
              mt={4}
              alignSelf="flex-start"
            >
              Save Draft
            </Button>
            <Button
              colorScheme="purple"
              bg="#9678E1"
              color="white"
              onClick={() => {
                formData.status = "published";
                handleSubmit();
              }}
              mt={4}
              alignSelf="flex-start"
            >
              {blog ? "Publish Updated Blog" : "Publish Blog"}
            </Button>
          </HStack>
        </VStack>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent maxW="90vw" h="90vh">
          <ModalHeader>Blog Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto" id="blog-preview-content">
            <BlogPreview
              formData={{
                ...formData,
                mainImage: newMainImage
                  ? URL.createObjectURL(newMainImage)
                  : mainImagePath
                  ? `${API_IMAGE_URL}/${mainImagePath}`
                  : null,
              }}
              components={[
                ...headingsAndImages.map((item) => {
                  if (item.type === "imageVideo") {
                    return {
                      ...item,
                      content: {
                        ...item.content,
                        url: item.content.file
                          ? URL.createObjectURL(item.content.file)
                          : item.content.imagePath
                          ? `${API_IMAGE_URL}/${item.content.imagePath}`
                          : null,
                      },
                    };
                  }
                  return item;
                }),
                ...faqs.map((faq) => ({
                  ...faq,
                  type: "faq",
                  content: { question: faq.question, answer: faq.answer },
                })),
                ...schemas,
              ]}
              faqTitle={faqTitle}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              bg="#9678E1"
              color="white"
              onClick={() => {
                const blogData = {
                  content: {
                    title: formData.blogTitle,
                    blogAuthor: formData.blogAuthor,
                    imageText: formData.imageText,
                    mainImage: mainImagePath,
                    brief: formData.brief,
                    headingsAndImages: headingsAndImages.map((item) => {
                      if (item.type === "imageVideo") {
                        return {
                          ...item,
                          content: {
                            ...item.content,
                            url: item.content.file
                              ? URL.createObjectURL(item.content.file)
                              : item.content.imagePath
                              ? `${API_URL}/uploads/${item.content.imagePath}`
                              : null,
                          },
                        };
                      }
                      return item;
                    }),
                    faqs: {
                      title: faqTitle,
                      items: faqs.map((faq) => ({
                        ...faq,
                        type: "faq",
                        content: {
                          question: faq.question,
                          answer: faq.answer,
                        },
                      })),
                    },
                    schemas: schemas,
                  },
                  metadata: {
                    urlWords: formData.urlWords,
                    metaTitle: formData.metaTitle,
                    metaDescription: formData.metaDescription,
                  },
                };
                sessionStorage.setItem(
                  "previewBlogData",
                  JSON.stringify(blogData)
                );
                const previewUrl = `/blog/${formData.urlWords || "preview"}`;
                window.open(previewUrl, "_blank");
              }}
            >
              Open in new tab
            </Button>
            <Button
              colorScheme="purple"
              bg="#9678E1"
              color="white"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AddComponentModal
        isOpen={isAddComponentModalOpen}
        onClose={closeAddComponentModal}
        onConfirm={addComponentInPosition}
      />
    </Flex>
  );
};

const AddComponentModal = ({ isOpen, onClose, onConfirm }) => {
  const [position, setPosition] = useState("below");
  const [componentType, setComponentType] = useState("p");

  const handleConfirm = () => {
    onConfirm(position, componentType);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setPosition("below");
      setComponentType("p");
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a New Component</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <FormControl as="fieldset">
              <FormLabel as="legend">Position</FormLabel>
              <RadioGroup onChange={setPosition} value={position}>
                <HStack spacing="24px">
                  <Radio value="above">Above</Radio>
                  <Radio value="below">Below</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Component Type</FormLabel>
              <Select
                value={componentType}
                onChange={(e) => setComponentType(e.target.value)}
              >
                <option value="h2">Heading H2</option>
                <option value="h3">Heading H3</option>
                <option value="h4">Heading H4</option>
                <option value="p">Paragraph</option>
                <option value="imageVideo">Image/Video</option>
                <option value="cta">CTA</option>
              </Select>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button colorScheme="purple" bg="#9678E1" onClick={handleConfirm}>
            Add Component
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const DynamicComponent = ({ component, onContentChange, onFileUpload, isUploading = false }) => {
  const { type, content = {} } = component;

  switch (type) {
    case "h2":
    case "h3":
    case "h4":
    case "p":
      const displayType =
        type === "h2"
          ? "heading (H2)"
          : type === "h3"
          ? "heading (H3)"
          : type === "h4"
          ? "heading (H4)"
          : "paragraph";
      return (
        <SlateEditor
          value={content.text || createEmptyParagraph()}
          onChange={(value) => onContentChange("text", value)}
          placeholder={`Enter ${displayType} text...`}
          showColorOption={true}
          fontSize="md"
        />
      );
    case "imageVideo":
      return (
        <Box>
          <Textarea
            placeholder="Enter image description"
            rows={2}
            borderRadius="md"
            resize="none"
            mb={3}
            value={content.description || ""}
            onChange={(e) => onContentChange("description", e.target.value)}
          />
          {content.imagePath && (
            <Box mb={2}>
              <Text fontSize="sm" color="gray.600">
                Current image: {content.imagePath}
              </Text>
            </Box>
          )}
          <FileUploadBox
            onFileUpload={onFileUpload}
            file={
              content.file ||
              (content.imagePath
                ? { path: `${API_IMAGE_URL}/${content.imagePath}` }
                : null)
            }
            isLoading={isUploading}
          />
        </Box>
      );
    case "cta":
      return (
        <CTAComponent component={component} onContentChange={onContentChange} />
      );
    case "schema":
      return (
        <Box>
          <Textarea
            placeholder="Enter JSON schema"
            rows={6}
            borderRadius="md"
            resize="vertical"
            value={content.schemaData || ""}
            onChange={(e) => onContentChange("schemaData", e.target.value)}
          />
        </Box>
      );
    default:
      return null;
  }
};

const FAQComponent = ({ component, onFieldChange }) => {
  return (
    <VStack spacing={3} align="stretch">
      <FormInput
        placeholder="Enter question"
        value={component.question || ""}
        onChange={(e) =>
          onFieldChange(component.id, "question", e.target.value)
        }
      />
      <Box>
        <Text fontSize="sm" fontWeight="medium" mb={1}>
          Answer
        </Text>
        <SlateEditor
          value={component.answer || createEmptyParagraph()}
          onChange={(value) => onFieldChange(component.id, "answer", value)}
          placeholder="Enter answer..."
          showColorOption={false}
        />
      </Box>
    </VStack>
  );
};

// ===================================================================
// UPDATED CTA COMPONENT
// ===================================================================
const CTAComponent = ({ component, onContentChange }) => {
  const { content = {} } = component;

  return (
    <VStack spacing={3} align="stretch">
      <FormControl>
        <FormLabel fontSize="sm">CTA Text</FormLabel>
        <Textarea
          placeholder="Enter text for CTA background"
          rows={2}
          value={content.ctaText || ""}
          onChange={(e) => onContentChange("ctaText", e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm">Button Text</FormLabel>
        <Input
          placeholder="Enter text for button"
          value={content.buttonText || ""}
          onChange={(e) => onContentChange("buttonText", e.target.value)}
        />
      </FormControl>

      {/* Flex container to hold Link Input and Checkbox side-by-side */}
      <Flex align="flex-end" gap={4}>
        <FormControl flex="1">
          <Flex>
            <FormLabel fontSize="sm">Button Link</FormLabel>
            {/* <Checkbox
              isChecked={content.noFollow || false}
              onChange={(e) => onContentChange("noFollow", e.target.checked)}
              pb={2}
            >
              No Follow
            </Checkbox> */}
          </Flex>
          <InputGroup>
            <InputLeftAddon children="URL" />
            <Input
              placeholder="https://example.com"
              value={content.buttonLink || ""}
              onChange={(e) => onContentChange("buttonLink", e.target.value)}
            />
          </InputGroup>
        </FormControl>
      </Flex>
    </VStack>
  );
};
// ===================================================================

const FileUploadBox = ({ onFileUpload, file, isLoading }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [], "video/*": [] },
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
  });

  const getImageSource = (file) => {
    if (!file) return null;
    if (typeof file === "string") return file;
    if (file instanceof File) return URL.createObjectURL(file);
    if (file.path) return file.path;
    return null;
  };

  return (
    <Box
      {...getRootProps()}
      h="150px"
      bg="gray.100"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
      border="2px dashed"
      borderColor="gray.300"
      _hover={{ bg: "gray.200", cursor: "pointer" }}
      position="relative"
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <Flex direction="column" align="center" justify="center">
          <Spinner thickness='3px' speed='0.65s' emptyColor='gray.200' color='#9678E1' size='lg' />
          <Text mt={2} fontSize="sm" color="gray.600">Uploading...</Text>
        </Flex>
      ) : file ? (
        <>
          <Image
            src={getImageSource(file)}
            alt="Uploaded file"
            maxH="130px"
            maxW="100%"
            objectFit="contain"
          />
          <IconButton
            icon={<FaTrash />}
            aria-label="Remove file"
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
            Drag and drop a file here, or click to upload
          </Text>
          <Text fontSize="xs" color="gray.500" mt={1} textAlign="center">
            Supported formats: JPG, PNG, GIF, SVG, WEBM, MP4, MOV (max size
            10MB)
          </Text>
          <Flex fontSize="xs" color="gray.500" mt={1} textAlign="center">
            <Text>all size should be in &nbsp;</Text>{" "}
            <Text fontWeight="700">16:9</Text>
          </Flex>
        </>
      )}
    </Box>
  );
};

const ComponentOption = ({
  icon,
  title,
  subtitle,
  color = "#9678E1",
  onClick,
  showPlusIcon,
}) => {
  return (
    <Flex
      p={2}
      borderRadius="md"
      align="center"
      _hover={{ bg: "gray.50", cursor: "pointer" }}
      onClick={onClick}
    >
      <Box
        bg={color}
        color="white"
        borderRadius="md"
        p={1.5}
        mr={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} boxSize={3.5} />
      </Box>
      <Box flex="1">
        <Text fontSize="sm" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {subtitle}
        </Text>
      </Box>
      {showPlusIcon && (
        <Box color="gray.400">
          <Icon as={FaPlus} boxSize={3} />
        </Box>
      )}
    </Flex>
  );
};

const FormInput = ({ placeholder, value, onChange, width = "100%" }) => {
  return (
    <Input
      placeholder={placeholder}
      size="md"
      borderRadius="md"
      value={value}
      onChange={onChange}
      width={width}
    />
  );
};

export default CreateBlogPage;
