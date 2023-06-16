import styled from "styled-components";

export const DeliveryBlock = styled.div`
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

export const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
  width: 40%;

  display: flex;
  flex-direction: column;

  padding-left: 50px;
  @media (max-width: 500px) {
    padding-left: none;
    width: 100%;
  }
`;

export const MapBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 95%;
  width: 55%;
  @media (max-width: 500px) {
    margin-top: 30px;
    height: 275px;
    width: 98vw;
    border-radius: 10px;
  }
`;

export const Header = styled.h2`
  @media (max-width: 500px) {
  }
`;

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

export const Iframe = styled.iframe`
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
