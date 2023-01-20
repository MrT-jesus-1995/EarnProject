import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box, Spacer, Center } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function CallToActionWithIllustration() {
    let navigate = useNavigate()
    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
                    เว็บไซต์ทบทวนบทเรียน
                    <Text as={"span"} color={"#42D2C3"}>
                        ออนไลน์
                    </Text>
                </Heading>
                <Text color={"gray.500"} maxW={"3xl"} fontSize={{ base: "xl", sm: "1xl", md: "5xl" }}>
                    <Text as={"span"} color={"#65BED1"}>
                        วิชา{" "}
                    </Text>
                    เครือข่ายคอมพิวเตอร์เบื้องต้น
                </Text>
            </Stack>
            <Box w="100%" h="100%">
                <Center>
                    <Grid templateColumns="repeat(5, 1fr)" gap={12} p={12}>
                        <GridItem colSpan={2}>
                            <Button
                                onClick={() => navigate("/chapter")}
                                bg="#B1E1FF"
                                size="lg"
                                fontSize={"xl"}
                                style={{ width: "500px", height: "75px" }}
                                borderRadius="0"
                                border="2px"
                            >
                                บทที่ 1 พื้นฐานระบบเครือข่ายคอมพิวเตอร์
                            </Button>
                        </GridItem>
                        <GridItem colStart={4} colEnd={6}>
                            <Button
                                bg="#C8FFD4"
                                size="lg"
                                fontSize={"xl"}
                                style={{ width: "500px", height: "75px" }}
                                borderRadius="0"
                                border="2px"
                                onClick={() => navigate("/chapter/chapter2")}
                            >
                                บทที่ 2 อุปกรณ์ระบบเครือข่าย
                            </Button>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Button
                                bg="#FFE15D"
                                size="lg"
                                fontSize={"xl"}
                                style={{ width: "500px", height: "75px" }}
                                borderRadius="0"
                                border="2px"
                                onClick={() => navigate("/chapter/chapter3")}
                            >
                                บทที่ 3 ประเภทของระบบเครือข่าย
                            </Button>
                        </GridItem>
                        <GridItem colStart={4} colEnd={6}>
                            <Button
                                bg="#FFABE1"
                                size="lg"
                                fontSize={"xl"}
                                style={{ width: "500px", height: "75px" }}
                                borderRadius="0"
                                border="2px"
                                onClick={() => navigate("/chapter/chapter4")}
                            >
                                บทที่ 4 สื่อกลางนำสัญญาณในระบบเครือข่าย
                            </Button>
                        </GridItem>
                    </Grid>
                </Center>
                <Flex gap={6} p={12}>
                    <Spacer />
                    <Box>
                        <Button
                            bg="#ECC5FB"
                            size="lg"
                            fontSize={"xl"}
                            style={{ width: "500px", height: "75px" }}
                            borderRadius="0"
                            border="2px"
                            onClick={() => navigate("/chapter/chapter5")}
                        >
                            บทที่ 5 โปรโทคอล
                        </Button>
                    </Box>
                    <Spacer />
                </Flex>
            </Box>
        </Container>
    )
}
