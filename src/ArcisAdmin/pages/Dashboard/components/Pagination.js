"use client"

import { Flex, Button, IconButton, Text, HStack } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

const Pagination = ({ currentPage, totalPages, onPageChange, disabled }) => {
  if (disabled) {
    return
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of page range around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      // Add ellipsis if needed before middle pages
      if (start > 2) {
        pages.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed after middle pages
      if (end < totalPages - 1) {
        pages.push("...")
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <Flex justify="center" p={4} borderTop="1px" borderColor="gray.200">
      <HStack spacing={2}>
        {/* Previous page button */}
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous page"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          isDisabled={currentPage === 1}
          variant="ghost"
          size="sm"
        />

        {/* Page numbers */}
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <Text key={`ellipsis-${index}`} px={2}>
              ...
            </Text>
          ) : (
            <Button
              key={`page-${page}`}
              size="sm"
              variant={currentPage === page ? "solid" : "ghost"}
              colorScheme={currentPage === page ? "purple" : "gray"}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ),
        )}

        {/* Next page button */}
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next page"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          isDisabled={currentPage === totalPages}
          variant="ghost"
          size="sm"
        />
      </HStack>
    </Flex>
  )
}

export default Pagination
