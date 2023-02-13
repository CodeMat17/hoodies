import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Logo from "../components/Logo";
import ContactUsLinks from "./ContactUsLinks";

const Footer = () => {
  return (
    <Box color='gray.500'>
      <Box bg='gray.800' px='4' py='8'>
        <Box maxW='6xl' mx='auto'>
          <Logo />
          <SimpleGrid columns={[2, 3, 4]} mt='6' spacingY='20px'>
            <Box>
              <Text>ABOUT US</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
            </Box>
            <Box>
              <Text>OUR MISSION</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
            </Box>
            <Box>
              <Text>OUR PRODUCTS</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
              <Text fontSize='sm'>Lorem ipsum.</Text>
            </Box>
            <Box id='contact'>
              <Text>CONTACT US</Text>
              <ContactUsLinks />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Box bg='gray.900' textAlign='center' py='4'>
        &copy; Hoodies eShop. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
