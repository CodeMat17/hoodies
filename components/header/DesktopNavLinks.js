import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

const DesktopNavLinks = () => {
  return (
    <Box display={{ base: "none", md: "flex" }}>
      <Link to='hero' spy={true} smooth={true} offset={-100} duration={500}>
        <Button
          px='3'
          variant='ghost'
          _hover={{ bg: "yellow.100", color: "gray.600" }}
          size='lg'>
          Home
        </Button>
      </Link>
      <Link to='trendy' spy={true} smooth={true} offset={-50} duration={500}>
        <Button
          px='3'
          variant='ghost'
          _hover={{ bg: "yellow.100", color: "gray.600" }}
          size='lg'>
          Trendy
        </Button>
      </Link>
      <Link
        to='collections'
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}>
        <Button
          px='3'
          variant='ghost'
          _hover={{ bg: "yellow.100", color: "gray.600" }}
          size='lg'>
          Collections
        </Button>
      </Link>
      <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}>
        <Button
          px='3'
          variant='ghost'
          _hover={{ bg: "yellow.100", color: "gray.600" }}
          size='lg'>
          Contact Us
        </Button>
      </Link>
    </Box>
  );
};

export default DesktopNavLinks;
