import { Flex, Icon, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';

const NavItem = ({ icon, children, to, isIcon, ...rest }) => {
  const { isOpen } = useSidebar();
  return (
    <Flex
      wordBreak="keep-all"
      style={{
        textDecoration: 'none',
      }}
      align="center"
      px="3"
      py="2"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'gray.100',
      }}
      h="40px"
      color="gray.900"
      as={NavLink}
      to={to}
      activeStyle={{
        background: 'var(--chakra-colors-gray-200)',
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mx={isOpen ? '' : 'auto'}
          mr={isOpen ? '4' : ''}
          fontSize="16"
          as={icon}
        />
      )}
      <Text isTruncated>{isIcon ? '' : children}</Text>
    </Flex>
  );
};

export default NavItem;
