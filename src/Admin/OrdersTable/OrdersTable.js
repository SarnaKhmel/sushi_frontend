import React, { useState, useEffect } from "react";
import OrderRow from "./OrderRow";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrdersTable = ({ newOrders, title }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{title}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {newOrders.map((item, index) => (
          <OrderRow item={item} index={index} key={index} />
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTable;
