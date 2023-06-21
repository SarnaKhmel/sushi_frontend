import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setStateFromJSON } from "../../Redux/slices/orders";

const OrderModalList = () => {
  const order = useSelector((state) => state.orders.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const stateJSON = localStorage.getItem("orderState");
    const orderState = JSON.parse(stateJSON);
    if (orderState !== null) {
      dispatch(setStateFromJSON(orderState));
    }
    console.log(orderState);
  }, []);
  return <List>OrderModalList</List>;
};

const List = styled.div`
  border: 1px solid green;
  min-height: 60%;
  margin: 0px 30px;
  width: 90%;
  .element {
    overflow-y: auto;
  }
`;
export default OrderModalList;
