import {
    Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const MobileDrawer = () => {
    return (
      <Box display={{ base: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HiMenuAlt3 size={30} />}
            variant='outline'
            bg='transparent'
            color='#cb8f15'
            shadow='md'
          />
          <Portal>
            <MenuList>
              <Link
                to='hero'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <MenuItem minH='50px'>Home</MenuItem>
              </Link>
              <Link
                to='trendy'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <MenuItem minH='50px'>Trendy Collections</MenuItem>
              </Link>
              <Link
                to='collections'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <MenuItem minH='50px'>All Collections</MenuItem>
              </Link>
              <Link
                to='testimonials'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <MenuItem minH='50px'>Testimonials</MenuItem>
              </Link>
              <Link
                to='newsletter'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <MenuItem minH='50px'>News Letter</MenuItem>
              </Link>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                <MenuItem minH='50px'>Contact Us</MenuItem>
              </Link>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
    );
};

export default MobileDrawer;
