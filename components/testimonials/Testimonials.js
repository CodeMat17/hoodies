import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../testimonials/TestimonialCard";

const Testimonials = () => {
  return (
    <Box id='testimonials' maxW='6xl' mx='auto' px={[4, 8]} py='12'>
      <Text
        lineHeight='shorter'
        fontSize='4xl'
        fontWeight='normal'
        textAlign='center'>
        Testimonials
      </Text>
      <Text textAlign='center'>See what some of our clients say about us.</Text>

      <SimpleGrid mt='8' mb='4' spacingX='30px' spacingY='20px' columns={[1, 2, 3]}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
