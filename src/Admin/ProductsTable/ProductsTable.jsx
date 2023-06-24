import React from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../Utils/baseUrl";
import {
  fetchRemoveProduct,
  fetchRemoveProductImage,
} from "../../Redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    <>
      {products.length === 0 ? (
        <>
          <tbody>
            <TrHead>
              <Td>Товарів даної категорії немає</Td>
            </TrHead>
          </tbody>
        </>
      ) : (
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

          <>
            {products &&
              products.map((product, index) => (
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
        </tbody>
      )}
    </>
  );
};

const Image = styled.img`
  height: 80px;
  width: 80px;
`;

const Tr = styled.tr`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TrHead = styled.tr`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Td = styled.td`
  width: 150px;

  @media (max-width: 767px) {
    width: auto;
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  &:hover {
    color: #007bff;
  }
`;

export default ProductsTable;
