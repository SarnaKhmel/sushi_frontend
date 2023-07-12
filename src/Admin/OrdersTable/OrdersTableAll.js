import React from "react";

import OrderRowAll from "./OrderRowAll";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrdersTableAll = ({ newOrders, title }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{title}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {newOrders.map((item, index) => (
          <OrderRowAll item={item} index={index} key={index} />
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTableAll;
