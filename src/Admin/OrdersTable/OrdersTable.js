import React, { useState } from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import OrderRow from "./OrderRow";

const OrdersTable = ({ newOrders, title }) => {
  return (
    <Table>
      <TableHeader>
        <TrHead>
          <Th colSpan="7">{title}</Th>
        </TrHead>
      </TableHeader>
      <tbody>
        <TrHead>
          <Th>Номер</Th>
          <Th>Ім'я</Th>
          <Th>Телефон</Th>
          <Th>Місто</Th>
          <Th>Вулиця</Th>
          <Th>Номер будинку</Th>
          <Th></Th>
        </TrHead>
        {newOrders.map((item, index) => (
          <OrderRow item={item} index={index} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
`;

const TableHeader = styled.thead`
  margin: 20px 0px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 10px;
  text-align: center;

  &:nth-child(even) {
    background-color: lightGray;
  }
`;

const TrDetails = styled.tr`
  display: flex;
  align-items: center;
  background-color: lightGreen;
  text-align: center;
`;

const TrHead = styled.tr`
  display: flex;
  align-items: center;
`;

const Th = styled.th`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  overflow-x: scroll;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Td = styled.td`
  width: 200px;
  overflow-x: scroll;
  height: 80px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 40px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;

// Media queries for mobile devices
const mediaQuery = "@media (max-width: 767px)";

const TrResponsive = styled(Tr)`
  flex-direction: column;

  ${mediaQuery} {
    align-items: flex-start;
    padding: 10px;
  }
`;

const TdResponsive = styled(Td)`
  ${mediaQuery} {
    height: auto;
    font-size: 1rem;
  }
`;

const TrDetailsResponsive = styled(TrDetails)`
  flex-direction: column;

  ${mediaQuery} {
    align-items: flex-start;
    padding: 10px;
  }
`;

const ThResponsive = styled(Th)`
  ${mediaQuery} {
    font-size: 1rem;
  }
`;

const TdButtonResponsive = styled(Td)`
  ${mediaQuery} {
    flex-basis: 100%;
  }
`;

export default OrdersTable;
