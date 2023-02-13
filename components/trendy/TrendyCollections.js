import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { products } from "../../data/products";
import TrendyCard from "./TrendyCard";
import TrendySwiper from "./TrendySwiper";

const TrendyCollections = () => {
  return (
    <Box id='trendy' w='full'  py='12' px={[2, 8]}>
      <Box maxW='6xl' mx='auto'>
        <Text
          lineHeight='shorter'
          fontSize='4xl'
          fontWeight='normal'
          textAlign='center'>
          Trendy Collections
        </Text>
        <Text textAlign='center'>Hot Samples</Text>

        <TrendySwiper />
      </Box>
    </Box>
  );
};

export default TrendyCollections;
