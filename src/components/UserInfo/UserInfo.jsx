import { Avatar, Text, VStack, HStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export const UserInfo = ({ avatarUrl, name, role}) => {
  return (
    <HStack>
      <Avatar
        size={"sm"}
        src={avatarUrl}
      />
      <VStack
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        spacing="1px"
        ml="2"
      >
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs" color="gray.600">
          {role}
        </Text>
      </VStack>
    </HStack>
  );
}


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

export default UserInfo