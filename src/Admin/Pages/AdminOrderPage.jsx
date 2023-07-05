import React, { useState, useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import { HiPlayPause } from "react-icons/hi2";
import { FcPlus, FcStart } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";

import styled, { css } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../Redux/slices/orders";

import OrdersTable from "../OrdersTable/OrdersTable";
import OrdersTableAll from "../OrdersTable/OrdersTableAll";
import OrdersTableFin from "../OrdersTable/OrdersTableFin";

import ExelOrders from "../Exel/ExelOrders";

import { useRef } from "react";
import orderBell from "../../Sounds/orderBell.mp3";

const AdminOrderPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [updateIn, setUpdateIn] = useState(false);
  const dispatch = useDispatch();
  let orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            dispatch(fetchOrders());
            return 60;
          } else {
            return prevSeconds - 1;
          }
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const audioRef = useRef(null);
  useEffect(() => {
    if (orders && orders.status === "loaded") {
      const prevOrderCount = orders.items.length;
      if (prevOrderCount < orders.items.length) {
        audioRef.current.play();
      }
    }
  }, [orders]);

  const [update, setUpdate] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const [activeBlocks, setActiveBlocks] = useState([true, false, false]);
  const toggleBlock = (blockNumber) => {
    setActiveBlocks((prevActiveBlocks) => {
      const newActiveBlocks = [...prevActiveBlocks];
      newActiveBlocks[blockNumber] = !prevActiveBlocks[blockNumber];
      return newActiveBlocks;
    });
  };

  const newOrders = orders.items.filter((item) => item.status === "new");
  const sortedNewOrders = [...newOrders].sort(
    (a, b) => b.orderNumber - a.orderNumber
  );

  const sortedNewOrdersAll = [...orders.items].sort(
    (a, b) => b.orderNumber - a.orderNumber
  );

  const finishedOrders = orders.items.filter((item) => item.status === "fin");

  return (
    <LayoutAdmin>
      <TimerContainer>
        <IconWrapper>
          {isActive ? (
            <FcPlus size={28} />
          ) : (
            <AiFillMinusCircle size={28} color="red" />
          )}
        </IconWrapper>
        <TimerText>Залишилось секунд: {seconds}</TimerText>
        <HiPlayPause size={28} color="red" onClick={handleToggle} />
        <audio ref={audioRef} src={orderBell} preload="auto" />
      </TimerContainer>
      {orders && orders.status === "loaded" ? (
        <>
          <Container>
            <LabelBlock>
              <Label onClick={() => toggleBlock(0)} $active={activeBlocks[0]}>
                Нові замовлення
              </Label>
              <Label
                onClick={() => {
                  toggleBlock(1);
                  setUpdate(!update);
                }}
                $active={activeBlocks[1]}>
                Всі замовлення
              </Label>
              <Label
                onClick={() => {
                  toggleBlock(2);
                  setUpdate(!update);
                }}
                $active={activeBlocks[2]}>
                Виконані замовлення
              </Label>
            </LabelBlock>

            {activeBlocks[0] && (
              <Block $active={activeBlocks[0]}>
                <ExelOrders products={sortedNewOrders} name={"Нові"} />
                <OrdersTable
                  newOrders={sortedNewOrders}
                  title="Нові замовлення"
                />
              </Block>
            )}

            {activeBlocks[1] && (
              <Block $active={activeBlocks[1]}>
                <ExelOrders products={sortedNewOrdersAll} name={"Всі"} />
                <OrdersTableAll
                  newOrders={sortedNewOrdersAll}
                  title="Всі замовлення"
                />
              </Block>
            )}
            {activeBlocks[2] && (
              <Block $active={activeBlocks[2]}>
                <ExelOrders products={finishedOrders} name={"Завершені"} />
                <OrdersTableFin
                  newOrders={finishedOrders}
                  title="Завершені замовлення"
                />
              </Block>
            )}
          </Container>
        </>
      ) : (
        <Element>Loading ... </Element>
      )}
    </LayoutAdmin>
  );
};

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  background-color: #f0f0f0;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const TimerText = styled.p`
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: grey;
  min-height: 100vh;
  @media (min-width: 340px) and (max-width: 767px) {
    width: 100vw;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
  min-height: 50vh;
  width: 100vw;
  border-bottom: 1px solid black;
  display: none;
  opacity: 0;
  transition: opacity 3s ease;

  ${(props) =>
    props.$active &&
    css`
      display: block;
      transition: opacity 3s ease;
      opacity: 1;
    `}
  @media (min-width: 340px) and (max-width: 767px) {
    min-height: 400px;
  }
`;

const LabelBlock = styled.div`
  margin-top: 10px;
  font-size: 24px;
  @media (min-width: 340px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const Label = styled.button`
  color: black;
  font-size: 24px;
  &:hover {
    color: #007bff;
  }
  ${(props) =>
    props.$active &&
    css`
      color: #007bff;
      text-decoration: underline dotted #007bff;
    `}
`;

const Element = styled.div`
  margin-top: 130px;
  color: black;
  border: 1px solid black;
`;

export default AdminOrderPage;
