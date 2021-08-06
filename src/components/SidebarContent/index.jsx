import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';
import NavItem from './NavItem';
import { ProtectedRoutes } from '../../routes';
import { useSidebar } from '../../context/SidebarContext';

const SidebarContent = (props) => {
  const { isOpen } = useSidebar();
  return (
    <Box
      transition="0.3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={isOpen ? 60 : 20}
      pos="fixed"
      h="full"
      d="flex"
      flexDirection="column"
      {...props}
    >
      <Flex
        h="20"
        alignItems="center"
        mx={isOpen ? '4' : 'auto'}
        justifyContent="space-between"
      >
        {isOpen ? (
          <Image htmlHeight="48px" htmlWidth="140px" src="/logo-side.png" />
        ) : (
          <Image htmlHeight="48px" htmlWidth="48px" src="/favicon-96x96.png" />
        )}
      </Flex>
      <Stack mx="4">
        {ProtectedRoutes.filter((r) => r.isShowNav).map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            to={link.path || '/'}
            exact={link.exact}
            isIcon={!isOpen}
            name={link.name}
          />
        ))}
      </Stack>
      <Box flex="1" />
      {isOpen && (
        <Box
          p="4"
          bg="gray.100"
          borderTop="1px"
          borderColor="gray.200"
          color="gray.600"
        >
          <Text isTruncated fontSize="xs">
            © Universitas Sebelas Maret
          </Text>
          <Text isTruncated fontSize="xs">
            All Rights Reserved
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SidebarContent;
