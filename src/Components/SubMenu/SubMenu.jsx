import React, { useState, useEffect } from "react";
import { SubMenuBlock, Items, Item } from "./SubMenu.styled";

const SubMenu = ({ title, options, setFilterOption }) => {
  const [underlined, setUnderlined] = useState(0);
  const [subFilter, setSubFilter] = useState(
    localStorage.getItem("sub_filter") || ""
  );

  useEffect(() => {
    localStorage.setItem("sub_filter", "philadelphia");
  }, []);

  useEffect(() => {
    const index = options.findIndex((option) => option.type === subFilter);
    setUnderlined(index >= 0 ? index : 0);
  }, [options, subFilter]);

  const handlerUnderlined = (index, type) => {
    setUnderlined(index);
    setFilterOption(type);
  };

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
