import {
  Heading,
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import {
  FiSearch,
  FiPrinter,
  FiPlus,
  FiMoreVertical,
  FiPower,
  FiCopy,
  FiEdit,
  FiTrash,
} from 'react-icons/fi';

const ActionMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMoreVertical />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FiPower />}>Activate</MenuItem>
        <MenuItem icon={<FiCopy />}>Duplicat</MenuItem>
        <MenuItem icon={<FiEdit />}>Ganti Nama</MenuItem>
        <MenuItem icon={<FiTrash />}>Hapus</MenuItem>
      </MenuList>
    </Menu>
  );
};
function ExampleListPage() {
  return (
    <div>
      <Heading as="h2" size="lg" mb="4">
        Example List Page
      </Heading>
      <Box
        colSpan={1}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        p="4"
      >
        <HStack spacing="24px" mb="4">
          <InputGroup w="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray.300" />}
            />
            <Input type="tel" placeholder="Find" />
          </InputGroup>
          <Spacer />
          <Button leftIcon={<FiPrinter />} variant="outline">
            Action
          </Button>
          <Button leftIcon={<FiPlus />} variant="outline">
            Add
          </Button>
        </HStack>
        <Box borderWidth="1px" borderRadius="lg" mb="4">
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Text</Th>
                <Th isNumeric>mNumber</Th>
                <Th>Status</Th>
                <Th w="20px">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Text</Td>
                <Td isNumeric>25.4</Td>
                <Td>
                  <Tag colorScheme="green">SUKSES</Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
              <Tr>
                <Td>Text</Td>
                <Td isNumeric>30.48</Td>
                <Td>
                  <Tag colorScheme="red">GAGAL</Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
              <Tr>
                <Td>Text</Td>
                <Td isNumeric>0.91444</Td>
                <Td>
                  <Tag colorScheme="yellow">WARNING</Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </div>
  );
}

export default ExampleListPage;
