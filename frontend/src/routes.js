import Dashboard from "./views/Dashboard/Dashboard";
import YourOrders from "./views/Dashboard/YourOrders";
import SignIn from "./views/Auth/SignIn.js";
import SignUp from "./views/Auth/SignUp.js";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
    SupportIcon,
  } from "./components/Icons/Icons";

  var dashRoutes ;

  var role = "admin";
  if(role === "admin"){
    dashRoutes = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon: <HomeIcon colors="inherit" />,
            component: Dashboard,
            layout:"/admin",
        },

              {
                path: "/signin",
                name: "Sign In",
                icon: <DocumentIcon color="inherit" />,
                component: SignIn,
                layout: "/auth",
              },
              {
                path: "/signup",
                name: "Sign Up",
                icon: <RocketIcon color="inherit" />,
                secondaryNavbar: true,
                component: SignUp,
                layout: "/auth",
              },
       
    ]
  }
  else{
    dashRoutes = [
                {
                path: "/yourOrders",
                name: "Your Orders",
                icon: <CreditIcon color="inherit" />,
                component: YourOrders,
                layout: "/client",
              },
              {
                path: "/signin",
                name: "Sign In",
                icon: <DocumentIcon color="inherit" />,
                component: SignIn,
                layout: "/auth",
              },
              {
                path: "/signup",
                name: "Sign Up",
                icon: <RocketIcon color="inherit" />,
                secondaryNavbar: true,
                component: SignUp,
                layout: "/auth",
              },


    ]

  }
  export default dashRoutes;