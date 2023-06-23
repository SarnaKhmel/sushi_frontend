import React from "react";
import {
  OrderCompleteModalBlock,
  Block,
  LogoBlock,
  ImageLogo,
  Line,
  Btn,
  Title,
  Header,
  InfoBlock,
} from "./OrderCompleteModal.styled";

import { Link } from "react-router-dom";

import styled from "styled-components";

import sushiLogo from "../../Images/sushi-logo.svg";

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  color: white;
  margin-right: 50px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 340px) and (max-width: 767px) {
    margin-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 20px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    margin-right: 30px;
  }
`;
const OrderCompleteModal = () => {
  return (
    <OrderCompleteModalBlock>
      <Block>
        <Line>
          <StyledLink to="/">
            <LogoBlock>
              <ImageLogo src={sushiLogo}></ImageLogo>
            </LogoBlock>
          </StyledLink>
          <InfoBlock>
            <Header>Дякуємо за замовлення!</Header>
            <Title>Очікуйте дзвінок оператора</Title>
          </InfoBlock>
          <StyledLink to="/">
            <Btn>продовжити</Btn>
          </StyledLink>
        </Line>
      </Block>
    </OrderCompleteModalBlock>
  );
};

export default OrderCompleteModal;
