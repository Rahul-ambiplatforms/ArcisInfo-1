"use client"

import { useState, useEffect } from "react"
import { Box, useToast } from "@chakra-ui/react"
import BlogHeader from "./BlogHeader"
import BlogList from "./BlogList"
import Pagination from "./Pagination"
import { getBlogs } from "../../../api/blogs"

const BlogListPage = ({ onEditBlog }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [blogs, setBlogs] = useState([])
  const [statusFilter, setStatusFilter] = useState('all')
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToast()
  const blogsPerPage = 10

  // Fetch blogs from the database
  const fetchBlogs = async () => {
    try {
      setIsLoading(true)
      const requestPage = searchQuery ? 1 : currentPage
      const requestLimit = searchQuery ? 1000 : blogsPerPage
      const response = await getBlogs(
        requestPage,
        requestLimit,
        statusFilter === 'all' ? undefined : statusFilter,
        searchQuery || undefined
      )
      if (response.status === 'success') {
        let list = response.data || []
        if (searchQuery) {
          const q = searchQuery.toLowerCase()
          list = list.filter(b => (b?.content?.title || '').toLowerCase().includes(q))
          setBlogs(list)
          setTotalPages(list.length > 0 ? 1 : 0)
        } else {
          setBlogs(list)
          setTotalPages(response.pagination.total)
        }
      }
    } catch (error) {
      toast({
        title: "Error fetching blogs",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch blogs when page changes
  useEffect(() => {
    fetchBlogs()
  }, [currentPage, statusFilter, searchQuery])

  // Change page
  const handlePageChange = (page) => setCurrentPage(page)

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleChangeStatus = (status) => {
    setStatusFilter(status)
    setCurrentPage(1)
  }

  // Handle blog edit
  const handleEdit = (blog) => {
    // console.log('BlogListPage handleEdit called with:', blog);
    onEditBlog(blog)
  }

  return (
    <Box>
      <BlogHeader onSearch={handleSearch} searchQuery={searchQuery} statusFilter={statusFilter} onChangeStatus={handleChangeStatus} />
      <BlogList 
        blogs={blogs} 
        isLoading={isLoading} 
        onEdit={handleEdit}
        onBlogDeleted={fetchBlogs}
        highlight={searchQuery}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        disabled={blogs.length === 0}
      />
    </Box>
  )
}

export default BlogListPage