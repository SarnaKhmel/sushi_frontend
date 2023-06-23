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
  margin-top: 20px;
  height: 80%;
  width: 600px;
`;
export const ListBlock = styled.div`
  margin-top: 20px;

  height: 80%;
  width: 500px;
`;

export const Label = styled.label`
  height: 20px;
  margin-bottom: 30px;
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  width: 160px;
  color: white;
`;
export const InputComent = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  width: 100%;
  color: white;
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  width: 160px;
  color: rgba(255, 255, 255, 0.8);
`;
export const Option = styled.option`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  width: 160px;
  color: rgba(255, 255, 255, 0.8);
`;

export const InputLabel = styled.label`
  width: 160px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-family: Montserrat;
`;

export const InputItem = styled.div`
  width: 160px;
  color: white;
`;
export const InputItemComent = styled.div`
  width: 560px;
  color: white;
`;

export const OrderListBlock = styled.div`
  width: 100%;
  color: white;
`;

export const OrderBtnBlock = styled.div`
  width: 100%;
  color: white;
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const OrderBtnInfoBlock = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11.856px;
  line-height: 14px;

  color: #ffffff;
`;

export const OrderBtn = styled.button`
  width: 193.82px;
  height: 44.05px;

  background: #ff4700;

  border-radius: 8.80999px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  border: none;
  color: white;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.2);
    cursor: pointer;
    color: black;
  }
`;

export const Info = styled.div`
  height: 14px;

  font-style: normal;
  font-weight: 600;
  font-size: 14.2271px;
  line-height: 17px;

  color: #ffffff;
  margin-bottom: 10px;
`;
