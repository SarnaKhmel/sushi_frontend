import styled from "styled-components";
import bg from "../Images/bg.svg";

export const LayoutBlock = styled.div`
  background-image: url(${bg});
  min-height: 80vh;
  height: 100vh - 334px;
  background-repeat: repeat;
  background-size: cover;
  overflow: auto;
  z-index: 1;
`;
