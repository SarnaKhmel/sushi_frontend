import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";

const Products = ({ products }) => {
  const [activeBlocks, setActiveBlocks] = useState([false, false, false]);

  const toggleBlock = (blockNumber) => {
    setActiveBlocks((prevActiveBlocks) => {
      const newActiveBlocks = [...prevActiveBlocks];
      newActiveBlocks[blockNumber] = !prevActiveBlocks[blockNumber];
      return newActiveBlocks;
    });
  };
  return (
    <Container>
      <LabelBlock>
        <Label onClick={() => toggleBlock(0)}>Додати товар</Label>
        <Label onClick={() => toggleBlock(1)}>Всі товари</Label>
      </LabelBlock>

      {activeBlocks[0] && (
        <Block $active={activeBlocks[0]}>
          <AddProduct />
        </Block>
      )}

      {activeBlocks[1] && (
        <Block $active={activeBlocks[1]}>
          <table></table>
          {products.map((product, index) => (
            <div key={index}>{product.name}</div>
          ))}
        </Block>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: grey;
  min-height: 100vh;
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
`;

const LabelBlock = styled.div`
  margin-top: 10px;
  font-size: 24px;
`;
const Label = styled.button`
  color: white;
  color: black;
  font-size: 24px;
  &:hover {
    color: #007bff;
  }
`;

// const Text = styled.p`
//   color: black;
//   text-decoration: none;
//   display: block;
//   &:hover {
//     color: #007bff;
//   }
// `;

// const Btn = styled.button`
//   color: red;
//   text-decoration: none;
//   &:hover {
//     color: #007bff;
//   }
// `;
export default Products;
