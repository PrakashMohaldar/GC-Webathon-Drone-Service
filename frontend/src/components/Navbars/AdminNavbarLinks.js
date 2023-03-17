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
import { NavLink, useHistory } from "react-router-dom";
import routes from '../../routes'
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/actions/auth';

export default function AdminNavbarLinks(props){
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  const dispatch = useDispatch();
  const navigate = useHistory()
  const authData = useSelector(state => state.auth.authData);

  const handleLogout = () => {
    dispatch(logout(navigate));
  }

  return(
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      flexDirection="row"
      alignItems="center"

    >
     
     {   authData.token && 
         <Button
          type='submit'
          bg='teal.400'
          fontSize='14px'
          color='white'
          fontWeight='bold'
          w='100%'
          h='45'
          onClick={handleLogout}
          me='20px'
          _hover={{
            bg: "teal.300",
          }}
          _active={{
            bg: "teal.400",
          }}>
          Logout
        </Button>
     }

        
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