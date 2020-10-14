import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Landing } from './pages/Landing';
import OrphanageMap  from './pages/OrphanageMap';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" exact component={OrphanageMap}/>
        </BrowserRouter>
    )
}

export default Routes;