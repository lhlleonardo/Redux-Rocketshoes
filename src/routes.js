import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home/index';
import Cart from './Pages/Cart/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}
