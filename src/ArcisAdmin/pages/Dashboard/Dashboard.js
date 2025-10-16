import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import { blogData } from "./data/blogData";
import CreateBlogPage from "./components/CreateBlogPage";
import HRAddJobPage from "./components/HRAddJobPage";
import HRJobListPage from "./components/HRJobListPage";
import PageContentWrapper from "../../components/ui/PageContentWrapper";

const Dashboard = () => {
  const jwt = localStorage.getItem("jwtToken");
  const role = localStorage.getItem("userRole");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/admin", { replace: true });
    }
  }, [jwt, navigate]);

  // If not logged in, don't render anything until redirect completes
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const blogsPerPage = 10;
  const [adminSection, setAdminSection] = useState(null); // 'BLOG' | 'JOB'
  const [jobView, setJobView] = useState("create"); // 'create' | 'list'
  const [editingJob, setEditingJob] = useState(null);

  if (!jwt) return null;
  // Filter blogs based on search query
  const filteredBlogs = blogData.filter((blog) =>
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const handlePageChange = (page) => setCurrentPage(page);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <PageContentWrapper>
        {role === "HR" && (
          <>
            {jobView === "create" && (
              <HRAddJobPage
                onShowList={() => {
                  setJobView("list");
                  setEditingJob(null);
                }}
                editJob={editingJob}
              />
            )}
            {jobView === "list" && (
              <>
                <HRJobListPage
                  onShowCreate={() => {
                    setEditingJob(null);
                    setJobView("create");
                  }}
                  onEdit={(job) => {
                    setEditingJob(job);
                    setJobView("create");
                  }}
                />
              </>
            )}
          </>
        )}
        {role === "MARKETING" && (
          <>
            <CreateBlogPage />
          </>
        )}
        {role === "ADMIN" && (
          <>
            {adminSection && (
              <Box position="fixed" top="72px" right="24px" zIndex={1000}>
                <Flex gap={3} align="center">
                  <Menu>
                    <MenuButton
                      as={Button}
                      size="sm"
                      colorScheme="blue"
                      variant="solid"
                    >
                      {adminSection === "BLOG" ? "Blogs" : "Jobs"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => setAdminSection("BLOG")}>
                        Blogs
                      </MenuItem>
                      <MenuItem onClick={() => setAdminSection("JOB")}>
                        Jobs
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => setAdminSection(null)}
                  >
                    Back to selection
                  </Button>
                </Flex>
              </Box>
            )}
            {!adminSection && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                bg="gray.50"
              >
                <Box
                  bg="white"
                  borderRadius="md"
                  p={6}
                  boxShadow="sm"
                  textAlign="center"
                >
                  Select a section to manage:
                  <Box h={4} />
                  <Flex gap={4} justify="center">
                    <Box
                      as="button"
                      onClick={() => setAdminSection("BLOG")}
                      bg="#9678E1"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="md"
                    >
                      Blogs
                    </Box>
                    <Box
                      as="button"
                      onClick={() => setAdminSection("JOB")}
                      bg="#9678E1"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="md"
                    >
                      Jobs
                    </Box>
                  </Flex>
                </Box>
              </Box>
            )}
            {adminSection === "BLOG" && (
              <>
                <CreateBlogPage />
              </>
            )}
            {adminSection === "JOB" && (
              <>
                {jobView === "create" && (
                  <HRAddJobPage
                    onShowList={() => {
                      setJobView("list");
                      setEditingJob(null);
                    }}
                    editJob={editingJob}
                  />
                )}
                {jobView === "list" && (
                  <>
                    <HRJobListPage
                      onShowCreate={() => {
                        setEditingJob(null);
                        setJobView("create");
                      }}
                      onEdit={(job) => {
                        setEditingJob(job);
                        setJobView("create");
                      }}
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
        {!role ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bg="gray.50"
          >
            <Box
              bg="white"
              borderRadius="md"
              p={6}
              boxShadow="sm"
              textAlign="center"
            >
              You do not have access. Please contact an administrator to assign
              a role.
            </Box>
          </Box>
        ) : null}
      </PageContentWrapper>
    </Box>
  );
};

export default Dashboard;
