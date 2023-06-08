import React from "react";
import { useState, useEffect } from "react";
import { ProductsBlock, ProductsList } from "./Products.style";
// import products from "../../testData/products.json";
import Product from "../Product/Product";
const Products = ({ categories, products }) => {
  const [type, setType] = useState(null);
  // console.log(products);

  return (
    <ProductsBlock>
      <ProductsList>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductsList>
    </ProductsBlock>
  );
};

export default Products;
