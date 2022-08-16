import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useWeather } from "../../Context/WeatheContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface NameCity {
  name: string;
}
const HandleNameCitySchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
});

export const SearchBox = () => {
  const { SearchWeather } = useWeather();

  const handleNameCity = ({ name }: NameCity) => {
    SearchWeather(name);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameCity>({
    resolver: yupResolver(HandleNameCitySchema),
  });

  return (
    <>
    <Flex as="form" onSubmit={handleSubmit(handleNameCity)}>
      <Input
        placeholder="Digite o nome da sua cidade"
        w={["65%", "50%", "25%", "25%"]}
        mt={["5", "8"]}
        ml="6"
        border="2px"
        borderColor="#025373"
        color="#025373"
        fontWeight="bold"
        _placeholder={{
          color: "#025373",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        focusBorderColor="#025373"
        _hover={{ borderColor: "#025373" }}
        _dark={{
          borderColor: "#DCE8F2",
          _placeholder: { color: "#DCE8F2" },
          color: "#DCE8F2",
        }}
        {...register("name")}
      />
        <Center
          as="button"
          type="submit"
          ml="4"
          mt={["5", "8"]}
          w="50px"
          fontSize="1xl"
          borderRadius="8px"
          cursor="pointer"
          bg="#025373"
          color="#DCE8F2"
          _dark={{ bg: "#DCE8F2", color: "#025373" }}
          >
          <FaSearch />
        </Center>
      </Flex>
      <Flex>
        <Text
        ml="6" 
        mt="3" 
        color="#025373" 
        fontWeight="bold"
        _dark={{color: "#DCE8F2"}}
        >
            {errors.name?.message}
        </Text>
      </Flex>
    </> 
  );
};
