import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
// import Footer from 'components/Footer/Footer.js';
import AdminNavbar from '../components/Navbars/AdminNavbar.js';
import Sidebar from '../components/Sidebar/index.js';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import theme from '../theme/theme.js';

import MainPanel from '../components/Layout/MainPanel';
import PanelContainer from '../components/Layout/PanelContainer';
import PanelContent from '../components/Layout/PanelContent';



export default function LandingPage(props){
    const { ...rest } = props;
    const [ sidebarVariant, setSidebarVariant ] = useState('opaque');

    const [ fixed, setFixed ] = useState(true);

    const getRoute = () => {
		return window.location.pathname !== '/admin/full-screen-maps';
	};
	const getActiveRoute = (routes) => {
		let activeRoute = 'Default Brand Text';
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].collapse) {
				let collapseActiveRoute = getActiveRoute(routes[i].views);
				if (collapseActiveRoute !== activeRoute) {
					return collapseActiveRoute;
				}
			} else if (routes[i].category) {
				let categoryActiveRoute = getActiveRoute(routes[i].views);
				if (categoryActiveRoute !== activeRoute) {
					return categoryActiveRoute;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					return routes[i].name;
				}
			}
		}
		return activeRoute;
	};
	// This changes navbar state(fixed or not)
	const getActiveNavbar = (routes) => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].category) {
				let categoryActiveNavbar = getActiveNavbar(routes[i].views);
				if (categoryActiveNavbar !== activeNavbar) {
					return categoryActiveNavbar;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					if (routes[i].secondaryNavbar) {
						return routes[i].secondaryNavbar;
					}
				}
			}
		}
		return activeNavbar;
	};

    const getRoutes = (routes) => {
		return routes.map((prop, key) => {

			if (prop.layout === '/admin') {
				console.log(prop.layout + prop.path)
				return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			} 
            else if(prop.layout === '/client'){
                return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;

            }
            else {
				return null;
			}
		});
	};

    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <ChakraProvider theme={theme}>
            <Sidebar
				routes={routes}
				logoText={'Drone Srvice'}
				display='none'
				sidebarVariant={'opaque'}
				{...rest}
			/>
            <MainPanel w={{ base:'100%', xl:'calc(100% - 275px)'}}>
                <Portal>
                    <AdminNavbar
                       onOpen={onOpen}
                       logoText={'Drone Service'}
                       brandText={getActiveRoute(routes)}
                       secondary={getActiveNavbar(routes)}
                       fixed={fixed}
                       {...rest}
                        />
                </Portal>
                {
                    getRoute() ? (
                    <PanelContent>
						<PanelContainer>
							<Switch>
								{getRoutes(routes)}
								<Redirect from='/admin' to='/admin/dashboard' />
							</Switch>
						</PanelContainer>
					</PanelContent>
                    ):null
                }
            </MainPanel>

        </ChakraProvider>
    )
}
