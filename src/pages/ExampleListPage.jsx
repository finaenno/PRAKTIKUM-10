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
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
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
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight,
  FiFilter,
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
          <Button leftIcon={<FiFilter />} variant="outline">
            Filter
          </Button>
          <Button leftIcon={<FiPrinter />} variant="outline">
            Print
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
                  <Tag colorScheme="green" size="sm">
                    SUKSES
                  </Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
              <Tr>
                <Td>Text</Td>
                <Td isNumeric>30.48</Td>
                <Td>
                  <Tag colorScheme="red" size="sm">
                    GAGAL
                  </Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
              <Tr>
                <Td>Text</Td>
                <Td isNumeric>0.91444</Td>
                <Td>
                  <Tag colorScheme="yellow" size="sm">
                    WARNING
                  </Tag>
                </Td>
                <Td>
                  <ActionMenu />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Flex alignItems="center">
          <Flex alignItems="center" flex="1">
            <Text flexShrink="0" mr={8} color="gray.600">
              Ditampilkan{' '}
              <Text fontWeight="bold" as="span">
                10
              </Text>{' '}
              dari{' '}
              <Text fontWeight="bold" as="span">
                0
              </Text>
            </Text>
          </Flex>
          <Flex alignItems="center" mr={2}>
            <Text flexShrink="0">Show:</Text>{' '}
            <Select ml={2} w={24} value={10} onChange={() => {}}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex alignItems="center" mr={2}>
            <Text flexShrink="0">Go to page:</Text>{' '}
            <NumberInput
              ml={2}
              mr={8}
              w={24}
              min={1}
              max={10}
              onChange={() => {}}
              defaultValue={1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex mr={2}>
            <Tooltip label="First Page">
              <IconButton
                onClick={() => {}}
                isDisabled={() => {}}
                icon={<FiChevronsLeft h={3} w={3} />}
                mr={4}
              />
            </Tooltip>
            <Tooltip label="Previous Page">
              <IconButton
                onClick={() => {}}
                isDisabled={false}
                icon={<FiChevronLeft h={6} w={6} />}
              />
            </Tooltip>
          </Flex>
          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                onClick={() => {}}
                isDisabled={false}
                icon={<FiChevronRight h={6} w={6} />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                onClick={() => {}}
                isDisabled={false}
                icon={<FiChevronsRight h={3} w={3} />}
                ml={4}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default ExampleListPage;
