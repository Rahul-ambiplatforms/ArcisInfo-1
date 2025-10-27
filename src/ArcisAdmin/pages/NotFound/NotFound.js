import React from 'react';
import { Box, Heading, Text, Button, Center, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Center h="100vh" flexDirection="column" p={4}>
            <VStack spacing={6}>
                <Box textAlign="center" py={10} px={6}>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        // bgGradient="linear(to-r, blue.400, blue.600)"
                        // color="#9678E1"
                        bg="#9678E1"
                        backgroundClip="text">
                        404
                    </Heading>
                    <Text fontSize="18px" mt={3} mb={2}>
                        Page Not Found
                    </Text>
                    <Text color={'gray.500'} mb={6}>
                        The page you're looking for doesn't exist or has been moved.
                    </Text>
                    <Button
                        colorScheme="purple"
                        // bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
                        bg="#9678E1"
                        color="white"
                        variant="solid"
                        onClick={() => navigate('/')}>
                        Go to Homepage
                    </Button>
                </Box>
            </VStack>
        </Center>
    );
};

export default NotFound; 