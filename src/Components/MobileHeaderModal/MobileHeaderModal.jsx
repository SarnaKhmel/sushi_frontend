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
  Line,
  FooterItem4M,
  Icons,
} from "./MobileHeaderModal.styled";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import inst from "../../Images/social/fb.svg";
import fb from "../../Images/social/inst.svg";

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  color: white;
  margin-left: 50px;
  white-space: nowrap;
  margin-bottom: 10px;
  padding: 7px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  ${"" /* border: 1px solid #ff4700; */}
  border-radius: 10px;
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
  padding: 7px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  ${"" /* border: 1px solid #ff4700; */}
  border-radius: 10px;
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
      <Line>
        <h4>Навігація</h4>
        <CloseBlock onClick={onClose}>
          <AiOutlineClose size={30} />
        </CloseBlock>
      </Line>
      <StyledLink to="/about" onClick={onClose}>
        Про нас
      </StyledLink>
      <StyledScrollLink
        to="delivery"
        smooth={true}
        duration={1200}
        onClick={onClose}>
        Доставка
      </StyledScrollLink>
      <StyledScrollLink
        to="menu"
        smooth={true}
        duration={700}
        onClick={onClose}>
        Меню
      </StyledScrollLink>
      <LinkToElement
        onClick={() => {
          handleOpenContactsModal();
          onClose();
        }}>
        Контакти
      </LinkToElement>
      <FooterItem4M>
        <Link>
          <Icons src={fb} alt="fb" />
        </Link>
        <Link>
          <Icons src={inst} alt="insagram" />
        </Link>
      </FooterItem4M>
    </ContactModalBlock>
  );
};

export default MobileHeaderModal;
