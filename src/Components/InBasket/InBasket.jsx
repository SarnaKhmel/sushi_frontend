import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addOrderItem } from "../../Redux/slices/orders";
const InBasket = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addOrderItem(product));
  };
  return (
    <Basket
      onClick={() => {
        handleAddProduct();
      }}>
      В КОШИК
    </Basket>
  );
};

export const Basket = styled.button`
  width: 130px;
  height: 43px;

  background: #ff4700;
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;

  color: #ffffff;
  @media (max-width: 500px) {
    margin-top: 10px;
    width: 120px;
    height: 33px;
  }
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    font-size: 16px;
    cursor: pointer;
  }
`;

export default InBasket;
