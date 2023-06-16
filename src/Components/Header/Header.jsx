import React, { useState } from "react";
import {
  HeaderBlock,
  HeaderItem,
  OrderBlock,
  ContactsBlock,
  LinkBlock,
  LogoBlock,
  ImageLogo,
  ImageTitle,
  OrderCount,
  OrderPrice,
  OrderItem,
  Basket,
  LinkBlockModal,
  ContactsBlockTitle,
  LinkToElement,
} from "./Header.styles";

import { IoMenu } from "react-icons/io5";

import sushiTitle from "../../Images/sushi-title.svg";
import sushiLogo from "../../Images/sushi-logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import basket from "../../Images/basket.svg";

import BottomMenu from "../BottomMenu/BottomMenu";
import ContactModal from "../Modals/ContactsModal/ContactModal";

import { Link as ScrollLink } from "react-scroll";

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  color: white;
  margin-right: 50px;

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
  margin-right: 50px;

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

const Header = () => {
  const [openContactsModal, setOpenContactsModal] = useState(false);

  const handleOpenContactsModal = () => {
    setOpenContactsModal(!openContactsModal);
  };

  const handleCloseContactsModal = () => {
    setOpenContactsModal(false);
  };

  return (
    <>
      <HeaderBlock>
        <HeaderItem>
          <StyledLink to="/">
            <LogoBlock>
              <ImageLogo src={sushiLogo}></ImageLogo>
              <ImageTitle src={sushiTitle}></ImageTitle>
            </LogoBlock>
          </StyledLink>

          <LinkBlock>
            <StyledLink to="/about">Про нас</StyledLink>
            <StyledLink>Доставка</StyledLink>
            <StyledScrollLink to="menu" smooth={true} duration={700}>
              Меню
            </StyledScrollLink>
            <LinkToElement onClick={handleOpenContactsModal}>
              Контакти
            </LinkToElement>
          </LinkBlock>
          <LinkBlockModal>
            <IoMenu size={24} />
          </LinkBlockModal>
          <ContactsBlock>
            <ContactsBlockTitle>Замовлення за телефоном:</ContactsBlockTitle>
            +38 (063) 333-33-33
            <br />
            пн-нд: 11:00 - 21:00
          </ContactsBlock>
          <OrderItem>
            <OrderBlock>
              <OrderCount>99</OrderCount>
              <OrderPrice>
                9999грн
                <Basket src={basket} />
              </OrderPrice>
            </OrderBlock>
          </OrderItem>
        </HeaderItem>
      </HeaderBlock>

      <BottomMenu />

      {openContactsModal === true ? (
        <ContactModal
          isOpen={openContactsModal}
          onClose={handleCloseContactsModal}
        />
      ) : null}
    </>
  );
};

export default Header;
