import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter1 from "../../components/chapter/chapter1"
import pic from "../../components/image/1.png"

import { Box, Image } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #C3F8FF , #B6FFCE)">
                <Image src="../../components/image/1.png" />
                <Header />
                <Chapter1 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
