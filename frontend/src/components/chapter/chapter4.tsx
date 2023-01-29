import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Grid,
    GridItem,
    Box,
    Spacer,
    Image,
    Badge,
    ListItem,
    OrderedList,
} from "@chakra-ui/react"

export default function chapter1() {
    return (
        <Container maxW={"9xl"}>
            <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} lineHeight={"110%"}>
                    บทที่ 4 สื่อกลางนำสัญญาณในระบบเครือข่าย
                </Heading>
            </Stack>
            <Text fontSize={{ base: "3xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black" p={6}>
                4.1 สื่อกลางนำสัญญาณแบบใช้สาย
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"3xl"} color="#493323">
                    สื่อกลางการส่งข้อมูลเป็นส่วนประกอบที่สำคัญมากในระบบเครือข่ายคอมพิวเตอร์ ซึ่งทำให้สามารถติดต่อสื่อสารข้อมูลถึงกันได้ทั่วโลก
                    เครือข่ายอินเทอร์เน็ตมีความก้าวหน้าด้วยเทคโนโลยีการสื่อสารโดยใช้สื่อกลางส่งข้อมูลแบบใช้สายและการสื่อสายโดยใช้สื่อกลางส่งข้อมูลแบบไร้สาย
                    สื่อกลางในการส่งข้อมูลแบบใช้สาย (Guided Media/Wire Media) เป็นสื่อกลางที่ใช้ส่งข้อมูลแบบใช้สายได้มีการใช้งานมานาน
                    โดยเฉพาะระบบโทรศัพท์ฟื้นฐาน ซึ่งเปรียบเสมือนกับท่อส่งข้อมูลด้วยการส่งข้อมูลผ่านท่อไปยังอุปกรณ์ต่างๆ ได้แก่สายเกลียวคู่
                    สายคแอกเชียล และเส้นใยแก้วนำแสง มีรายละเอียดดังนี้
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.1.1 สายเกลียวคู่ (Twisted Pair Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    สายเกลียวคู่หรือเรียกทับศัพท์ว่า สายทวิสต์แพร์ เป็นสายสัญญาณของระบบเครือข่ายที่มีราคาถูกที่สุด
                    สายเกลียวคู่ประกอบด้วยสายทองแดงที่หุ้มด้วยฉนวนพลาสติกและนำสายทองแดงมาถักเป็นเกลียวคู่โดยสายคู่หนึ่งจะใช้สำหรับการสื่อสารหนึ่งช่องทาง
                    จำนวนคู่ที่เกิดจากการนำสาย 2 เส้น มาถักกันเป็นเกลียวคู่ซึ่งอาจมีจำนวนหลาย ๆ คู่
                    เช่นสายเกลียวคู่ที่ใช้กับเครือข่ายภายในเป็นสายชนิดแคต 5 (Cat-5) ภายในฉนวนห่อหุ้มจะมีจำนวนคู่สาย 4
                    เพื่อที่จะช่วยลดการแทรกแซงจากสัญญาณรบกวนในระดับที่สามารถยอมรับได้เท่านั้น สำหรับสายเกลียวคู่นั้น
                    สามารถทำการส่งสัญญาณข้อมูลแบบแอนะล็อกและแบบดิจิทัลแต่เนื่องจากสายเกลียวคู่จะมีการสูญเสียสัญญาณขณะที่ส่งสัญญาณจึงต้องมีเครื่องขยายสัญญาณ(Ampifier)
                    ใช้ในการส่งสัญญาณข้อมูลแบบแอนะล็อกในระยะไกล ๆ หรือทุก 5-6 กิโลเมตร ส่วนการส่งสัญญาณข้อมูลแบบดิจิทัลหากส่งในระยะไกล ๆ นั้น
                    จะต้องมีเครื่องทวน
                </Text>
                <Heading fontSize={"3xl"} color="#493323">
                    สัญญาณ (Repeater) ทุก ๆ ระยะ2-3 กิโลเมตร สำหรับสายเกลียวคู่มีสายใช้งานอยู่ 2 รูปแบบ ดังนี้
                </Heading>
                <Heading fontSize={"3xl"} color="#493323">
                    1.สายเกลียวคู่แบบชนิดไม่มีฉนวนหุ้ม (Unshielded Twisted Pair Cable: UTP)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    หรือนิยมเรียกง่าย ๆ ว่า “สายยูทีพี” เป็นสายเคเบิลขนาดเล็กคล้ายสายโทรศัพท์ 1 เส้น ดังรูปที่ 4.1 ภายในประกอบด้วยสายเกลียวคู่ 4 คู่
                    (8 เส้น) ตีเป็นเกลียวคู่ ๆ จึงมีขนาดกะทัดรัดแต่ลักษณะการเดินสายจะต้องเชื่อมต่อจากคอมพิวเตอร์หรืออุปกรณ์ในระบบเครือข่าย
                    ซึ่งในปัจจุบันเป็นสายนำสัญญาณที่ได้รับความนิยมแพร่หลายมากที่สุดเพราะราคาถูก ติดตั้งง่าย
                    เหมาะสำหรับเชื่อมต่ออุปกรณ์ที่มีระยะห่างไม่เกิน 100 เมตร
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image boxSize="500px" src="https://www.mindphp.com/images/knowledge/092559/18.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.1 รูปร่างของสายเกลียวคู่แบบไม่มีฉนวนหุ้มตีเกลียวเป็นคู่ ๆ จำนวน 4 คู่
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    2.สายเกลียวคู่แบบชนิดมีฉนวนหุ้ม (ShieldebTwistedPair Cable : STP)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    หรือเรียกว่า “สายเอสทีพี” จะมีลักษณะคล้ายกับสายยูทีพี ดังรูปที่ 4.2 ในสายเคเบิล 1 เส้น ประกอบด้วยสายเกลียวคู่ 4 คู่ (8 เส้น)
                    แต่สายเอสทีพี จะมีฉนวนโลหะอีกชั้นหนึ่งเพื่อป้องกันการเกิดสัญญาณรบกวนจากภายในทำให้ป้องกันได้ดีกว่าสายยูทีพี
                    ดังนั้นจะเห็นได้ว่าสายเอสทีพีนั้นจะมคุณภาพที่ดีกว่าและส่งข้อมูลด้วยความเร็วกว่าแต่จะมีต้นทุนที่สูงกว่า
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image
                        boxSize="500px"
                        src="https://i0.wp.com/www.thaigoodview.com/library/contest2552/type2/tech03/47/images/lesson1/content3-3_clip_image002.jpg"
                    />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.2 รูปร่างของสายเกลียวคู่แบบมีฉนวนหุ้ม
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.1.2 สายโคแอกเชียล (Coaxial Cabie)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    ในปัจจุบันนี้ด้วยเทคโนโลยีทางการสื่อสารได้พัฒนาไปอย่างมาก จนทำให้สายโคแอกเชียลหรือมักเรียกว่า สายโคแอก (Coax)
                    ที่เป็นสื่อกลางรุ่นแรกไม่เป็นที่นิยมและมีแนวโน้มที่จะเลิกใช้แต่ต้องกล่าวถึงเพราะอยู่สายโคแอกเชียลเป็นสายที่ทำด้วยทองแดงอยู่แกนกลาง
                    (Copper Core) หุ้มด้วยฉนวนป้องกันไฟรั่ว (Insulating Material) และมีโลหะถักเป็นตาข่ายเพื่อป้องกันสัญญาณรบกวน (Braided Outer
                    Conductor) และหุ้มด้วยฉนวนพลาสติกภายนอกอีกชั้นหนึ่ง (Protective Plastic Covering) มีช่วงความถี่ (Bandwidth) สูงถึง 500 MHz
                    สามารถป้องกันสัญญาณรบกวนจากคลื่นแม่เหล็กไฟฟ้าได้ดี มีความคงทนและส่งข้อมูลได้ไกล ในเครือข่ายคอมพิวเตอร์ใช้สายโคแอกเชียลที่เรียกว่า
                    อาร์จี-58/ยู (RG-58/U) ที่มีความต้านทานทางไฟฟ้า 50 โอห์ม สายโคแอกเชียลที่ใช้สำหรับระบบเครือข่ายมี 2 แบบ คือ สายโคแอกเชียลแบบบาง
                    ออกแบบภายใต้สถาปัตยกรรมทินอีเทอร์เน็ต(Thin Ethernet) ในมาตรฐาน 10BASE2 มีขนาดเส้นผ่านศูนย์กลางประมาณ 0.81 มิลลิเมตร
                    มีความสามารถส่งข้อมูลด้วยความเร็ว 10 เมกะบิตต่อวินาทีระยะการเชื่อมต่อได้ไกล 185 เมตร
                    และสายโคแอกเชียลออกแบบภายใต้สถาปัตยกรรมทิคอีเทอร์เน็ต (Thick Ethernet) ใช้ในมาตรฐาน 10BASE5 เป็นสายที่มีเส้นผ่านศูนย์กลางประมาณ
                    2.17 มิลลิเมตร มีความสามรถในการส่งข้อมูลด้วยความเร็ว 10 เมะกะบิดต่อวินาที ในระยะการเชื่อมต่อได้ไกล 500 เมตร
                    ซึ่งนิยมนำมาใช้เชื่อมต่อเส้นทางหลักสำหรับการส่งข้อมูล
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image boxSize="500px" src="https://sites.google.com/site/it39000009/_/rsrc/1467939620997/hnwy-thi-4/coaxcable2.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.3 โครงสร้างสายโคแอกเชียล
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.1.3 เส้นใยแก้วนำแสง (Optical Fiber Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    เส้นใยแก้วนำแสง หรือเรียกทับศัพท์ว่า ไฟเบอร์ออปติก ซึ่งได้มีการนำมาใช้งานในระบบเครือข่ายคอมพิวเตอร์อย่างมาก
                    เส้นใยแก้วนำแสงมีข้อดีกว่าสายแบบคู่บิดเกลียวและสายโคแอกเชียล คือ มีอัตราความเร็วในการสื่อสารที่สูงกว่าและส่งได้ในระยะทางที่ไกลกว่า
                    นอกจากนี้เส้นใยแก้วนำแสงยังไม่มีปัญหาในการแทรกสอดของคลื่นความถี่วิทยุและปลอดภัยจากการลักลอบดักข้อมูลจากบุคคลภายนอกเส้นใยแก้วนำแสงผลิตขึ้นจากใยแก้วบริสุทธิ์หล่อหลอมเป็นแกน
                    (Core) รอบ 1 แกนถูกห่อหุ้มไว้ด้วยใยแก้ว อีกชนิดหนึ่งทำเป็นเปลือกหรือแคลดดิ้ง (Cladding) แล้วถูกหุ้มด้วยส่วนป้องกันอีกชั้นหนึ่ง
                    (Jacket)
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image
                        boxSize="500px"
                        src="https://s3gw.inet.co.th:8082/smegp-image-1/prod/V1/2007202126022348C0C80D-87AE-4535-A468-F0F40F157030.jpeg"
                    />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.4 เส้นใยแก้วนำแสง
                    </Badge>
                </Stack>
                <Text fontSize={"3xl"} color="#493323">
                    คุณสมบัติของเนื้อแก้วนี้จะกระจายแสงออกซึ่งในกรณีนี้การสะท้อนของแสงกลับต้องเกิดขึ้นโดยผนังแก้วด้านข้างต้องมีดัชนีหักเหของแสงที่ทำให้แสงสะท้อนกับเพื่อลดการสูญเสียของพลังงานแสง
                </Text>
                <Heading fontSize={"3xl"} color="#493323">
                    วิธีการนี้แบ่งเป็นแบบ คือ แบบซิงเกิลโหมด
                </Heading>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    1.ซิงเกิลโหมด (Single Mode)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    เป็นการใช้ตัวนำแสงให้พุ่งตรงไปตามท่อแก้วโดยมีการกระจายแสงออกทางด้านข้างน้อยที่สุด
                    ซิงเกิลโหมดจึงเป็นเส้นใยแก้วนำแสงที่มีกำลังสูญเสียทางแสงน้อยที่สุดเหมาะใช้เชื่อมต่อระยะทางไกล ๆ
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    2.มัลติโหมด (Multimode)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    เป็นเส้นใยแก้วนำแสงที่มีลักษณะการกระจายแสงออกด้านข้างได้ดังนั้นจึงต้องสร้างให้มีดัชนีหักเหของแสงกับอุปกรณ์ฉาบผิวที่สัมผัสกับแคลดดิ้งให้สะท้อนกลับหมดการให้ดัชนีหักเหของแสงมีลักษณะทำให้แสงเลี้ยวเบนทีละน้อย
                    เรียกว่า แบบเกรดอินเด็กซ์ หากให้แสงสะท้อนโดยไม่ปรับคุณสมบัติของแท่งแก้วให้แสงค่อยเลี้ยวเบน เรียกว่า แบบสเต๊ปอินเด็กซ์
                    เส้นใยแก้วนำแสงที่ใช้ในเครือข่ายแลนส่วนใหญ่ใช้แบบมัลติโหมด โดยเป็นขนาด 62.5/125 ไมโครเมตรหมายถึงเส้นผ่านดิ้งรวมท่อแก้ว 125
                    ไมโครเมตรศูนย์กลางของท่อแก้ว 62.5 ไมโครเมตร
                    และเส้นผ่านศูนย์กลางของแคลดคุณสมบัติเส้นใยแก้วนำแสงแบบสเต็ปอินเด็กซ์จะมีการสูญเสียสูงกว่าแบบเกรดอินเด็กซ์
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image
                        boxSize="500px"
                        src="data:image/png;base64,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"
                    />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.5 เส้นใยแก้วนำแสงแบบมัลติโหมด
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2 สื่อกลางนำสัญญาณแบบไร้สาย
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    ระบบเครือข่ายไร้สายหรือแลนไร้สาย (Wireless Local Area Network: WLAN) เป็นระบบการสื่อสารข้อมูลที่มีความคล่องตัวมาก
                    ซึ่งอาจจะนำมาใช้ทดแทนหรือเพิ่มต่อกับระบบเครือข่ายในที่ใช้สายแบบดั้งเดิมโดยใช้คลื่นความถี่วิทยุในย่านวิทยุและคลื่นอินฟราเรดในการรับและส่งข้อมูลระหว่างเครื่องคอมพิวเตอร์
                    ซึ่งลักษณะของสื่อกลางนำสัญญาณแบบไร้สาย (Unguided Media/Wireless Media) มีดังต่อไปนี้
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2.1 คลื่นไมโครเวฟ (Microwave)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    การสื่อสารด้วยคลื่นไมโครเวฟเป็นการส่งระบบโดยใช้คลื่นวิทยุความถี่สูงระหว่าง 1-300 จิกะเฮิรตซ์
                    คืนนี้จะเคลื่อนที่เป็นเส้นตรงและสามารถทะลุผ่านชั้นบรรยากาศได้ การสื่อสารด้วยคลื่นไมโครเวฟนี้ทำให้สามารถสื่อสารระยะไกลมากๆ ได้
                    โดยโหนดที่รับและโหนดที่ส่งจะต้องตั้งสาวหรือติดตั้งจานไมโครเวฟสำหรับรับส่งข้อมูลระหว่างกัน ข้อเสียของการสื่อสารด้วยระบบนี้ คือ
                    มีค่าใช้จ่ายสูงและเนื่องจากความโค้งของโลกทำให้การส่งเป็นระยะไกลๆ จะต้องมีสถานีเพื่อส่งสัญญาณเป็นทอดๆ
                    แต่ระบบนี้มีข้อดีคือหากบริเวณใดที่ยังลากสายส่งข้อมูลไปไม่ถึงสามารถใช้ระบบไมโครเวฟได้จึงเหมาะสำหรับบริเวณที่รากสายไม่สะดวกเช่นใน
                    ทุรกันดาร เชิงเขา ทะเล เป็นต้น
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image
                        boxSize="500px"
                        src="https://i0.wp.com/witpoko.com/wp-content/uploads/2019/08/Screen-Shot-2562-08-21-at-12.45.40.png?fit=1096%2C684&ssl=1"
                    />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.6 คลื่นไมโครเวฟฝ
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2.2 ดาวเทียม (Satellite)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    ดาวเทียม คือ สถานีทวนสัญญาณไมโครเวฟที่ลอยอยู่ในอากาศ เนื่องจากดาวเทียมนี้อยู่สูงทำให้การสื่อสารสามารถทำได้บริเวณที่กว้างกว่า
                    ครอบคลุมพื้นที่ของโลกได้มากกว่า แต่การใช้ดาวเทียมนั้นคำใช้จ่ายจะสูง เนื่องจากต้องมีการสงดาวเทียมต้องมีสถานีภาคส่งและสถานีภาครับ
                    และสำหรับดาวเทียมบางดวงที่อยู่สูงจากพื้นโลกมาก ๆ จะทำให้เกิดปัญหาความล่าช้าของสัญญาณแสดงการสื่อสารผ่านดาวเทียม
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image boxSize="500px" src="https://pahbellaswan.files.wordpress.com/2013/09/tte_59_1_b.png" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.7 การสื่อสารผ่านดาวเทียม http://mang017.blogspot.com/2017/07/satellite-communication.html [กรกฎาคม 18, 2560]
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2.3 คลื่นวิทยุ (Radio Wave)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    การใช้คลื่นวิทยุทำให้การสื่อสารสามารถทำได้บริเวณกว้าง สามารถใช้ได้ทั้งการสื่อสารข้อมูลภายในอาคารหรือการสื่อสารข้อมูลระดับจังหวัด
                    โดยผู้ส่งจะต้อวมีเครื่องส่งสัญญาณและผู้รับจะต้องมีเครื่องรับสัญญาณ การสื่อสารระบบเครือข่ายคอมพิวเตอร์โดยใช้คลื่นวิทยุนี้ ได้แก่
                    ระบบแลนไร้สายและระบบบลูทูล ที่ใช้ในการสื่อสารกันที่มีระยะทางช่วงระยะ 10 เมตร ถึง 100 เมตร
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image boxSize="500px" src="http://1.bp.blogspot.com/-c9_Zkd_FXZs/Twb5cECHg9I/AAAAAAAAAY8/NEPlArdPyTo/s1600/5.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.8 การสื่อสารด้วยคลื่นวิทยุ http://kruthomtn.hsw.ac.th/Communication%202.htm
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2.4 ระบบอินฟราเรด (Infrared)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    ระบบอินฟราเรดจะใช้คลื่นความถี่ประมาณ 300 จิกะเฮิรตซ์ หรือที่เรียกว่า แสงอินฟราเรด คลื่นประเภทนี้เคลื่อนที่เป็นเส้นตรง
                    ไม่สามารถทะลุผ่านสิ่งกีดขวางได้ ซึ่งจะพบคลื่นประเภทนี้ในการสื่อสารระยะใกล้ ๆ เช่น
                    ระหว่างคอมพิวเตอร์สองเครื่องหรือระหว่างคอมพิวเตอร์กับโทรศัพท์มือถือ และเนื่องจากสัญญาณเคลื่อนที่เป็นเส้นตรง
                    ทำให้สัญญาณนี้ไม่ไปรบกวนระบบการสื่อสารอื่นๆ แต่มีข้อเสีย คือ ไม่เหมาะสมกับการติดต่อในระยะทางไกล
                </Text>
                <Stack display="flex" mt="2" alignItems="center" py={{ base: 10, md: 18 }}>
                    <Image boxSize="500px" src="https://www.neonics.co.th/wp-content/uploads/2020/09/infrared-spectrum.jpg" />
                    <Badge borderRadius="full" px="2" colorScheme="teal" fontSize={"md"}>
                        รูปที่ 4.9 ระบบอินฟราเรด
                    </Badge>
                </Stack>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.2.5 บลูทูธ (Bluetooth)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    บลูทูธเป็นเทคโนโลยีการสื่อสารไร้สายระยะไกล ถูกออกแบบมาเพื่อใช้ในการเชื่อมต่ออุปกรณ์ไร้สายขนาดเล็ก เช่น เครื่องพีดีเอ
                    อุปกรณ์สี่อสารแบบพกพาหรือเคลื่อนที่ รวมไปถึงการเชื่อมต่อกับเครือข่ายคอมพิวเตอร์ ความถี่มาตรฐานสำหรับเทคโนโลยีบลูทูธอยู่ในช่วง
                    2.4-2.483 จิกะเฮิรตซ์ ที่อาจแตกต่างกันในบางประเทศ เนื่องจากความถี่ที่ใช้สำหรับบลูทูธเป็นความถี่สาธารณะ (Unlicensed Frequency)
                    ไม่มีหน่วยงานกำหนดหรือจัดสรรความถี่ของประเทศนั้น ๆ ทำให้การใช้งานความถี่นี้แออัดอาจถูกรบกวนจากสิ่งต่าง ๆ เช่น
                    คลื่นสัญญาณรบกวนจากเครือข่ายที่อยู่ใกล้กันได้ง่าย ดังนั้น ประสิทธิภาพของการใช้งานบลูทูธจึงขึ้นอยู่กับคุณภาพของอุปกรณ์
                    รวมถึงจำนวนหรือความหนาแน่นของการใช้งานด้วย
                </Text>

                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.3 มาตรฐานการเข้าหัวสายสัญญาณยูทีพี แบบ RJ-45
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    สายนำสัญญาณยูทีพี (UTP) จะต้องมีการเข้าหัวต่อ RJ-45 ทั้ง 2 ด้าน
                    เพื่อใช้เชื่อมต่อระหว่างอุปกรณ์เครือข่ายด้านหนึ่งเข้ากับอุปกรณ์เครือข่ายอีกด้านหนึ่งเข้าด้วยกัน
                    เช่นเชื่อมต่อระหว่างเน็ตเวิร์ดการ์ดในเครื่องคอมพิวเตอร์และอุปกรณ์สวิตช์ เป็นต้น
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.3.1 การเตรียมอุปกรณ์ที่ใช้สำหรับการเข้าหัวสัญญาณ
                </Heading>
                <OrderedList fontSize={"3xl"} color="#493323">
                    <ListItem>สายนำสัญญาณยูทีพี Cat5e (Twisted Pair Cable: Category 5e)</ListItem>
                    <ListItem>หัว RJ-45</ListItem>
                    <ListItem>คีมเข้าหัว RJ-45</ListItem>
                    <ListItem>อุปกรณ์ตัดแต่งสาย เช่น มีดคัตเตอร์ เป็นต้น</ListItem>
                    <ListItem>อุปกรณ์ทดสอบสายสัญญาณ</ListItem>
                </OrderedList>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    4.3.2 วิธีการเข้าหัวสายยูทีพี RJ-45
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    มี 2 แบบสายตรงและสายไขว้ มีรายละเอียดดังนี้
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    1. แบบสายตรง (Straight – through Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    ปลายทั้งสองด้านเชื่อมต่อเหมือนกันตามมารตฐาน EIA/TIA 568A เป็นสายปกติทั่วไปที่ใช้เชื่อมต่อระหว่างเน็ตเวิร์ดการ์ดและสวิตช์ เช่น
                    การเชื่อมต่อระหว่างคอมพิวเตอร์กับฮับ/สวิตช์
                </Text>
                <Heading fontSize={"3xl"} color="#493323" p={6}>
                    2. แบบไขว้ (Crossover Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#493323">
                    สายชนิดนี้ใช้งานในกรณีที่มีการเชื่อมต่อ อุปกรณ์ชนิดเดียวกัน เช่น
                    การเชื่อมต่อกันระหว่างเน็ตเวิร์ดการ์ดหนึ่งไปยังเน็ตเวิร์ดการ์ดหนึ่งของเครื่องคอมพิวเตอร์ หรือใช้เชื่อมต่อกันระหว่างสวิตช์
                    กับสวิตช์ลักษณะของปลายสายที่เข้าหัว RJ-45 ทั้งสองฝั่งจะต้องไม่เหมือนกัน ซึ่งได้อธิบายหลักวิธีการจัดเรียงแบบสายไขว้
                    โดยจะสลับกันระหว่างเส้นที่ 1 (TX+) ไปเป็นเส้นสายที่ 3 (RX+) และเส้นสายที่ 2 (TX-) ไปเป็นเส้นที่ 6 (RX-)
                </Text>
                <Heading fontSize={"3xl"} color="#8C0000">
                    สรุปสาระสำคัญ
                </Heading>
                <Text fontSize={"3xl"} color="#8C0000">
                    สื่อกลางนำสัญญาณที่รองรับเพื่อให้สามารถติดต่อสื่อสารข้อมูลถึงกันได้ในรูปแบบเครือข่าย
                    สำหรับสื่อกลางนำสัญญาณข้อมูลแบบใช้สายที่มีการใช้งานอยู่ในปัจจุบัน ได้แก่ สายโคแอกเชียลชนิดหนาและชนิดบาง
                    สายเกลียวคู่แบบมีฉนวนหุ้มและแบบไม่มีฉนวนหุ้ม เส้นใยแก้วนำแสงทั้ง 2 แบบ คือ แบบชิงเกิลโหมดและแบบมัลติโหมด
                    และสื่อกลางนำสัญญาณข้อมูลแบบไร้สาย ได้แก่ คลื่นไมโครเวฟ ระบบดาวเทียมคลื่นวิทยุ ระบบอินฟราเรด และบลูทูธเป็นต้น
                </Text>
            </Box>
        </Container>
    )
}
