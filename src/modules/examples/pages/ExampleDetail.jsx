import { Heading, Box, Text, Skeleton } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbSection from '../../../components/BreadcrumbSection/index';
import { useFetch, CachePolicies } from 'use-http';
import { useEffect, useState } from 'react';

function ExampleDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { response, get, loading } = useFetch('/api/examples', {
    cachePolicy: CachePolicies.NO_CACHE,
    loading: true,
  });
  useEffect(() => {
    const callFetch = async () => {
      await get(`/${id}`);
      if (response.ok) {
        setData(response.data?.data || {});
      }
    };
    callFetch();
  }, [get, id, response]);
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
        data={[...breadcrumbData, { name: data?.nama, isLoading: loading }]}
      />
      <Box m="8">
        <Heading as="h2" size="lg" mb="4">
          {loading ? <Skeleton height="36px" width="200px" /> : data?.nama}
        </Heading>
        <Box
          colSpan={1}
          boxShadow="sm"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="8"
        >
          {loading ? (
            <Box>Loading</Box>
          ) : (
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
