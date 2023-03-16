import React from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import App from './App.js'
import LandingPage from './layouts/LandingPage'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <>
        <App/>
        <LandingPage/>
    </>
)