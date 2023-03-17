import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// import { ItemContent } from '../Menu/ItemContent'
import SidebarResponsive from "../Sidebar/SidebarResponsive";
import PropTypes, { func } from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from '../../routes'

export default function AdminNavbarLinks(props){
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  return(
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      flexDirection="row"
      alignItems="center"

    >
     
      <Text display={{ sm: "flex", md: "flex" }}>Logged In</Text>

        
        <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
      
    </Flex>
  )

}