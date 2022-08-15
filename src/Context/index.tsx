import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react"
import { WeatherProvider } from "./WeatheContext";

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
    return (
        <WeatherProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </WeatherProvider>
    )
}