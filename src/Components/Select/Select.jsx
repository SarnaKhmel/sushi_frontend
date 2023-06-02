import React from "react";
import Select from "react-select";
import { SelectBox } from "./Select.styles";

const SelectBlock = ({ selectOptions, handleSelectedOption }) => {
  const handleChange = (selectedOption) => {
    handleSelectedOption(selectedOption.value);
  };

  return (
    <SelectBox>
      <Select
        options={selectOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={handleChange}
      />
    </SelectBox>
  );
};

export default SelectBlock;
