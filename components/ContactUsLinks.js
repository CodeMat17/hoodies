import { Box, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const ContactUsLinks = () => {
  return (
    <Box display='flex' gap='10px' alignItems='center'>
      <Link href='https://wa.me/2348063856120' target='_blank'>
        <IconButton
          bg='transparent'
          _hover={{ bg: "transparent", color: "white" }}
          icon={<BsWhatsapp size={23} />}
        />
      </Link>
      <Link href='mailto:codemat.biz@gmail.com'>
        <IconButton
          bg='transparent'
          _hover={{ bg: "transparent", color: "white" }}
          icon={<BiMailSend size='30' />}
        />
      </Link>
    </Box>
  );
};

export default ContactUsLinks;
