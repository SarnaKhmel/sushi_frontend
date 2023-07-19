import React from "react";
import Select from "react-select";
import styled from "styled-components";

const SelectBlock = ({ selectOptions, handleSelectedOption }) => {
  const handleChange = (selectedOption) => {
    handleSelectedOption(selectedOption.value);
  };

  return (
    <CustomSelectBox>
      <CustomSelect
        options={selectOptions}
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={handleChange}
      />
    </CustomSelectBox>
  );
};

const CustomSelectBox = styled.div`
  width: 260px;
  margin-left: 5vw;
`;

const CustomSelect = styled(Select)`
  &&& {
    .react-select__control {
      border-radius: 15px;
      background-color: transparent;
    }

    .react-select__single-value {
      color: white;
      font-size: 14px;
    }

    .react-select__value-container {
      .react-select__menu {
        background-color: transparent;
        color: white;
      }

      .react-select__menu-list {
        background-color: transparent;
        color: white;

        .react-select__option {
          margin-top: 2px;
          border-radius: 5px;
          background: linear-gradient(
            145.99deg,
            rgba(22, 21, 21, 0.9) -0.09%,
            rgba(46, 46, 46, 0.9) 98.66%
          );
          color: white;
        }

        && .react-select__option:hover {
          color: #ff4700;
        }

        && .react-select__option:focus {
          color: #ff4700;
        }
      }
    }

    .react-select__menu {
      border-radius: 5px;
      padding: 5px;
      background: linear-gradient(
        145.99deg,
        rgba(22, 21, 21, 0.9) -0.09%,
        rgba(46, 46, 46, 0.9) 98.66%
      );
    }
  }
`;

export default SelectBlock;
