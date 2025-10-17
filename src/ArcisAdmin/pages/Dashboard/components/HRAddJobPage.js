import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  createJob,
  updateJob,
  uploadJobJD,
  deleteJobJD,
} from "../../../api/jobs";

const HRAddJobPage = ({ onShowList, editJob }) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      jobRole: "",
      employmentType: "Full-Time",
      location: "",
      experience: "",
      openings: 1,
      skillsAndResponsibilities: "",
      jdFilename: undefined,
    },
  });
  const toast = useToast();
  const [jdUploading, setJdUploading] = React.useState(false);
  const jdInputRef = React.useRef(null);
  const jdFilename = watch("jdFilename");

  // Helper function (kept if needed later)
  const textToArray = (text) => {
    if (!text) return [];
    return text
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };

  const onSubmit = async (values) => {
    try {
      const payload = {
        jobRole: values.jobRole,
        employmentType: values.employmentType,
        location: values.location,
        experience: values.experience,
        openings: Number(values.openings),
        ...(values.skillsAndResponsibilities
          ? { skillsAndResponsibilities: values.skillsAndResponsibilities }
          : {}),
        ...(values.jdFilename ? { jdFilename: values.jdFilename } : {}),
      };
      // For legacy support if needed
      // formData.append('keyResponsibilities', JSON.stringify(textToArray(values.keyResponsibilities)));
      // formData.append('keySkills', JSON.stringify(textToArray(values.keySkills)));

      const res = editJob?._id
        ? await updateJob(editJob._id, payload)
        : await createJob(payload);
      if (res.status === "success") {
        toast({
          title: editJob?._id ? "Job updated" : "Job created",
          status: "success",
          duration: 2000,
        });
        if (editJob?._id) {
          onShowList && onShowList();
        } else {
          reset();
        }
      }
    } catch (err) {
      toast({
        title: editJob?._id ? "Failed to update job" : "Failed to create job",
        description: String(err?.error || err),
        status: "error",
        duration: 3000,
      });
    }
  };

  const handleJdPick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast({ title: "Only PDF allowed", status: "warning" });
      e.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Max 5MB",
        status: "warning",
      });
      e.target.value = "";
      return;
    }
    try {
      setJdUploading(true);
      const res = await uploadJobJD(file);
      if (res.status === "success") {
        setValue("jdFilename", res.data.filename);
        toast({ title: "JD uploaded", status: "success", duration: 1500 });
        if (jdInputRef.current) {
          jdInputRef.current.value = "";
        }
      }
    } catch (err) {
      toast({
        title: "JD upload failed",
        description: String(err?.message || err),
        status: "error",
      });
    } finally {
      setJdUploading(false);
    }
  };

  const handleJdDelete = async () => {
    if (!jdFilename) return;
    try {
      setJdUploading(true);
      await deleteJobJD(jdFilename);
      // Also clear from DB so edit mode doesn't show stale JD
      if (editJob?._id) {
        try {
          await updateJob(editJob._id, { jdFilename: null });
        } catch (e) {
          // ignore persistence error here; UI will still clear
        }
      }
      setValue("jdFilename", undefined);
      toast({ title: "JD deleted", status: "success", duration: 1500 });
      if (jdInputRef.current) {
        jdInputRef.current.value = "";
      }
    } catch (err) {
      toast({
        title: "Delete failed",
        description: String(err?.message || err),
        status: "error",
      });
    } finally {
      setJdUploading(false);
    }
  };

  // Prefill form when editing
  React.useEffect(() => {
    if (editJob && editJob._id) {
      setValue("jobRole", editJob.jobRole || "");
      setValue("employmentType", editJob.employmentType || "Full-Time");
      setValue("location", editJob.location || "");
      setValue("experience", editJob.experience || "");
      setValue("openings", Number(editJob.openings) || 1);
      if (
        typeof editJob.jdFilename === "string" &&
        editJob.jdFilename.length > 0
      ) {
        setValue("jdFilename", editJob.jdFilename);
      }
      if (
        typeof editJob.skillsAndResponsibilities === "string" &&
        editJob.skillsAndResponsibilities.length > 0
      ) {
        setValue(
          "skillsAndResponsibilities",
          editJob.skillsAndResponsibilities
        );
      } else {
        const legacy = [
          ...(Array.isArray(editJob.keyResponsibilities)
            ? editJob.keyResponsibilities
            : []),
          ...(Array.isArray(editJob.keySkills) ? editJob.keySkills : []),
        ].join("\n");
        setValue("skillsAndResponsibilities", legacy);
      }
    }
  }, [editJob, setValue]);

  return (
    <Box bg="white" borderRadius="24px" p="6" pt="7%" boxShadow="sm">
      <Flex
        align="center"
        w="fit-content"
        bg="#E7E7E7"
        borderRadius="24px"
        justify="flex-start"
        mb={3}
        gap={1}
      >
        <Button
          size="sm"
          colorScheme="purple"
          variant="solid"
          borderRadius="24px"
        >
          {editJob?._id ? "Edit Job" : "Create New"}
        </Button>
        <Button
          size="sm"
          borderRadius="24px"
          variant="ghost"
          onClick={() => onShowList && onShowList()}
        >
          Existing Jobs
        </Button>
      </Flex>
      <Divider mb={4} />
      <Heading fontSize="xl" mb={4}>
        {editJob?._id ? "Edit Job" : "Add Job"}
      </Heading>
      <VStack
        as="form"
        align="stretch"
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <Text fontWeight="bold" mb={2}>
            Job Role *
          </Text>
          <Input
            placeholder="Enter job role"
            {...register("jobRole", { required: true })}
          />
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Employment Type *
          </Text>
          <Select {...register("employmentType", { required: true })}>
            <option value="Full-Time">Full-Time</option>
            <option value="Fresher">Fresher</option>
            <option value="Intern">Intern</option>
          </Select>
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Location *
          </Text>
          <Input
            placeholder="Enter job location"
            {...register("location", { required: true })}
          />
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Experience *
          </Text>
          <Input
            placeholder="e.g., 2-4 years or Intern"
            {...register("experience", { required: true })}
          />
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Number of Openings *
          </Text>
          <Input
            type="number"
            min={1}
            placeholder="Enter number of openings"
            {...register("openings", { required: true, valueAsNumber: true })}
          />
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Skills and Responsibilities *
          </Text>
          <Textarea
            placeholder="Enter skills and responsibilities (you can paste formatted text or one per line)"
            {...register("skillsAndResponsibilities", { required: true })}
            rows={6}
          />
        </Box>

        <Box>
          <Text fontWeight="bold" mb={2}>
            Upload JD (PDF, max 5MB)
          </Text>
          <input type="hidden" {...register("jdFilename")} />
          <HStack>
            <Button
              size="sm"
              onClick={() => jdInputRef.current?.click()}
              isLoading={jdUploading}
            >
              Upload PDF
            </Button>
            {jdFilename && (
              <>
                <Text fontSize="sm">{jdFilename}.pdf</Text>
                <Button
                  size="xs"
                  colorScheme="red"
                  variant="outline"
                  onClick={handleJdDelete}
                  isLoading={jdUploading}
                >
                  Delete
                </Button>
                {jdFilename && editJob?.jdUrl && (
                  <Button
                    as="a"
                    href={editJob.jdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="xs"
                    colorScheme="purple"
                    variant="outline"
                  >
                    View
                  </Button>
                )}
              </>
            )}
          </HStack>
          <input
            ref={jdInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleJdPick}
          />
        </Box>

        <Flex gap={3}>
          <Button type="submit" colorScheme="purple">
            Submit
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default HRAddJobPage;
