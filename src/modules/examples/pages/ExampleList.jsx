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
  Skeleton,
  Td,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiPrinter, FiPlus, FiFilter } from 'react-icons/fi';
import useFetch from 'use-http';
import Pagination from '../../../components/Pagination/Index';
import { ExampleListItem } from '../components/ExampleListItem';
import { Link } from 'react-router-dom';

function ExampleListPage() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const { response, get, loading } = useFetch('/api/examples');

  useEffect(() => {
    const callFetch = async () => {
      await get(`?limit=${perPage}&offset=${(page - 1) * perPage}`);
      if (response.ok) {
        setData(response.data?.data || []);
        setTotal(response.data?.meta?.total || 0);
      }
    };
    callFetch();
  }, [get, page, perPage, response]);

  return (
    <div>
      <Heading as="h2" size="lg" mb="4">
        Example List Page
      </Heading>
      <Box
        colSpan={1}
        boxShadow="sm"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        p="8"
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
          <Button
            leftIcon={<FiPlus />}
            variant="outline"
            as={Link}
            to="/example/new"
          >
            Add
          </Button>
        </HStack>
        <Box borderWidth="1px" borderRadius="lg" mb="4">
          <Table>
            <Thead>
              <Tr>
                <Th>Text</Th>
                <Th isNumeric>Number</Th>
                <Th>Status</Th>
                <Th>Tanggal</Th>
                <Th w="20px">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {loading
                ? Array.from({ length: perPage }, (_, i) => (
                    <Tr key={`loader-${i}`}>
                      <Td>
                        <Skeleton
                          borderRadius="md"
                          height="32px"
                          width="200px"
                          my="4px"
                        />
                      </Td>
                      <Td>
                        <Skeleton
                          borderRadius="md"
                          height="32px"
                          width="50px"
                          my="4px"
                          marginLeft="auto"
                        />
                      </Td>
                      <Td>
                        <Skeleton
                          borderRadius="md"
                          height="32px"
                          width="50px"
                          my="4px"
                        />
                      </Td>
                      <Td>
                        <Skeleton
                          borderRadius="md"
                          height="32px"
                          width="300px"
                          my="4px"
                        />
                      </Td>
                      <Td>
                        <Skeleton borderRadius="md" height="32px" my="4px" />
                      </Td>
                    </Tr>
                  ))
                : data.map(({ id, nama, nilai, tanggal, status }) => (
                    <ExampleListItem
                      id={id}
                      nama={nama}
                      nilai={nilai}
                      status={status}
                      tanggal={tanggal}
                      key={id}
                    />
                  ))}
            </Tbody>
          </Table>
        </Box>
        <Pagination
          page={page}
          setPage={setPage}
          perPage={perPage}
          setPerPage={setPerPage}
          total={total}
        />
      </Box>
    </div>
  );
}

export default ExampleListPage;
