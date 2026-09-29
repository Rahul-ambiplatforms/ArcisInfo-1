'use client';
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
import { useRouter } from "next/navigation";
import Navbar from "../../components/ui/Navbar";
import { blogData } from "./data/blogData";
import CreateBlogPage from "./components/CreateBlogPage";
import CreateNewsPage from "./components/CreateNewsPage";
import HRAddJobPage from "./components/HRAddJobPage";
import HRJobListPage from "./components/HRJobListPage";
import PageContentWrapper from "../../components/ui/PageContentWrapper";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const router = useRouter();

  // SSR crash fix (2026-09-28): `jwt`/`role` used to be read straight from
  // localStorage here, in the render body. `'use client'` does not mean
  // browser-only — Next.js still renders this component on the server, where
  // `localStorage` does not exist, so every request to /admin/dashboard threw
  // `ReferenceError: localStorage is not defined` and returned HTTP 500.
  //
  // Reading the session in an effect keeps the browser-only API in the
  // browser, which is the only place it can work at all: the token is written
  // to localStorage by the OTP step (pages/OTP/OtpVerification.js) and is
  // never available to the server, so a server render could never have
  // produced an authenticated view. The auth model is unchanged — same
  // localStorage keys, same redirect to /admin, same "render nothing without
  // a token" guard below.
  //
  // `null` means "not resolved yet": the server render and the first client
  // paint. Both render nothing, so server and client output match (no
  // hydration mismatch) and admin content still never reaches an
  // unauthenticated visitor.
  const [session, setSession] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwtToken");
    const role = localStorage.getItem("userRole");
    setSession({ jwt, role });
    if (!jwt) {
      router.replace("/admin");
    }
  }, [router]);

  // If not logged in, don't render anything until redirect completes
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const blogsPerPage = 10;
  const [adminSection, setAdminSection] = useState(null); // 'BLOG' | 'JOB'
  const [jobView, setJobView] = useState("create"); // 'create' | 'list'
  const [editingJob, setEditingJob] = useState(null);

  // Unresolved session (server render + first client paint) or no token:
  // render nothing, exactly as before. The effect above redirects to /admin.
  if (!session?.jwt) return null;
  const role = session.role;
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
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Box bg="gray.50" minH="100vh">
        <Navbar adminSection={adminSection} setAdminSection={setAdminSection} />
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
                        onClick={() => setAdminSection("NEWS")}
                        bg="#9678E1"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="md"
                      >
                        News
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              )}
              {adminSection === "BLOG" && <CreateBlogPage />}
              {adminSection === "NEWS" && <CreateNewsPage />}
            </>
          )}
          {role === "ADMIN" && (
            <>
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
                        onClick={() => setAdminSection("NEWS")}
                        bg="#9678E1"
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="md"
                      >
                        News
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
              {adminSection === "NEWS" && (
                <>
                  <CreateNewsPage />
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
                You do not have access. Please contact an administrator to
                assign a role.
              </Box>
            </Box>
          ) : null}
        </PageContentWrapper>
      </Box>
    </>
  );
};

export default Dashboard;
