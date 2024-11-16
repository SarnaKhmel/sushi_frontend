import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Utils/baseUrl";
import { fetchRemoveProduct, fetchRemoveProductImage } from "../../Redux/slices/products";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Box,
} from "@mui/material";

const ProductsTable = ({ products }) => {
  const dispatch = useDispatch();

  const onHandleDeleteProduct = (id, url) => {
    const imageName = url.split("/").pop();
    const confirmed = window.confirm("Ви впевнені, що хочете видалити цей продукт?\n");
    if (confirmed) {
      const result = dispatch(fetchRemoveProduct(id));
      dispatch(fetchRemoveProductImage(imageName));
      console.log(result);
    }
  };

  return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Номер</TableCell>
              <TableCell>Зображення</TableCell>
              <TableCell>Назва</TableCell>
              <TableCell>Вага</TableCell>
              <TableCell>Ціна</TableCell>
              <TableCell>Редагувати</TableCell>
              <TableCell>Видалити</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Товарів даної категорії немає
                  </TableCell>
                </TableRow>
            ) : (
                products.map((product, index) => (
                    <TableRow key={product._id}>
                      <TableCell>{index + 1}.</TableCell>
                      <TableCell>
                        <Box
                            component="img"
                            src={`${baseUrl}${product.imageUrl}`}
                            alt={product.name}
                            sx={{ height: 80, width: 80, objectFit: "cover" }}
                        />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.weight}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <Button variant="outlined" component={Link} to={`/admin/products/${product._id}`}>
                          Редагувати
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => onHandleDeleteProduct(product._id, product.imageUrl)}
                        >
                          Видалити
                        </Button>
                      </TableCell>
                    </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default ProductsTable;
