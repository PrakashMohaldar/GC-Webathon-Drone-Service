import React from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

import { GoogleOAuthProvider } from '@react-oauth/google';

import LandingPage from './layouts/LandingPage'
import AuthLayout from "./layouts/Auth";

const CLIENT_ID = 'process.env.REACT_APP_CLIENT_ID';
const container = document.getElementById('root')
const root = createRoot(container)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);


root.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <Route path={`/auth`} component={AuthLayout} />
                    <Route path={`/admin`} component={LandingPage} />
                    <Redirect from={`/`} to="/admin/dashboard" />
                </GoogleOAuthProvider>
            </Switch>
        </HashRouter>
    </Provider>
)