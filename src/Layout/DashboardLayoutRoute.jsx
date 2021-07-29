import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => (
  <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
    <Navbar></Navbar>
    <Box p="4">{children}</Box>
  </Box>
);

DashboardLayout.propTypes = {
  children: PropTypes.element,
};

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

DashboardLayoutRoute.propTypes = {
  component: PropTypes.element,
};

export default DashboardLayoutRoute;
