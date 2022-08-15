import { Box, Flex, Text } from "@chakra-ui/react"
import { useWeather } from "../../Context/WeatheContext"
import { EmptyWeather } from "../EmptyWeather";
import { WeatherCard } from "../WeatherCard";

export const DashBoard = () => {

    const {weather,nameCity} = useWeather();

    return (
        <Box>
            <Box>
                {
                    weather.length === 0 ? 
                    (<EmptyWeather/>) 
                    :
                    (weather.map(weatherData =>(
                        <>
                            <Text 
                            ml="6"
                            mt="7" 
                            fontSize="2xl" 
                            fontWeight="bold" 
                            color="#025373" 
                            fontFamily="Roboto" 
                            _dark={{color: "#DCE8F2"}}
                            >
                                Temperatura em: {nameCity}
                            </Text>
                            <WeatherCard weatherData={weatherData}/>
                        </>
                        
                    )))
                }
            </Box>
        </Box>
    )
}