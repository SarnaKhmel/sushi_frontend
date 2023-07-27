import React, { useState, useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";

const Products = ({ products }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // При монтажі компонента, прокрутити до збереженої позиції
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
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
