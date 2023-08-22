import React, { useState, useEffect } from "react";
import {
  HeaderBlock,
  HeaderItem,
  ContactsBlock,
  LinkBlock,
  LogoBlock,
  ImageLogo,
  ImageTitle,
  LinkBlockModal,
  ContactsBlockTitle,
  LinkToElement,
} from "./Header.styles";

import { IoMenu } from "react-icons/io5";

import sushiTitle from "../../Images/sushi-title.svg";
import sushiLogo from "../../Images/sushi-logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ContactModal from "../Modals/ContactsModal/ContactModal";

import MobileHeaderModal from "../MobileHeaderModal/MobileHeaderModal";
import { Link as ScrollLink } from "react-scroll";

import OrderItem from "../OrderItem/OrderItem";

import WeekSaleModal from "../Modals/WeekSaleModal/WeekSaleModal";

const StyledLink = styled(Link)`
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
const StyledScrollLink = styled(ScrollLink)`
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

const Header = () => {
  const [url, setUrl] = useState(false);
  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname === "/");
  }, []);

  const [openContactsModal, setOpenContactsModal] = useState(false);

  const handleOpenContactsModal = () => {
    setOpenContactsModal(!openContactsModal);
  };

  const handleCloseContactsModal = () => {
    setOpenContactsModal(false);
  };

  // header for mobile device
  const [openMobileModal, setMobileModal] = useState(false);
  const handleOpenMobileModal = () => {
    setMobileModal(!openMobileModal);
  };

  const handleCloseMobileModal = () => {
    setMobileModal(false);
  };

  //weekSaleModal

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
            {url ? (
              <>
                <StyledScrollLink to="menu" smooth={true} duration={700}>
                  Меню
                </StyledScrollLink>
              </>
            ) : (
              <>
                <StyledLink to="/">Меню</StyledLink>
              </>
            )}

            {url ? (
              <>
                <StyledScrollLink to="delivery" smooth={true} duration={1200}>
                  Доставка
                </StyledScrollLink>
              </>
            ) : (
              <>
                <StyledLink to="/delivery">Доставка</StyledLink>
              </>
            )}
            <LinkToElement onClick={handleOpenContactsModal}>
              Контакти
            </LinkToElement>
            <StyledLink to="/about">Про нас</StyledLink>
          </LinkBlock>
          <LinkBlockModal onClick={handleOpenMobileModal}>
            <IoMenu size={24} />
          </LinkBlockModal>
          <ContactsBlock>
            <ContactsBlockTitle>Замовлення за телефоном:</ContactsBlockTitle>
            +38 (098) 952-03-01
            <br />
            пн-нд: 10:00 - 21:30
          </ContactsBlock>
          <OrderItem></OrderItem>
        </HeaderItem>
      </HeaderBlock>
      {openContactsModal === true ? (
        <ContactModal
          isOpen={openContactsModal}
          onClose={handleCloseContactsModal}
        />
      ) : null}
      {openMobileModal === true ? (
        <MobileHeaderModal
          isOpen={openMobileModal}
          onClose={handleCloseMobileModal}
          handleOpenContactsModal={handleOpenContactsModal}
        />
      ) : null}

      {/* <WeekSaleModal /> */}
    </>
  );
};

export default Header;
