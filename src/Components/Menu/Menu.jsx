import React, { useState, useEffect } from "react";
import { MenuBlock, Items, Item } from "./Menu.styled";

const Menu = ({ title, options, setFilterOption }) => {
  const [underlined, setUnderlined] = useState(0);
  const [filter, setFilter] = useState(localStorage.getItem("filter") || "");

  useEffect(() => {
    const index = options.findIndex((option) => option.type === filter);
    setUnderlined(index >= 0 ? index : 0);
  }, [options, filter]);

  const handlerUnderlined = (index, type) => {
    setUnderlined(index);
    setFilterOption(type);
    localStorage.setItem("sub_filter", "philadelphia");
  };

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
