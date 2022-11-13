import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box, Spacer, Image } from "@chakra-ui/react"
import Chapter1 from "../components/chapter/image/pic1.jpg"

export default function chapter1() {
    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"}>
                    บทที่ 1 พื้นฐานระบบเครือข่ายคอมพิวเตอร์
                </Heading>
            </Stack>
            <Text fontSize={{ base: "1.5xl", sm: "1.5xl", md: "2xl" }} lineHeight={"110%"}>
                1.1 ความหมายของระบบเครือข่ายคอมพิวเตอร์เบื้องต้น
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"xl"}>
                    ระบบที่มีการนำเครื่องคอมพิวเตอร์อย่างน้อย2เครื่องมาทำการเชื่อมต่อถึงกัน โดยใช้สื่อกลางในการนำพาสัญญาณ
                    เพื่อทำให้คอมพิวเตอร์แต่ละเครื่องสามารถทำการแลกเปลี่ยนข้อมูล การประมวลผลร่วมกันและกันได้ สามารถใช้ทรัพยากรในเครือข่ายร่วมกันได้
                    เช่น เครื่องพิมพ์ ซีรีดอม สแกนเนอร์ ฮาร์ดดิสก์ เป็นต้น
                </Text>
            </Box>
            <Box boxSize="sm">
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Box>
        </Container>
    )
}
