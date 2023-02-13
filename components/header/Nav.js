import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Logo from "../../components/Logo";
import ColorModeToggle from "./ColorModeToggle";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileDrawer from "./MobileDrawer";

const Nav = () => {
   const bg = useColorModeValue("white", "gray.800");

  return (
    <Box 
      bg={bg}
      px='4'
      py='2'
      pos='sticky'
      top='0'
      zIndex='60'>
      <Box
        maxW='6xl'
        mx='auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'>
        <Logo />
        <HStack>
          <ColorModeToggle />
          <MobileDrawer />
          <DesktopNavLinks />
        </HStack>
      </Box>
    </Box>
  );
};

export default Nav;
