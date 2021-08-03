import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashboardLayoutRoute from './Layout/DashboardLayoutRoute';
import { ProtectedRoutes } from './routes';
import Login from './pages/Login';
import theme from './theme';

export default function AppRouter() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Switch>
              {ProtectedRoutes.map((pr) => (
                <DashboardLayoutRoute
                  key={pr.name}
                  exact={pr.exact}
                  path={pr.path}
                  component={pr.component}
                />
              ))}
              <Route path="*">
                <div>404: Page Not Found</div>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
