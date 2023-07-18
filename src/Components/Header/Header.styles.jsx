import styled from "styled-components";

export const HeaderBlock = styled.div`
  background: linear-gradient(
    90.94deg,
    #1a1818 -0.75%,
    #2f2d2d 51.72%,
    #0c0b0b 100%
  );

  color: white;
  z-index: 50;

  position: fixed;
  top: 0;
  width: 100%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 60px;
  @media (min-width: 340px) and (max-width: 767px) {
    height: 74px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 95px;
  }
  @media (min-width: 1919px) {
    height: 116px;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  z-index: 50;

  margin: 0 320px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 340px) and (max-width: 767px) {
    height: 74px;
    margin: 0 0px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 90px;
    margin: 0 0px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 105px;
    margin: 0 0px;
    padding: 0 10vw;
  }
  @media (min-width: 1920px) {
    height: 116px;
    padding: 0 3vw;
  }
`;

export const LogoBlock = styled.div`
  order: 0;

  display: inline-flex;
  @media (min-width: 340px) and (max-width: 767px) {
    height: 90%;
    width: 160px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 90%;
    width: 160px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 90%;
    width: 285px;
  }
  @media (min-width: 1919px) {
    height: 90%;
  }
`;
export const LinkBlock = styled.div`
  color: white;
  display: flex;
  @media (min-width: 340px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    order: 1;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    order: 1;
  }
  @media (min-width: 1920px) {
    order: 1;
  }
`;
export const ContactsBlock = styled.div`
  order: 1;
  @media (min-width: 340px) and (max-width: 767px) {
    order: 1;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    order: 2;
    margin-right: 20px;
  }
`;

export const ImageLogo = styled.img`
  width: 50%;
  ${
    "" /* @media (min-width: 340px) and (max-width: 767px) {
    height: 40px;
    width: 60px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 60px;
    width: 80px;
  } */
  }
`;
export const ImageTitle = styled.img`
  width: 50%;
  ${
    "" /* @media (min-width: 340px) and (max-width: 767px) {
    height: 40px;
    width: 60px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 60px;
    width: 80px;
  } */
  }
`;

export const LinkItem = styled.div``;

export const LinkBlockModal = styled.div`
  @media (min-width: 340px) and (max-width: 767px) {
    order: 2;
    margin: 0 30px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    display: none;
  }
  @media (min-width: 1920px) {
    display: none;
  }
`;

export const ContactsBlockTitle = styled.div`
  white-space: nowrap;
  @media (min-width: 340px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
  }
  @media (min-width: 1920px) {
  }
`;

export const LinkToElement = styled.a`
  color: blue;
  text-decoration: none;
  color: white;
  margin-right: 50px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 340px) and (max-width: 767px) {
    margin-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 20px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    margin-right: 30px;
  }
`;
