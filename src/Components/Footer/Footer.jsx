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

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterLogo src={sushiLogo} alt="Logo" />
        <FooterBox>
          <FooterItem1>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
            <FooterP>
              <Link to="/about">Про нас</Link>
            </FooterP>
            <FooterP></FooterP>
            <FooterVisa src={visa} />
          </FooterItem1>
          <FooterItem2>
            <FooterTitle>Наші ресторани</FooterTitle>
            <FooterP>
              <Link to="/delivery">Доставка та оплата</Link>
            </FooterP>
            <FooterP>
              <Link to="/order">Договір оферти</Link>
            </FooterP>
            <FooterP>
              <Link to="/politics">Політика конфеденційності</Link>
            </FooterP>
          </FooterItem2>
          <FooterItem3>
            <FooterTitle>Контакти та підтримка</FooterTitle>
            <FooterP>+38 (098) 952-03-01</FooterP>
            <FooterP>+38 (067) 159-88-15</FooterP>
            <FooterEmail>ushizlyubovyu@gmail.com</FooterEmail>
          </FooterItem3>
          <FooterItem4>
            <Link to="https://www.facebook.com/sushizlyubovyu">
              <Icons src={fb} alt="fb" />
            </Link>
            <Link to="https://www.instagram.com/sushizlyubovyu/?igshid=MTIzZWQxMDU%3D">
              <Icons src={inst} alt="insagram" />
            </Link>
          </FooterItem4>
        </FooterBox>
        <div>
          <FooterBoxM>
            <FooterItem1M>
              <FooterP>
                <Link to="/about">Про нас</Link>
              </FooterP>
              <FooterP></FooterP>
              <FooterP>
                <Link to="/delivery">Доставка та оплата</Link>
              </FooterP>
              <FooterP>
                <Link to="/order">Договір оферти</Link>
              </FooterP>
              <FooterP>
                <Link to="/politics">Політика конфеденційності</Link>
              </FooterP>
              <FooterVisa src={visa} alt="visa-logo" />
            </FooterItem1M>
            <FooterItem2M>
              <FooterP>Контакти та підтримка</FooterP>
              <FooterP>+38 (098) 952-03-01</FooterP>
              <FooterP>+38 (067) 159-88-15</FooterP>
              <FooterEmail>sushizlyubovyu@gmail.com</FooterEmail>
              <FooterItem4M>
                <Link to="https://www.facebook.com/sushizlyubovyu">
                  <Icons src={fb} alt="fb" />
                </Link>
                <Link to="https://www.instagram.com/sushizlyubovyu/?igshid=MTIzZWQxMDU%3D">
                  <Icons src={inst} alt="insagram" />
                </Link>
              </FooterItem4M>
            </FooterItem2M>
          </FooterBoxM>
          <FooterItem3M>
            <br />
            <FooterP>@ 2022 - 2023 “Cуші з любов’ю” </FooterP>
            <FooterP></FooterP>
            <FooterP> </FooterP>
            <FooterP>Розробка та дизайн сайтів </FooterP>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
          </FooterItem3M>
        </div>
      </FooterBlock>
    </>
  );
};

export default Footer;
