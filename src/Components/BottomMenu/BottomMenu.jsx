import React from "react";
import { BottomMenuBlock, LinkIcon, LinkIconTitle } from "./BottomMenu.styled";
import { Link } from "react-router-dom";
import p1 from "../../Images/bottomMenu/p1.svg";
import p2 from "../../Images/bottomMenu/p2.svg";
import p3 from "../../Images/bottomMenu/p3.svg";
import p4 from "../../Images/bottomMenu/p4.svg";
import p5 from "../../Images/bottomMenu/p5.svg";
import styled from "styled-components";

const BottomMenu = () => {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration: underline;
      background-color: #ccc;
    }
  `;

  return (
    <BottomMenuBlock>
      <Link>
        <LinkIcon src={p1} />
        <LinkIconTitle>Суші</LinkIconTitle>
      </Link>
      <Link>
        <LinkIcon src={p2} />
        <LinkIconTitle>Сети</LinkIconTitle>
      </Link>
      <Link>
        <LinkIcon src={p3} />
        <LinkIconTitle>Супи</LinkIconTitle>
      </Link>
      <Link>
        <LinkIcon src={p4} />
        <LinkIconTitle>Напої</LinkIconTitle>
      </Link>
      <Link>
        <LinkIcon src={p5} />
        <LinkIconTitle>Додатки</LinkIconTitle>
      </Link>
    </BottomMenuBlock>
  );
};
export default BottomMenu;
