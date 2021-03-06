import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cardsPage from './pages/cardsPage';
import FirstPage from './pages/FirstPage';
import makeVagas from './pages/MakeVagas';
import editVagas from './pages/EditVagas';
import readVagas from './pages/ReadVagas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FirstPage} />
                <Route path="/cardsPage" component={cardsPage} />
                <Route path="/makeVagas" component={makeVagas} />
                <Route path="/editVagas" component={editVagas} />
                <Route path="/readVagas" component={readVagas} />
            </Switch>
        </BrowserRouter>
    );
}
