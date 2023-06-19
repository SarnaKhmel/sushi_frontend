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
  width: 20px;
  height: 20px;
  margin-left: 90%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
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
  &:hover {
    text-decoration: underline;
  }
`;
