import React from "react";
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {TimeIcon} from '@chakra-ui/icons'
import MiniStatistics from "./components/MiniStatistics";

import {
  PendingDataClient,

} from "../../../variables/general";
import PendingReq from "./components/PendingReq";
import CurrentOrders from "./components/CurrentOrders";
import { CurrentOrderData } from "../../../variables/general";


export default function YourOrders(){
  const iconBoxInside = useColorModeValue("white", "white");
  return(
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
         <Flex  direction='column' pt={{ base: "10px", md: "0px" }}>
              <PendingReq  title={"Pending Requests"} data={PendingDataClient} />
              <CurrentOrders
                title={"Current Orders"}
                captions={["Customer Name","Order ID", "Pickup Point", "Delivery Point", "Completion", "Track"]}
                data={CurrentOrderData}
              />
          </Flex>
    </Flex>
  )
}