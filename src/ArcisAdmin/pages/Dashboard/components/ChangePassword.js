import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { forgotPassword, resetPassword, verifyOtp } from '../../../api/auth';

const ChangePassword = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);
  const [step, setStep] = useState('confirm'); // 'confirm', 'otp', 'reset'
  const [otp, setOtp] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const userEmail = localStorage.getItem('userEmail'); // Assuming you store user email in localStorage

  const handleConfirmReset = async () => {
    setIsSending(true);
    try {
      const response = await forgotPassword({ email: userEmail });
      if (response.status === "success") {
        toast({
          title: `OTP sent to ${response.data.email}`,
          description: "Use the OTP to reset your password.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setStep('otp');
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

  const handleOtpComplete = async (value) => {
    try {
      const response = await verifyOtp({ email: userEmail, otp: value });
      if (response.status === 'success') {
        setOtp(value);
        setStep('reset');
        toast({
          title: 'OTP Verified',
          description: 'Your OTP has been verified successfully.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Verification Failed',
        description: error?.response?.data?.error || 'Failed to verify OTP. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onResetPasswordSubmit = async (data) => {
    setIsSending(true);
    try {
      const payload = {
        ...data,
        otp,
        email: userEmail,
      };

      const response = await resetPassword(payload);

      if (response.status === "success") {
        toast({
          title: "Password Reset Successful",
          description: "Your password has been reset successfully.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        reset();
        onClose();
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

  const handleClose = () => {
    setStep('confirm');
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {step === 'confirm' && 'Confirm Password Reset'}
          {step === 'otp' && 'Enter OTP'}
          {step === 'reset' && 'Reset Password'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {step === 'confirm' && (
            <VStack spacing={4}>
              <Text>Are you sure you want to reset your password?</Text>
              <Text fontSize="sm" color="gray.500">
                An OTP will be sent to your email address.
              </Text>
              <Button
                onClick={handleConfirmReset}
                isLoading={isSending}
                loadingText="Sending OTP"
                width="100%"
                bg="#9678E1"
                color="white"
                _hover={{ background: "#35668E" }}
              >
                Send OTP
              </Button>
            </VStack>
          )}

          {step === 'otp' && (
            <VStack spacing={4}>
              <Text>Enter the 6-digit OTP sent to your email</Text>
              <HStack justify="center">
                <PinInput
                  otp
                  size="lg"
                  onComplete={handleOtpComplete}
                  autoFocus
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </VStack>
          )}

          {step === 'reset' && (
            <form onSubmit={handleSubmit(onResetPasswordSubmit)}>
              <VStack spacing={4}>
                <Box width="100%">
                  <Text mb={2}>New Password</Text>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    {...register('newPassword', { required: true })}
                  />
                </Box>
                <Button
                  type="submit"
                  isLoading={isSending}
                  loadingText="Resetting Password"
                  width="100%"
                  bg="#9678E1"
                  color="white"
                  _hover={{ background: "#35668E" }}
                >
                  Reset Password
                </Button>
              </VStack>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChangePassword; 