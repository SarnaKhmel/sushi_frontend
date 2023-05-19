import styled from "styled-components";
import bg from "../../Images/bg.svg";

export const FooterBlock = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
  width: 100vw;
  color: white;

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

export const FooterLogo = styled.img`
  position: absolute;
  left: 0px;
  height: 320px;
  opacity: 0.3;
  @media (min-width: 340px) and (max-width: 767px) {
    display: none;
  }
`;

export const FooterBox = styled.div`
  height: 100%;
  color: white;
  background: linear-gradient(180deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%);
  display: flex;
  justify-content: center;
  @media (min-width: 340px) and (max-width: 767px) {
    display: none;
  }
`;

// export const FooterItem = styled.div`
//   margin: 10px 0px 70px 60px;
//   width: 100%;
//   max-width: 280px;
//   color: white;
//   border: 1px solid white;
// `;

export const FooterLogoTitle = styled.img``;

export const FooterItem1 = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1px solid white;
`;
export const FooterItem2 = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1px solid white;
`;
export const FooterItem3 = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1px solid white;
`;
export const FooterItem4 = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1px solid white;
`;
