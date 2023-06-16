import styled from "styled-components";

export const DeliveryBlock = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    width: 100vw;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Block = styled.div`
  width: 80vw;
  height: 60vh;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #151515;
  box-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 80vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  width: 40%;

  display: flex;
  flex-direction: column;

  padding-left: 50px;
`;

export const MapBlock = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 95%;
  width: 55%;
`;

export const Header = styled.h2``;

export const Line = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;

  width: 297px;
  height: 72px;
  left: 69px;
  top: 344px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
`;

export const GreenBlock = styled.div`
  box-sizing: border-box;
  width: 61px;
  height: 37px;

  background: rgba(0, 253, 10, 0.4);
  border: 3px solid rgba(36, 255, 0, 0.6);
`;

export const YellowBlock = styled.div`
  box-sizing: border-box;
  width: 61px;
  height: 37px;

  background: rgba(255, 153, 0, 0.4);
  border: 3px solid rgba(255, 153, 0, 0.6);
`;

export const Info = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  margin-left: 20px;
`;
