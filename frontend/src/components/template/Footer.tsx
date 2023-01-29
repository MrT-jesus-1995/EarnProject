import { ReactNode } from "react"
import { Box, Container, Stack, SimpleGrid, Text, Link, VisuallyHidden, chakra, useColorModeValue } from "@chakra-ui/react"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    )
}

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function LargeWithAppLinksAndSocial() {
    let navigate = useNavigate()
    return (
        <Box bg={useColorModeValue("#98A8F8", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
                    <Stack align={"flex-start"} fontSize={"sm"}>
                        <ListHeader>Link</ListHeader>
                        <Link onClick={() => navigate("/")}>Home</Link>
                        <Link onClick={() => navigate("/chapter")}>บทที่ 1 พื้นฐานระบบเครือข่ายคอมพิวเตอร์</Link>
                        <Link onClick={() => navigate("/chapter/chapter2")}>บทที่ 2 อุปกรณ์ระบบเครือข่าย</Link>
                        <Link onClick={() => navigate("/chapter/chapter3")}>บทที่ 3 ประเภทของระบบเครือข่าย</Link>
                        <Link onClick={() => navigate("/chapter/chapter4")}>บทที่ 4 สื่อกลางนำสัญญาณในระบบเครือข่าย</Link>
                        <Link onClick={() => navigate("/chapter/chapter5")}>บทที่ 5 โปรโทคอล</Link>
                        <Link href={"https://forms.gle/2D6gvSXztwypXcT56"}>แบบทดสอบพื้นฐานคอมผิวเตอร์</Link>
                    </Stack>
                    <Stack align={"flex-end"}>
                        <ListHeader>Contact</ListHeader>
                        <SocialButton label={"Github"} href={"https://github.com/earnpreeya11"}>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label={"Facebook"} href={"https://www.facebook.com/exrn.nn11"}>
                            <FaFacebook />
                        </SocialButton>
                        <SocialButton label={"Instagram"} href={"https://www.instagram.com/qearnq/"}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box borderTopWidth={0} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container centerContent>
                    <Text>© CopyRight 2022 EarnPreeya</Text>
                </Container>
            </Box>
        </Box>
    )
}
