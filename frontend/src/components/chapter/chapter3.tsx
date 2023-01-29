import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box, Spacer, Image, Badge, Center } from "@chakra-ui/react"

export default function chapter1() {
    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"}>
                    บทที่ 3 ประเภทของระบบเครือข่าย
                </Heading>
            </Stack>
            <Text fontSize={{ base: "3xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black" p={6}>
                3.1 เครือข่ายส่วนบุคคล (Personal Area Network)
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"3xl"} color="#251B37">
                    หรือเรียกว่า “เครือข่ายแพน (PAN)” เป็นเครือข่ายคอมพิวเตอร์ที่เชื่อมต่อกัน โดยใช้เทคโนโลยีการติดต่อสื่อสารไร้สายขนาดเล็ก
                    ใช้ในการสื่อสารระยะใกล้ระหว่างอุปกรณ์อิเล็กทรอนิกส์ เช่น คอมพิวเตอร์แบบวางดักหรือแล็ปท็อป (Laptop)
                </Text>
                <Text fontSize={"3xl"} color="#251B37">
                    โดยพื้นฐานแล้วอุปกรณ์เหล่านี้จะไม่สามารถแลกเปลี่ยนข้อมูลซึ่งกันและกันได้
                    เพื่อสนับสนุนให้อุปกรณ์เหล่านี้มีความเท่าเทียมกันกับเครื่องคอมพิวเตอร์ส่วนบุคคลที่สามารถแลกเปลี่ยนข้อมูลระหว่างกันได้
                    เทคโนโลยีไร้สายที่นิยมใช้เครือข่ายส่วนบุคคล คือ บลูทูธ (Bluetooth) ซึ่งเป็นมาตรฐานที่สามารถใช้สร้างเครือข่ายไร้สาย
                    เครือข่ายส่วนบุคคล
                </Text>
                <Text fontSize={"3xl"} color="#251B37">
                    โดยใช้มาตรฐาน IEEE802.15.1 รองรับ เช่น
                    การเชื่อมต่อระหว่างคอมพิวเตอร์แบบวางดักหรือการเชื่อมต่อระหว่างพีดีเอกับโทรศัพท์เคลื่อนที่ส่วนบุคคล
                    เป็นการเชื่อมต่อโดยใช้คลื่นวิทยุที่เหมือนกับมาตรฐาน 802.11 ใช้ไฟฟ้าต่ำกว่า อุปกรณ์จึงมีขนาดเล็ก ส่งผลให้การรบกวนของคลื่นมีน้อยลง
                    มีระยะทางการใช้งานได้ไกลประมาณ 10 เมตร (30ฟุต) และทำงานที่ความเร็วประมาณ 700 กิโลบิตต่อวินาที
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="https://sites.google.com/site/kanyaphat16305/_/rsrc/1423198767334/kherux-khay-khxmphiwtexr/kherux-khay-swn-bukhkhl-hrux-phaen-personal-area-network-pan/Personal_Area_Network.png" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.1 การเชื่อมต่อเครือข่ายส่วนบุคคล
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#251B37" p={6}>
                    3.2 เครือข่ายท้องถิ่น (Local Area Network)
                </Heading>
                <Text fontSize={"3xl"} color="#251B37">
                    หรือเรียกว่า “เครือข่ายแลน (LAN)” ปัจจุบันมีความเร็วสูงถึง 100 หรือ 1000 เมกะบิตต่อวินาที
                    เป็นเครือข่ายคอมพิวเตอร์ที่ครอบคลุมพื้นที่เล็กๆ เป็นเครือข่ายที่สามารถติดตั้งได้บนพื้นที่ที่จำกัด เช่น ภายในห้องเดียวกัน
                    ภายในชั้นเดียวกัน หรือภายในอาคารเดียวกัน ทำให้คอมพิวเตอร์ทั้งหมดสามารถเข้าถึงเครื่องอื่นที่ต่ออยู่ในเครือข่าย
                    สามารถใช้ทรัพยากรต่างๆ ร่วมกันได้ เช่น เครื่องพิมพ์ โปรแกรมต่างๆ และไฟล์ข้อมูล ถ้าต้องการเชื่อมโยงเครือข่ายให้ไกลออกไป
                    ต้องใช้เครื่องทวนสัญญาณเพื่อยืดระยะทางการสื่อสารให้ไกลออกไป
                    โดยเครือข่ายแลนที่เชื่อมโยงในระยะทางที่ไกลต้องใช้สื่อกลางในการส่งข้อมูล คือ สายไฟเบอร์ออปติก เพื่อใช้เป็นแกนหลักหรือแบ็คโบน
                    (Backbone) และสามารถส่งได้ในอัตราความเร็วสูง เทคโนโลยีแลนมีหลายประเภท เช่น Ethernet, ATM, Token Ring, FDDI เป็นต้น
                    แต่ที่นิยมมากที่สุดในปัจจุบันคือ อีเธอร์เน็ต (Ethernet) อีเธอร์เน็ตจำแนกออกได้หลายประเภทย่อย ขึ้นอยู่กับความเร็ว ทอพอโลยี
                    และสายสัญญาณที่ใช้ เทคโนโลยีแลนแต่ละประเภทมีทั้งข้อดีและข้อเสียที่แตกต่างกัน
                    การเลือกใช้เทคโนโลยีนี้ควรให้เหมาะสมกับลักษณะการใช้งานเครือข่ายขององค์กร
                </Text>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    1.อีเธอร์เน็ต (Ethernet)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    ถูกคิดค้นตั้งแต่ทศวรรษ 1970 เป็นเทคโนโลยีชั้นนำของเครือข่ายท้องถิ่น อีเธอร์เน็ตตั้งอยู่บนมาตรฐานการส่งข้อมูลหรือโพรโทคอลCSMA/CD
                    (Carrier Sense Multiple Access with Collision Detection) ใช้สำหรับการเข้าใช้สื่อกลางการส่งสัญญาณที่แชร์กันระหว่างสถานีหรือโหนดต่าง
                    ๆ มีขั้นตอนคือ เมื่อโหนดใด ๆ ต้องการส่งข้อมูลต้องคอยฟังก่อนว่ามีโหนดอื่นกำลังส่งข้อมูลอยู่หรือไม่
                    ถ้ามีให้รอจนกว่าเครื่องนั้นจะทำการส่งข้อมูลเสร็จสิ้น แล้วค่อยเริ่มส่งข้อมูล และในขณะที่กำลังส่งข้อมูลนั้น
                    ต้องตรวจสอบว่ามีการชนกันของข้อมูลเกิดขึ้นหรือไม่ ถ้าเกิดการชนกันของข้อมูลให้หยุดการส่งข้อมูลทันที
                    แล้วเริ่มกระบวนการส่งข้อมูลใหม่อีกครั้ง อีเธอร์เน็ตจะใช้สื่อกลางร่วมกัน เรียกว่า บัส (Bus)
                    จึงมีโหนดที่ส่งข้อมูลได้แค่โหนดเดียวในขณะในขณะหนึ่ง
                    การชนกันของข้อมูลเกิดขึ้นเนื่องจากมีมากกว่าหนึ่งโหนดที่ทำการส่งข้อมูลบนสื่อกลางในเวลาเดียวกัน ข้อมูลจะเป็นขยะหรืออ่านไม่ได้
                    เมื่อมีจำนวนโหนดเพิ่มมากขึ้น ความน่าจะเป็นที่ข้อมูลชนกันจะเพิ่มขึ้นตามไปด้วย อีเธอร์เน็ตจะมีอัตราการส่งข้อมูลหรือแบนด์วิธที่ 10
                    Mbps ในขณะที่ฟาสต์อรเธอร์เน็ต (Fast Ethernet) มีการทำงานคล้าย ๆ กัน เพียงแค่มีอัตราข้อมูลที่สูงกว่า 10 เท่า ส่วนกิกะบิตอีเธอร์เน็ต
                    (Gigabit thernet) มีอตราข้อมูลสูงสุดคือ 1000 Mbps เรียกว่าเทนกิกะบิตอีเธอร์เน็ต (10G Ethernet)
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="data:image/png;base64,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" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.2 เครือข่ายอีเธอร์เน็ต
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    2.โทเคนริง (Token Ring)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    เป็นเครือข่ายที่มีการเชื่อมต่อเป็นวงแหวน เป็นเครือข่ายที่กำลังล้าสมัยเพราะมีการใช้น้อยลง
                    โทเคนริงมักนิยมใช้กันในสมัยแรกเนื่องจากมีข้อดีคือการส่งข้อมูลในเครือข่ายจะไม่มีการชนกันของข้อมูล
                    ข้อเสียคือความสามารถในการขยายเครือข่ายและการบริการจัดการเครือข่ายทำได้ยาก
                </Text>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    3.เอทีเอ็ม (Asynchronous Transfer Mode: ATM)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    เป็นมาตรฐานการรับส่งข้อมูลที่กำหนดโดย ITU-T (Internaional Telecommuication Standard Sector) ซึ่งจะรวมบริการต่าง ๆ เช่น ข้อมูลเสียง
                    วิดีโอเข้าด้วยกันแล้วส่งเป็นเซลล์ (Cell) ข้อมูลมีขนาดเล็กและคงที่เป็นเครือข่ายที่รองรับแบนด์วิธตั้งแต่ Mbps จนถึง Gbps
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="https://mindphp.com/images/stories/encyclopedia/atm2.gif" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.3 เอทีเอ็ม (Asynchronous Transfer Mode: ATM)
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    4.เครือข่ายแลนไร้สาย (Wireless Local Area Network/ WLANs)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    เป็นเทคโนโลยีเครือข่ายแบบไร้สาย มีการนำระบบแลนไร้สาย ติดตั้งเพื่อให้บริการตั้งแต่องค์กรขนาดเล็กไปจนถึงขนาดใหญ่
                    เป็นการขยายการให้บริการเครือข่ายสัญญาณแบบเดิม และมีการใช้บริการอย่างแพร่หลาย โดยเฉพาะเครือข่ายแลนไร้สาย ซึ่งเป็นมาตรฐาน Wi-Fi
                    ดั้งนั้นผู้ผลิตอุปกรณ์คอมพิวเตอร์จึงได้ติดตั้งรวมเข้ากับอุปกรณ์ของผู้ใช้บริการ เช่น แล็ปท็อป แท็ปเล็ต สมาร์ตโฟน
                    เพื่ออำนวยความสะดวกในการใช้งานมากยิ่งขึ้น เครือข่ายแลนไร้สายประกอบด้วย IEEE 802.11
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="https://tuemaster.com/wp-content/uploads/2021/03/123456.png" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.4 เครือข่ายแลนไร้สาย (Wireless Local Area Network/ WLANs)
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    3.3 เครือข่ายระดับเมือง (Metropolitan Area Network)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    หรือเรียกว่า “เครือข่ายแมน (MAN)” เป็นเครือข่ายในเขตเมืองครอบคลุมพื้นที่เขตเมืองหรือในจังหวัดเดียวกัน
                    เป็นเครือข่ายคอมพิวเตอร์ที่มีขนาดใหญ่กว่าเครือข่ายท้องถิ่น เป็นการเชื่อมโยงคอมพิวเตอร์ขององค์กรเข้าด้วยกัน เช่น
                    การเชื่อมต่อคอมพิวเตอร์ของสาขาต่างๆ ในเขตเมืองหรือนครหลวง เพื่อสื่อสารและแบ่งปันข้อมูลระหว่างกันภายในองค์กร เช่น
                    เครือข่ายธนาคารแห่งประเทศไทย เครือข่ายการสื่อสารขององค์กรการโทรศัพท์
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="https://sites.google.com/site/wwwrujbodyslamcom/_/rsrc/1344327210559/kar-suxsar-khxmul-laea-kherux-khay/prapheth-khxng-kherux-khay/Cc751420.wan_msp02_big%28l%3Den-us%29.gif?w=144" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.5 เครือข่ายระดับเมือง (Metropolitan Area Network)
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#16213E" p={6}>
                    3.4 เครือข่ายระดับประเทศ (Wide Area Network)
                </Heading>
                <Text fontSize={"3xl"} color="#16213E">
                    หรือเรียกว่า “เครือข่ายแวน (WAN)” เป็นเครือข่ายคอมพิวเตอร์เกิดขึ้นจากการเชื่อมต่อแลนหลายๆ วงเข้าด้วยกัน
                    โดยเครือข่ายแวนที่เชื่อมต่อ ไม่จำกัดว่าจะเป็นองค์เดียวกันหรือไม่ การเชื่อมต่อบริเวณกว้างนั้น
                    จำเป็นต้องใช้อุปกรณ์เชื่อมต่อที่หลากหลาย เช่น ดาวเทียม คลื่นไมโครเวฟ หรือเส้นใยแก้วนำแสง เป็นต้น
                    ความเร็วในการเขื่อมต่อระยะไกลจะไม่เร็วเทียบเท่ากับความเร็วของแลนที่ใช้ในองค์กร
                    ดังนั้นความเร็วในการส่งข้อมูลอาจมีความเร็วประมาณหนึ่งหรือสองเมกะบิตต่อวินาที
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/LAN_WAN_scheme.svg/1200px-LAN_WAN_scheme.svg.png" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 3.6 เครือข่ายระดับประเทศ (Wide Area Network)
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#B30753">
                    สรุปสาระสำคัญ
                </Heading>
                <Text fontSize={"3xl"} color="#B30753">
                    ประเภทของเครือข่ายคอมพิวเตอร์มีการจำแนกตามขนาดพื้นที่หรือระยะทางที่เขื่อมต่อกัน ซึ่งแบ่งออกได้เป็น 4 ประเภท คือ
                    เครือข่ายส่วนบุคลเป็นเครือข่ายคอมพิวเตอร์ที่เชื่อมต่อกัน โดยใช้เทคโนโลยีการติดต่อสื่อสารไร้สายขนาดเล็ก
                    เพื่อใช้ในการสื่อสารระยะใกล้เครือข่ายท้องถิ่น เป็นเครือข่ายคอมพิวเตอร์ที่ครอบคลุมพื้นที่เล็กๆ
                    เป็นเครือข่ายที่สามารถติดตั้งได้บนพื้นที่ที่จำกัดเครือข่ายระดับเมือง
                    เป็นเครือข่ายในเขตเมืองครอบคลุมพื้นที่เบตเมืองหรือในจังหวัดเดียวกัน
                    และเครือข่ายระดับประเทศเป็นเครือข่ายคอมพิวเตอร์ที่เชื่อมต่อบริเวณกว้าง เช่น เครือข่ายอินเทอร์เน็ต เป็นต้น
                </Text>
            </Box>
        </Container>
    )
}
