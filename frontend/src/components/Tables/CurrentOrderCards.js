import {
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Button
} from "@chakra-ui/react";

import {ViewIcon} from "@chakra-ui/icons"

import React from "react";

function CurrentOrderCards(props) {
  const { logo, name,orderid, source , destination, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>


      <Td minWidth={{ sm: "200px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={logo} h={"24px"} w={"24px"} pe="2px" />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>

    { /* orderid */}
      <Td>
      <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {orderid}
          </Text>
      </Td>

      {/* source */}
      <Td>
      <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {source}
          </Text>
      </Td>

      {/* destination */}
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {destination}
        </Text>
      </Td>

      {/* progression */}
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td>

{/* button to track order */}
      <Td>
          <Button p="0px" bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={ViewIcon} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                Track Parcel
              </Text>
            </Flex>
          </Button> 
      </Td>

    </Tr>
  );
}

export default CurrentOrderCards;
