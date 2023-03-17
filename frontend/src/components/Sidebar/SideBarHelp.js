
import {
    Icon
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Button, Flex, Link, Text } from "@chakra-ui/react";

import React from "react";


export default function SidebarHelp(props) {

    return(
        <Button
        p='0px'
        bg='transparent'
        color='gray.500'
        border='1px solid lightgray'
        borderRadius='15px'
        w={'100%'}

        minHeight={{ sm: "150px", md: "150px" }}>
        <Flex direction='column' justifyContent='center' align='center'>
          <Icon as={FaPlus} fontSize='lg' mb='12px' />
          <Text fontSize='lg' fontWeight='bold'>
            New Order
          </Text>
        </Flex>
      </Button>
    )
}