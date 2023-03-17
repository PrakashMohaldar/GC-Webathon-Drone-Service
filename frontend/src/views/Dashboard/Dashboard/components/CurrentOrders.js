// Chakra imports
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import DashboardTableRow from "../../../../components/Tables/CurrentOrderCards";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const CurrentOrders = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            {captions.map((caption, idx) => {
              return (
                <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, idx) => {
            return (
              <DashboardTableRow
                key={idx}
                name={row.name}
                orderid={row.orderid}
                logo={row.logo}
                source={row.source}
                destination={row.destination}
                progression={row.progression}
              />
            );
          })}

        </Tbody>
      </Table>
    </Card>
  );
};

export default CurrentOrders;
