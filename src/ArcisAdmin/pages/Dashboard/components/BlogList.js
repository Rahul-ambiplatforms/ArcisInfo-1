import { useState } from "react"
import { Box, Flex, Text, Image, IconButton, Divider, Spinner, Center, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, useToast, Input } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { getImageUrl } from "../../../config/config"
import { deleteBlog } from "../../../api/blogs"

const BlogList = ({ blogs, isLoading, onEdit, onBlogDeleted, highlight }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [blogToDelete, setBlogToDelete] = useState(null)
  const [confirmTitle, setConfirmTitle] = useState("")
  const toast = useToast()

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog)
    onOpen()
  }

  const handleConfirmDelete = async () => {
    try {
      await deleteBlog(blogToDelete._id)
      toast({
        title: "Blog deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      onBlogDeleted() // Refresh the blog list
      onClose()
    } catch (error) {
      toast({
        title: "Error deleting blog",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const isTitleMatch = () => {
    const expected = (blogToDelete?.content?.title || "").trim().toLowerCase()
    const entered = confirmTitle.trim().toLowerCase()
    return expected.length > 0 && entered === expected
  }

  if (isLoading) {
    return (
      <Center py={8}>
        <Spinner size="xl" color="purple.500" thickness="4px" />
      </Center>
    )
  }

  const renderHighlighted = (text) => {
    if (!highlight) return text
    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(${escaped})`, 'ig')
    const parts = String(text || '').split(regex)
    return parts.map((part, idx) =>
      regex.test(part) ? (
        <Box as="mark" key={idx} bg="yellow.200" color="black" px={0.5}>
          {part}
        </Box>
      ) : (
        <Box as="span" key={idx}>{part}</Box>
      )
    )
  }

  return (
    <Box>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <Box key={blog._id}>
            <Flex p={4} align="center" _hover={{ bg: "gray.50" }}>
              {/* Date column */}
              <Text color="gray.500" fontSize="sm" w="120px">
                {new Date(blog.createdAt).toLocaleDateString()}
              </Text>
              {/* Image column */}
              <Box w="120px" justifyContent="center" alignItems="center" align="center">
                <Image
                  src={getImageUrl(blog.content.mainImage)}
                  alt={blog.content.imageText || "Blog thumbnail"}
                  borderRadius="10px"
                  boxSize="60px"
                  objectFit="cover"
                />
              </Box>

              {/* Title and description column */}
              <Box flex={1} pr={4}>
                <Text fontSize="sm" color="black" fontWeight="medium" mb={1}>
                  {renderHighlighted(blog.content.title)}
                </Text>
                <Text fontSize="sm" color="gray.600" noOfLines={2}>
                  {blog.metadata.metaDescription}
                </Text>
              </Box>

              {/* Status badge */}
              <Text
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="medium"
                textTransform="capitalize"
                bg={
                  blog.status === "published"
                    ? "green.100"
                    : blog.status === "draft"
                      ? "yellow.100"
                      : "gray.100"
                }
                color={
                  blog.status === "published"
                    ? "green.700"
                    : blog.status === "draft"
                      ? "yellow.700"
                      : "gray.700"
                }
                mr={4}
              >
                {blog.status}
              </Text>

              {/* Action buttons */}
              <Flex gap={2}>
                <IconButton 
                  icon={<EditIcon />} 
                  aria-label="Edit blog" 
                  colorScheme="green" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    // console.log('Edit clicked, blog data:', blog);
                    onEdit(blog);
                  }}
                />
                <IconButton 
                  icon={<DeleteIcon />} 
                  aria-label="Delete blog" 
                  colorScheme="red" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleDeleteClick(blog)}
                />
              </Flex>
            </Flex>
            {index < blogs.length - 1 && <Divider />}
          </Box>
        ))
      ) : (
        <Box p={8} textAlign="center" color="gray.500">
          No blogs found. Create your first blog by clicking on "Create new" above.
        </Box>
      )}

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Blog</ModalHeader>
          <ModalBody>
            <Text mb={2}>This action cannot be undone.</Text>
            <Text mt={2} fontWeight="bold">Blog title:</Text>
            <Text mb={3}>{blogToDelete?.content.title}</Text>
            <Text fontSize="sm" color="gray.600" mb={2}>
              To confirm, type the blog title exactly as shown above.
            </Text>
            <Input
              placeholder="Enter blog title to confirm"
              value={confirmTitle}
              onChange={(e) => setConfirmTitle(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={() => { setConfirmTitle(""); onClose(); }}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleConfirmDelete} isDisabled={!isTitleMatch()}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default BlogList