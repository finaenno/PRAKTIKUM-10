import React from 'react';
import { Heading, GridItem, Grid } from '@chakra-ui/react';

function Dashboard() {
  return (
    <div>
      <Heading as="h2" size="lg" mb="4" color="gray.800">
        Dashboard
      </Heading>
      <Grid
        h="200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem
          colSpan={1}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={1}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={1}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          colSpan={2}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
        <GridItem
          rowSpan={2}
          colSpan={1}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="340px"
        />
        <GridItem
          colSpan={2}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg="white"
          p="4"
          height="160px"
        />
      </Grid>
    </div>
  );
}

export default Dashboard;
