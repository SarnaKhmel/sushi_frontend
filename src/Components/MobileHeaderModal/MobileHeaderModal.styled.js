import styled, { css } from "styled-components";

export const ContactModalBlock = styled.div`
  position: fixed;
  width: 218px;
  height: 355px;
  right: 10px;
  top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  background: linear-gradient(
    160.24deg,
    rgba(10, 10, 10, 0.6) 0.78%,
    rgba(40, 38, 38, 0.6) 98.97%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Diamond = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ff4700;
  color: #ff4700;
  transform: rotate(45deg);
  margin-bottom: -10px;
  z-index: 1001;
`;

export const ContactModalBody = styled.div`
  /* Стилі для тіла модального вікна */
  padding: 20px;
  border-radius: 12.2939px;

  background: linear-gradient(
    145.99deg,
    rgba(22, 21, 21, 0.9) -0.09%,
    rgba(46, 46, 46, 0.9) 98.66%
  );

  color: white;
`;

export const Header = styled.h2`
  /* Стилі для заголовків */
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const Block = styled.div`
  /* Стилі для блоків */
  margin-bottom: 25px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const CloseBlock = styled.div`
  width: 35px;
  height: 35px;
  ${"" /* margin-left: 90%; */}
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: #ff4700;
  }
`;

export const LinkToElement = styled.a`
  text-decoration: none;
  color: white;
  white-space: nowrap;
  margin-left: 50px;
  margin-bottom: 10px;
  padding: 7px;
  ${"" /* border: 1px solid #ff4700; */}
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: space-around;
  margin-left: 30px;
  margin-right: 30px;
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 30px;
`;

export const FooterItem4M = styled.div`
  display: none;
  @media (min-width: 340px) and (max-width: 767px) {
    display: block;
    display: flex;

    margin: 10px;
    margin-left: 20px;
  }
`;

export const Icons = styled.img`
  text-align: center;
  margin-top: 30px;
  margin-right: 10px;
  height: 52px;
  width: 52px;
  ${"" /* border: 1px solid #ff4700; */}
  border-radius: 10px;
  @media (min-width: 340px) and (max-width: 767px) {
    text-align: center;
    margin-top: 0px;
    height: 52px;
    width: 52px;
  }
`;
