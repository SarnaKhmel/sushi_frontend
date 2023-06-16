import styled from "styled-components";

export const ProductsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  margin-bottom: 100px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    width: 100vw;
    margin: 20px;
    display: flex;
    ${"" /* align-items: center; */}
    ${"" /* justify-content: center; */}
  }
`;
