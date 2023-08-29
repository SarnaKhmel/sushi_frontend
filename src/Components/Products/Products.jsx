import React, { useState, useEffect } from "react";
import { ProductsBlock, ProductsList, InfoBlock } from "./Products.style";
import Product from "../Product/Product";
// import { ScrollRestoration } from "react-router-dom";

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
  //
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
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

  // let scrollPosition = 0;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     scrollPosition = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, scrollPosition);
  // }, []);

  //__________

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //     console.log("Scroll");
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, scrollPosition);
  // }, [scrollPosition]);

  const handleScrollPosition = () => {
    window.localStorage.setItem("scrollPosition", window.scrollY);
  };

  useEffect(() => {
    const scrollPosition = window.localStorage.getItem("scrollPosition") || 0;
    console.log(scrollPosition);

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
      {/* <ScrollRestoration /> */}
    </>
  );
};

export default Products;
