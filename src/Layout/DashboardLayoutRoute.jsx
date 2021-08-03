import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import PropTypes from 'prop-types';
import SidebarContent from '../components/SidebarContent';
import BreadcrumbSection from '../components/BreadcrumbSection';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';

const MainContent = ({ children }) => {
  const { isOpen } = useSidebar();
  return (
    <Box
      transition="0.3s ease"
      ml={isOpen ? 60 : 20}
      animate={{
        marginLeft: isOpen
          ? 'var(--chakra-sizes-60)'
          : 'var(--chakra-sizes-20)',
      }}
      bg="gray.50"
      h="100vh"
    >
      <Navbar></Navbar>
      <BreadcrumbSection />
      <Box m="4">{children}</Box>
    </Box>
  );
};
const DashboardLayout = ({ children }) => {
  return (
    <Box minH="100vh">
      <SidebarProvider>
        <SidebarContent />
        <MainContent>{children}</MainContent>
      </SidebarProvider>
    </Box>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element,
};

MainContent.propTypes = {
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
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.func,
  ]),
};

export default DashboardLayoutRoute;
