import styled from "styled-components";

export const OrderModalBlock = styled.div`
  position: fixed;
  width: 700px;
  height: 558px;
  right: 10px;
  top: 110px;

  background: linear-gradient(180deg, #100f0f 0%, rgba(49, 49, 49, 0.8) 100%);
  box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  z-index: 1000;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 100px;
    width: 95vw;
    right: 10px;
  }
`;

export const CloseBlock = styled.div`
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  color: #fff;

  &:hover {
    color: #ff4700;
  }
`;
export const Line = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: space-around;
  margin: 30px;
  width: 90%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;
export const ClearBtn = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);

  &:hover {
    color: #c74716;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const OrderBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;

  background: #c74716;
  border-radius: 0 0 10px 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
  }
`;

export const InfoBlock = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11.856px;
  line-height: 14px;

  color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const OrderBtn = styled.button`
  width: 193.82px;
  height: 44.05px;

  background: #ffffff;

  border-radius: 8.80999px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  border: none;

  ${
    "" /* @media (max-width: 768px) {
    margin-right: 10px;
    width: 132px;
    height: 24px;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 600;
  } */
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
