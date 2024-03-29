import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { addOrderItem } from "../../Redux/slices/orders";

import basket from "../../Images/basket.svg";
import OrderModal from "../OrderModal/OrderModal";

import { setStateFromJSON } from "../../Redux/slices/orders";

const OrderItem = () => {
  const order = useSelector((state) => state.orders.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const stateJSON = localStorage.getItem("orderState");
    const orderState = JSON.parse(stateJSON);
    if (orderState !== null) {
      dispatch(setStateFromJSON(orderState));
    }
  }, []);

  const [openOrderModal, setOpenOrderModal] = useState(false);
  const handleOpenOrderModal = () => {
    setOpenOrderModal(!openOrderModal);
  };

  const handleCloseOrderModal = () => {
    setOpenOrderModal(false);
  };
  return (
    <>
      <OrderItemBlock onClick={handleOpenOrderModal}>
        <OrderBlock>
          <OrderCount>{order.items.length}</OrderCount>
          <OrderPrice>
            {order.sum}грн.
            <Basket src={basket} alt="basket" loading="lazy" />
          </OrderPrice>
        </OrderBlock>
      </OrderItemBlock>
      {openOrderModal === true ? (
        <OrderModal
          isOpen={openOrderModal}
          onClose={handleCloseOrderModal}
          order={order}
        />
      ) : null}
    </>
  );
};

export const OrderItemBlock = styled.div`
  position: relative;
  z-index: 1500;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 340px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    order: 3;
  }
  @media (min-width: 1920px) {
    order: 3;
  }
`;
export const Basket = styled.img`
  height: 22px;
  width: 22px;
`;

export const OrderBlock = styled.div`
  width: 88px;
  height: 88px;
  border: 4px solid #ff4700;
  border-radius: 10px 47px 47px 47px;

  position: relative;
  @media (min-width: 340px) and (max-width: 767px) {
    z-index: 1500;
    position: fixed;
    top: 105px;
    right: 10px;
    background: rgba(30, 28, 28, 0.5);
    border: 3.31364px solid #ff4700;
    box-shadow: 0px 5.30183px 5.30183px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2.65091px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 7.85728px 36.9292px 36.9292px 36.9292px;
    width: 69px;
    height: 69px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    z-index: 1500;
    position: fixed;
    top: 105px;
    right: 20px;
    background: linear-gradient(
      90.94deg,
      #1a1818 -0.75%,
      #2f2d2d 51.72%,
      #0c0b0b 100%
    );
  }
`;
const OrderCount = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  background: #ffffff;
  border-radius: 100px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const OrderPrice = styled.div`
  position: absolute;
  width: 65px;
  height: 25px;
  top: 40px;
  left: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 340px) and (max-width: 767px) {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    position: absolute;
    top: 30px;
  }
`;

export default OrderItem;
