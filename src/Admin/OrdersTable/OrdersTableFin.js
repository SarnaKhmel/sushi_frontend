import React from "react";
import OrderRowFin from "./OrderRowFin";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrdersTableFin = ({ newOrders, title }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{title}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {newOrders.map((item, index) => (
          <OrderRowFin item={item} index={index} key={index} />
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTableFin;
