import React from "react";
import { MenuBlock, Items, Item } from "./Menu.styled";
import { useState, useEffect } from "react";
const Menu = ({ title, options, setFilterOption }) => {
  const [underlined, setUnderlined] = useState(0);

  const handlerUnderlined = (index, type) => {
    setUnderlined(index);
    setFilterOption(underlined);
    setFilterOption(type);
  };

  useEffect(() => {
    setUnderlined(0);
    setFilterOption("sale");
  }, []);
  return (
    <MenuBlock id="menu">
      {title}
      <Items>
        {options.map((option, index) => (
          <Item
            key={index}
            isUnderlined={index === underlined}
            onClick={() => {
              handlerUnderlined(index, option.type);
            }}>
            {option.name}
          </Item>
        ))}
      </Items>
    </MenuBlock>
  );
};

export default Menu;
