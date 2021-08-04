import React from 'react';
import { Heading, GridItem, Grid, Text, Box } from '@chakra-ui/react';

function Dashboard() {
  return (
    <Box m="8">
      <Heading as="h2" size="lg" mb="4" mt="8" color="gray.800">
        Hello{' '}
        <Text color="blue.600" as={'span'}>
          Kevin
        </Text>
        !
      </Heading>
      <Grid
        h="200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={1}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={1}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={1}
          borderRadius="lg"
          boxShadow="sm"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={2}
          borderRadius="lg"
          boxShadow="sm"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          rowSpan={2}
          colSpan={1}
          borderRadius="lg"
          boxShadow="sm"
          overflow="hidden"
          bg="white"
          p="4"
          height="340px"
        />
        <GridItem
          colSpan={2}
          borderRadius="lg"
          boxShadow="sm"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
      </Grid>
    </Box>
  );
}

export default Dashboard;
