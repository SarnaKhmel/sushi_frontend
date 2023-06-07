import React from "react";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import Products from "../Products/Products";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/slices/products";

const AdminProductsPage = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.products);
  // const [update, setUpdate] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const updateTable = () => {
  //   setUpdate(!update);
  // };

  return (
    <>
      <LayoutAdmin>
        {products.status === "loaded" ? (
          <>
            <Products products={products.items} />
          </>
        ) : (
          <>Loading ....</>
        )}
      </LayoutAdmin>
    </>
  );
};

export default AdminProductsPage;
