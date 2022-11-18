import { Box, Heading, VStack, Text } from "@chakra-ui/react"

const NotFound = () => {
    return (
        <VStack maxW="100vw" minH="100vh" alignItems={"center"} justifyContent="center">
            <Box p={5} bg="white" shadow={"lg"} rounded="xl">
                <Heading fontSize={{ base: "md", lg: "lg", xl: "2xl" }}>
                    <Box as="span" color="red.400">
                        404
                    </Box>
                    Page Not Found
                </Heading>
            </Box>
        </VStack>
    )
}

export default NotFound
