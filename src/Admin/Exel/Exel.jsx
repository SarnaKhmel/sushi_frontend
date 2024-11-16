import React from "react";
import * as XLSX from "xlsx";
import {Button} from "@mui/material";
const Exel = ({ products, name }) => {
  const handleDownload = () => {
    const data = products;

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Дані");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const filename = "products.xlsx";
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <Button
          variant="contained"
          component="label"
          onClick={handleDownload}>
          Завантажити таблицю товарів - {name}
      </Button>);
};

export default Exel;
