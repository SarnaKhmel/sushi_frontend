import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderRow from "./OrderRow";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const OrdersTable = ({ newOrders, title }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useState(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{title}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {newOrders.map((item, index) => (
          <OrderRow
            item={item}
            index={index}
            key={index}
            isMobileView={isMobileView}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTable;
