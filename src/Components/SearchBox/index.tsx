import { Center, Flex, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { FaSearch} from "react-icons/fa"
import { useWeather } from "../../Context/WeatheContext";

interface NameCity {
    name: string;
}

export const SearchBox = () => {

    const {SearchWeather,weather} = useWeather();

    const handleNameCity = ({name}: NameCity) => {
        SearchWeather(name)
    }

    const {register, handleSubmit} = useForm<NameCity>()

    return (
        <Flex as="form" onSubmit={handleSubmit(handleNameCity)}>
            <Input 
            placeholder="Digite o nome da sua cidade" 
            w="25%"
            mt="8"
            ml="6"
            border="2px"
            borderColor="#025373"
            color="#025373"
            fontWeight="bold"
            _placeholder={{color: "#025373", fontSize: "16px", fontWeight: 'bold'}}
            focusBorderColor="#025373"
            _hover={{borderColor: "#025373"}}
            _dark={{
                borderColor:"#DCE8F2",
                _placeholder: {color: "#DCE8F2"},
                color: "#DCE8F2"
            }}
            {...register("name")}
            />
            <Center 
            as="button"
            type="submit"
            ml="4" 
            mt="8"
            w="50px"
            fontSize="1xl"
            borderRadius="8px"
            cursor="pointer"
            bg="#025373"
            color="#DCE8F2"
            _dark={{bg: "#DCE8F2", color: "#025373"}}
            >
                <FaSearch/>
            </Center>
        </Flex>
    )
}; 