import styled from "styled-components";
import bg from "../Images/bg.svg";
import bdMobile from "../Images/bd-mobile.svg";

export const LayoutBlock = styled.div`
  background-image: url(${bg});
  min-height: 80vh;
  height: 100vh - 334px;
  background-repeat: repeat;
  overflow: auto;
  overflow-y: scroll;
  z-index: 1;
  @media (max-width: 768px) {
    height: 100vh;
    background-image: url(${bdMobile});
  }
`;
