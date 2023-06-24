import React, { useState } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../Redux/slices/products";
import { useEffect } from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import styled from "styled-components";

const AdminProductEditPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    dispatch(fetchOneProduct(id));
  }, [dispatch, update]);
  const status = product.status;
  return (
    <LayoutAdmin>
      <Container>
        {status === "loading" && <>Loading...</>}
        {status === "loaded" && (
          <Product product={product} update={update} setUpdate={setUpdate} />
        )}
      </Container>
    </LayoutAdmin>
  );
};

const Container = styled.div`
  margin-top: 100px;

  /* Mobile styles */
  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 10px;
  }
`;

export default AdminProductEditPage;
