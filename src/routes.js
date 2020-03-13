import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Main from './pages/Main';

import FirstPage from './pages/FirstPage';
import Dashboard from './pages/Dashboard';
import makeVagas from './pages/makeVagas';
import editVagas from './pages/editVagas';
import readVagas from './pages/readVagas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/makeVagas" component={makeVagas} />
                <Route path="/editVagas" component={editVagas} />
                <Route path="/readVagas" component={readVagas} />
            </Switch>
        </BrowserRouter>
    );
}
