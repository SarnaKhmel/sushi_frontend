import React, { useState } from "react";
import { BottomMenuBlock, LinkIcon, LinkIconTitle } from "./BottomMenu.styled";
import { Link as ScrollLink } from "react-scroll";
import p1 from "../../Images/bottomMenu/p1.svg";
import p2 from "../../Images/bottomMenu/p2.svg";
import p3 from "../../Images/bottomMenu/p3.svg";
import p4 from "../../Images/bottomMenu/p4.svg";
import p5 from "../../Images/bottomMenu/p5.svg";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

import bottomMenuList from "../../testData/bottomMenuData";

const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: white;
  border-bottom: none;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  &:hover {
    border-bottom: 10px solid #ff4700;
    cursor: pointer;
  }
`;

const BottomMenu = ({ setFilterOption }) => {
  const imagesSVG = [p1, p2, p3, p4, p5];

  const [underlined, setUnderlined] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;

  const setProduct = (option) => {
    setFilterOption(option);
  };

  // console.log(bottomMenuList);

  return (
    <>
      {currentPath === "/" ? (
        <>
          <BottomMenuBlock>
            {bottomMenuList.map((item, index) => (
              <StyledScrollLink
                key={index}
                isUnderlined={index === underlined}
                to="menu"
                smooth={true}
                duration={700}
                onClick={() => {
                  setProduct(item.type);
                }}>
                <LinkIcon
                  src={imagesSVG[index]}
                  alt={item.name}
                  loading="lazy"
                />
                <LinkIconTitle>{item.name}</LinkIconTitle>
              </StyledScrollLink>
            ))}
          </BottomMenuBlock>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default BottomMenu;
