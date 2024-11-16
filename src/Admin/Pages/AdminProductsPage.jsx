import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/slices/products";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import Products from "../Products/Products";
import { Box, CircularProgress, Typography } from "@mui/material";

const AdminProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <LayoutAdmin>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    padding: "20px",
                }}
            >
                {products.status === "loading" ? (
                    <CircularProgress />
                ) : products.status === "loaded" ? (
                    <Products products={products.items} />
                ) : (
                    <Typography variant="h6">Помилка завантаження продуктів</Typography>
                )}
            </Box>
        </LayoutAdmin>
    );
};

export default AdminProductsPage;
