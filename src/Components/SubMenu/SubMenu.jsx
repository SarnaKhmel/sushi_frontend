import React from "react";
import { SubMenuBlock, Items, Item } from "./SubMenu.styled";
import { useState, useEffect } from "react";
const SubMenu = ({ title, options, setFilterOption }) => {
  const [underlined, setUnderlined] = useState(0);

  const handlerUnderlined = (index, type) => {
    setUnderlined(index);
    setFilterOption(underlined);
    setFilterOption(type);
  };

  useEffect(() => {
    setUnderlined(0);
    setFilterOption("philadelphia");
  }, []);
  return (
    <SubMenuBlock>
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
    </SubMenuBlock>
  );
};

export default SubMenu;
