import styled from "styled-components";

export const OrderBox = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Block = styled.div`
  width: 80vw;
  max-width: 1140px;

  height: 570px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #151515;
  box-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  @media (max-width: 500px) {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-shadow: none;
    height: 100%;
  }
`;

export const FormBlock = styled.div`
  height: 80%;
  width: 60%;
  border: 1px solid yellow;
`;
export const ListBlock = styled.div`
  height: 80%;
  width: 25%;
  border: 1px solid green;
`;

export const Label = styled.label`
  width: 156px;
  height: 20px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 400px;
    margin-left: 0px;
    font-size: 32px;
    line-height: 39px;
    width: 80vw;
    max-width: 500px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
