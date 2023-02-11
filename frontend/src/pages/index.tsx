import { Box, Image, extendTheme, ChakraProvider } from "@chakra-ui/react"
import HomePage from "../components/template/HomePage"
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"
import { Fonts } from "../config/chakra/Fonts"
const theme = extendTheme({
    fonts: {
        heading: `'Mali', cursive`,
        body: `'Mali', cursive`,
    },
})

const Home = () => {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Fonts />

                <Box bgGradient="linear(to-l, #FFF2F2, #E5E0FF , #E8D3FF  )">
                    <Image w="100%" src="https://raw.githubusercontent.com/MrT-jesus-1995/EarnProject/Alpha/frontend/src/components/image/2.png" />
                    <Header />
                    <HomePage />
                    <Footer />
                </Box>
            </ChakraProvider>
        </>
    )
}

export default Home
