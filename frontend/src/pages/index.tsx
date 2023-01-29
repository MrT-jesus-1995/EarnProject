import { Box } from "@chakra-ui/react"
import HomePage from "../components/template/HomePage"
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"

const Home = () => {
    return (
        <>
            <Box bgGradient="linear(to-l, #FFF2F2, #E5E0FF , #E8D3FF  )">
                <Header />
                <HomePage />
                <Footer />
            </Box>
        </>
    )
}

export default Home
