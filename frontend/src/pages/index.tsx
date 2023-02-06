import { Box, Image } from "@chakra-ui/react"
import HomePage from "../components/template/HomePage"
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"
import pic from "../../components/image/1.png"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #FFF2F2, #E5E0FF , #E8D3FF  )">
                <Image src="../../components/image/1.png" />
                <Header />
                <HomePage />
                <Footer />
            </Box>
        </>
    )
}

export default Home
