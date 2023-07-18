import styled from "styled-components";

export const BottomMenuBlock = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #2f2d2d;
  display: none;
  @media (min-width: 340px) and (max-width: 767px) {
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    z-index: 1000;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    z-index: 1000;
  }
`;

export const LinkIcon = styled.img`
  max-height: 50px;
  max-width: 50px;

  @media (min-width: 340px) and (max-width: 767px) {
    height: 35px;
    width: 35px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 45px;
    width: 45px;
  }
`;

export const LinkIconTitle = styled.div`
  display: none;

  @media (min-width: 340px) and (max-width: 767px) {
    display: block;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
    text-decoration: none;
    color: white;
    margin-top: 5px;
    font-size: 14px;
    text-align: center;
  }
`;
