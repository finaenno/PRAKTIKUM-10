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
  Alert,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { FiSearch, FiPrinter, FiPlus, FiFilter } from 'react-icons/fi';
import queryString from 'query-string';
import Pagination from '../../../components/Pagination/Index';
import { ExampleListItem } from '../components/ExampleListItem';
import { useQueryParams } from '../../../hooks/useQueryParams';
import BreadcrumbSection from '../../../components/BreadcrumbSection/index';
import useAsync from '../../../hooks/useAsync';

function ExampleListPage() {
  const { query, push } = useQueryParams({ page: 1, limit: 5, keywords: '' });
  const { isLoading, isError, isSuccess, data, run } = useAsync({
    data: {
      data: [],
      meta: {},
    },
  });

  const breadcrumbData = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Example',
    },
  ];

  useEffect(() => {
    run(
      axios
        .get(`/api/examples?${queryString.stringify(query)}`)
        .then((res) => res.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.limit, query.page, query.keywords]);

  const changeQuery = (newQuery) => {
    push({ ...query, ...newQuery });
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      changeQuery({ keywords: e.target.value });
    }
  };

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <Box m="8">
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
              <Input
                type="tel"
                placeholder="Find"
                onKeyDown={(e) => onSearch(e)}
              />
            </InputGroup>
            <Spacer />
            <Button leftIcon={<FiFilter />} variant="outline">
              Filter
            </Button>
            <Button leftIcon={<FiPrinter />} variant="outline">
              Print
            </Button>
            <Button leftIcon={<FiPlus />} variant="solid" colorScheme="blue">
              Add
            </Button>
          </HStack>
          {isError && (
            <Alert my="4" borderRadius="md" status="error">
              Terjadi kesalahan saat memuat data
            </Alert>
          )}
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
                {isLoading &&
                  Array.from({ length: query.limit }, (_, i) => (
                    <Tr key={`loader-${i}`} data-testid={`loader-${i}`}>
                      <Td>
                        <Skeleton height="32px" width="200px" my="4px" />
                      </Td>
                      <Td>
                        <Skeleton
                          height="32px"
                          width="50px"
                          my="4px"
                          marginLeft="auto"
                        />
                      </Td>
                      <Td>
                        <Skeleton height="32px" width="50px" my="4px" />
                      </Td>
                      <Td>
                        <Skeleton height="32px" width="300px" my="4px" />
                      </Td>
                      <Td>
                        <Skeleton height="32px" my="4px" />
                      </Td>
                    </Tr>
                  ))}
                {isSuccess &&
                  data.data.map(({ id, nama, nilai, tanggal, status }) => (
                    <ExampleListItem
                      data-testid={`list-item-${id}`}
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
          {isSuccess && (
            <Pagination
              page={query.page}
              changeQuery={changeQuery}
              limit={query.limit}
              total={data.meta.total}
            />
          )}
        </Box>
      </Box>
    </>
  );
}

export default ExampleListPage;
