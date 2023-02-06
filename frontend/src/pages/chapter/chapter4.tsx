import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter4 from "../../components/chapter/chapter4"
import pic from "../../components/image/1.png"

import { Box, Image } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #EDCDBB   , #CDFCF6)">
            <Image src="https://raw.githubusercontent.com/MrT-jesus-1995/EarnProject/Alpha/frontend/src/components/image/2.png"/>

                <Header />
                <Chapter4 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
