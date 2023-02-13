import { Badge, Box, Image, Tag, Text } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TrendyCard = ({ name, desc, img, price }) => {
  const formatedPrice = new Intl.NumberFormat().format(price);

  return (
    <Box mb='12'>
      <Box py='6'
        mx='auto'
        rounded='md'
        shadow='md'
        bgGradient='linear(to-t, yellow.500, transparent)'
        pos='relative'
        display='flex'
        flexDir='column'
        justifyContent='space-between'>
        <Image alt={name} src={img} w='200px' h='200px' alignSelf='center' />
        <Text pos='absolute' top='4' left='4' fontSize='2xl' fontWeight='light'>
          {name}
        </Text>
        <Text
          pos='absolute'
          bottom='4'
          right='4'
          fontSize='2xl'
          fontWeight='medium'>
          ₦{formatedPrice}
        </Text>
        <Tag size='lg'
          pos='absolute'
          bottom='4' shadow='dark-lg' px='2' py='1'
          left='4' rounded='full'        
          fontWeight='light'>
         NEW
        </Tag>
      </Box>
    </Box>
  );
};

export default TrendyCard;
