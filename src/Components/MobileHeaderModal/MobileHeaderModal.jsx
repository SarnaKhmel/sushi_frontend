import React from "react";
import {
  ContactModalBlock,
  Diamond,
  ContactModalBody,
  Header,
  Block,
  Text,
  CloseBlock,
  LinkToElement,
} from "./MobileHeaderModal.styled";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  color: white;
  margin-left: 50px;
  white-space: nowrap;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
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
const StyledScrollLink = styled(ScrollLink)`
  color: blue;
  text-decoration: none;
  color: white;
  white-space: nowrap;
  margin-left: 50px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
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
const MobileHeaderModal = ({ isOpen, onClose, handleOpenContactsModal }) => {
  return (
    <ContactModalBlock>
      <CloseBlock onClick={onClose}>
        <AiOutlineClose size={20} />
      </CloseBlock>
      <StyledLink to="/">Головна</StyledLink>
      <StyledScrollLink to="delivery" smooth={true} duration={1200}>
        Доставка
      </StyledScrollLink>
      <StyledScrollLink to="menu" smooth={true} duration={700}>
        Меню
      </StyledScrollLink>
      <LinkToElement onClick={handleOpenContactsModal}>Контакти</LinkToElement>
    </ContactModalBlock>
  );
};

export default MobileHeaderModal;
