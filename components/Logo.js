import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Box display='flex' flexDir='row' alignItems='center' gap='8px'>
      <Link href='/'>
        <Image
          alt='logo'
          src='/favlogo.webp'
          rounded='full'
          w={{ base: "55px", md: "60px" }}
          h={{ base: "55px", md: "60px" }}
        />
      </Link>
      <Text
        bgGradient='linear(to-l, #FF0080, #cb8f15, #cb8f15)'
        bgClip='text'
        fontSize='2xl'>
        Hoodies eShop
      </Text>
    </Box>
  );
};

export default Logo;
