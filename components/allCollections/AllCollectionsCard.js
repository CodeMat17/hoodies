import { Badge, Box, Image, Tab, Tag, Text } from "@chakra-ui/react";

const AllCollectionsCard = ({
  name,
  desc,
  price,
  img,
  in_stock,
  new_product,
}) => {
  const formatedPrice = new Intl.NumberFormat().format(price);

  return (
    <Box
      display='flex'
      flexDir='column'
      pos='relative'
      border='1px'
      borderColor='gray.300'
      p='4'
      rounded='md'
      overflow='hidden'>
      <Image alt={name} src={img} alignSelf='center' />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        pos='absolute'
        bottom='0'
        left='0'
        right='0'
        w='full'
        h='90px'
        bgGradient='linear(to-t, yellow.500, transparent)'>
        <Text fontSize='2xl' fontWeight='medium'>
          {name}
        </Text>
      </Box>
      <Box
        pos='absolute'
        top='4'
        display='flex'
        flexDir='column'
        gap='1'
        alignItems='flex-start'>
        {new_product && (
          <Tag size='lg' fontWeight='medium' bg='green.300'>
            NEW
          </Tag>
        )}
        {in_stock ? (
          <Tag size='lg' fontWeight='medium' bg='yellow.500'>
            In stock
          </Tag>
        ) : (
          <Tag size='lg' fontWeight='medium' bg='red.300'>
            Not stock
          </Tag>
        )}
      </Box>
      <Text pos='absolute' top='4' right='4' fontSize='2xl'>
        ₦{formatedPrice}
      </Text>
    </Box>
  );
};

export default AllCollectionsCard;
