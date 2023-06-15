import React, { useState, useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import styled from "styled-components";
import { HiPlayPause } from "react-icons/hi2";
import { FcPlus, FcStart } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";

const AdminOrderPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let timerInterval;
    if (isActive) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            return 10;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

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
      </TimerContainer>
    </LayoutAdmin>
  );
};

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
  padding: 10px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const TimerText = styled.p`
  margin-right: 10px;
`;

export default AdminOrderPage;
