import React from "react";
import { BottomMenuBlock, LinkIcon, LinkIconTitle } from "./BottomMenu.styled";
import { Link } from "react-router-dom";
import p1 from "../../Images/bottomMenu/p1.svg";
import p2 from "../../Images/bottomMenu/p2.svg";
import p3 from "../../Images/bottomMenu/p3.svg";
import p4 from "../../Images/bottomMenu/p4.svg";
import p5 from "../../Images/bottomMenu/p5.svg";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const BottomMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);
  const StyledLink = styled(Link)`
    text-align: center;
  `;

  return (
    <>
      {currentPath === "/" ? (
        <>
          <BottomMenuBlock>
            <StyledLink>
              <LinkIcon src={p1} />
              <LinkIconTitle>Суші</LinkIconTitle>
            </StyledLink>
            <StyledLink>
              <LinkIcon src={p2} />
              <LinkIconTitle>Сети</LinkIconTitle>
            </StyledLink>
            <StyledLink>
              <LinkIcon src={p3} />
              <LinkIconTitle>Супи</LinkIconTitle>
            </StyledLink>
            <StyledLink>
              <LinkIcon src={p4} />
              <LinkIconTitle>Напої</LinkIconTitle>
            </StyledLink>
            <StyledLink>
              <LinkIcon src={p5} />
              <LinkIconTitle>Додатки</LinkIconTitle>
            </StyledLink>
          </BottomMenuBlock>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default BottomMenu;
