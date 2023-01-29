import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter3 from "../../components/chapter/chapter3"
import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #FFCEFE  , #AEE2FF)">
                <Header />
                <Chapter3 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
