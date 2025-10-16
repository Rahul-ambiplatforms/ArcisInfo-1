import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { forgotPassword, resetPassword } from '../../api/auth';

const Reset = () => {
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};

  const onEmailSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await forgotPassword(data); // API for reset OTP
      if (response.status === "success") {
        toast({
          title: `OTP sent to ${response.data.email}`,
          description: "Use the OTP to reset your password.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/admin/verify', { replace: true, state: { email: response.data.email, purpose: "forgotPassword" } });
      }
    } catch (error) {
      toast({
        title: "Failed to send OTP",
        description: error?.response?.data?.error || "Something went wrong",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  const onResetPasswordSubmit = async (data) => {
    setIsSending(true);
    try {
      const payload = {
        ...data,
        otp: state.otp,
        email: state.email, // assuming email is passed along in state too
      };
      // console.log("Resetting password with data:", payload);

      const response = await resetPassword(payload); // API for reset password

      if (response.status === "success") {
        toast({
          title: "Password Reset Successful",
          description: "Your password has been reset successfully.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/admin', { replace: true });
      }
    } catch (error) {
      toast({
        title: "Password Reset Failed",
        description: error?.response?.data?.error || "Something went wrong",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };


  return (
    <Flex height="100vh" align="center" justify="center">
      <form onSubmit={handleSubmit(state?.otp ? onResetPasswordSubmit : onEmailSubmit)}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          bg="white"
          borderRadius="24px"
          mx="auto"
          mt={10}
          px={{ base: 4, md: 8 }}
          py={{ base: 8, md: 12 }}
          maxWidth="1565px"
          justifyContent="space-evenly"
          gap={8}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        >
          <Flex justifyContent="center" alignItems="center" flex="1" textAlign="center">
            <Text fontSize={{ base: '32px', md: '48px' }} fontWeight="600" color="#9678E1">
              ARCIS ADMIN
            </Text>
          </Flex>

          <Flex direction="column" justifyContent="space-between" flex="1" gap={6}>
            <Box>
              <Text fontWeight="600" fontSize={{ base: '24px', md: '36px' }}>
                {state?.otp ? "Set New Password" : "Reset Password"}
              </Text>
              <Text fontWeight="400" fontSize="16px" mt={2}>
                {state?.otp
                  ? "Enter the OTP sent to your email and set a new password."
                  : "Enter your email address and we'll send you an OTP to reset your password."}
              </Text>
            </Box>

            {!state?.otp ? (
              <Flex direction="column" gap={2}>
                <Text>Email</Text>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', { required: true })}
                />
              </Flex>
            ) : (
              <>
                {/* <Flex direction="column" gap={2}>
                  <Text>OTP</Text>
                  <Input
                    type="text"
                    placeholder="Enter OTP"
                    {...register('otp', { required: true })}
                  />
                </Flex> */}
                <Flex direction="column" gap={2}>
                  <Text>New Password</Text>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    {...register('newPassword', { required: true })}
                  />
                </Flex>
              </>
            )}

            <Button
              type="submit"
              isLoading={isSending}
              loadingText={state?.otp ? "Resetting Password" : "Sending OTP"}
              width="100%"
              bg="#9678E1"
              color="white"
              fontSize="16px"
              fontWeight="600"
              borderRadius="8px"
              _hover={{ background: "#7645f4ff" }}
            >
              {state?.otp ? "Reset Password" : "Send OTP"}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};

export default Reset;
