import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../Redux/slices/products";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import Product from "../Product/Product";
import { Box, CircularProgress, Typography } from "@mui/material";

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
        <Box
            sx={{
              marginTop: { xs: "450px", md: "100px" },
              padding: { xs: "10px", md: "0" },
              textAlign: "center",
            }}
        >
          {status === "loading" ? (
              <CircularProgress />
          ) : status === "loaded" ? (
              <Product product={product} update={update} setUpdate={setUpdate} />
          ) : (
              <Typography variant="h6">Помилка завантаження</Typography>
          )}
        </Box>
      </LayoutAdmin>
  );
};

export default AdminProductEditPage;
