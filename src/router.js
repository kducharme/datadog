import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MonitorsPage from './pages/monitors';
import DowntimePage from './pages/downtime';
import NotFound from './pages/404';

const PageRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={MonitorsPage}></Route>
            <Route path='/downtime' component={DowntimePage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)

export default PageRouter;

