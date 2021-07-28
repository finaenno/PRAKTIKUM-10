import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayoutRoute from "./Layout/DashboardLayoutRoute";

export default function AppRouter() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <DashboardLayoutRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
