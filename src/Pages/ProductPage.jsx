import React from "react";
import Layout from "../Layout/Layout";
import ProductItem from "../Components/ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOneProduct } from "../Redux/slices/products";

const ProductPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOneProduct(id));
  }, [dispatch]);
  const status = product.status;

  return (
    <Layout>
      {status === "loading" && <>Loading...</>}
      {status === "loaded" && <ProductItem product={product} />}
    </Layout>
  );
};

export default ProductPage;
