import {
  Avatar,
  Text,
  VStack,
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaAngleDown } from 'react-icons/fa';

export const UserInfo = ({ avatarUrl, name, role }) => {
  const onSignout = () => {
    // TODO: delete cookies or auth
    window.location.href = '/login';
  };
  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
        <HStack>
          <Avatar size={'sm'} src={avatarUrl} />
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            <Text fontSize="sm">{name}</Text>
            <Text fontSize="xs" color="gray.400">
              {role}
            </Text>
          </VStack>
          <Box display="flex">
            <FaAngleDown />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList bg="gray.800">
        <MenuItem onClick={onSignout}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
};

UserInfo.propTypes = {
  /**
   * User avatar
   */
  avatarUrl: PropTypes.string,
  /**
   * User name
   */
  name: PropTypes.string,
  /**
   * User role
   */
  role: PropTypes.string,
};

export default UserInfo;
