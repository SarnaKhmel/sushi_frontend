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

import { clearOrderState } from "../../Redux/slices/orders";
import { useDispatch } from "react-redux";
const OrderModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleClearOrderList = () => {
    dispatch(clearOrderState());
  };
  return (
    <OrderModalBlock>
      <Line>
        <div>
          <Header>КОШИК</Header>
          <ClearBtn onClick={handleClearOrderList}>ОЧИСТИТИ</ClearBtn>
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
