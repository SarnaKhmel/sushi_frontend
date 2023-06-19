import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneProduct } from "../../Redux/slices/products";

import { ProductItemBlock } from "./ProductItem.styles";
const ProductItem = ({ product }) => {
  //const product
  console.log(product);

  return <ProductItemBlock></ProductItemBlock>;
};

export default ProductItem;
