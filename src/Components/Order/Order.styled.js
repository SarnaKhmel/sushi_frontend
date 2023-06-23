import styled from "styled-components";

export const OrderBox = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-shadow: none;
    height: 100%;
    width: 90vw;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-shadow: none;
    height: 100%;
    width: 90vw;
  }
`;

export const FormBlock = styled.div`
  margin-top: 20px;
  height: 80%;
  width: 600px;
  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
  }
`;
export const ListBlock = styled.div`
  margin-top: 20px;
  height: 80%;
  width: 500px;
  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
  }
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
    color: #fff;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 600;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-radius: 11.6px;
    background: rgba(49, 49, 49, 0.2);
    backdrop-filter: blur(2.319999933242798px);
    padding: 15px 0px;
  }
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  width: 160px;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputItem = styled.div`
  width: 160px;
  color: white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 20px;
  }
`;
export const InputItemComent = styled.div`
  width: 560px;
  color: white;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
`;

export const OrderListBlock = styled.div`
  width: 100%;
  color: white;
  @media (max-width: 768px) {
    width: 90vw;
    height: 100%;
    border-radius: 11.6px;
    background: rgba(49, 49, 49, 0.2);
    backdrop-filter: blur(2.319999933242798px);
    padding: 15px 0px;
    margin: 20px 0px;
  }
`;

export const OrderBtnBlock = styled.div`
  width: 100%;
  color: white;
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
`;

export const OrderBtnInfoBlock = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11.856px;
  line-height: 14px;

  color: #ffffff;
  @media (max-width: 768px) {
    margin: 20px 0px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    width: 90%;
  }
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

  display: inline-flex;
  padding: 10px 35px 9px 35px;
  justify-content: center;
  align-items: center;

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

export const OrderBtnDis = styled.button`
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
