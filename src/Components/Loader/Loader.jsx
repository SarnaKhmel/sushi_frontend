import React from "react";
import {
  LoaderBlock,
  Block,
  Line,
  LogoBlock,
  ImageLogo,
} from "./Loader.styles.jsx";
import sushiLogo from "../../Images/sushi-logo.svg";

const Loader = () => {
  return (
    <LoaderBlock>
      <Block>
        <Line>
          <LogoBlock>
            <ImageLogo src={sushiLogo}></ImageLogo>
          </LogoBlock>
        </Line>
      </Block>
    </LoaderBlock>
  );
};

export default Loader;
