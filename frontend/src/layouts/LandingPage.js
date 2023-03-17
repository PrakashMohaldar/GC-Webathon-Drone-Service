import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
// import Footer from 'components/Footer/Footer.js';
// import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from '../components/Sidebar/index.js';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import theme from '../theme/theme.js';

// import MainPanel from '../components/Layout/MainPanel';
// import PanelContainer from '../components/Layout/PanelContainer';
// import PanelContent from '../components/Layout/PanelContent';

export default function LandingPage(props){
    const { ...rest } = props;

    return(
        <ChakraProvider theme={theme}>
            <Sidebar
				routes={routes}
				logoText={'Drone Srvice'}
				display='none'
				sidebarVariant={'opaque'}
				{...rest}
			/>
        </ChakraProvider>
    )
}
