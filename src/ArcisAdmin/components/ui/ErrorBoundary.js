import React from 'react';
import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service here
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Center h="100vh" flexDirection="column" p={4}>
                    <Box textAlign="center" py={10} px={6}>
                        <Heading
                            display="inline-block"
                            as="h2"
                            size="2xl"
                            // bgGradient="linear(to-r, blue.400, blue.600)"
                            bg="#9678E1"
                            backgroundClip="text">
                            500
                        </Heading>
                        <Text fontSize="18px" mt={3} mb={2}>
                            Something went wrong
                        </Text>
                        <Text color={'gray.500'} mb={6}>
                            We're sorry, but something went wrong. Please try refreshing the page.
                        </Text>
                        <Button
                            colorScheme="blue"
                            // bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
                            bg="#9678E1"
                            color="white"
                            variant="solid"
                            onClick={() => window.location.reload()}>
                            Refresh Page
                        </Button>
                    </Box>
                </Center>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 