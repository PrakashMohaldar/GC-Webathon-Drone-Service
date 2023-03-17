import React from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import LandingPage from './layouts/LandingPage'
import AuthLayout from "./layouts/Auth";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <HashRouter>
        <Switch>
      {/* <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/rtl`} component={RTLLayout} /> */}
          <Route path={`/auth`} component={AuthLayout} />
          <LandingPage/>
          <Redirect from={`/`} to="/admin/dashboard" />
    </Switch>
    </HashRouter>
)