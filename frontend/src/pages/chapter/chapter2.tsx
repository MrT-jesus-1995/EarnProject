import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter2 from "../../components/chapter/chapter2"
import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bg={"#e2f9d9"}>
                <Header />
                <Chapter2 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
