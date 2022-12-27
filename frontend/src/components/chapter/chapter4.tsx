import { Flex, Container, Heading, Stack, Text, Button, Icon, IconProps, Grid, GridItem, Box, Spacer, Image } from "@chakra-ui/react"
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
                    บทที่ 4 สื่อกลางนำสัญญาณในระบบเครือข่าย
                </Heading>
            </Stack>
            <Text fontSize={{ base: "3xl", sm: "1.5xl", md: "3xl" }} lineHeight={"110%"} color="black">
                4.1 สื่อกลางนำสัญญาณแบบใช้สาย
            </Text>
            <Box gap={6} p={12}>
                <Text fontSize={"3xl"} color="#00005C">
                    สื่อกลางการส่งข้อมูลเป็นส่วนประกอบที่สำคัญมากในระบบเครือข่ายคอมพิวเตอร์ ซึ่งทำให้สามารถติดต่อสื่อสารข้อมูลถึงกันได้ทั่วโลก
                    เครือข่ายอินเทอร์เน็ตมีความก้าวหน้าด้วยเทคโนโลยีการสื่อสารโดยใช้สื่อกลางส่งข้อมูลแบบใช้สายและการสื่อสายโดยใช้สื่อกลางส่งข้อมูลแบบไร้สาย
                    สื่อกลางในการส่งข้อมูลแบบใช้สาย (Guided Media/Wire Media) เป็นสื่อกลางที่ใช้ส่งข้อมูลแบบใช้สายได้มีการใช้งานมานาน
                    โดยเฉพาะระบบโทรศัพท์ฟื้นฐาน ซึ่งเปรียบเสมือนกับท่อส่งข้อมูลด้วยการส่งข้อมูลผ่านท่อไปยังอุปกรณ์ต่างๆ ได้แก่สายเกลียวคู่
                    สายคแอกเชียล และเส้นใยแก้วนำแสง มีรายละเอียดดังนี้
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.1.1 สายเกลีบวคู่ (Twisted Pair Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    สายเกลียวคู่หรือเรียกทับศัพท์ว่า สายทวิสต์แพร์ เป็นสายสัญญาณของระบบเครือข่ายที่มีราคาถูกที่สุด
                    สายเกลียวคู่ประกอบด้วยสายทองแดงที่หุ้มด้วยฉนวนพลาสติกและนำสายทองแดงมาถักเป็นเกลียวคู่โดยสายคู่หนึ่งจะใช้สำหรับการสื่อสารหนึ่งช่องทาง
                    จำนวนคู่ที่เกิดจากการนำสาย 2 เส้น มาถักกันเป็นเกลียวคู่ซึ่งอาจมีจำนวนหลาย ๆ คู่
                    เช่นสายเกลียวคู่ที่ใช้กับเครือข่ายภายในเป็นสายชนิดแคต 5 (Cat-5) ภายในฉนวนห่อหุ้มจะมีจำนวนคู่สาย 4
                    เพื่อที่จะช่วยลดการแทรกแซงจากสัญญาณรบกวนในระดับที่สามารถยอมรับได้เท่านั้น สำหรับสายเกลียวคู่นั้น
                    สามารถทำการส่งสัญญาณข้อมูลแบบแอนะล็อกและแบบดิจิทัลแต่เนื่องจากสายเกลียวคู่จะมีการสูญเสียสัญญาณขณะที่ส่งสัญญาณจึงต้องมีเครื่องขยายสัญญาณ(Ampifier)
                    ใช้ในการส่งสัญญาณข้อมูลแบบแอนะล็อกในระยะไกล ๆ หรือทุก 5-6 กิโลเมตร ส่วนการส่งสัญญาณข้อมูลแบบดิจิทัลหากส่งในระยะไกล ๆ นั้น
                    จะต้องมีเครื่องทวน
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    สัญญาณ (Repeater) ทุก ๆ ระยะ2-3 กิโลเมตร สำหรับสายเกลียวคู่มีสายใช้งานอยู่ 2 รูปแบบ ดังนี้
                </Heading>
                <Heading fontSize={"3xl"} color="#00005C">
                    1.สายเกลียวคู่แบบชนิดไม่มีฉนวนหุ้ม (Unshielded Twisted Pair Cable: UTP)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    หรือนิยมเรียกง่าย ๆ ว่า “สายยูทีพี” เป็นสายเคเบิลขนาดเล็กคล้ายสายโทรศัพท์ 1 เส้น ดังรูปที่ 4.1 ภายในประกอบด้วยสายเกลียวคู่ 4 คู่
                    (8 เส้น) ตีเป็นเกลียวคู่ ๆ จึงมีขนาดกะทัดรัดแต่ลักษณะการเดินสายจะต้องเชื่อมต่อจากคอมพิวเตอร์หรืออุปกรณ์ในระบบเครือข่าย
                    ซึ่งในปัจจุบันเป็นสายนำสัญญาณที่ได้รับความนิยมแพร่หลายมากที่สุดเพราะราคาถูก ติดตั้งง่าย
                    เหมาะสำหรับเชื่อมต่ออุปกรณ์ที่มีระยะห่างไม่เกิน 100 เมตร
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    2.สายเกลียวคู่แบบชนิดมีฉนวนหุ้ม (ShieldebTwistedPair Cable : STP)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    หรือเรียกว่า “สายเอสทีพี” จะมีลักษณะคล้ายกับสายยูทีพี ดังรูปที่ 4.2 ในสายเคเบิล 1 เส้น ประกอบด้วยสายเกลียวคู่ 4 คู่ (8 เส้น)
                    แต่สายเอสทีพี จะมีฉนวนโลหะอีกชั้นหนึ่งเพื่อป้องกันการเกิดสัญญาณรบกวนจากภายในทำให้ป้องกันได้ดีกว่าสายยูทีพี
                    ดังนั้นจะเห็นได้ว่าสายเอสทีพีนั้นจะมคุณภาพที่ดีกว่าและส่งข้อมูลด้วยความเร็วกว่าแต่จะมีต้นทุนที่สูงกว่า
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.1.2 สายโคแอกเชียล (Coaxial Cabie)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
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
                <Heading fontSize={"3xl"} color="#00005C">
                    4.1.3 เส้นใยแก้วนำแสง (Optical Fiber Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    เส้นใยแก้วนำแสง หรือเรียกทับศัพท์ว่า ไฟเบอร์ออปติก ซึ่งได้มีการนำมาใช้งานในระบบเครือข่ายคอมพิวเตอร์อย่างมาก
                    เส้นใยแก้วนำแสงมีข้อดีกว่าสายแบบคู่บิดเกลียวและสายโคแอกเชียล คือ มีอัตราความเร็วในการสื่อสารที่สูงกว่าและส่งได้ในระยะทางที่ไกลกว่า
                    นอกจากนี้เส้นใยแก้วนำแสงยังไม่มีปัญหาในการแทรกสอดของคลื่นความถี่วิทยุและปลอดภัยจากการลักลอบดักข้อมูลจากบุคคลภายนอกเส้นใยแก้วนำแสงผลิตขึ้นจากใยแก้วบริสุทธิ์หล่อหลอมเป็นแกน
                    (Core) รอบ 1 แกนถูกห่อหุ้มไว้ด้วยใยแก้ว อีกชนิดหนึ่งทำเป็นเปลือกหรือแคลดดิ้ง (Cladding) แล้วถูกหุ้มด้วยส่วนป้องกันอีกชั้นหนึ่ง
                    (Jacket)
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    คุณสมบัติของเนื้อแก้วนี้จะกระจายแสงออกซึ่งในกรณีนี้การสะท้อนของแสงกลับต้องเกิดขึ้นโดยผนังแก้วด้านข้างต้องมีดัชนีหักเหของแสงที่ทำให้แสงสะท้อนกับเพื่อลดการสูญเสียของพลังงานแสง
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    วิธีการนี้แบ่งเป็นแบบ คือ แบบซิงเกิลโหมด
                </Heading>
                <Heading fontSize={"3xl"} color="#00005C">
                    1.ซิงเกิลโหมด (Single Mode)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    เป็นการใช้ตัวนำแสงให้พุ่งตรงไปตามท่อแก้วโดยมีการกระจายแสงออกทางด้านข้างน้อยที่สุด
                    ซิงเกิลโหมดจึงเป็นเส้นใยแก้วนำแสงที่มีกำลังสูญเสียทางแสงน้อยที่สุดเหมาะใช้เชื่อมต่อระยะทางไกล ๆ
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    2.มัลติโหมด (Multimode)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    เป็นเส้นใยแก้วนำแสงที่มีลักษณะการกระจายแสงออกด้านข้างได้ดังนั้นจึงต้องสร้างให้มีดัชนีหักเหของแสงกับอุปกรณ์ฉาบผิวที่สัมผัสกับแคลดดิ้งให้สะท้อนกลับหมดการให้ดัชนีหักเหของแสงมีลักษณะทำให้แสงเลี้ยวเบนทีละน้อย
                    เรียกว่า แบบเกรดอินเด็กซ์ หากให้แสงสะท้อนโดยไม่ปรับคุณสมบัติของแท่งแก้วให้แสงค่อยเลี้ยวเบน เรียกว่า แบบสเต๊ปอินเด็กซ์
                    เส้นใยแก้วนำแสงที่ใช้ในเครือข่ายแลนส่วนใหญ่ใช้แบบมัลติโหมด โดยเป็นขนาด 62.5/125 ไมโครเมตรหมายถึงเส้นผ่านดิ้งรวมท่อแก้ว 125
                    ไมโครเมตรศูนย์กลางของท่อแก้ว 62.5 ไมโครเมตร
                    และเส้นผ่านศูนย์กลางของแคลดคุณสมบัติเส้นใยแก้วนำแสงแบบสเต็ปอินเด็กซ์จะมีการสูญเสียสูงกว่าแบบเกรดอินเด็กซ์
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2 สื่อกลางนำสัญญาณแบบไร้สาย
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    ระบบเครือข่ายไร้สายหรือแลนไร้สาย (Wireless Local Area Network: WLAN) เป็นระบบการสื่อสารข้อมูลที่มีความคล่องตัวมาก
                    ซึ่งอาจจะนำมาใช้ทดแทนหรือเพิ่มต่อกับระบบเครือข่ายในที่ใช้สายแบบดั้งเดิมโดยใช้คลื่นความถี่วิทยุในย่านวิทยุและคลื่นอินฟราเรดในการรับและส่งข้อมูลระหว่างเครื่องคอมพิวเตอร์
                    ซึ่งลักษณะของสื่อกลางนำสัญญาณแบบไร้สาย (Unguided Media/Wireless Media) มีดังต่อไปนี้
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.1 คลื่นไมโครเวฟ (Microwave)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    การสื่อสารด้วยคลื่นไมโครเวฟเป็นการส่งระบบโดยใช้คลื่นวิทยุความถี่สูงระหว่าง 1-300 จิกะเฮิรตซ์
                    คืนนี้จะเคลื่อนที่เป็นเส้นตรงและสามารถทะลุผ่านชั้นบรรยากาศได้ การสื่อสารด้วยคลื่นไมโครเวฟนี้ทำให้สามารถสื่อสารระยะไกลมากๆ ได้
                    โดยโหนดที่รับและโหนดที่ส่งจะต้องตั้งสาวหรือติดตั้งจานไมโครเวฟสำหรับรับส่งข้อมูลระหว่างกัน ข้อเสียของการสื่อสารด้วยระบบนี้ คือ
                    มีค่าใช้จ่ายสูงและเนื่องจากความโค้งของโลกทำให้การส่งเป็นระยะไกลๆ จะต้องมีสถานีเพื่อส่งสัญญาณเป็นทอดๆ
                    แต่ระบบนี้มีข้อดีคือหากบริเวณใดที่ยังลากสายส่งข้อมูลไปไม่ถึงสามารถใช้ระบบไมโครเวฟได้จึงเหมาะสำหรับบริเวณที่รากสายไม่สะดวกเช่นใน
                    ทุรกันดาร เชิงเขา ทะเล เป็นต้น
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.2 ดาวเทียม (Satellite)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    ดาวเทียม คือ สถานีทวนสัญญาณไมโครเวฟที่ลอยอยู่ในอากาศ เนื่องจากดาวเทียมนี้อยู่สูงทำให้การสื่อสารสามารถทำได้บริเวณที่กว้างกว่า
                    ครอบคลุมพื้นที่ของโลกได้มากกว่า แต่การใช้ดาวเทียมนั้นคำใช้จ่ายจะสูง เนื่องจากต้องมีการสงดาวเทียมต้องมีสถานีภาคส่งและสถานีภาครับ
                    และสำหรับดาวเทียมบางดวงที่อยู่สูงจากพื้นโลกมาก ๆ จะทำให้เกิดปัญหาความล่าช้าของสัญญาณแสดงการสื่อสารผ่านดาวเทียม
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.3 คลื่นวิทยุ (Radio Wave)
                </Heading>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.3 คลื่นวิทยุ (Radio Wave)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    การใช้คลื่นวิทยุทำให้การสื่อสารสามารถทำได้บริเวณกว้าง สามารถใช้ได้ทั้งการสื่อสารข้อมูลภายในอาคารหรือการสื่อสารข้อมูลระดับจังหวัด
                    โดยผู้ส่งจะต้อวมีเครื่องส่งสัญญาณและผู้รับจะต้องมีเครื่องรับสัญญาณ การสื่อสารระบบเครือข่ายคอมพิวเตอร์โดยใช้คลื่นวิทยุนี้ ได้แก่
                    ระบบแลนไร้สายและระบบบลูทูล ที่ใช้ในการสื่อสารกันที่มีระยะทางช่วงระยะ 10 เมตร ถึง 100 เมตร
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.4 ระบบอินฟราเรด (Infrared)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    ระบบอินฟราเรดจะใช้คลื่นความถี่ประมาณ 300 จิกะเฮิรตซ์ หรือที่เรียกว่า แสงอินฟราเรด คลื่นประเภทนี้เคลื่อนที่เป็นเส้นตรง
                    ไม่สามารถทะลุผ่านสิ่งกีดขวางได้ ซึ่งจะพบคลื่นประเภทนี้ในการสื่อสารระยะใกล้ ๆ เช่น
                    ระหว่างคอมพิวเตอร์สองเครื่องหรือระหว่างคอมพิวเตอร์กับโทรศัพท์มือถือ และเนื่องจากสัญญาณเคลื่อนที่เป็นเส้นตรง
                    ทำให้สัญญาณนี้ไม่ไปรบกวนระบบการสื่อสารอื่นๆ แต่มีข้อเสีย คือ ไม่เหมาะสมกับการติดต่อในระยะทางไกล
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.2.5 บลูทูธ (Bluetooth)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    บลูทูธเป็นเทคโนโลยีการสื่อสารไร้สายระยะไกล ถูกออกแบบมาเพื่อใช้ในการเชื่อมต่ออุปกรณ์ไร้สายขนาดเล็ก เช่น เครื่องพีดีเอ
                    อุปกรณ์สี่อสารแบบพกพาหรือเคลื่อนที่ รวมไปถึงการเชื่อมต่อกับเครือข่ายคอมพิวเตอร์ ความถี่มาตรฐานสำหรับเทคโนโลยีบลูทูธอยู่ในช่วง
                    2.4-2.483 จิกะเฮิรตซ์ ที่อาจแตกต่างกันในบางประเทศ เนื่องจากความถี่ที่ใช้สำหรับบลูทูธเป็นความถี่สาธารณะ (Unlicensed Frequency)
                    ไม่มีหน่วยงานกำหนดหรือจัดสรรความถี่ของประเทศนั้น ๆ ทำให้การใช้งานความถี่นี้แออัดอาจถูกรบกวนจากสิ่งต่าง ๆ เช่น
                    คลื่นสัญญาณรบกวนจากเครือข่ายที่อยู่ใกล้กันได้ง่าย ดังนั้น ประสิทธิภาพของการใช้งานบลูทูธจึงขึ้นอยู่กับคุณภาพของอุปกรณ์
                    รวมถึงจำนวนหรือความหนาแน่นของการใช้งานด้วย
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.3 มาตรฐานการเข้าหัวสายสัญญาณยูทีพี แบบ RJ-45
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    สายนำสัญญาณยูทีพี (UTP) จะต้องมีการเข้าหัวต่อ RJ-45 ทั้ง 2 ด้าน
                    เพื่อใช้เชื่อมต่อระหว่างอุปกรณ์เครือข่ายด้านหนึ่งเข้ากับอุปกรณ์เครือข่ายอีกด้านหนึ่งเข้าด้วยกัน
                    เช่นเชื่อมต่อระหว่างเน็ตเวิร์ดการ์ดในเครื่องคอมพิวเตอร์และอุปกรณ์สวิตช์ เป็นต้น
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.3.1 การเตรียมอุปกรณ์ที่ใช้สำหรับการเข้าหัวสัญญาณ
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    1. สายนำสัญญาณยูทีพี Cat5e (Twisted Pair Cable: Category 5e)
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    2. หัว RJ-45
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    3. คีมเข้าหัว RJ-45
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    4. อุปกรณ์ตัดแต่งสาย เช่น มีดคัตเตอร์ เป็นต้น
                </Text>
                <Text fontSize={"3xl"} color="#00005C">
                    5. อุปกรณ์ทดสอบสายสัญญาณ
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    4.3.2 วิธีการเข้าหัวสายยูทีพี RJ-45
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    มี 2 แบบสายตรงและสายไขว้ มีรายละเอียดดังนี้
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    1. แบบสายตรง (Straight – through Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    ปลายทั้งสองด้านเชื่อมต่อเหมือนกันตามมารตฐาน EIA/TIA 568A เป็นสายปกติทั่วไปที่ใช้เชื่อมต่อระหว่างเน็ตเวิร์ดการ์ดและสวิตช์ เช่น
                    การเชื่อมต่อระหว่างคอมพิวเตอร์กับฮับ/สวิตช์
                </Text>
                <Heading fontSize={"3xl"} color="#00005C">
                    2. แบบไขว้ (Crossover Cable)
                </Heading>
                <Text fontSize={"3xl"} color="#00005C">
                    สายชนิดนี้ใช้งานในกรณีที่มีการเชื่อมต่อ อุปกรณ์ชนิดเดียวกัน เช่น
                    การเชื่อมต่อกันระหว่างเน็ตเวิร์ดการ์ดหนึ่งไปยังเน็ตเวิร์ดการ์ดหนึ่งของเครื่องคอมพิวเตอร์ หรือใช้เชื่อมต่อกันระหว่างสวิตช์
                    กับสวิตช์ลักษณะของปลายสายที่เข้าหัว RJ-45 ทั้งสองฝั่งจะต้องไม่เหมือนกัน ซึ่งได้อธิบายหลักวิธีการจัดเรียงแบบสายไขว้
                    โดยจะสลับกันระหว่างเส้นที่ 1 (TX+) ไปเป็นเส้นสายที่ 3 (RX+) และเส้นสายที่ 2 (TX-) ไปเป็นเส้นที่ 6 (RX-)
                </Text>
                <Heading fontSize={"3xl"} color="#2D033B">
                    สรุปสาระสำคัญ
                </Heading>
                <Text fontSize={"3xl"} color="#2D033B">
                    สื่อกลางนำสัญญาณที่รองรับเพื่อให้สามารถติดต่อสื่อสารข้อมูลถึงกันได้ในรูปแบบเครือข่าย
                    สำหรับสื่อกลางนำสัญญาณข้อมูลแบบใช้สายที่มีการใช้งานอยู่ในปัจจุบัน ได้แก่ สายโคแอกเชียลชนิดหนาและชนิดบาง
                    สายเกลียวคู่แบบมีฉนวนหุ้มและแบบไม่มีฉนวนหุ้ม เส้นใยแก้วนำแสงทั้ง 2 แบบ คือ แบบชิงเกิลโหมดและแบบมัลติโหมด
                    และสื่อกลางนำสัญญาณข้อมูลแบบไร้สาย ได้แก่ คลื่นไมโครเวฟ ระบบดาวเทียมคลื่นวิทยุ ระบบอินฟราเรด และบลูทูธเป็นต้น
                </Text>
            </Box>
        </Container>
    )
}