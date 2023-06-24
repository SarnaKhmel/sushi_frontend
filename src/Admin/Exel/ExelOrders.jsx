import React from "react";
import * as XLSX from "xlsx";
import styled from "styled-components";

const ExelOrders = ({ products, name }) => {
  const handleDownload = () => {
    const data = products;

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Замовлення");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const filename = "orders.xlsx";
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Btn onClick={handleDownload}>Завантажити таблицю товарів - {name}</Btn>
    </>
  );
};

const Btn = styled.button`
  width: 260px;
  height: 50px;
  margin-bottom: 50px;
`;
export default ExelOrders;
