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
} from '@chakra-ui/react';
import React from 'react';
import { FiSearch, FiPrinter, FiPlus, FiFilter } from 'react-icons/fi';
import Pagination from '../components/Pagination/Index';
import { ExampleListItem } from '../components/ExampleListPage/ExampleListItem';

function ExampleListPage() {
  const exampleData = [
    {
      text: 'Data Gagal',
      num: 1098.12,
      status: 'gagal',
    },
    {
      text: 'Data Sukses',
      num: 1,
      status: 'sukses',
    },
    {
      text: 'Data Warning',
      num: 301,
      status: 'warning',
    },
  ];
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
              {exampleData.map(({ text, num, status }) => (
                <ExampleListItem text={text} num={num} status={status} />
              ))}
            </Tbody>
          </Table>
        </Box>
        <Pagination />
      </Box>
    </div>
  );
}

export default ExampleListPage;
