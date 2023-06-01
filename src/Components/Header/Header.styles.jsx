import styled from "styled-components";

export const HeaderBlock = styled.div`
  background: linear-gradient(
    90.94deg,
    #1a1818 -0.75%,
    #2f2d2d 51.72%,
    #0c0b0b 100%
  );

  color: white;

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
  }
  @media (min-width: 1920px) {
    height: 116px;
  }
`;

export const LogoBlock = styled.div`
  order: 0;
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

export const OrderItem = styled.div`
  position: relative;

  @media (min-width: 340px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    order: 3;
  }
  @media (min-width: 1920px) {
    order: 3;
  }
`;
export const OrderBlock = styled.div`
  width: 88px;
  height: 88px;
  border: 4px solid #ff4700;
  border-radius: 10px 47px 47px 47px;

  position: relative;
  @media (min-width: 340px) and (max-width: 767px) {
    z-index: 1000;
    position: fixed;
    top: 200px;
    right: 10px;
    background: rgba(30, 28, 28, 0.5);
    border: 3.31364px solid #ff4700;
    box-shadow: 0px 5.30183px 5.30183px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2.65091px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 7.85728px 36.9292px 36.9292px 36.9292px;
    width: 69px;
    height: 69px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    z-index: 1000;
    position: fixed;
    top: 400px;
    right: 20px;
    background: linear-gradient(
      90.94deg,
      #1a1818 -0.75%,
      #2f2d2d 51.72%,
      #0c0b0b 100%
    );
  }
`;

export const OrderPrice = styled.div`
  position: absolute;
  width: 65px;
  height: 20px;
  top: 30px;
  left: 5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  @media (min-width: 340px) and (max-width: 767px) {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const ImageLogo = styled.img`
  @media (min-width: 340px) and (max-width: 767px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 80px;
    width: 120px;
  }
`;
export const ImageTitle = styled.img`
  @media (min-width: 340px) and (max-width: 767px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60px;
    width: 80px;
  }
  @media (min-width: 1024px) and (max-width: 1919px) {
    height: 70px;
    width: 90px;
  }
`;

export const Basket = styled.img``;
export const LinkItem = styled.div``;

export const OrderCount = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  background: #ffffff;
  border-radius: 100px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

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
