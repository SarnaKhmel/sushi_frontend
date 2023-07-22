import React, { useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";

const Products = ({ products }) => {
  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      localStorage.removeItem("scrollPosition");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      localStorage.setItem("scrollPosition", currentPosition.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
