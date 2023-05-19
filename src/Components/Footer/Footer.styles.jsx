import styled from "styled-components";
import bg from "../../Images/bg.svg";

export const FooterBlock = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
  width: 100vw;
  color: white;
  ${
    "" /* background: linear-gradient(180deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%); */
  }

  @media (min-width: 340px) and (max-width: 767px) {
    height: 334px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 334px;
  }
  @media (min-width: 1024px) {
    height: 334px;
  }
`;

export const FooterBox = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0) 40%,
    rgba(26, 26, 26, 0) 100%
  );
`;
