import React from "react";
import Layout from "../Layout/Layout";
import ProductItem from "../Components/ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneProduct } from "../Redux/slices/products";
import { saveScrollPosition } from "../Redux/slices/position";
import Loader from "../Components/Loader/Loader";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOneProduct(id));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(
        saveScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
      );
    };
  }, [dispatch]);
  const status = product.status;

  return (
    <Layout>
      {status === "loading" && <Loader />}
      {status === "loaded" && <ProductItem product={product} />}
    </Layout>
  );
};

export default ProductPage;
