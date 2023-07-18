import styled from "styled-components";
import bg from "../Images/fon.png";

export const LayoutBlock = styled.div`
  background-image: url(${bg});
  min-height: 80vh;
  height: 100vh - 334px;
  background-repeat: repeat-y;
  background-size: 100% auto;
  overflow: auto;
  z-index: 1;
`;

export const ChildrenBlock = styled.div`
  @media (min-width: 340px) and (max-width: 767px) {
    margin-top: 105px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 115px;
  }
  @media (min-width: 1919px) {
    margin-top: 116px;
  }
`;
