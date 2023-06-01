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
  opacity: 0.2;
  @media (min-width: 340px) and (max-width: 767px) {
    margin-top: 100px;
    left: -150px;
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

export const FooterLogoTitle = styled.img`
  margin-top: 40px;
  margin-left: 20px;
  @media (min-width: 340px) and (max-width: 767px) {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 70px;
  }
`;

export const FooterItem1 = styled.div`
  width: 100%;
  max-width: 280px;
`;
export const FooterItem2 = styled.div`
  width: 100%;
  max-width: 280px;
`;
export const FooterItem3 = styled.div`
  width: 100%;
  max-width: 280px;
`;
export const FooterItem4 = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  justify-content: flex-start;
`;
export const FooterTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-left: 20px;
`;

export const Icons = styled.img`
  text-align: center;
  margin-top: 30px;
  height: 63px;
  width: 63px;
  @media (min-width: 340px) and (max-width: 767px) {
    text-align: center;
    margin-top: 0px;
    height: 45px;
    width: 45px;
  }
`;

export const FooterVisa = styled.img`
  margin-left: 20px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 20px;
  }
`;

export const FooterP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-left: 20px;
  @media (min-width: 340px) and (max-width: 767px) {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FooterEmail = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;

  margin-top: 10px;
  margin-left: 20px;
  @media (min-width: 340px) and (max-width: 767px) {
  }
`;

export const FooterBoxM = styled.div`
  display: none;
  @media (min-width: 340px) and (max-width: 767px) {
    height: 100%;
    color: white;
    background: linear-gradient(180deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%);
    display: flex;
    justify-content: center;
  }
`;

export const FooterItem1M = styled.div`
  width: 100%;
`;
export const FooterItem2M = styled.div`
  width: 100%;
`;

export const FooterItem3M = styled.div`
  display: none;
  @media (min-width: 340px) and (max-width: 767px) {
    display: block;
    width: 100%;
    background: #ff4700;
    height: 295px;
    text-align: center;
  }
`;

export const FooterItem4M = styled.div`
  display: none;
  @media (min-width: 340px) and (max-width: 767px) {
    display: block;
  }
`;
