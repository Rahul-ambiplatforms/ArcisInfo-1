import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Input,
  FormControl,
  FormLabel,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ChevronDownIcon,
  DragHandleIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  closeJob,
  deleteJob,
  getJobs,
  updateJobStatus,
  updateJobOrder,
} from "../../../api/jobs";

const HRJobListPage = ({ onShowCreate, onEdit }) => {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isReordering, setIsReordering] = useState(false);
  const [draggedJob, setDraggedJob] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const toast = useToast();

  const load = async () => {
    try {
      const res = await getJobs(1, 100);
      const jobsData = res?.data?.jobs || [];
      setJobs(jobsData);
      setOriginalJobs([...jobsData]);
    } catch (err) {
      toast({ title: "Failed to load jobs", status: "error" });
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setDeleteConfirmation("");
    onDeleteOpen();
  };

  const handleDeleteConfirm = async () => {
    if (!jobToDelete) return;

    if (deleteConfirmation !== jobToDelete.jobRole) {
      toast({
        title: "Job title does not match",
        description: "Please type the exact job title to confirm deletion",
        status: "error",
      });
      return;
    }

    try {
      await deleteJob(jobToDelete._id);
      toast({ title: "Job deleted successfully", status: "success" });
      onDeleteClose();
      setJobToDelete(null);
      setDeleteConfirmation("");
      load();
    } catch (err) {
      toast({ title: "Delete failed", status: "error" });
    }
  };

  const handleDeleteCancel = () => {
    onDeleteClose();
    setJobToDelete(null);
    setDeleteConfirmation("");
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateJobStatus(id, newStatus);
      toast({
        title: newStatus === "CLOSED" ? "Job closed" : "Job reopened",
        status: "success",
      });
      load();
    } catch (err) {
      toast({ title: "Status update failed", status: "error" });
    }
  };

  const handlePreview = (job) => {
    setSelectedJob(job);
    onOpen();
  };

  // Reordering functions
  const handleStartReordering = () => {
    setIsReordering(true);
    setOriginalJobs([...jobs]);
  };

  const handleCancelReordering = () => {
    setIsReordering(false);
    setJobs([...originalJobs]);
    setDraggedJob(null);
  };

  const handleSaveOrder = async () => {
    try {
      // Prepare job orders array with current positions
      const jobOrders = jobs.map((job, index) => ({
        jobId: job._id,
        order: index + 1,
      }));

      await updateJobOrder(jobOrders);

      toast({
        title: "Job order saved successfully",
        status: "success",
        description:
          "The new job order has been applied and will be reflected on the career page",
      });
      setIsReordering(false);
      setOriginalJobs([...jobs]);
    } catch (err) {
      toast({
        title: "Failed to save job order",
        status: "error",
        description: "Please try again",
      });
    }
  };

  const handleDragStart = (e, job) => {
    setDraggedJob(job);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetJob) => {
    e.preventDefault();
    if (!draggedJob || draggedJob._id === targetJob._id) {
      setDraggedJob(null);
      return;
    }

    const newJobs = [...jobs];
    const draggedIndex = newJobs.findIndex((job) => job._id === draggedJob._id);
    const targetIndex = newJobs.findIndex((job) => job._id === targetJob._id);

    // Remove dragged item and insert at target position
    newJobs.splice(draggedIndex, 1);
    newJobs.splice(targetIndex, 0, draggedJob);

    setJobs(newJobs);
    setDraggedJob(null);
  };

  return (
    <Box bg="white" borderRadius="md" p={6} pt="6%" boxShadow="sm">
      <Flex
        as="span"
        w="fit-content"
        bg="#E7E7E7"
        align="center"
        justify="flex-start"
        borderRadius="24px"
        mb={3}
        gap={1}
      >
        <Button
          size="sm"
          borderRadius="24px"
          variant="ghost"
          onClick={() => onShowCreate && onShowCreate()}
        >
          Create New
        </Button>
        <Button
          size="sm"
          colorScheme="purple"
          variant="solid"
          borderRadius="24px"
        >
          Existing Jobs
        </Button>
      </Flex>
      <Box height="1px" bg="gray.200" mb={4} />

      <Flex justify="space-between" align="center" mb={4}>
        <Heading fontSize="xl">Job List</Heading>
        {!isReordering ? (
          <Button
            size="sm"
            leftIcon={<DragHandleIcon />}
            colorScheme="gray"
            variant="outline"
            onClick={handleStartReordering}
            borderRadius="20px"
          >
            Reorder Jobs
          </Button>
        ) : (
          <HStack spacing={2}>
            <Button
              size="sm"
              leftIcon={<CheckIcon />}
              colorScheme="green"
              onClick={handleSaveOrder}
              borderRadius="20px"
            >
              Save Order
            </Button>
            <Button
              size="sm"
              leftIcon={<CloseIcon />}
              variant="outline"
              onClick={handleCancelReordering}
              borderRadius="20px"
            >
              Cancel
            </Button>
          </HStack>
        )}
      </Flex>
      {isReordering ? (
        <VStack spacing={3} align="stretch">
          {jobs.map((job, index) => (
            <Box
              key={job._id}
              p={4}
              border="2px solid"
              borderColor={
                draggedJob?._id === job._id ? "purple.300" : "gray.200"
              }
              borderRadius="md"
              bg={draggedJob?._id === job._id ? "purple.50" : "white"}
              cursor="move"
              draggable
              onDragStart={(e) => handleDragStart(e, job)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, job)}
              transition="all 0.2s"
              _hover={{ borderColor: "purple.300", bg: "purple.50" }}
            >
              <Flex align="center" gap={3}>
                <IconButton
                  icon={<DragHandleIcon />}
                  size="sm"
                  variant="ghost"
                  aria-label="Drag to reorder"
                  cursor="move"
                />
                <Text fontWeight="bold" color="#9678E1" flex="1">
                  {job.jobRole}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {job.employmentType} • {job.location}
                </Text>
                <Badge
                  colorScheme={job.status === "OPEN" ? "green" : "red"}
                  variant="subtle"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {job.status}
                </Badge>
              </Flex>
            </Box>
          ))}
        </VStack>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Role</Th>
              <Th>Type</Th>
              <Th>Location</Th>
              <Th>Experience</Th>
              <Th>Openings</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobs.map((job) => (
              <Tr key={job._id}>
                <Td>{job.jobRole}</Td>
                <Td>{job.employmentType}</Td>
                <Td>{job.location}</Td>
                <Td>{job.experience}</Td>
                <Td>{job.openings}</Td>
                <Td>
                  <Flex align="center" gap={2}>
                    <Badge
                      colorScheme={job.status === "OPEN" ? "green" : "red"}
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {job.status}
                    </Badge>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        icon={<ChevronDownIcon />}
                        size="xs"
                        variant="ghost"
                        aria-label="Change status"
                      />
                      <MenuList>
                        {job.status === "OPEN" && (
                          <MenuItem
                            onClick={() =>
                              handleStatusChange(job._id, "CLOSED")
                            }
                            color="red.500"
                          >
                            Close Job
                          </MenuItem>
                        )}
                        {job.status === "CLOSED" && (
                          <MenuItem
                            onClick={() => handleStatusChange(job._id, "OPEN")}
                            color="green.500"
                          >
                            Reopen Job
                          </MenuItem>
                        )}
                      </MenuList>
                    </Menu>
                  </Flex>
                </Td>
                <Td>
                  <Flex gap={2}>
                    <Button size="sm" onClick={() => handlePreview(job)}>
                      Preview
                    </Button>
                    <IconButton
                      aria-label="Edit"
                      icon={<EditIcon />}
                      size="sm"
                      onClick={() => onEdit && onEdit(job)}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      variant="outline"
                      onClick={() => handleDeleteClick(job)}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preview Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedJob && (
              <Box>
                <Text fontWeight="bold">Role:</Text>
                <Text mb={2}>{selectedJob.jobRole}</Text>
                <Text fontWeight="bold">Employment Type:</Text>
                <Text mb={2}>{selectedJob.employmentType}</Text>
                <Text fontWeight="bold">Location:</Text>
                <Text mb={2}>{selectedJob.location}</Text>
                <Text fontWeight="bold">Experience:</Text>
                <Text mb={2}>{selectedJob.experience}</Text>
                <Text fontWeight="bold">Openings:</Text>
                <Text mb={2}>{selectedJob.openings}</Text>
                {selectedJob.skillsAndResponsibilities ? (
                  <>
                    <Text fontWeight="bold">Skills and Responsibilities:</Text>
                    <Box mb={2} whiteSpace="pre-wrap">
                      {selectedJob.skillsAndResponsibilities}
                    </Box>
                  </>
                ) : (
                  <>
                    <Text fontWeight="bold">Key Responsibilities:</Text>
                    <Box mb={2}>
                      {(selectedJob.keyResponsibilities || []).map((r, i) => (
                        <Text key={`r-${i}`}>• {r}</Text>
                      ))}
                    </Box>
                    <Text fontWeight="bold">Key Skills:</Text>
                    <Box mb={2}>
                      {(selectedJob.keySkills || []).map((s, i) => (
                        <Text key={`s-${i}`}>• {s}</Text>
                      ))}
                    </Box>
                  </>
                )}

                {/* JD download removed */}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteOpen} onClose={handleDeleteCancel} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="red.500">Delete Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={4}>
              Are you sure you want to delete this job? This action cannot be
              undone.
            </Text>

            {jobToDelete && (
              <Box mb={4} p={3} bg="gray.50" borderRadius="md">
                <Text fontWeight="bold" mb={2}>
                  Job Details:
                </Text>
                <Text>
                  <strong>Role:</strong> {jobToDelete.jobRole}
                </Text>
                <Text>
                  <strong>Type:</strong> {jobToDelete.employmentType}
                </Text>
                <Text>
                  <strong>Location:</strong> {jobToDelete.location}
                </Text>
              </Box>
            )}

            <FormControl mb={4}>
              <FormLabel>
                To confirm deletion, type the job title exactly as shown:
              </FormLabel>
              <Text
                fontSize="sm"
                color="gray.600"
                mb={2}
                fontFamily="mono"
                bg="gray.100"
                p={2}
                borderRadius="md"
              >
                {jobToDelete?.jobRole}
              </Text>
              <Input
                placeholder="Type job title here..."
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                borderColor={
                  deleteConfirmation === jobToDelete?.jobRole
                    ? "green.300"
                    : "gray.300"
                }
                _focus={{
                  borderColor:
                    deleteConfirmation === jobToDelete?.jobRole
                      ? "green.500"
                      : "purple.500",
                }}
              />
            </FormControl>

            <Flex gap={3} justify="flex-end">
              <Button variant="ghost" onClick={handleDeleteCancel}> 
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteConfirm}
                isDisabled={deleteConfirmation !== jobToDelete?.jobRole}
              >
                Delete Job
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default HRJobListPage;
