import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiSearch, FiInfo, FiBell, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import UserInfo from '../UserInfo/UserInfo';

const MotionBox = motion(Box);

export const Navbar = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Flex alignItems="center" p="2" boxShadow="xs">
      <IconButton variant="outline" aria-label="open menu" icon={<FiMenu />} />
      <Spacer />
      <MotionBox
        mr="2"
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
  );
};
