import React from "react";

import {
  OrderModalBlock,
  Line,
  CloseBlock,
  ClearBtn,
  Header,
  List,
  OrderBottom,
} from "./OrderModal.styles";
import { AiOutlineClose } from "react-icons/ai";

const OrderModal = ({ isOpen, onClose }) => {
  return (
    <OrderModalBlock>
      <Line>
        <div>
          <Header>КОШИК</Header>
          <ClearBtn>ОЧИСТИТИ</ClearBtn>
        </div>
        <CloseBlock onClick={onClose}>
          <AiOutlineClose size={30} />
        </CloseBlock>
      </Line>
      <List></List>
      <OrderBottom></OrderBottom>
    </OrderModalBlock>
  );
};

export default OrderModal;
