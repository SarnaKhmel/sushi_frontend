import styled from "styled-components";
import bg from "../Images/fon.png";

export const LayoutBlock = styled.div`
  background-image: url(${bg});
  background-repeat: repeat-y;
  background-size: 100% auto;
  width: 100vw;
  ${"" /* overflow: auto; */}
  z-index: 1;
`;

export const ChildrenBlock = styled.div`
  padding-bottom: 50px;
  @media (min-width: 340px) and (max-width: 767px) {
    padding-top: 105px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 115px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    padding-top: 115px;
  }
  @media (min-width: 1920px) {
    padding-top: 130px;
  }
`;
