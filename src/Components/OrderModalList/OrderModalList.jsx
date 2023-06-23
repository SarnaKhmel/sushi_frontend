import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setStateFromJSON } from "../../Redux/slices/orders";

import { baseUrl } from "../../Utils/baseUrl";

import { BsFillPlusCircleFill } from "react-icons/bs";

import { AiFillMinusCircle } from "react-icons/ai";
import { addOrderItem, removeOrderItem } from "../../Redux/slices/orders";

const OrderModalList = () => {
  const order = useSelector((state) => state.orders.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const stateJSON = localStorage.getItem("orderState");
    const orderState = JSON.parse(stateJSON);
    if (orderState !== null) {
      // dispatch(setStateFromJSON(orderState));
    }
  }, []);

  const incrementItem = (item) => {
    dispatch(addOrderItem(item));
  };

  const decrementItem = (itemId) => {
    dispatch(removeOrderItem(itemId));
  };
  // console.log(order);
  return (
    <List>
      {order.items.map((item) => (
        <div key={item._id}>
          <Block>
            <ImageBlock>
              <ProductImage src={`${baseUrl}${item.imageUrl}`} />
            </ImageBlock>
            <InfoBlock>
              <Label1>
                <Name>{item.name}</Name> <Weight>{item.weight}г.</Weight>
              </Label1>
              <Label2>
                <IncrementBlock>
                  <Icon
                    onClick={() => {
                      incrementItem(item);
                    }}>
                    <BsFillPlusCircleFill size={20} />
                  </Icon>

                  <InctrmenValue>{item.quantity}</InctrmenValue>
                  <Icon onClick={() => decrementItem(item._id)}>
                    <AiFillMinusCircle size={22} />
                  </Icon>
                </IncrementBlock>
                <PriceBlock>
                  <Price>{item.price}грн</Price>
                </PriceBlock>
              </Label2>
            </InfoBlock>
          </Block>
        </div>
      ))}
    </List>
  );
};

const List = styled.div`
  height: 350px;
  margin: 0px 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Block = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    89.77deg,
    #121111 0.17%,
    rgba(47, 47, 47, 0.75) 99.8%
  );
  border-radius: 6px;
`;

export const ImageBlock = styled.div`
  width: 145px;
  height: 75px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const ProductImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;
  cursor: zoom-in;
  max-width: 100%;
  border-radius: 10px;

  width: 144.64px;
  height: 72.32px;

  background: #f8f8f8;
  border-radius: 5.92798px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const InfoBlock = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 110px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  background: transparent;
  border: none;
`;

export const Label1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 5px 10px 5px;
  width: 100%;
`;
export const Label2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 5px 10px 5px;
  width: 100%;
`;

export const Weight = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  width: 148px;
  height: 30px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  width: 148px;
  height: 30px;
  color: #ffffff;

  overflow: hidden;
  white-space: nowrap;
`;

export const PriceBlock = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
`;

export const IncrementBlock = styled.div`
  width: 148px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    270.08deg,
    rgba(141, 141, 141, 0) 0.08%,
    #8d8d8d 55.21%,
    rgba(141, 141, 141, 0) 99.94%
  );
`;

export const InctrmenValue = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
  margin: 0 15px;
`;

export const Icon = styled.div``;

export default OrderModalList;
