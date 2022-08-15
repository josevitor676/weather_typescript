import { Flex} from "@chakra-ui/react"
import { Header } from "../../Components/Header"
import { SearchBox } from "../../Components/SearchBox"
import { DashBoard } from "../../Components/WeatherList"

export const Home = () => {

    return (
        <Flex 
        flexDirection="column" 
        bg="#DCE8F2"   
        h="100vh"
        _dark={{bg: "#025373"}}
        > 
            <Header/>
            <SearchBox/>
            <DashBoard/>
        </Flex>
    )
}