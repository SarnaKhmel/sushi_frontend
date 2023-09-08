import React, { useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";

const Products = ({ products }) => {
  const handleScrollPosition = () => {
    window.localStorage.setItem("scrollPosition", window.scrollY);
  };

  useEffect(() => {
    const scrollPosition = window.localStorage.getItem("scrollPosition") || 0;

    setTimeout(() => {
      window.scrollTo(0, parseInt(scrollPosition));
    }, 0);
  }, []);

  return (
    <>
      <ProductsBlock>
        {products.length !== 0 ? (
          <ProductsList>
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleScrollPosition={handleScrollPosition}
              />
            ))}
          </ProductsList>
        ) : (
          <InfoBlock> Пошук не дав результату.</InfoBlock>
        )}
      </ProductsBlock>
    </>
  );
};

export default Products;
