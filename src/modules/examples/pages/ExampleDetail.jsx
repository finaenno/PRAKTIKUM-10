import {
  Heading,
  Box,
  Text,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BreadcrumbSection from '../../../components/BreadcrumbSection/index';
import { useEffect } from 'react';
import useAsync from '../../../hooks/useAsync';

function ExampleDetailPage() {
  const { id } = useParams();
  const { isLoading, isError, isSuccess, error, data, run } = useAsync({});
  useEffect(() => {
    run(axios.get(`/api/examples/${id}`).then((res) => res.data.data));
  }, [id, run]);
  const breadcrumbData = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Example',
      url: '/example',
    },
  ];

  return (
    <>
      <BreadcrumbSection
        data={[...breadcrumbData, { name: data?.nama, isLoading }]}
      />
      <Box m="8">
        <Heading as="h2" size="lg" mb="4">
          {isLoading ? <Skeleton height="36px" width="200px" /> : data?.nama}
        </Heading>
        <Box
          colSpan={1}
          boxShadow="sm"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="8"
        >
          {isLoading && <Box>Loading</Box>}
          {isError && (
            <Alert my="4" borderRadius="md" status="error">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>Terjadi kesalahan saat memuat data</AlertTitle>
                <AlertDescription display="block">
                  {error.message}
                </AlertDescription>
              </Box>
            </Alert>
          )}
          {isSuccess && (
            <Box>
              <Box mb="4">
                <Text fontSize="md" fontWeight="semibold" as="p">
                  Id
                </Text>
                <Text as="p" fontSize="sm">
                  {data.id}
                </Text>
              </Box>
              <Box mb="4">
                <Text fontSize="md" fontWeight="semibold" as="p">
                  Nama
                </Text>
                <Text as="p" fontSize="sm">
                  {data.nama}
                </Text>
              </Box>
              <Box mb="4">
                <Text fontSize="md" fontWeight="semibold" as="p">
                  Nilai
                </Text>
                <Text as="p" fontSize="sm">
                  {data.nilai}
                </Text>
              </Box>
              <Box mb="4">
                <Text fontSize="md" fontWeight="semibold" as="p">
                  Tanggal
                </Text>
                <Text as="p" fontSize="sm">
                  {data.tanggal}
                </Text>
              </Box>
              <Box mb="4">
                <Text fontSize="md" fontWeight="semibold" as="p">
                  Status
                </Text>
                <Text as="p" fontSize="sm">
                  {data.status}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ExampleDetailPage;
