import { Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';
import PropTypes from 'prop-types';

const NavItem = ({ icon, name, to, isIcon, ...rest }) => {
  const { isOpen } = useSidebar();
  return (
    <Tooltip label={name} placement="right-start" hasArrow isDisabled={!isIcon}>
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
        <Text isTruncated>{isIcon ? '' : name}</Text>
      </Flex>
    </Tooltip>
  );
};

NavItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.func,
  ]),
  name: PropTypes.string,
  to: PropTypes.string,
  isIcon: PropTypes.bool,
};

export default NavItem;
