import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter2 from "../../components/chapter/chapter2"
import pic from "../../components/image/1.png"

import { Box, Image } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l,#D3EBCD , #DFE8CC , #F7EDDB )">
                <Image w="100%" src="https://raw.githubusercontent.com/MrT-jesus-1995/EarnProject/Alpha/frontend/src/components/image/2.png" />
                <Header />
                <Chapter2 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
