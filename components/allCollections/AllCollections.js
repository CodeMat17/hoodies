import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { products } from "../../data/products";
import AllCollectionsCard from "./AllCollectionsCard";

const AllCollections = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [allProducts, setAllProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  const filter = (type) => {
    setAllProducts(null);
    setAllProducts(products.filter((product) => product.type === type));
  };
  
  return (
    <Box id='collections' py='12' px='4' maxW='6xl' mx='auto'>
      <Text
        lineHeight='shorter'
        fontSize='4xl'
        fontWeight='normal'
        textAlign='center'>
        All Collections
      </Text>
      <Text textAlign='center'>Hot and Quality</Text>

      <Box
        py='8'
        display='flex'
        flexDir={{ base: "column", md: "row" }}
        gap='30px'
        alignItems='start'>
        <Box
          w={{ base: "full", md: "150px" }}
          display='flex'
          flexDir={{ base: "row", md: "column" }}
          justifyContent='center'
          gap='5px'>
          <Button
            onClick={() => {
              setLoading(true);
              setActiveBtn("all");
              setAllProducts(products);
              setLoading(false);
            }}
            isLoading={loading}
            variant='ghost'
            bg={activeBtn === "all" && "#cb8f15"}>
            All
          </Button>
          <Button
            onClick={() => {
              setLoading(true);
              setActiveBtn("nike");
              filter("nike");
              setLoading(false);
            }}
            isLoading={loading}
            variant='ghost'
            bg={activeBtn === "nike" && "#cb8f15"}>
            Nike
          </Button>
          <Button
            onClick={() => {
              setLoading(true);
              setActiveBtn("adidas");
              filter("adidas");
              setLoading(false);
            }}
            isLoading={loading}
            variant='ghost'
            bg={activeBtn === "adidas" && "#cb8f15"}>
            Adidas
          </Button>
          <Button
            onClick={() => {
              setLoading(true);
              setActiveBtn("puma");
              filter("puma");
              setLoading(false);
            }}
            isLoading={loading}
            variant='ghost'
            bg={activeBtn === "puma" && "#cb8f15"}>
            Puma
          </Button>
        </Box>
        <Box w='full' mx='auto'>
          {allProducts.length === 0 ? (
            <Text fontSize='lg' textAlign='center' maxW='sm' py='12' px='2'>
              The requested product(s) is not available at the moment, try
              later.
            </Text>
          ) : (
            <SimpleGrid
              spacingX='30px'
              spacingY='20px'
              columns={{ base: 1, sm: 2, md: 3 }}>
              {allProducts.map((product) => (
                <AllCollectionsCard key={product.id} {...product} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AllCollections;
