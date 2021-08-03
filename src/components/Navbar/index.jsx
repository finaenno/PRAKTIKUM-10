import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  DarkMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiSearch, FiInfo, FiBell, FiChevronLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import UserInfo from '../UserInfo';
import { useSidebar } from '../../context/SidebarContext';

const MotionBox = motion(Box);

export const Navbar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const { isOpen, onToggle } = useSidebar();
  return (
    <DarkMode>
      <Flex
        alignItems="center"
        py="2"
        px="3"
        boxShadow="xs"
        bg="gray.800"
        color="gray.200"
      >
        <IconButton
          onClick={onToggle}
          variant="outline"
          aria-label="open menu"
          icon={<FiChevronLeft size="24px" />}
          transition="0.3 ease"
          transform={isOpen ? '' : 'rotate(180deg)'}
        />
        <Spacer />
        <MotionBox
          mr="2"
          width="150px"
          animate={{
            width: isFocus ? 250 : 150,
          }}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FiSearch />} />
            <Input
              type="text"
              placeholder="Cari disini"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </InputGroup>
        </MotionBox>
        <Box mr="2">
          <IconButton icon={<FiInfo size="24px" />} variant="ghost" />
        </Box>
        <Box mr="2">
          <IconButton icon={<FiBell size="24px" />} variant="ghost" />
        </Box>
        <Box>
          <UserInfo
            avatarUrl="http://placekitten.com/g/200/200"
            name="Kevin Sanjaya"
            role="Teacher"
          />
        </Box>
      </Flex>
    </DarkMode>
  );
};

export default Navbar;
