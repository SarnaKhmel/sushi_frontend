import styled from "styled-components";

export const LoaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(24, 24, 24, 0.9);
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
