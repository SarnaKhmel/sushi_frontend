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
} from "./Footer.styles";

import { Link } from "react-router-dom";

import sushiLogo from "../../Images/sushi-logo.svg";
import sushiLogoTitle from "../../Images/sushi-title.svg";

import inst from "../../Images/social/fb.svg";
import fb from "../../Images/social/inst.svg";

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterLogo src={sushiLogo} alt="Logo" />
        <FooterBox>
          <FooterItem1>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
            <FooterP>Про нас</FooterP>
            <FooterP>Акції</FooterP>
          </FooterItem1>
          <FooterItem2>
            <FooterTitle>Наші ресторани</FooterTitle>
            <FooterP>Довставка і оплата</FooterP>
            <FooterP>Наші заклади</FooterP>
            <FooterP>Політика конфеденційності</FooterP>
          </FooterItem2>
          <FooterItem3>
            <FooterTitle>Констакти та підтримка</FooterTitle>
            <FooterP>+ 38 (063) 555 - 55-55</FooterP>
            <FooterP>+ 38 (063) 555 - 55-55</FooterP>
            <FooterEmail>qwe@qwe.com</FooterEmail>
          </FooterItem3>
          <FooterItem4>
            <Link>
              <Icons src={fb} alt="fb" />
            </Link>
            <Link>
              <Icons src={inst} alt="insagram" />
            </Link>
          </FooterItem4>
        </FooterBox>
      </FooterBlock>
    </>
  );
};

export default Footer;
