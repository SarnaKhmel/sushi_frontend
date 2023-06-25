import React, { useState, useEffect } from "react";
import {
  ContactModalBlock,
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
  const [url, setUrl] = useState(false);
  useEffect(() => {
    const pathname = window.location.pathname;
    setUrl(pathname === "/");
  }, []);
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
