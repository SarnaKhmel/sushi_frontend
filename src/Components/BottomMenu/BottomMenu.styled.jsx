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

export const LinkIcon = styled.img``;

export const LinkIconTitle = styled.div`
  display: none;

  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
    text-decoration: none;
    color: white;
  }
`;
