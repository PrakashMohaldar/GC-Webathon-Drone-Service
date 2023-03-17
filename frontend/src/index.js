import React from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import LandingPage from './layouts/LandingPage'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <HashRouter>
       <LandingPage/>
    </HashRouter>
)