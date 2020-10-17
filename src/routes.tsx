import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanangesMap from './pages/OrphanagesMap';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} ></Route>
                <Route path="/app" component={OrphanangesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
