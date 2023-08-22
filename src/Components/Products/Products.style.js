import styled from "styled-components";

export const ProductsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  margin-bottom: 100px;
`;

export const ProductsList = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90vw;

  @media (max-width: 500px) {
    width: 100vw;
    margin: 20px;
    display: flex;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;
