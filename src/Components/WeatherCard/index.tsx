import { Box, Flex, Text } from "@chakra-ui/react"
import {FaSun, FaCloud} from "react-icons/fa"
interface Forecast {
    day: string;
    temperature: string;
    wind: string;
}

interface Weather {
    temperature: string;
    wind: string;
    description: string;
    forecast: Forecast[];
}

interface WeatherProps {
    weatherData: Weather;
}

export const WeatherCard = ({weatherData}: WeatherProps) => {
    return (
        <Flex
        flexDirection="column"
        w="70%"
        ml="6"
        mt={["2","4"]}
        fontFamily="Roboto"
        >
            <Box 
            color="#025373" 
            fontSize={["16px","19px" ]}
            fontWeight='bold'
            _dark={{color: "#DCE8F2"}}
            >
                <Text>Temperatura agora: {weatherData.temperature}</Text>
                <Text>Vento: {weatherData.wind}</Text>
                <Text>Clima: {weatherData.description}</Text>
            </Box>
            <Text 
            color="#025373" 
            mt={["1","3"]} 
            fontWeight='bold' 
            _dark={{color: "#DCE8F2"}}
            >
                Temperatura para os proximos três dias:
            </Text>
            <Flex flexDirection={["column","column","row", "row"]} mt={["3","5"]}>
            {weatherData.forecast.map((temp) => (
                <Box 
                key={temp.day} 
                display="flex" 
                flexDirection="column" 
                _hover={{ transform: "translateY(-7px)"}}
                transition="border 0.2s, ease 0s, transform 0.2s"
                border="2px" 
                borderColor="#025373"
                w={["100%","60%","70%","40%"]}
                p="3"
                justifyContent="center"
                alignItems="center"
                m="3"
                borderRadius="8px"
                fontFamily="Roboto"
                _dark={{borderColor: "#DCE8F2"}}
                >
                    <Text mb="2" fontSize="19px" color="#025373" _dark={{color: "#DCE8F2"}}>Temperatura: {temp.temperature}</Text>
                    <Text mb="5" fontSize="19px" color="#025373" _dark={{color: "#DCE8F2"}}>Vento: {temp.wind}</Text>
                    {
                        temp.temperature >= "+30 °C" && "25 °C" ?
                        <FaSun fontSize="50px" />
                        :
                        <FaCloud fontSize="50px"/>
                    }
                </Box>
            ))}
            </Flex>
        </Flex>
    )
}