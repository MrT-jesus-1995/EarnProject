import { Box } from "@chakra-ui/react"
import HomePage from "../components/template/HomePage"
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"

const Home = () => {
    return (
        <>
            <Box bg={"#FAF7F0"}>
                <Header />
                <HomePage />
                <Footer />
            </Box>
        </>
    )
}

export default Home
