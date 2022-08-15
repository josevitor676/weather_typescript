import { api } from "../Services/api";
import { createContext, useCallback, ReactNode, useContext, useState} from "react";

interface WeatherProviderProps {
    children: ReactNode;
}
interface Weather {
    temperature: string;
    wind: string;
    description: string;
    forecast: [];
}

interface WeatherContextData {
    weather: Weather[];
    SearchWeather: (nameCity: string) => Promise<void>;
    nameCity: string;
}

const WeatherContext = createContext({} as WeatherContextData);

const useWeather = () => {
    const context = useContext(WeatherContext);

    if(!context) {
        throw new Error("useWeather must be used within an WeatherProvider")
    }

    return context
};

const WeatherProvider = ({children}: WeatherProviderProps) => {

    const [weather, setWeather] = useState<Weather[]>([]);
    const [nameCity, setNameCity] = useState("")

    const SearchWeather = useCallback(async (nameCity: string) => {
        const response = await api.get(`/weather/${nameCity}`)

        setWeather([...weather, response.data])
        setNameCity(nameCity)

    },[])
    return (
        <WeatherContext.Provider value={{SearchWeather, weather, nameCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

export {useWeather, WeatherProvider}; 