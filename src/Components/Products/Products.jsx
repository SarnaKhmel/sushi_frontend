import React from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <ProductsBlock>
      {products.length !== 0 ? (
        <ProductsList>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </ProductsList>
      ) : (
        <InfoBlock> Пошук не дав результату.</InfoBlock>
      )}
    </ProductsBlock>
  );
};

export default Products;
