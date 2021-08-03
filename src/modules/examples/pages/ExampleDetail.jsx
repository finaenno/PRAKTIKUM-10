import { Heading, Box } from '@chakra-ui/react';
import React from 'react';

function ExampleDetailPage() {
  return (
    <div>
      <Heading as="h2" size="lg" mb="4">
        Example Detail Page
      </Heading>
      <Box
        colSpan={1}
        boxShadow="sm"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        p="8"
      ></Box>
    </div>
  );
}

export default ExampleDetailPage;
