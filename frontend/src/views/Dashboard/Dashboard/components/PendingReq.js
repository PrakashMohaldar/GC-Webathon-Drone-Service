// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.js";
import CardBody from "../../../../components/Card/CardBody.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import PendingReqCard from "../../../../components/Tables/PendingReqCards";
import React from "react";

const PendingReq = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card bg={'#1f2733'} my={{ lg: "2px" }} me={{ lg: "2px" }}>
      <Flex direction='column'>
        <CardHeader py={{base: '0', lg:'12px'}}>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Flex direction='column' w='100%'>
            {data.map((row, idx) => {
              return (
                <PendingReqCard
                  name={row.name}
                  source={row.source}
                  destination={row.destination}
                  orderid={row.orderid}
                  role={row.role}
                  key={idx}
                />
              );
            })}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default PendingReq;
