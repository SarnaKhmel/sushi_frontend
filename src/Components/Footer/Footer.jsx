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
} from "./Footer.styles";

import sushiLogo from "../../Images/sushi-logo.svg";
import sushiLogoTitle from "../../Images/sushi-title.svg";

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <FooterLogo src={sushiLogo} alt="Logo" />
        <FooterBox>
          <FooterItem1>
            <FooterLogoTitle src={sushiLogoTitle} alt="title" />
          </FooterItem1>
          <FooterItem2>2</FooterItem2>
          <FooterItem3>3</FooterItem3>
          <FooterItem4>4</FooterItem4>
        </FooterBox>
      </FooterBlock>
    </>
  );
};

export default Footer;
