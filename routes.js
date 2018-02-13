/**
 * Created by Carrycat on 2016-12-20.
 */
import React from 'react';
import { Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router'
import App from './App';
import wxLogin from "./containers/wxLogin";


export default function getRoutes(store){
    return(
        <Route path="/" component={App}>
            <Route path="account/">
                <Route path="wxLogin/" component={wxLogin}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    );
}

