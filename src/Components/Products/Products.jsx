import React, { useState, useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";
import { List } from "react-virtualized";

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

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
  return (
    <ProductsBlock>
      {products.length !== 0 ? (
        <ProductsList>
          <List
            width={500}
            height={900}
            rowCount={products.length}
            rowHeight={100}
            rowRenderer={({ index, key, style }) => (
              <div key={key} style={style}>
                <Product product={products[index]} />
              </div>
            )}
          />
        </ProductsList>
      ) : (
        <InfoBlock> Пошук не дав результату.</InfoBlock>
      )}
    </ProductsBlock>
  );
};

export default Products;
