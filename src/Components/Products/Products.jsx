import React, { useRef, useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";

const Products = ({ products }) => {
  // const setScrollPosition = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition.current = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, setScrollPosition.current);
  // }, [setScrollPosition.current]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.localStorage.setItem("scrollPosition", window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const scrollPosition = window.localStorage.getItem("scrollPosition") || 0;
  //   window.scrollTo(0, parseInt(scrollPosition));
  // }, []);

  // const scrollPositionRef = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     scrollPositionRef.current = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, scrollPositionRef.current);
  // }, []);

  let scrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
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
