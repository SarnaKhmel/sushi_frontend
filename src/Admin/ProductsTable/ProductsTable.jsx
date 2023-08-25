import React from "react";
import styled from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import {
  fetchRemoveProduct,
  fetchRemoveProductImage,
} from "../../Redux/slices/products";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ProductsTable = ({ products }) => {
  const dispatch = useDispatch();

  const onHandleDeleteProduct = (id, url) => {
    const imageName = url.split("/").pop();
    const confirmed = window.confirm(
      `Are you sure you want to delete this product?`
    );
    if (confirmed) {
      const result = dispatch(fetchRemoveProduct(id));
      dispatch(fetchRemoveProductImage(imageName));
      console.log(result);
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Td>Номер</Td>
          <Td>Зображення</Td>
          <Td>Назва</Td>
          <Td>Вага</Td>
          <Td>Ціна</Td>
          <Td>Редагувати</Td>
          <Td>Видалити</Td>
        </Tr>
      </Thead>

      <Tbody>
        {products.length === 0 ? (
          <Tr>
            <Th>Товарів даної категорії немає</Th>
          </Tr>
        ) : (
          <>
            {products &&
              products.map((product, index) => (
                <Tr key={index}>
                  <Td>{index + 1}.</Td>
                  <Td>
                    <Image
                      src={`${baseUrl}${product.imageUrl}`}
                      alt={product.name}
                      loading="lazy"
                    />
                  </Td>
                  <Td>{product.name}</Td>
                  <Td>{product.weight}</Td>
                  <Td>{product.price}</Td>
                  <Td>
                    <Button>
                      <Link to={`/admin/products/${product._id}`}>
                        Редагувати
                      </Link>
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        onHandleDeleteProduct(product._id, product.imageUrl);
                      }}>
                      Видалити
                    </Button>
                  </Td>
                </Tr>
              ))}
          </>
        )}
      </Tbody>
    </Table>
  );
};

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Button = styled.button`
  &:hover {
    color: #007bff;
  }
`;

export default ProductsTable;
