import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box } from "@chakra-ui/react"

export default function CallToActionWithIllustration() {
    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
                    เว็บไซต์บทเรียนการ
                    <Text as={"span"} color={"#42D2C3"}>
                        สอนออนไลน์
                    </Text>
                </Heading>
                <Text color={"gray.500"} maxW={"3xl"} fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
                    วิชา เครือข่ายคอมพิวเตอร์เบื้องต้น
                </Text>
            </Stack>
            <Box bg="gray.300" w="100%" h="100%">
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem colSpan={2} bg="tomato">
                        <Button colorScheme="blue" size="lg" align={"center"}>
                            Button
                        </Button>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} bg="papayawhip">
                        <Button colorScheme="blue" size="lg" align={"center"}>
                            Button
                        </Button>
                    </GridItem>
                    <GridItem colSpan={2} bg="tomato">
                        <Button colorScheme="blue" size="lg" align={"center"}>
                            Button
                        </Button>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} bg="papayawhip">
                        <Button colorScheme="blue" size="lg" align={"center"}>
                            Button
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    )
}
