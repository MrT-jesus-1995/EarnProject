import HomePage from "../../components/template/HomePage"
import Header from "../../components/template/Header"
import Footer from "../../components/template/Footer"
import Chapter1 from "../../components/chapter/chapter1"
import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box bg={"#fffee3"}>
                <Header />
                <Chapter1 />
                <Footer />
            </Box>
        </>
    )
}

export default Home
