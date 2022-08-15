import { Center, Flex, Text } from "@chakra-ui/react"
import {WiBarometer} from "react-icons/wi"
export const EmptyWeather = () => {
    return (
        <Flex flexDirection="column" mt="20">
            <Text textAlign="center" fontSize="2xl" color="#025373"  _dark={{color: "#DCE8F2"}}>
                Digite acima o nome da sua cidade para saber a temperatura atual e nos proximos dias 
            </Text>
            <Center mt="5">
                <WiBarometer fontSize="300px"/>
            </Center>
        </Flex>
    )
}