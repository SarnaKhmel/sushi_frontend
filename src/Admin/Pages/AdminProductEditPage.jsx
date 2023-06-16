import React from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../Redux/slices/products";
import { useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import styled from "styled-components";

const AdminProductEditPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOneProduct(id));
  }, [dispatch]);
  const status = product.status;
  return (
    <LayoutAdmin>
      <Container>
        {status === "loading" && <>Loading...</>}
        {status === "loaded" && <Product product={product} />}
      </Container>
    </LayoutAdmin>
  );
};

const Container = styled.div`
  margin-top: 100px;
`;

export default AdminProductEditPage;