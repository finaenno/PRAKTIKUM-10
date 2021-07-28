import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

const DashboardLayout = ({ children }) => 
<Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
  <Navbar></Navbar>
  <Box p="4">
    {children}
  </Box>
</Box>;

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;
