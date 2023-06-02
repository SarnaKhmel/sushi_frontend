import React from "react";
import { useState, useEffect } from "react";
const Products = ({ categories }) => {
  const [type, setType] = useState(null);
  useEffect(() => {
    setType(categories);
    console.log(type);
  }, []);
  console.log(categories);
  return <div>Products</div>;
};

export default Products;
