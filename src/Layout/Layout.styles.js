import styled from "styled-components";
import bg from "../Images/fon.png";
import bdMobile from "../Images/bd-mobile.svg";

export const LayoutBlock = styled.div`
  background-image: url(${bg});
  min-height: 80vh;
  height: 100vh - 334px;
  background-repeat: repeat-y;
  background-size: 100% auto;
  overflow: auto;
  ${"" /* overflow-y: scroll; */}
  z-index: 1;
  @media (max-width: 768px) {
    background-image: url(${bdMobile});
    background-size: cover;
  }
`;
