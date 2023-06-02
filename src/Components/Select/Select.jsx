import React from "react";
import Select from "react-select";
import { SelectBox } from "./Select.styles";

const SelectBlock = ({ selectOptions, ...rest }) => {
  return (
    <SelectBox>
      <Select
        options={selectOptions}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectBox>
  );
};

export default SelectBlock;
