import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

interface DarkModeProps extends ButtonProps {
    colorMode: string;
    toggleColorMode: () => void;
}

export const DarkMode = ({colorMode, toggleColorMode, ...rest}: DarkModeProps) => {

  //const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        {...rest}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};
