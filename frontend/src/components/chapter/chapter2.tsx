import { Container, Heading, Stack, Text, Box, Image, Badge, extendTheme, ChakraProvider } from "@chakra-ui/react"
import { Fonts } from "../../config/chakra/Fonts"
const theme = extendTheme({
    fonts: {
        heading: `'Mali', cursive`,
        body: `'Mali', cursive`,
    },
})

export default function chapter1() {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Container maxW={"9xl"}>
                <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                    <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"}>
                        บทที่ 2 อุปกรณ์ระบบเครือข่าย
                    </Heading>
                </Stack>
                <Text fontSize={{ base: "3xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black">
                    2.1อุปกรณ์ที่ใช้งานในระบบเครือข่ายทั่วไป
                </Text>
                <Box gap={6} p={12}>
                    <Text fontSize={"3xl"} color="#1B2430">
                        ในการเชื่อมต่อในระบบเครือข่ายคอมพิวเตอร์
                        จะต้องใช้อุปกรณ์ในการเชื่อมต่อที่แตกต่างกันไปตามคุณสมบัติทางด้านสถาปัตยกรรมและมาตรฐานของเครือข่าย
                        ซึ่งอุปกรณ์ที่ใช้ในระบบเครือช่ายในปัจจุบันนั้นมีอยู่มากมาย
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.1 เครื่องคอมพิวเตอร์ การเชื่อมต่อระบบเครือข่ายทั้งแบบมีสายสัญญาณและแบบไร้สายถือว่าเครื่องคอมพิวเตอร์เป็นส่วนหลักของระบบ
                        มีทั้งแบบตั้งโต๊ะและแบบโน๊ตบุ๊ก และมีอุปกรณ์ที่เชื่อมต่อระบบเครือข่ายหลายชนิด เช่น โทรศัพท์แบบพกพา (Mobile Phone) พีดีเอ (PDA)
                        และแท็ปเล็ต (Tablet) เป็นต้น
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://sites.google.com/site/kerkrai571031211/_/rsrc/1477564991150/6-rabb-kherux-khay-khxmphiwtexr/9782593.png" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.1 ระบบเครือข่าย
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.2 เน็ตเวิร์กการ์ด (Network Interface Card: NIC) เรียกกันว่า แลนการ์ด (LAN Card)
                        มีลักษณะเป็นแผ่นการ์ดวงจรอิเล็กทรอนิกส์เพื่อเสียบลงไปยังแผงวงจรหลักของเครื่องคอมพิวเตอร์
                        โดยทำหน้าที่ในการแปลงสัญญาณข้อมูลในเครือข่ายเป็นสัญญาณสำหรับการสื่อสารให้กับคอมพิวเตอร์
                        ปัจจุบันนี้ส่วนใหญ่จะเป็นการ์ดที่สามารถใช้ทั้งในระบบอีเทอร์เน็ต (Ethernet Card) ในมาตรฐาน 10BaseT
                        ใช้ความเร็วสำหรับการส่งข้อมูล 10 เมกะบิตต่อวินาที และระบบอีเทอร์เน็ตความเร็วสูง ในมาตรฐาน 100BaseT หรือมาตรฐาน IEEE 802.3u
                        รองรับความเร็ว 10/100เมกะบิตต่อวินาที เรียกว่า “ฟาสอีเทอร์เน็ต (Fast Ethernet)”
                        ที่มีการเชื่อมต่อกับเครือข่ายผ่านหัวต่ออาร์เจ-45 (RJ-45) ปัจจุบันได้มีการผลิตเน็ตเวิร์กการ์ดที่รองรับความเร็วในส่งสูงถึง 10
                        จิกะบิต เรียกว่า จิกะบิตแลนการ์ด (Gigabit LAN Card) นอกจากนี้ยังมีแลนการ์ดแบบไร้สาย (Wireless LAN Card)
                        ออกมาใช้มากขึ้นและรองรับความเร็วมากขึ้นตั้งแต่ 11 Mbps ถึง 108 Mbps
                        ซึ่งภายในแผงวงจนหลักของเครื่องคอมพิวเตอร์บางเครื่องอาจผนวกแผงวงจรเน็ตเวิร์กการ์ดแบบไร้สายไว้แล้ว
                        เน็ตเวิร์กการ์ดเป็นอุปกรณ์ที่ทำงานอยู่ในเลเยอร์ที่ 1 และ 2 เทียบกับแบบจำลองโอเอสไอ เพราะเน็ตเวิร์กการ์ดทำงานในระดับชั้นกายภาพ
                        เน็ตเวิร์กการ์ดแต่ละใบนั้นจะมีการกำหนดหมายเลขเฉพราะตัวจากบริษัทผู้ผลิตและข้อมูลมาตรฐานประจำการ์ดโดยจะมีค่าไม่ซ้ำกันเรียกว่า
                        แมคแอดเดรส (Media Access Control Address: MAC Address) ที่ทำงานในระดับชั้นเชื่อมข้อมูลหรือดาต้าลิงก์เลเยอร์
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://1.bp.blogspot.com/-mwSdlcG_KkY/VzQ5ZtocLqI/AAAAAAAAKQY/GoiXJhgDQ146EwU38fRLYU8v977klktjwCLcB/s1600/63af6e1734.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.2 เน็ตเวิร์กการ์ดแบบพีซีไอ (PCI)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.3 ฮับ (Hub) ฮับเป็นอุปกรณ์ที่ใช้เชื่อมต่อเครื่องคอมพิวเตอร์เข้าด้วยกัน
                        ทำหน้าที่เป็นศูนย์กลางในการกระจายข้อมูลไปยังเครื่องต่าง ๆ และเป็นอุปกรณ์ที่ทำหน้าที่ทวนสัญญาณ
                        ฮับจะส่งข้อมูลขากเครื่องต้นทางไปยังเครื่องปลายทาง ส่งไปในลักษณะกระจายยังทุกพอร์ต (Port)
                        ทำให้คอมพิวเตอร์ทุกเครื่องที่เชื่อมต่อกับฮับเห็นข้อมูลเข้ามาทุกครั้ง ถ้าข้อมูลเป็นของคอมพิวเตอร์เครื่องใด
                        คอมพิวเตอร์เครื่องนั้นจะรับไป ถ้าใช่จะไม่รับ การทำงานลักษณะนี้ เป็นการใช้ช่องทางที่ไม่จำเป็น
                        จึงเกิดการชนกันของข้อมูลค่อนข้างมากในเครือข่าย เพราะข้อมูลจะถูกส่งไปยังคอมพิวเตอร์ทุกเครื่องที่เชื่อมต่ออยู่
                        และเกิดความคับคั่งของข้อมูลในเครือข่าย ทำให้ความเร็วภายในเครือข่ายลดลง ฮับจะแชร์แบรนด์วิดท์ (Bandwidth)
                        ให้กับเครื่องคอมพิวเตอร์ทุกเครื่องที่เชื่อมต่ออยู่บนฮับเดียวกัน เช่น ระบบเครือข่ายที่ทำงานแบบ100 เมกะบิตต่อวินาที
                        และมีเครื่องคอมพิวเตอร์เชื่อมต่อบนฮับ 10 เครื่อง แบนด์วิดท์ที่ผ่านฮับจะถูกแบ่งออกเป็นเครื่องละ 10 เมกะบิตต่อวินาที
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://www.mindphp.com/images/knowledge/sw1.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.3 ฮับ (HUB)
                        </Badge>
                    </Stack>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="http://www.kssintertech.co.th/files/article/hub%20switch/hubsani.gif" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.4 การทำงานของฮับ
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.4 บริดจ์ (Bridge) บริดจ์เป็นอุปกรณ์ที่ทำหน้าที่คล้ายกับสะพานเชื่อมโยงระหว่างสองเครือข่ายขึ้นไป
                        ทำหน้าที่เชื่อมต่อเครือข่ายสองเครือข่ายที่ใช้ทอพอโลยีเดียวกันเข้าด้วยกันแลพทั้งสองเครือข่ายใช้โปรโทคอลสื่อสารเดียวกันหรือแตกต่างกันก็ได้
                        บริดจ์ทำหน้าที่ในการกลั่นกรองเฟรมข้อมูลที่ถูกส่งออกจากแหล่งข้อมูลและตรวจสอบว่าปลายทางที่ต้องรับข้อมูลอยู่ในระบบเครือข่ายเดียวกับแหล่งส่งข้อมูลหรือไม่
                        การสื่อสารที่เกิดขึ้นจะไม่มีการส่งเฟรมข้อมูลกระจายไปทั่วเครือข่าย มีการแบ่งแยกเครื่องออกจากกันอย่างชัดเจน
                        ช่วยในการควบคุมความคับคั่งของข้อมูลที่สื่อสารบนเครือข่ายได้ ซึ่งแตกต่างฮับที่เป็นอุปกรณ์ทวนสัญญาณเท่านั้น
                        ไม่ได้แบ่งแยกเครือข่ายออกจากกัน นอกจากนี้บริดจ์ยังสามารถทำหน้าที่ตรวจสอบความถูกต้องของข้อมูลที่ส่งได้ในเบื้องต้น
                        การทำงานของบริดจ์จะทำงานอยู่ในชั้นเขื่อมข้อมูลบนแบบจำลองโอเอสไอ
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="data:image/jpeg;base64,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" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.5 บริดจ์ (Bridge)
                        </Badge>
                    </Stack>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://busarasite.files.wordpress.com/2016/02/30.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.6 การใช้อุปกรณ์บริดจ์
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.5 สวิตช์ (Switch) สวิตช์เป็นอุปกรณ์ในการเชื่อมต่อในระบบเครือข่าย ทำหน้าที่อยู่ในเลเยอร์ที่2 ถูกพัฒนามาแทนที่ฮับ
                        สวิตช์สามารถส่งข้อมูลที่ได้รับมาจากพอร์ตหนึ่งไปยังเฉพาะพอร์ตที่เป็นปลายทางเท่านั้น
                        ทำให้คอมพิวเตอร์ที่เชื่อมต่อกับพอร์ตที่เหลือสามารถส่งข้อมูลถึงกันและกันได้ในเวลาเดียวกัน
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://i1.wp.com/saixiii.com/wp-content/uploads/2017/05/Switch.jpg?resize=300%2C200&ssl=1" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.7 สวิตช์ (Switch)
                        </Badge>
                    </Stack>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://il.mahidol.ac.th/e-media/computer/network/images/clip_image004_0001.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.8 การส่งข้อมูล
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.6 เราท์เตอร์ (Router) เราท์เตอร์เป็นอุปกรณ์ที่ทำหน้าที่ในเลเยอร์ที่3 หรือชั้นเครือข่าย
                        และเป็นอุปกรณ์ที่ใช้เชื่อมโยงระหว่างหลาย ๆ เครือข่ายเข้าด้วยกัน การสื่อสารที่เกิดขึ้น มักจะเป็นการสื่อสารในระยะไกล
                        แตกต่างจากสวิตช์ทีจะใช้ในการสื่อสายภายในองค์กรเท่านั้น แต่เราท์เตอร์สามารถเชื่อมต่อระหว่างองค์กรได้
                        และเครือข่ายที่เชื่อมต่อด้วยเราท์เตอร์ คือเครือข่ายอินเทอร์เน็ต
                        ดั้งนั้นการสื่อสารในระยะไกลเหล้านี้จะทำงานโดยใช้โปรโทคอลทีซีพี/ไอพี และใช้เลขที่อยู่ไอพีเป็นหมายเลขเพื่อสร้างการสื่อสาร
                        ซึ่งมีความสำคัญมากที่สุด
                    </Text>
                    <Heading fontSize={"3xl"} color="#04293A">
                        การทำงานของเราท์เตอร์สามารถแบ่งออกได้เป็นการทำงาน 2 ส่วน
                    </Heading>
                    <Text fontSize={"3xl"} color="#04293A">
                        1.การหาเส้นทางส่งข้อมูลที่ดีที่สุด
                    </Text>
                    <Text fontSize={"3xl"} color="#04293A">
                        2.การส่งข้อมูลสู่เครือข่าย
                    </Text>
                    <Text fontSize={"3xl"} color="#04293A">
                        การกำหนดหาเส้นทางที่ดีที่สุดมีหลายวิธี เช่น
                        การพิจารณาจำนวนการเชื่อมต่อหรือโหนดที่ต้องผ่านขณะที่ข้อมูลถูกส่งไปสู่เครื่องรับข้อมูลปลายทาง เป็นต้น
                        เราท์เตอร์จะใช้เลขที่อยู่ไอพีของเครื่องปลายทางที่ส่งมาพร้อมกับแพ็กเก็ต สำหรับตารางการหาเส้นทาฃ (Routing Table)
                        ที่เก็บในหน่วยความจำของเราท์เตอร์ จะกำหนดเส้นทางในการส่งของแพ็กเก็ตไปสู่ปลายทางที่ต้องการ
                        โดยส่วนใหญ่เราท์เตอร์จะมีการปรับค่าในตารางการหาเส้นทางจากข้อมูลเส้นทางที่ได้จากเราท์เตอร์อื่นๆ
                        ที่อยุ่ติดกันเพื่อให้ได้เส้นทางที่ดีที่สุด ในการส่งข้อมูลสู่ช่องทางการสื่อสารแต่ละเส้นทางการสื่อสาร
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image src="https://inwfile.com/s-cw/ll5c2q.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.9 เราท์เตอร์ (Router)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.1.7 โมเด็ม (Modem) โมเด็มเป็นอุปกรณ์ที่ทำหน้าที่แปลงสัญญาณจากคอมพิวเตอร์ให้สามารถส่งสัญญาณผ่านสายโทรศัพท์
                        เพื่อติดต่อสื่อสารกับคอมพิวเตอร์อื่นที่อยู่ต่างเครือข่ายได้
                        โมเด็มเป็นเสมือนโทรศัพท์สำหรับคอมพิวเตอร์ที่ช่วยให้ระบบคอมพิวเตอร์สามารถสื่อสารกับคอมพิวเตอร์อื่น ๆ ได้ทั่วโลก
                        โมเด็มจะทำงานสำเร็จจนได้ด้วยการเชื่อมต่อระหว่างคอมพิวเตอร์เข้าคู่สายของโทรศัพท์ธรรมดาคู่หนึ่ง
                        ซึ่งโมเด็มจะทำการแปลงสัญญาณดิจิทัล (Digital Signal) จากเครื่องคอมพิวเตอร์ให้เป็นสัญญาณแอนะล็อก (Analog Signal)
                        เพื่อให้สามารถส่งไปบนคู่สายของโทรศัพท์ก็ได้
                    </Text>
                    <Heading fontSize={"3xl"} color="#142850">
                        โดยแบ่งลักษณะโมเด็มเป็น 2 ชนิด คือ โมเด็มแบบติดตั้งภายใน และโมเด็มแบบติดตั้งภายนอก
                    </Heading>
                    <Text fontSize={{ base: "xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        1.โมเด็มแบบติดตั้งภายใน (Internal Modem) โมเด็มแบบที่การ์ดเสียบเข้ากับสล็อต (slot) หรือช่องต่อ จะติดตั้งกับสล็อตแบบพีซีไอ
                        (Slot PCI) ที่อยู่ภายในเครื่องคอมพิวเตอร์ทำให้ไม่ต้องอาศัยกระแสไฟภายนอกหรือสายเคเบิลในการเชื่อมต่อ
                        คอมพิวเตอร์และแล็ปท็อปจะติดตั้งโมเด็มประเภทนี้ไว้ในตัวเครื่องแล้ว ทำให้ไม่เปลืองพื้นที่ใช้งานสิ้นเปลืองกระแสไฟฟ้าน้อย
                        และ่งข้อมูลได้เร็วกว่าแบบติดตั้งภายนอก แต่ถ้าทำงานไปนาน ๆ จะเกิดความร้อนสะสมภายในตัวเครื่อง
                        ทำให้สิ้นเปลืองกระแสไฟฟ้าสำหรับการเลือกซื้อโมเด็มแบบติดตั้งภายใน และต้องคำนึงถึงแบบของสล็อตที่ว่างอยู่ในเครื่องคอมพิวเตอร์ด้วย
                        โดยต้องตรวจสอบว่าสล็อตที่ว่างอยู่บนเมนบอร์ดเป็นสล็อตแบบพีซีไอ(PSI)หรือแบบไอเอสเอ (ISA)
                        ต้องเลือกให้ถูกต้องและเหมาะสมกับการใช้งาน แต่ถ้าบนเมนบอร์ดของคอมพิวเตอร์มีสล็อตทั้ง 2 แบบ ควรเลือกใช้แบบพีซีไอเพราะ
                        แบบพีซีไอราคาถูกกว่าและทำงานได้เร็ว
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image boxSize="500px" src="https://cf.shopee.co.th/file/8cf9bed500e0e3712af6fc8da07d3c72" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.10 โมเด็มแบบติดตั้งภายใน (Internal Modem)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#1B2430" p={6}>
                        2.โมเด็มแบบติดตั้งภายนอก (External Modem) โมเด็มแบบติดตั้งถายนอกจะใช้อาศัยกระแสไฟจากแยกจากเครื่องคอมพิวเตอร์ต่างหาก
                        ทำให้ไม่ต้องใช้กระแสไฟร่วมกับหน่วยประมวลผลกลางหรืออุปกรณ์อื่น
                        การเชื่อมต่อจะใช้สายเคเบิลในการเชื่อมต่อเข้ากับคอมพิวเตอร์ผ่านพอร์ตต่าง ๆ เช่น พอร์ตอนุกรม (Serial Port) ยูเอสบีพอร์ต (USB
                        Port) หรือ ไฟร์ไวร์พอร์ต ( FireWire Port) ของแล็ปท็อป เป็นต้น
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image boxSize="500px" src="https://itmoomoo.files.wordpress.com/2013/04/x3500_left-angle_final_sm.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.11 โมเด็มแบบติดตั้งภายนอก (External Modem)
                        </Badge>
                    </Stack>
                    <Text fontSize={"3xl"} color="#142850">
                        โมเด็มชนิดนี้จะมีสัญญาณไฟบอกสถานะการทำงานด้วย เพื่อบอกให้ผู้ใช้ทราบว่าตัวโมเด็กทำงานปกติหรือไม่
                        สะดวกในการย้ายไปใช้กับเครื่องคอมพิวเตอร์เครื่องอื่น
                        เพียงแต่มีพอร์ตอนุกรมที่ว่างและมีพื้นที่วางตัวโมเด็มที่ต้องติดตั้งอยู่ภายนอก ส่วนราคาค่อนข้างแพงกว่าโมเด็มแบบติดตั้งภายใน
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#142850" p={6}>
                        2.1.8 เกตเวย์(Gateway)
                        เกตเวย์เป็นอุปกรณ์ที่นำไปใช้งานเพื่อเป็นประตูสำหรับการเชื่อมต่อโยงเครือข่ายคอมพิวเตอร์ที่มีสถาปัตยกรรมระบบที่แตกต่างกัน เช่น
                        เครื่องคอมพิวเตอร์ภายในเครือข่ายกับเครื่องเมนเฟรมคอมพิวเตอร์
                        ดังนั้นเกตเวย์จึงเป็นอุปกรณ์สำคัญสำหรับระบบคอมพิวเตอร์ที่มีสถาปัตบกรรมที่แตกต่างกัน ให้สามารถเชื่อมโยงเครือข่ายเข้าด้วยกันได้
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image
                            boxSize="500px"
                            src="https://marvel-b1-cdn.bc0a.com/f00000000017219/documents.trendmicro.com/images/TEx/articles/protocol-gateways-fig-1.png"
                        />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.12 เกตเวย์(Gateway)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#142850" p={6}>
                        2.2 อุปกรณ์ที่ใช้เชื่อมต่อแบบไร้สาย สำหรับการเชื่อมต่อเครื่องคอมพิวเตอร์กับระบบเครือข่ายแบบไร้สายนั้น
                        จำเป็นต้องมีอุปกรณ์ที่ใช้ในการเชื่อมต่อ เช่น แอกเซสพอยต์(Access Point) การ์ดแลนไร้สาย(Card Lan) เสาอากาศ(Antenna)
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#142850" p={6}>
                        2.2.1 แอกเซสพอยต์ (Access Point) แอกเซสพอยต์เป็นอุปกรณ์ที่เป็นศูนย์กลางในการเชื่อมต่อสำหรับระบบเครือข่ายแบบไร้สาย
                        ทำหน้าที่เป็นตัวกระจายสัญญาณแบบไร้สาย เพื่อให้เครื่องคอมพิวเตอร์รับสัญญาณการสื่อสารกับเครือข่ายได้
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image boxSize="500px" src="https://www.abshop.in.th/wp-content/uploads/2021/04/EAP620-HD_WEB-2.jpg" />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.13 แอกเซสพอยต์ (Access Point)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#142850" p={6}>
                        2.2.2 การ์ดแลนไร้สาย(Card Lan Wireless) ปัจจุบันการ์ดแลนไร้สายถูกออกแบบให้ใช้กับเครื่องคอมพิวเตอร์ประเภทต่าง ๆ
                        มีความเร็วในการส่งข้อมูล ปัจจุบันมีความเร็วถึง 108 เมกะบิตต่อวินาที
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#472D2D" p={6}>
                        1.การ์ดแลนไร้สายแบบพีซีไอ (Peripheral Component Interconnect: PCI) สำหรับการติดตั้งบนเครื่องคอมพิวเตอร์แบบตั้งโต๊ะ
                        เพื่อเชื่อมต่อกับระบบเครือข่ายแบบไร้สาย มีความเร็วสำหรับการรับส่งตั้งแต่ 11 ถึง 54 เมกะบิตต่อวินาที
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#472D2D" p={6}>
                        2.การ์ดแลนไร้สายแบบพีซีเอ็มซีไอเอ (Personal Computer Memory Card Onternational Association: PCMCIA)
                        ลักษณะเป็นแผ่นโลหะสี่เหลี่ยมผืนผ้า ที่มีอินเตอร์เฟซแบบพีซีเอ็มซีไอเอ มีเสาอากาศอยู่ภายในการ์ด
                        ทำให้สามารถเชื่อมต่อรับสัญญาณจากแอกเซสพอยต์ ปัจจุบันไม่ต้องมีการใช้งาน
                        เนื่องจากโน็ตบุ๊กทั่วไปติดตั้งการ์ดแลนไร้สายไว้ภายในเรียบร้อยแล้ว
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#472D2D" p={6}>
                        3.การ์ดไลนไร้สายแบบเอก์เพรส (Express Card: EC) ส่วนใหญ่ใช้กับโน๊ตบุ๊กรุ่นสหม่
                        การ์ดมีขนาดเล็กและมีความเร็วในการรับส่งสูงกว่าแบบพีซีเอ็มซีไอเอ
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#472D2D" p={6}>
                        4.การ์ดแลนไร้สายแบบยูเอสบี (Universal Serial Bus: USB)
                        ปัจจุบันเครื่องคอมพิวเตอร์ทั้งแบบตั้งโต๊ะและแบบโน๊ตบุ๊กมีพอร์ตมาตรฐานยูเอสบีติดตั้ง ภายในเครื่องคอมพิวเตอร์มาเรียบร้อย
                        ทำให้สะดวกในการติดตั้งการ์ดแลนไร้สายแบบยูเอสบี ไม่จำเป็นต้องเปิดตัวเครื่องในการติดตั้ง
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image
                            boxSize="500px"
                            src="https://sites.google.com/site/nganbrikarkhxngkhxmphiwtexr/_/rsrc/1486690718984/kar-cheuxm-tx-rabb-kherux-khay-lan-ri-say-ni-rabb-ptibati-ngan/6.jpg"
                        />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.14 การ์ดแลนไร้สายแบบยูเอสบี (Universal Serial Bus: USB)
                        </Badge>
                    </Stack>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#160F30" p={6}>
                        2.2.3 เสาอากาศ (Wirless Antenna) หน้าที่หลักของเสาอากาศ คือ
                        ที่ส่งคลื่นวิทยุที่ส่งออกมาจากภาคส่งของอุปกรณ์ประเภทที่ใช้เป็นคลื่นแม่เหล็กไฟฟ้ากระจายออกไปในอากาศ
                        และทำหน้าที่รับคลื่นที่อุปกรณ์ไวร์เลสแลนเครื่องอื่น ๆ ส่งออกมาแล้งแปลงกลับให้อยู่ในรูปของกระแสไฟฟ้าส่งให้ภาครับต่อไป
                    </Text>
                    <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#160F30" p={6}>
                        เสาอากาศเป็นอุปกรณ์ชนิดที่มีความสำคัญมาก หากเสาอากาศไม่มีคุณภาพจะส่งสัญญาณไม่ออก ไม่สามารถรับสัญญาณได้เลย
                        มีตัวแปรหลายค่าที่ใช้บอกคุณสมบัติของเสาอากาศ เช่น เกน (Gain)
                        เป็นตัวบอกว่าเสาอากาศนี้มีคุณสมบัติในการแปลงคลื่นแม่เหล็กไฟฟ้ามาเป็นสัญญาณไฟฟ้าได้ดีเพียงใด ค่าบีมวิดท์ (Beamwidth)
                        บอกรูปร่างลักษณะการกระจายคลื่นว่าเป็นค่าเอสดับเบิลยูอาร์ (SWR) เป็นตัวเลขที่บอกถึงคลื่นที่สะท้อนกลับมาเมื่อส่งสัญญาณออกอากาศไป
                    </Text>
                    <Heading fontSize={{ base: "xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#160F30" p={6}>
                        1.เสาอากาศแบบรอบตัว (Omni Directional Antenna)
                    </Heading>
                    <Text fontSize={"3xl"} color="#493323">
                        มีทิศทางการแพร่กระจายคลื่นรอบทิศทาง 360 องศา ให้ระยะทางที่ไม่ไกลนัก ในระยะรัศมี 80 เมตร
                        เหมาะสำหรับใช้ติดต่อกับเครื่องลูกข่ายที่เคลื่อนไหวอยู่ในตำแหน่งและทิศทางที่ไม่แน่นอน
                    </Text>
                    <Heading fontSize={{ base: "xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#160F30" p={6}>
                        2.เสาอากาศแบบทิศทาง (Directional Antenna)
                    </Heading>
                    <Text fontSize={"3xl"} color="#493323">
                        มีทิศทางการแพร่กระจายของคลื่นที่ทิศทางชัดเจน ให้สัญญาณที่ความแรงในแนวตรง เหมาะสำหรับการติดต่อระหว่างจุดต่อจุด
                        สามารถเพิ่มระยะทางการใช้งานได้ไกลกว่าเสาอากาศแบบรอบตัว ข้อเสียคือถ้าไม่อยู่ในทิศทางการแพร่กระจายของคลื่น
                        จะไม่สามารถรับสัญญาณได้ ชื่อของเสาอากาศแบบที่นิยมใช้ ได้แก่ เสาอากาศแบบเซ็กเตอร์ (Sector Antenna) เสาอากาศแบบยาดิ (Yagi
                        Antenna) เสาอากาศแบบกริด (Grid Antenna) และเสาอากาศแบบจาน (Solid Dish Antenna) เป็นต้น
                    </Text>
                    <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                        <Image
                            boxSize="500px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/136_to_174_MHz_base_station_antennas.jpg/1200px-136_to_174_MHz_base_station_antennas.jpg"
                        />
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                            รูปที่ 2.15 เสาอากาศ (Antenna)
                        </Badge>
                    </Stack>
                    <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"} color="#8C0000" p={6}>
                        สรุปสาระสำคัญ
                    </Heading>
                    <Text fontSize={"3xl"} color="#8C0000">
                        อุปกรณ์ที่ใช้ในระบบเครือข่ายแบบไร้สายในปัจจุบันนั้นมีอยู่มากมาย ได้แก่ เน็ตเวิร์กการ์ด ฮับ สวิตช์ บริดจ์ โมเด็ม เราท์เตอร์
                        เกตเวย์ เป็นต้น เนื่องจากการพัฒนาทางด้านเทคโนโลยีในปัจจุบันเป็นไปอย่างรวดเร็ว จึงทำให้อุปกรณ์ต่าง ๆ
                        ต้องมีคุณสมบัติที่รองรับกับการพัฒนาต่าง ๆ ซึ่งหากผู้ใช้ทราบถึงคุณสมบัติ
                        สำหรับการเชื่อมต่อกับเครื่องคอมพิวเตอร์กับระบบเครือข่ายไร้สายนั้น มีอุปกรณ์ที่ใช้สำหรับการเขื่อมต่อหลายประเภท ได้แก่
                        แอกเซสพอยต์ การ์ดแลนไร้สายแบบพีซีไอ พีซีเอ็มซีไอเอ เอกซ์เพรส ยูเอสบี รวมถึงเสาอากศแบบต่าง ๆ
                        เพื่อแพร่กระจายคลื่นออกไปสำหรับการรับส่งข้อมูล
                    </Text>
                </Box>
            </Container>
        </ChakraProvider>
    )
}
