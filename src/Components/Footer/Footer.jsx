import React from "react";
import {
  FooterBlock,
  FooterBox,
  FooterLogo,
  FooterItem1,
  FooterItem2,
  FooterItem3,
  FooterItem4,
  FooterLogoTitle,
  FooterTitle,
  Icons,
  FooterP,
  FooterEmail,
  FooterBoxM,
  FooterItem1M,
  FooterItem2M,
  FooterItem3M,
  FooterItem4M,
  FooterVisa,
} from "./Footer.styles";

import { Link } from "react-router-dom";

import sushiLogo from "../../Images/sushi-logo.svg";
import sushiLogoTitle from "../../Images/sushi-title.svg";

import inst from "../../Images/social/fb.svg";
import fb from "../../Images/social/inst.svg";
import visa from "../../Images/visa.svg";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-left: 20px;
  @media (min-width: 340px) and (max-width: 767px) {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterLogo src={sushiLogo} alt="Logo" />
        <FooterBox>
          <FooterItem1>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
            <FooterP>
              <StyledLink to="/about">Про нас</StyledLink>
            </FooterP>
            <FooterP></FooterP>
            <FooterVisa src={visa} />
          </FooterItem1>
          <FooterItem2>
            <FooterTitle>Наші ресторани</FooterTitle>
            <FooterP>
              <StyledLink to="/delivery">Доставка та оплата</StyledLink>
            </FooterP>
            <FooterP>
              <StyledLink to="/ofer">Договір оферти</StyledLink>
            </FooterP>
            <FooterP>
              <StyledLink to="/politics">Політика конфеденційності</StyledLink>
            </FooterP>
          </FooterItem2>
          <FooterItem3>
            <FooterTitle>Контакти та підтримка</FooterTitle>
            <FooterP>+38 (098) 952-03-01</FooterP>
            <FooterP></FooterP>
            <FooterEmail>sushizlyubovyu@gmail.com</FooterEmail>
          </FooterItem3>
          <FooterItem4>
            <StyledLink to="https://www.facebook.com/sushizlyubovyu">
              <Icons src={fb} alt="fb" />
            </StyledLink>
            <StyledLink to="https://www.instagram.com/sushizlyubovyu/?igshid=MTIzZWQxMDU%3D">
              <Icons src={inst} alt="insagram" />
            </StyledLink>
          </FooterItem4>
        </FooterBox>
        <div>
          <FooterBoxM>
            <FooterItem1M>
              <FooterP>
                <StyledLink to="/about">Про нас</StyledLink>
              </FooterP>
              <FooterP></FooterP>
              <FooterP>
                <StyledLink to="/delivery">Доставка та оплата</StyledLink>
              </FooterP>
              <FooterP>
                <StyledLink to="/ofer">Договір оферти</StyledLink>
              </FooterP>
              <FooterP>
                <StyledLink to="/politics">
                  Політика конфеденційності
                </StyledLink>
              </FooterP>
              <FooterVisa src={visa} alt="visa-logo" />
            </FooterItem1M>
            <FooterItem2M>
              <FooterP>Контакти та підтримка</FooterP>
              <FooterP>+38 (098) 952-03-01</FooterP>
              <FooterP></FooterP>
              <FooterEmail>
                <div>sushizlyubovyu@</div> <div>gmail.com</div>
              </FooterEmail>
              <FooterItem4M>
                <StyledLink to="https://www.facebook.com/sushizlyubovyu">
                  <Icons src={fb} alt="fb" />
                </StyledLink>
                <StyledLink to="https://www.instagram.com/sushizlyubovyu/?igshid=MTIzZWQxMDU%3D">
                  <Icons src={inst} alt="insagram" />
                </StyledLink>
              </FooterItem4M>
            </FooterItem2M>
          </FooterBoxM>
          <FooterItem3M>
            <br />
            <FooterP>@ 2022 - 2023 “Cуші з любов’ю” </FooterP>
            <FooterP></FooterP>
            <FooterP></FooterP>
            <FooterP>
              <StyledLink to="https://www.linkedin.com/in/oleksa-sarnatskyi/">
                Розробка
              </StyledLink>
              та
              <StyledLink to="https://www.linkedin.com/in/designalex/">
                дизайн
              </StyledLink>
            </FooterP>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
          </FooterItem3M>
        </div>
      </FooterBlock>
    </>
  );
};

export default Footer;
