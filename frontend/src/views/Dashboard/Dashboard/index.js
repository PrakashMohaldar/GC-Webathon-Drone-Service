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
  PendingData,

} from "../../../variables/general";
import PendingReq from "./components/PendingReq";
import CurrentOrders from "./components/CurrentOrders";
import { CurrentOrderData } from "../../../variables/general";


export default function Dashboard(){
  const iconBoxInside = useColorModeValue("white", "white");
  return(
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
         <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
         <MiniStatistics
          title={"Drones Available"}
          amount={"4"}
          total={5}
          icon={<TimeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Pending Requests"}
          amount={"7"}
          total={10}
          icon={<TimeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />      
         </SimpleGrid>
         <Flex  direction='column' pt={{ base: "10px", md: "0px" }}>
              <PendingReq  title={"Pending Requests"} data={PendingData} />
              <CurrentOrders
                title={"Current Orders"}
                captions={["Customer Name","Order ID", "Pickup Point", "Delivery Point", "Completion", "Track"]}
                data={CurrentOrderData}
              />
          </Flex>
    </Flex>
  )
}