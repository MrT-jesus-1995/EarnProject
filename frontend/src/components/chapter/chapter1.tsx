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
            <Text fontSize={{ base: "1.5xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black">
                1.1 ความหมายของระบบเครือข่ายคอมพิวเตอร์เบื้องต้น
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"2xl"} color="#00005C">
                    ระบบที่มีการนำเครื่องคอมพิวเตอร์อย่างน้อย2เครื่องมาทำการเชื่อมต่อถึงกัน โดยใช้สื่อกลางในการนำพาสัญญาณ
                    เพื่อทำให้คอมพิวเตอร์แต่ละเครื่องสามารถทำการแลกเปลี่ยนข้อมูล การประมวลผลร่วมกันและกันได้ สามารถใช้ทรัพยากรในเครือข่ายร่วมกันได้
                    เช่น เครื่องพิมพ์ ซีรีดอม สแกนเนอร์ ฮาร์ดดิสก์ เป็นต้น
                </Text>
                <Text fontSize={"2xl"} color="#00005C">
                    สำหรับระบบเครือข่ายคอมพิวเตอร์แบ่งเป็น 2 ส่วน
                </Text>
                <Heading fontSize={"2xl"} color="#0002A1">
                    1.1.1 ระบบเครือข่ายย่อยในส่วนของผู้ใช้
                </Heading>
                <Text fontSize={"2xl"} color="#0002A1">
                    1.เครื่องแม่ข่ายที่ควบคุมเครือข่ายหรือโฮสต์คอมพิวเตอร์ (Host Computer) ทำหน้าที่เก็บโปรแกรมและฐานข้อมูลต่าง ๆ
                    ที่คอมพิวเตอร์เครื่องอื่นจะนำไปใช้ได้
                </Text>
                <Text fontSize={"2xl"} color="#0002A1">
                    2.ทำหน้าที่เป็นตัวเชื่อมประสานให้เทอร์มินัล (Terminal Controllers) เทอร์มินัลส่งข้อมูลทีละตัวอักษร เครือข่ายส่งข้อมูลเป็ยบล็อก
                    (Block) ตัวควบคุมจะรวบรวมข้อมูลข้อมูลให้เป็นบล็อกส่งไปยังเครือข่ายย่อย ตัวอย่าง เช่น ตัวควบคุมเทอร์มินัล เช่น Multiplexer,
                    Concentrator
                </Text>
                <Text fontSize={"2xl"} color="#0002A1">
                    3.เครื่องปลายทางหรือเทอร์มินัล (Terminal) ทำหน้าที่ป้อนข้อมูลและแสดงผลที่ได้จากการประมวลผล
                </Text>
            </Box>
        </Container>
    )
}
