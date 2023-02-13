import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";

const NewsLetter = () => {
  return (
    <Box id='newsletter' px='4' py='12'>
      <Box maxW='md' mx='auto'>
        <Text
          lineHeight='shorter'
          fontSize='4xl'
          fontWeight='normal'
          textAlign='center'>
          News Letter
        </Text>
        <Text textAlign='center'>
          Subscribe to our news letter channel for updates on our new
          collections.
        </Text>

        <Box
          bg='yellow.100'
          mt='6'
          rounded='md'
          shadow='xl'
          // px='4'
          p='8'>
          <Box pl='3'
            border='1px'
            borderColor='#cb8f15'
            rounded='lg'
            display='flex'
            flexDir='row' alignItems='center'
            justifyContent='center'>
            <FormControl>
              <Input color='gray.600' pr='3' variant='unstyled' borderColor='transparent' placeholder='Enter your email' />
            </FormControl>
            <Button roundedLeft='none' px='8' py='6' bg='#cb8f15' _hover={{bg: 'yellow.200'}}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
