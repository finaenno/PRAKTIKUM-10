import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function AppRouter() {
    return (  <ChakraProvider>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
        </ChakraProvider>
    );
}