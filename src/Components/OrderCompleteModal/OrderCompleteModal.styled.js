import styled from "styled-components";

export const OrderCompleteModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(24, 24, 24, 0.59);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const Block = styled.div``;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled.img`
  height: 240px;
  margin-right: 10px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const InfoBlock = styled.div`
  @media (max-width: 767px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Header = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

export const Btn = styled.button`
  height: 44px;
  width: 155px;
  border-radius: 100px;
  background: #ff4700;
  box-shadow: -2px 0px 6px 5px rgba(255, 71, 0, 0.3);
  color: #fff;

  font-size: 20px;
  font-weight: 600;

  border: none;
  margin-left: 25px;
  &:hover {
    color: black;
  }
`;
