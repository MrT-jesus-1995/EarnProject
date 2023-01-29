import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter4 from "../../components/chapter/chapter4"
import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #EDCDBB   , #CDFCF6)">
                <Header />
                <Chapter4 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
