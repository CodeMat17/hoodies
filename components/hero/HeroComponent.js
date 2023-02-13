import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { animated, useSpring } from "react-spring";

const HeroComponent = () => {
  const animImg = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: "0.4", duration: 3 },
    },
  };

  const animTag = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      // rotate: [5, -10, 0],
      transition: { duration: 3 },
    },
  };

  const animCart = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [5, -10, 0],
      transition: { duration: 3, delay: 1 },
    },
  };

  const animCustomers = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      // rotate: [5, -10, 0],
      transition: { duration: 3, delay: 0.5 },
    },
  };

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 800,
      config: { mass: 1, tension: 20, friction: 20 },
    });
    return (
      <animated.div>
        {number.to((n) =>
          n
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </animated.div>
    );
  }
  const qualityTextColor = useColorModeValue("green.700", "#cb8f15");
  const dropBackBgColor = useColorModeValue("yellow.900", "gray.900");
  const cartColor = useColorModeValue("yellow.400", "#cb8f15");

  return (
    <Box
      as={motion.div}
      id='hero'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.6 }}
      pos='relative'
      minH={{ base: "90vh", sm: "100vh" }}
      bgImage={`url(/heroBg.webp)`}
      bgPos='top'
      bgSize='cover'
      bgAttachment='fixed'>
      <Box
        bg={dropBackBgColor}
        opacity='0.65'
        w='full'
        h='full'
        pos='absolute'
      />
      <Box
        as={motion.div}
        variants={animCustomers}
        rounded='2xl'
        shadow='dark-lg'
        p='2'
        pos='absolute'
        left='24px'
        top='70px'
        color='white'
        lineHeight='shorter'
        textAlign='center'>
        <HStack fontSize='3xl' justify='center' spacing='0'>
          <Text fontWeight='semibold'>+</Text>
          <Box fontWeight='semibold'>
            <Number n={99} />
          </Box>
          <Text fontWeight='semibold'>k</Text>
        </HStack>
        <Text>Happy</Text>
        <Text>Customers</Text>
      </Box>

      <Box
        pos='absolute'
        right='0'
        top='0'
        lineHeight='shorter'
        textAlign='center'
        fontSize='sm'
        p={{ base: "8", sm: "12", md: "20" }}
        display='flex'
        flexDir='column'
        alignItems='flex-end'
        justifyContent='flex-end'>
        <Box
          // as={motion.div}
          // variants={animCart}
          color={cartColor}
          display='flex'
          flexDir='column'
          alignItems='center'>
          <BsCart4 size={50} />
          <Text mt='1'>Shop With Us</Text>
          <Text>Today</Text>
        </Box>
      </Box>

      <Box
        as={motion.div}
        display='flex'
        flexDir={{ base: "column", md: "row-reverse" }}
        alignItems='center'
        justifyContent='center'
        pos='absolute'
        left='0'
        right='0'
        bottom='0'
        top='0px'>
        <Box as={motion.div} variants={animImg} pos='relative'>
          <Image
            alt='hero image'
            src='/indexLogo.webp'
            w={{ base: "300px", lg: "350px" }}
            h={{ base: "350px", lg: "380px" }}
            // alignSelf='center'
          />
          <Box
            as={motion.div}
            variants={animTag}
            shadow='dark-lg'
            border='2px'
            borderColor={qualityTextColor}
            pos='absolute'
            right='0px'
            bottom='90px'
            rounded='full'
            bg='green.200'
            display='flex'
            alignItems='center'
            gap='1'>
            <IoIosCheckmarkCircleOutline size={32} color='green' />
            <Text pr='4' color={qualityTextColor}>
              Quality
            </Text>
          </Box>
        </Box>

        <Box
          px='4'
          textAlign={{ base: "center", md: "start" }}
          lineHeight='shorter'
          fontWeight=''>
          <Text color='white' fontSize={{ base: "5xl", md: "6xl" }}>
            Hoodies eShop
          </Text>
          <Text color='gray.300' fontSize='xl' maxW='sm'>
            For quality, good designs and all colours of hoodies, we got you
            covered.
          </Text>
          <Box mt='8'>
            <Button
              size='lg'
              px='12'
              py='6'
              bg='#cb8f15'
              _hover={{ bg: "yellow.400" }}>
              SHOP NOW
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroComponent;
