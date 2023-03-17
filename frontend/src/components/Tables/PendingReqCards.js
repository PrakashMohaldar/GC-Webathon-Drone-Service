import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {CheckIcon} from '@chakra-ui/icons'
import React from "react";
import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function PendingReqCards(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, source, destination, orderid } = props;
  const role = "admin";

  var disp = "block"
  if(role === "client"){
    disp = "none"
  }


  return (
    <Box p="14px" bg={bgColor} my="10px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Pickup Point:{" "}
            <Text as="span" color="gray.500">
              {source}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Delivery Point:{" "}
            <Text as="span" color="gray.500">
              {destination}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Order ID:{" "}
            <Text as="span" color="gray.500">
              {orderid}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >

          {/* buttons to accept or reject */}
          <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
          </Button>
          {/* <Button p="0px" bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                
              </Text>
            </Flex>
          </Button> */}


               <Button
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            display={disp}
          >
            <Flex color="green.500" cursor="pointer" align="center" p="12px">
              <Icon as={CheckIcon} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                Accept
              </Text>
            </Flex>
          </Button>

        </Flex>
      </Flex>
    </Box>
  );
}

export default PendingReqCards;
