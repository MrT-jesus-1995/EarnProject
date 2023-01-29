import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter5 from "../../components/chapter/chapter5"
import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #FAAB78, #FFE6F7, #E5B8F4 )">
                <Header />
                <Chapter5 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
