import styled from "styled-components";

export const ContactModalBlock = styled.div`
  position: fixed;
  top: 180px;
  right: 39vw;
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2500;
  @media (max-width: 768px) {
    right: 0;
    top: 180px;
  }
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
