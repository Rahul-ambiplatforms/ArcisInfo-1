import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  PinInput,
  PinInputField,
  Button,
  useToast,
} from '@chakra-ui/react';
import { verifyOtp } from '../../api/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [isVerified, setIsVerified] = useState(false);

  // Redirect to /admin if state is null
  useEffect(() => {
    if (!state) {
      navigate('/admin', { replace: true });
    }
  }, [state, navigate]);

  const handleOtpComplete = async (value) => {
    // console.log("value")
    try {
      // console.log("verified")
      if (!isVerified) {
        if (!state.purpose) {
          // console.log("purpose")
          const response = await verifyOtp({ email: state.email, otp: value });


          if (response.status === 'success') {
            localStorage.setItem('jwtToken', response.token);
            if (response?.data?.user?.role) {
              localStorage.setItem('userRole', response.data.user.role);
            }
            if (response?.data?.user?.email) {
              localStorage.setItem('userEmail', response.data.user.email);
            }
            toast({
              title: 'OTP Verified',
              description: 'Your OTP has been verified successfully.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            setIsVerified(true);
            navigate('/admin/dashboard', { replace: true });
          } else {
            // console.log("error occur")
            toast({
              title: 'Verification Failed',
              description: 'Failed to verify OTP. Please try again.',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        }
        else if (state.purpose === 'forgotPassword') {
          const response = await verifyOtp({ email: state.email, otp: value });

          if (response.status === 'success') {
            localStorage.setItem('jwtToken', response.token);
            toast({
              title: 'OTP Verified',
              description: 'Your OTP has been verified successfully.',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
            setIsVerified(true);
            // console.log("email before sending to reset page : ", response.data.email, "otp is : ", value)
            navigate('/admin/reset', { replace: true, state: { email: state.email, otp: value } });
          } else {
            toast({
              title: 'Verification Failed',
              description: 'Failed to verify OTP. Please try again.',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        }

      } else {
        toast({
          title: 'Already Verified',
          description: 'OTP has already been verified.',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      // console.error('Error verifying OTP:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleVerify = () => {
    const token = localStorage.getItem('jwtToken');
    // console.log("This is token:",token)
    if (token) {
      toast({
        title: 'Session Active',
        description: 'You are already logged in.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Invalid OTP',
        description: 'Please complete the OTP verification.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Prevent render if state is not available (during redirect)
  if (!state) return null;

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50" px={4}>
      <Box bg="white" p={8} rounded="xl" shadow="lg" maxW="sm" width="100%">
        <VStack spacing={6}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Enter OTP
          </Text>
          <Text color="gray.500" fontSize="sm" textAlign="center">
            We've sent a 6-digit verification code to your phone number.
          </Text>

          <HStack justify="center">
            <PinInput
              otp
              size="lg"
              onComplete={handleOtpComplete}
              autoFocus
              placeholder=""
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          <Button colorScheme="purple" size="lg" width="100%" onClick={handleVerify}>
            Verify
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default OtpVerification;
