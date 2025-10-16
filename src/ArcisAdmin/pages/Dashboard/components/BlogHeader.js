"use client"

import { Box, Flex, Heading, Button, InputGroup, Input, InputRightElement, ButtonGroup } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

const BlogHeader = ({ onSearch, searchQuery, statusFilter, onChangeStatus }) => {
  return (
    <Box>
      {/* Column headers and search */}
      <Flex p={4} bg="gray.50" justify="space-between" align="center" borderBottom="1px" borderColor="gray.200">
        <Flex gap={8} color="gray.500" fontWeight="medium" fontSize="sm">
          <Box w="120px">Posted date</Box>
          <Box w="120px">Image</Box>
          <Box>Description</Box>
        </Flex>
        <Flex gap={4} align="center">
          <ButtonGroup isAttached size="sm" variant="outline">
            <Button
              onClick={() => onChangeStatus('all')}
              colorScheme={statusFilter === 'all' ? 'blue' : 'gray'}
              variant={statusFilter === 'all' ? 'solid' : 'outline'}
            >
              All
            </Button>
            <Button
              onClick={() => onChangeStatus('draft')}
              colorScheme={statusFilter === 'draft' ? 'yellow' : 'gray'}
              variant={statusFilter === 'draft' ? 'solid' : 'outline'}
            >
              Draft
            </Button>
            <Button
              onClick={() => onChangeStatus('published')}
              colorScheme={statusFilter === 'published' ? 'green' : 'gray'}
              variant={statusFilter === 'published' ? 'solid' : 'outline'}
            >
              Published
            </Button>
          </ButtonGroup>
          <InputGroup maxW="250px">
            <Input
              placeholder="Search blog"
              bg="white"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              size="sm"
              borderRadius="md"
            />
            <InputRightElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export default BlogHeader
