import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box, Spacer, Image, Badge } from "@chakra-ui/react"
import Chapter1 from "../components/chapter/image/pic1.jpg"
import { extendTheme } from "@chakra-ui/react"

export default function chapter1() {
    const spacing = {
        space: {
            px: "1px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
        },
    }
    const theme = extendTheme({ ...spacing })

    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"}>
                    บทที่ 1 พื้นฐานระบบเครือข่ายคอมพิวเตอร์
                </Heading>
            </Stack>
            <Text fontSize={{ base: "3xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black">
                1.1 ความหมายของระบบเครือข่ายคอมพิวเตอร์เบื้องต้น
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"3xl"} color="#00005C">
                    ระบบที่มีการนำเครื่องคอมพิวเตอร์อย่างน้อย2เครื่องมาทำการเชื่อมต่อถึงกัน โดยใช้สื่อกลางในการนำพาสัญญาณ
                    เพื่อทำให้คอมพิวเตอร์แต่ละเครื่องสามารถทำการแลกเปลี่ยนข้อมูล การประมวลผลร่วมกันและกันได้ สามารถใช้ทรัพยากรในเครือข่ายร่วมกันได้
                    เช่น เครื่องพิมพ์ ซีรีดอม สแกนเนอร์ ฮาร์ดดิสก์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    สำหรับระบบเครือข่ายคอมพิวเตอร์แบ่งเป็น 2 ส่วน
                </Text>
                <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                    <Image src="https://www.tutorialspoint.com/basics_of_computer_science/images/computer_networking.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 1.1 www.tutorialspoint.com
                    </Badge>
                </Box>
                <Heading fontSize={"3xl"} color="#0002A1">
                    1.1.1 ระบบเครือข่ายย่อยในส่วนของผู้ใช้
                </Heading>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.เครื่องแม่ข่ายที่ควบคุมเครือข่ายหรือโฮสต์คอมพิวเตอร์ (Host Computer) ทำหน้าที่เก็บโปรแกรมและฐานข้อมูลต่าง ๆ
                    ที่คอมพิวเตอร์เครื่องอื่นจะนำไปใช้ได้
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    2.ทำหน้าที่เป็นตัวเชื่อมประสานให้เทอร์มินัล (Terminal Controllers) เทอร์มินัลส่งข้อมูลทีละตัวอักษร เครือข่ายส่งข้อมูลเป็นบล็อก
                    (Block) ตัวควบคุมจะรวบรวมข้อมูลข้อมูลให้เป็นบล็อกส่งไปยังเครือข่ายย่อย ตัวอย่าง เช่น ตัวควบคุมเทอร์มินัล เช่น Multiplexer,
                    Concentrator
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    3.เครื่องปลายทางหรือเทอร์มินัล (Terminal) ทำหน้าที่ป้อนข้อมูลและแสดงผลที่ได้จากการประมวลผล
                </Text>
                <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROb6gp3EhC4gKTWNlDWYrU5d3Bg-lNumBpCA&usqp=CAU" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 1.2 http://www.cc.su.ac.th/
                    </Badge>
                </Box>
                <Heading fontSize={"3xl"} color="#0002A1">
                    1.1.2 ระบบเครือข่ายย่อนในส่วนของการสื่อสาร
                </Heading>
                <Text fontSize={"3xl"} color="#0002A1">
                    ระบบสื่อเครือข่ายนี้มีโหนดหลายโหนดติดต่อกันผ่านสื่อกลางข้อมูล เพื่อส่งข้อมูลจากต้นทางไปยังปลายทาง
                    สำหรับระบบเครือข่ายย่อยในส่วนของการสื่อสาร ประกอบด้วย
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.โหนดเครือข่าย (Network Node) ทำหน้าที่เป็นตัวเชื่อมประสานงานกับเครือข่ายย่อยของผู้ใช้
                    และส่งข้อมูลผ่านเครือข่ายได้อย่างถูกต้องรวดเร็ว เรียกโหนดเครือข่ายนี้ว่า เราท์เตอร์
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    2.ช่องทางสำหรับการสื่อสาร (Communication Channels) ทำหน้าที่เป็นตัวกลางในการสื่อสาร อาจเป็นสายส่งสัญญาณ เช่น สายโทรศัพท์
                    สายเคเบิลหรือช่องทางการสื่อสารแบบไร้สาย เช่น คลื่นวิทยุ และสัญญาณดาวเทียม
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    3.อุปกรณ์สำหรับแปลงสัญญาณ (Signals Converters)
                    ทำหน้าที่เปลี่ยนสัญญาณดิจิทัลเป็นสัญญาณอื่นที่เหมาะสมในการส่งข้อมูลผ่านอุปกรณ์ตัวกลางชนิดต่าง ๆ เช่น โมเด็ม
                    เป็นตัวแปลงสัญญาณดิจิทัลจากเครื่องคอมพิวเตอร์ให้เป็นสัญญาณแอนะล็อก เพื่อให้สามารถส่งข้อมูลผ่านสายโทรศัพท์ได้
                </Text>
                <Heading fontSize={"3xl"} color="#0002A1">
                    1.2 จุดประสงค์การใช้ระบบเครือข่ายคอมพิวเตอร์
                </Heading>
                <Text fontSize={"3xl"} color="#0002A1">
                    เพื่อให้มีการแลกเปลี่ยนข้อมูลกันได้ระหว่างผู้ใช้อย่างมีประสิทธิภาพ ใช้ทรัพยากรร่วมกันได้ สร้างความน่าเชื่อถือและความปลอดภัยของระบบ
                    เพิ่มความสะดวกในด้านการสื่อสารโดยจุดประสงค์แต่ละข้อมีรายละเอียดดังต่อไปนี้
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.1 เพื่อให้มีการแลกเปลี่ยนข้อมูลกันได้ระหว่างผู้ใช้อย่างมีประสิทธิภาพ ผู้ใช้ต้องมีการแลกเปลี่ยนข้อมูลกันอยู่เสมอ
                    หากการส่งข้อมูลนี้เร็วขึ้น สะดวกยิ่งขึ้น งานต่าง ๆ ก็สามารถทำได้อย่างรวดเร็วและมีประสิทธิภาพ
                </Text>
                <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                    <Image src="https://img.lovepik.com/photo/40005/9354.jpg_wh860.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 1.3 img.lovepik.com
                    </Badge>
                </Box>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.2 เพื่อให้สามารถใช้ทรัพยากรร่วมกันได้ ในหน่วยงาน สามารถใช้งานฮาร์ดแวร์หรือซอฟต์แวร์ที่อยู่ในระบบเครือข่ายเดียวกันร่วมกันได้
                    เช่น การแชร์เครื่องพิมพ์ โดยทุกเครื่องในระบบเครือข่าย สามารถใช้งานเครื่องพิมพ์เครื่องนั้นได้ โดยไม่ต้องสลับกันไว้
                    ส่วนการใช้ซอฟต์แวร์ร่วมกัน คือ ผู้ใช้ในเครือข่ายสามารถใช้ซอฟต์แวร์หรือชุดโปรแกรมชุดเดียวกันได้
                    จะทำให้เกิดมาตรฐานของซอฟต์แวร์มาตรฐานเดียวกัน
                    <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                        <Image src="https://sites.google.com/site/winniesomwaraporn/_/rsrc/1446355629823/prayochn-khxng-kherux-khay-khxmphiwtexr/intranet%202.png" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 1.4 winniesomwaraporn
                        </Badge>
                    </Box>
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.3 เพื่อความประหยัด องค์กรสามารถประหยัดค่าใช้จ่ายได้อย่างมาก เช่น
                    การแชร์เครื่องพิมพ์ทำให้ไม่จำเป็นต้องซื้อเครื่องพิมพ์หลายเครื่อง การแชร์ซอฟต์แวร์ทำให้ไม่จำเป็นต้องซื้อซอฟต์แวร์หลายชุด
                    จึงใช้การติดต่อสื่อสารกันด้วยกระดาษลดน้อยลงแทนที่จะต้องใช้จดหมายเวียนหรือส่งเอกสาร แลกเปลี่ยนเป็นการส่งอีเมลแทน
                    ช่วยประหยัดต้นทุนค่ากระดาษ
                    <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                        <Image src="https://sites.google.com/site/patchareeporn571031231/_/rsrc/1477562509212/rabb-kherux-khay-khxmphiwtexr/12.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 1.5 patchareeporn571031231
                        </Badge>
                    </Box>
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.4 เพื่อสร้างความน่าเชื่อถือและความปลอดภัยของระบบ ระบบเครือข่ายจะช่วยให้ผู้ดูแลระบบจัดการระบบได้ง่ายและสะดวกขึ้น
                    ข้อมูลถูกจัดเก็บไว้ในเครื่องที่เป็นศูนย์กลาง ข้อมูลมีความน่าเชื่อถือ และมีการปรับปรุงข้อมูลให้ทันสมัยตลอดเวลา
                    อีกทั้งระบบเครือข่ายสามารถจัดการกับบัญชีผู้ใช้ มีการกำหนด รหัสผ่าน การกำหนดสิทธิ์การเข้าใช้งาน
                    ทำให้มีความปลอดภัยและความน่าเชื่อถือเพิ่มขึ้น
                    <Box align={"center"} spacing={{ base: 3, md: 5 }} py={{ base: 8, md: 14 }}>
                        <Image src="https://www.techhub.in.th/wp-content/uploads/2018/01/facebook-id-fake-03.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 1.6 www.techhub.in.th
                        </Badge>
                    </Box>
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.5 เพื่อช่วยลดขั้นตอนการทำงาน การให้บริการข้อมูลต่าง ๆ บนเครือข่ายจะเป็นการลดขั้นตอนการทำงาน
                    ถ้าเป็นการส่งข้อมูลในระบบเครือข่ายผู้ส่งอาจใช้วิธีการอัปโหลดขึ้นเว็บไซต์ ให้ผู้รับดาวน์โหลดข้อมูลไปใช้ได้
                    ทำให้ลดขั้นตอนการทำงานลงได้
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.2.6 เพื่อความสะดวกในด้านการสื่อสาร การเชื่อมต่อเครือข่ายคอมพิวเตอร์ทำให้ผู้ใช้ในองค์กรมมีความสะดวกในการทำงานมากขึ้น
                    มีการสื่อสารที่รวดเร็วตามแบบเวลาจริง (Real Time) เช่น การประมวลผลทางการเงินการธนาคาร การเก็บข้อมูลไว้ในเครื่อง
                    และสามารถส่งข้อมูลไปยังส่วนอื่น ๆ ในเครือข่ายเดียวกัน
                </Text>
                <Heading fontSize={"3xl"} color="#0002A1">
                    1.3 ประโยชน์ของระบบเครือข่ายคอมพิวเตอร์
                </Heading>
                <Text fontSize={"3xl"} color="#0002A1">
                    ปัจจุบันการติดต่อสื่อสารผ่านระบบเครือข่ายมีความสำคัญมากขึ้นเรื่อย ๆ ตามจุดประสงค์ในการติดตั้งเครือข่ายคอมพิวเตอร์
                    โดยประโยชน์ของเครือข่ายคอมพิวเตอร์สามารถแยกออกได้แต่ละด้าน ดังนี้
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.1 ด้านบริการ การติดต่อสื่อสารในปัจจุบันมีช่องทางที่สามารถให้บริการผ่านระบบเครือข่ายคอมพิวเตอร์ได้สะดวก ส่งผลให้บริการต่าง ๆ
                    บนระบบเครือข่ายคอมพิวเตอร์ได้รับความนิยมเป็นอย่างมาก เนื่องจากการบริการดังกล่าวประหยัดสะดวกและรวดเร็วในการบริการ เช่น
                    เว็บไซต์ของกรมสรรพากรที่ให้บริการชำระภาษีผ่านอินเทอร์เน็ต หรือบริการจองตั๋วเครื่องบิน
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.2 ด้านการสื่อสารข้อมูลและการจัดการ ในแต่ละหน่วยงานจะแยกออกเป็นฝ่าย แต่ละฝ่ายจะแยกย่อยออกไปตามขนาดของงาน เช่น โรงงานอุตสาหกรรม
                    ห้างสรรพสินค้า แต่ละแห่งมีระบบบริหารไม่เหมือนกัน
                    แต่สิ่งที่ทุกหน่วยงานมีเหมือนกันคือต้องมีการติดต่อสื่อสารและการบริหารจัดการภายในของหน่วยงาน ที่จะต้องติดต่อสื่อสารระหว่างฝ่ายต่าง
                    ๆ เพื่อให้เกิดประสิทธิภาพในการบริหารงานทั้งภายในและภายนอก
                    ถ้ามีการเชื่อมต่อผ่านเครือข่านคอมพิวเตอร์จะทำให้กการบริหารจัดการเกิดประสิทธิภาพมากขึ้น เช่น การบริการรับส่งข่าวสาร และการประชุม
                    เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.3 ด้านค่าใช้จ่ายในการดำเนินการ การใช้ทรัพยากรร่วมกันในเครือข่ายทำให้ลดภาวะค่าใช้จ่ายในหน่วยงาน
                    ช่วยให้ผู้ใช้ประหยัดค่าใช้จ่ายในการส่งข้อมูลระหว่างหน่วยงาน
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.4 ด้านธุรกิจการเงิน การฝากถอนเงินในเคาน์เตอร์ของธนาคาร การฝากถอนเงินผ่านระบบเอทีเอ็มระบบอัตโนมัติ การลงทะเบียนเรียน
                    และการซื้อขายหุ้นในตลาดหลักทรัพย์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.5 ด้านการแลกเปลี่ยนข่าวสาร โดยใช้การสื่อสารผ่านเครือข่ายคอมพิวเตอร์ เช่น ระบบรับ-ส่งเอกสารอิเล็กทรอนิกส์ (E-Office)
                    การแลกเปลี่ยนข้อมูลข่าวสารผ่านหน้าเว็บไซต์ จดหมายอิเล็กทรอนิกส์ การเขียนข้อความในกระดานสนทนาบนเว็บไซต์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.6 ด้านพัฒนาการศึกษาค้นคว้า การเรียนการสอนของครูผู้สอนจะใช้การสอนในตำราอย่างเดียวไม่ได้
                    ครู้สอนจะต้องค้นคว้าข้อมูลและวิทยาการใหม่ ๆ เพื่อนำความรู้มาถ่ายทอดให้ผู้เรียนได้อย่างมีประสิทธิภาพ
                    ตัวผู้เรียนต้องค้นคว้าข้อมูลหาข้อมูลเพิ่มเติมเหมือนกัน เช่น การศึกษาด้วยระบบการเรียนการสอนออนไลน์หรืออีเลิร์นนิ่ง (E-Learning)
                    การศึกษาด้วยสื่อหนังสืออิเล็กทรอนิกส์หรืออีบุ๊ก (E-Book) และการศึกษาจากเว็บไซต์เพื่อการศึกษาต่าง ๆ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.7 ด้านการแพทย์ นำระบบเครือข่ายคอมพิวเตอร์เข้ามาช่วยในการบริการข้อมูลเพื่อการรักษาผู้ป่วย
                    มีการจัดเก็บประวัติผู้ป่วยที่มารักษาในโรงพบาบาล ทำให้การรักษาพยาบาลมีประสิทธิภาพเพิ่มมากขึ้นตลอดจนเรื่องการวิจัยทางการแพทย์ใหม่ ๆ
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.8 ด้านความบันเทิง นิยมใช้ประโยชน์จากเครือข่ายสังคมออนไลน์ผ่านยูทูบ เช่น ดูรายการถ่ายทอดสดของสถานีโทรทัศน์ต่าง ๆ ดูภาพยนตร์
                    ฟังเพลง การดาวน์โหลดเพลง มิวสิควิดีโอ การแชร์ไฟล์วิดีโอ ไฟล์เพลง เกมออนไลน์ เฟซบุ๊กหรือทวิตเตอร์ผ่านระบบเครือข่ายอินเทอร์เน็ต
                    เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#0002A1">
                    1.3.9 ด้านการโฆษณาประชาสัมพันธ์ ปัจจุบันระบบเครือข่ายออนไลน์มีประโยชน์ด้านการโฆษณาและประชาสัมพันธ์ เช่นเดียวกับ หนังสือพิมพ์
                    โทรทัศน์ หรือสื่ออื่น ๆ เพื่อใช้เป็นช่องทางในการโฆษณาสินค้าแนะนำบริษัท สินค้าและบริการ หรือโซเชียลเน็กเวิร์ก (Social Network) เช่น
                    เฟซบุ๊ก หรือทางด้านการค้นหาข้อมูล เช่น กูเกิล (Google)
                </Text>
                <Heading fontSize={"3xl"} color="#1A1A2E">
                    1.4 องค์ประกอบของระบบเครือข่ายคอมพิวเตอร์
                </Heading>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    เพื่อการเชื่อมต่อเป็นเครือข่ายคอมพิวเตอร์ ได้แก่ เครื่องคอมพิวเตอร์ อุปกรณ์ อุปกรณ์สำหรับเครือข่ายคอมพิวเตอร์
                    สื่อกลางสำหรับการสื่อสาร โปรแกรมระบบปฏิบัติการเครือข่าย และโปรโทคอลสำหรับการสื่อสาร
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.1 เครื่องคอมพิวเตอร์ เครื่องคอมพิวเตอร์ที่ใช้งานบนเครือข่าย มีทั้งเรื่องคอมพิวเตอร์ที่ใช้เป็นเครื่องแม่ข่าย
                    และเครื่องคอมพิวเตอร์ที่ใช้เป็นเครื่องลูกข่าย แต่ละประเภททำหน้าที่แตกต่างกัน ดังนี้
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.1.1เครื่องแม่ข่ายหรือเซิร์ฟเวอร์ (Server) ในระบบเครือข่ายแบบไคลเอนต์เซิร์ฟเวอร์จำเป็นต้องมีเครื่อง ๆ
                    หนึ่งที่นำมาใช้เป็นเครื่องบริการ หน้าที่ของเครื่องแม่ข่าย คือ การให้บริการทรัพยากรกับเครื่องลูกข่ายที่ได้ร้องขอเข้ามา เช่น
                    การบริการไฟล์ข้อมูล การบริการงานพิมพ์ เป็นต้น เครื่องแม่ข่ายสามารถเป็นได้ทั้งเคร่องระดับเมนเฟรม มินิคคอมพิวเตอร์
                    แต่สำหรับไมโครคอมพิวเตอร์ที่นำมาเป็นเครื่องแม่ข่ายนั้น จะมีคุณสมบัติที่เหนือกว่าเครื่องพีซีทั่วไป เช่น
                    ใช้ฮาร์ดดิก์แบบเอสซีเอสไอหรือสกัสซี (SCSI) หน่วยความจำที่ใช้เป็นชนิดที่สามารถตรวจจับข้อผิดพลาดได้
                    รวมถึงการรองรับความทนทานต่อความผิดพลาด เนื่องจากอาจจำเป็นต้องนำมาใช้งานตลอด 24 ชั่วโมง
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.1.2สถานีงาน (Workstation) เป็นเครื่องพีซีทั่วไปที่เชื่อมต่อกับเครือข่ายคอมพิวเตอร์ ทำหน้าที่เป็นสถานีปลายทาง เรียกว่า
                    คอมพิวเตอร์ลูกข่าย หลังจากที่เครื่องแม่ข่ายได้ทำการติดตั้งเรียบร้อยแล้ว เครื่องลูกข่ายต่าง ๆ ภายในเครือข่ายจะถูกติดตั้งขึ้นมา
                    และดำเนินการทดสอบเพื่อเชื่อมต่อเข้ากับเครื่องแม่ข่ายที่เป็นศูนย์บริการ หากการติดตั้งสมบูรณ์
                    เครื่องลูกข่ายต้องสามารถเชื่อมต่อกับเครื่องแม่ข่ายได้ แต่ถ้าเชื่อมต่อไม่ได้ หมายความว่า เครือข่ายที่ติดตั้งอาจมีข้อผิดพลาด
                    เป็นได้ทั้งการติดตั้งค่าคอนฟิกที่ผิดหรือปัญหาด้านอุปกรณ์บางอย่าง และสายเคเบิลที่ติดตั้งไม่เรียบร้อย เป็นต้น
                    ดังนั้นจำเป็นต้องค้นหาจุดที่บกพร้องและแก้ไขโดยทันที โดยหลังจากที่เครื่องลูกข่ายสามารถเชื่อมต่อเข้ากับเครื่องแม่ข่ายเรียบร้อยแล้ว
                    ขั้นตอนต่อไปเป็นหน้าที่ของผู้ดูแลระบบในการบริหารจัดการเครือข่าย โดยจะดำเนินการกำหนดบัญชีผู้ใช้ตามแต่ละแผนก
                    และกำหนดสิทธิการใช้งานบนเครือข่าย ส่วนระบบที่ใช้เครื่องคอมพิวเตอร์เมนเฟรมเป็นศูนย์กลางเรียกสถานีปลายทางว่า เทอร์มินัล (Terminal)
                    ประกอบด้วยจอภาพและแป้นพิมพ์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.2 อุปกรณ์สำหรับเครือข่ายคอมพิวเตอร์ (Hardware) การเชื่อมต่อเครือข่ายคอมพิวเตอร์มีปุกรณ์ที่เป็นส่วนประกอบสำคัญหลายอย่าง
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.2.1เน็ตเวิร์กการ์ด (Network Interface Card: NIC) เป็นจุดเชื่อมต่อระหว่างคอมพิวเตอร์และบบเครือข่ายคอมพิวเตอร์ เรียกว่า แลนการ์ด
                    เป็นอุปกรณ์ที่สำคัญในการเชื่อมต่อเครือข่าย ทำหน้าที่รับส่งข้อมูลระหว่างคอมพิวเตอร์ในเครือข่ายเน็ตเวิร์กการ์ดมี2 แบบ คือ
                    เน็ตเวิร์กการ์ดแบบพีซีไอ (PCI) มีความเร็วในการรับส่งข้อมูล 10 เมกะบิตต่อวินาที และ 100เมกะบิตต่อวินาที
                    และเน็ตเวิร์กการ์ดอีกชนิดหนึ่งเป็นแบบไอเอสเอ (ISA) `มีความเร็วในการรับส่งข้อมูล 10 เมกะบิตต่อวินาที
                    ส่วนในแผงวงจรเครือข่ายจะมีขั้วสำหรับการเชื่อมต่อเข้ากับสายเคเบิลแบบต่าง ๆ ได้แก่ ขั้วต่อแบบบีเอ็นซี (BNC) ขั้วต่อแบบอาร์เจ-45
                    (RJ-45) เป้นต้น
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.2.2อุปกรณ์เพื่อการเชื่อมต่อเครือข่าย (Connecting Devices) เป็นอุปกรณ์เชื่อมโยงที่มีให้สำหรับเชื่อมโยงระหว่างเครื่องคอมพิวเตอร์
                    เชื่องโยงระหว่างอุปกรณ์ เช่น ฮับ สวิตช์ เราท์เตอร์ บริดจ์ และเกตเวย์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.3 สื่อกลางสำหรับการสื่อสาร (Transmission Media) การสื่อสารต้องมีสื่อกลางเพื่อเป็นตัวกลางสำหรับส่งข้อมูลระหว่างผู้ส่งและผู้รับ
                    โดยจะส่งข้อมูลผ่านสื่อกลางประเภทต่าง ๆ เช่น สายใยแก้วนำแสง สายเกลียวคู่ สายโคแอกเชียล คลื่นไมโครเวฟ คลื่นวิทยุ เป็นต้น
                    ในการส่งข้อมูลผ่านช่องทางสื่อสารแบบต่าง ๆ ขึ้นอยู่กับองค์ประกอบของผู้ใช้ว่าจะเลือกสื่อกลางแบบใด
                </Text>
                <Heading fontSize={"3xl"} color="#251749">
                    สื่อกลางส่งข้อมูลแบ่งเป็น 2 กลุ่ม
                </Heading>
                <Text fontSize={"3xl"} color="#251749">
                    1.4.3.1สื่อกลางส่งข้อมูลแบบใช้สาย (Guided Transmission Links) เป็นสื่อกลางส่งข้อมูลที่สามารถกำหนดทิศทางในการส่งข้อมูลได้
                    ลักษณะการส่งคือข้อมูลจะถูกส่งไปตามสัญญาณต่าง ๆ เช่นสายใบแก้วนำแสง สายเกลียวคู่ สายโคแอกเชียล เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#251749">
                    1.4.3.2สื่อกลางข้อมูลแบบไร้สาย (Unguided Transmission Links) เป็นสื่อกลางส่งข้อมูลที่มีการกระจายของสัญญาณในบริเวณพื้นที่กว้าง
                    ไม่สามารถควบคุมเฉพาะพื้นที่ได้ เช่น ดาวเทียม ไมโครเวฟ คลื่นวิทยุ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.4 โปรแกรมระบบปฏิบัติการเครือข่าย (Network Operating System: NOS) โปรแกรมระบบปฏิบัติการเครือข่ายเป็นโปรแกรมหลักของเครือข่าย
                    ทำหน้าที่บริการจัดการทรัพยากรในระบบเครือข่าย โปรแกรมนี้จะติดตั้งบนเครื่องแม่ข่ายและระบบปฏิบัติการบนเครื่องลูกข่าย
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.4.1ระบบปฏิบัติการบนเครื่องแม่ข่าย (Server) เป็นโปรแกรมระบบปฏิบัติการที่ติดตั้งอยู่ในเครื่องแม่ข่ายโดยเฉพาะ
                    มีหน้าที่ในการทำทรัพยากรในเครือข่ายมาเป็นเสมือนระบบหนึ่ง เพื่อให้สามารถใช้ทรัพยากรร่วมกันบนเครือข่ายได้
                    รวมถึงการกำหนดสิทธิการใช้งานของผู้ใช้และระบบความปลอดภัย
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.4.2ระบบปฏิบัติการบนเครื่องลูกข่าย (Workstation) จำเป็นต้องติดตั้งโปรแกรมเพื่อทพให้สามารถเชื่อมต่อกับเครื่องแม่ข่ายได้
                    ระบบปฏิบัติการบนเครื่องลูกข่ายอาจเป็นผลิตภัณฑ์ระบบปฏิบัติการที่ต่างค่ายกันกับเครื่องแม่ข่าย
                    ในกรณีดังกล่าวอาจต้องติดตั้งชุดติดตั้งเครื่องลูกข่ายโดยเฉพาะรวมถึงการตั้งค่าของระบบและกำหนดชนิดของโปรโทคอลที่ใช้งานให้ตรงกัน เช่น
                    เครื่องแม่ข่ายเป็นวินโดวส์เซิร์ฟเวอร์ 2003/2012 แต่เครื่องลูกข่ายเป็นวินโดวส์ 8 หรือวินโดวส์ 10 เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#1A1A2E">
                    1.4.5 โปรโทคอลสำหรับการสื่อสาร โปรโทคอลเป็นกฎ ขั้นตอน และรูปแบบของข้อมูลที่ใช้ในการสื่อสารระหว่างคอมพิวเตอร์สองเครื่องใด ๆ
                    ที่เชื่อมต่อกันเป็นเครือข่าย และเป็นมาตรฐานในการสื่อสารข้อมูลของคอมพิวเตอร์ อาจกล่าวได้ว่าโปรโทคอลเป็น "ภาษา”
                    หรือข้อกำหนดเพื่อให้ผู้ส่งและผู้รับสามารถสื่อสารกันได้อย่างเข้าใจและส่งผลให้การสื่อสารทั้งสองฝ่ายเกิดผลสัมฤทธิ์ เช่น ทีซีพี ไอพี
                    (TCP/IP) เป็นโปรโทคอลที่ใช้ในระบบอินเทอร์เน็ต โดยมีการระบุผู้รับ ผู้ส่งในเครือข่าย
                    และแบ่งข้อมูลออกเป็นแพ็กเก็จส่งผ่านไปทางอินเตอร์เน็ต ซึ่งหากมีการส่งข้อมูลเกิดความผิดพลาดจะมีการร้องขอให้ส่งข้อมูลใหม่ เป็นต้น
                    <Box align={"center"} spacing={{ base: 5, md: 7 }} py={{ base: 10, md: 18 }}>
                        <Image src="https://sites.google.com/site/bty12061199/_/rsrc/1443017443818/pho-r-tho-khxl/thi-si-phi-xi-phi-tcp-ip/Screen%20Shot%202558-09-23%20at%207.49.00%20PM.png" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 1.8 piyaphatice042
                        </Badge>
                    </Box>
                </Text>
                <Heading fontSize={"3xl"} color="#420516">
                    สรุปสาระสำคัญ
                </Heading>
                <Text fontSize={"3xl"} color="#3D0000">
                    ระบบเครือข่ายคอมพิวเตอร์ (Computer Network System) หมายถึง การนำเครื่องคอมพิวเตอร์ รวมทั้งอุปกรณ์ต่าง ๆ เช่น สวิตช์ เราท์เตอร์
                    เครื่องพิมพ์ มาเชื่อมโยงให้เป็นระบบเครือข่าย โดยมีตัวกลางในการนำพาสัญญาณ เช่น สายสัญญาณหรือคลื่นวิทยุ เป็นต้น
                    เพื่อทำให้สามารถสื่อสาร แลกเปลี่ยนข้อมูล และใช้ทรัพยากรร่วมกันได้
                </Text>
                <Text fontSize={"3xl"} color="#3D0000">
                    สำหรับเครือข่ายคอมพิวเตอร์ แบ่งออกเป็น 2 ส่วน คือ เครือข่ายย่อยในส่วนของผู้ใช้ และเครือข่ายย่อยในส่วนของการสื่อสาร
                </Text>
                <Text fontSize={"3xl"} color="#3D0000">
                    จุดประสงค์ของระบบเครือข่าย เพื่อการแลกเปลี่ยนข้อมูลอย่างมีประสิทธิภาพ การใช้ทรัพยากรร่วมกัน ลดต้นทุน
                    สร้างความน่าเชื่อถือและความปลอดภัยของระบบ ช่วยลดขั้นตอนการทำงาน และเพื่อความสะดวกในด้านการสื่อสาร เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#3D0000">
                    ประโยชน์ของระบบครือข่ายคอมพิวเตอร์ ประกอบด้วย การบริการ การสื่อสารข้อมูล และการจัดการ ค่าใช้จ่าย ธุรกิจการเงิน
                    การแลกเปลี่ยนข่าวสาร การศึกษาค้นคว้า การแพทย์ ด้านความบันเทิง การโฆษณาประชาสัมพันธ์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#3D0000">
                    องค์ประกอบสำหรับระบบเครือข่าย ประกอบด้วย เครื่องคอมพิวเตอร์ อุปกรณ์สำหรับการสื่อสาร สื่อกลางสำหรับการสื่อสาร
                    โปรแกรมระบบปฏิบัติการเครือข่าย และโปรโทคอลสำหรับการสื่อสาร
                </Text>
            </Box>
        </Container>
    )
}
