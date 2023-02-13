import { Box, Divider, Image, Text } from "@chakra-ui/react";

const TestimonialCard = ({ name, content, img }) => {
  return (
    <Box
      mx='auto'
      border='1px'
      borderColor='gray.300'
      py='4' px='2'
      rounded='md'
      shadow='md'
      display='flex'
      flexDir='column'
      alignItems='center'>
      <Image alt={name} src={img} w='80px' h='80px' rounded='full' />
          <Text fontSize='lg'>{name}</Text>
          <Divider mt='1' mb='4' />
          <Text lineHeight='shorter' textAlign='center' color='gray.500'>{content}</Text>
    </Box>
  );
};

export default TestimonialCard;
