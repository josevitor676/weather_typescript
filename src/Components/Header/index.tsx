import { Center, Flex, Heading, useColorMode } from "@chakra-ui/react"
import { DarkMode } from "../DarkMode"

export const Header = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex 
        h="100px" 
        bg="#DCE8F2" 
        w="100%" 
        justifyContent="space-between" 
        _dark={{bg: "#025373", color: "#DCE8F2", borderColor: "#DCE8F2"}}
        borderBottom="2px"
        borderColor="#025373"
        p={["2", "2", "0", "0"]}
        >
            <Flex alignItems="center">
                <Heading 
                ml={["2","2","6","6"]} 
                fontFamily="Roboto" 
                fontSize={["3xl","4xl"]}
                color="#025373"
                _dark={{color: "#DCE8F2"}}
                >
                    Weather Now
                </Heading>
            </Flex>
            <Center>
                <DarkMode 
                colorMode={colorMode} 
                toggleColorMode={toggleColorMode} 
                mr={["2","2","8"]}
                bg="#025373"
                color="#DCE8F2"
                _hover={{bg: "#025373", color: "#DCE8F2"}}
                _dark={{bg: "#DCE8F2", color: "#025373"}}
                />
            </Center>
        </Flex>
    )
}