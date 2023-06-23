import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  OrderModalBlock,
  Line,
  CloseBlock,
  ClearBtn,
  Header,
  OrderBottom,
  InfoBlock,
  OrderBtn,
  Info,
} from "./OrderModal.styles";
import { AiOutlineClose } from "react-icons/ai";

import { clearOrderState } from "../../Redux/slices/orders";
import { useDispatch } from "react-redux";

import OrderModalList from "../OrderModalList/OrderModalList";

const StyledLink = styled(Link)`
  width: 193.82px;
  height: 44.05px;

  background: #ffffff;
  text-decoration: none;
  text-align: center;

  border-radius: 9px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 44px;

  border: none;
  color: #000000;

  @media (max-width: 768px) {
    padding: 10px 30px 10px 30px;

    width: 132px;
    height: 24px;
    font-size: 20px;
    line-height: 20px;
    border-radius: 9px;
    font-family: Montserrat;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
  }
  &:hover {
    color: #c74716;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const OrderModal = ({ isOpen, onClose, order }) => {
  const dispatch = useDispatch();
  const handleClearOrderList = () => {
    dispatch(clearOrderState());
    onClose();
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
      <OrderModalList />
      <OrderBottom>
        <InfoBlock>
          <Info>Всього: {order.sum}грн.</Info>
          <Info>Вага: {order.weight}г.</Info>
        </InfoBlock>
        {order.items.length > 0 ? (
          <>
            <StyledLink to="/order">ОФОРМИТИ</StyledLink>
          </>
        ) : (
          <OrderBtn disabled>ОФОРМИТИ</OrderBtn>
        )}
      </OrderBottom>
    </OrderModalBlock>
  );
};

export default OrderModal;
