import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

const SelectBox = styled("div")({
    margin: "16px 0", // Стилі для контейнера (можна змінити залежно від потреб)
});

const SelectBlock = ({ selectOptions, handleSelectedOption }) => {
    const handleChange = (event) => {
        handleSelectedOption(event.target.value);
    };

    return (
        <SelectBox>
            <TextField
                select
                fullWidth
                variant="outlined"
                label="Фільтрація"
                onChange={handleChange}
            >
                {selectOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </SelectBox>
    );
};

export default SelectBlock;
