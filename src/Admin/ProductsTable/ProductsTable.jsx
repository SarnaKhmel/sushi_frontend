import React from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import Exel from "../Exel/Exel";
import {
  fetchRemoveProduct,
  fetchRemoveProductImage,
} from "../../Redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductsTable = ({ options, products }) => {
  const dispatch = useDispatch();

  const onHandleDeleteProduct = (id, url) => {
    const imageName = url.split("/").pop();
    const confirmed = window.confirm(
      `Are you sure you want to delete this product?`
    );
    if (confirmed) {
      const result = dispatch(fetchRemoveProduct(id));
      dispatch(fetchRemoveProductImage(imageName));
      // dispatch(fetchRemoveProduct(id));
      console.log(result);
    }
  };

  const handleSetOption = (type) => {};

  return (
    <>
      <Exel products={products} />

      <Table>
        <TableHeader>
          <tr>
            {options.map((option, index) => (
              <Th
                key={index}
                onClick={(option) => {
                  handleSetOption(option.type);
                }}>
                {option.name}
              </Th>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          <TrHead>
            <Td>Номер</Td>
            <Td>Зображення</Td>
            <Td>Назва</Td>
            <Td>Вага</Td>
            <Td>Ціна</Td>
            <Td>Редагувати</Td>
            <Td>Видалити</Td>
          </TrHead>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td>{index + 1}.</Td>
              <Td>
                <Image
                  src={`${baseUrl}${product.imageUrl}`}
                  alt={product.name}
                />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.weight}</Td>
              <Td>{product.price}</Td>
              <Td>
                <button>
                  <Link to={`/admin/products/${product._id}`}>Редагувати</Link>
                </button>
              </Td>
              <Td>
                <button
                  onClick={() => {
                    onHandleDeleteProduct(product._id, product.imageUrl);
                  }}>
                  Видалити
                </button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: lightGray;
`;

const TableHeader = styled.thead`
  margin: 20px 0px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;
`;
const TrHead = styled.tr`
  display: flex;
  align-items: center;
`;

const Th = styled.th`
  border: 1px solid violet;
  margin: 20px;
  &:hover {
    color: #007bff;
  }
`;

const Td = styled.td`
  width: 150px;
`;

const Btn = styled.button`
  &:hover {
    color: #007bff;
  }
`;

export default ProductsTable;
