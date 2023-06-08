import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("/products");
    return data;
  }
);

// export const fetchOneProduct = createAsyncThunk(
//   "products/fetchOneProduct",
//   async (id) => {
//     const data = axios.get(`/products/${id}`);
//     return data;
//   }
// );
export const fetchOneProduct = createAsyncThunk(
  "products/fetchOneProduct",
  async (id) => {
    const response = await axios.get(`/products/${id}`);
    const data = response.data;
    // console.log("data", data);
    return data;
  }
);
export const fetchRemoveProduct = createAsyncThunk(
  "products/fetchRemoveProduct",
  async (id) => axios.delete(`/products/${id}`)
);

const initialState = {
  products: {
    items: [],
    status: "loading",
  },
  product: {
    items: [],
    status: "loading",
  },
};

// export const uploadProductImG = createAsyncThunk(
//   "products/uploadProductImG",
//   async (params) => {
//     const { data } = await axios
//       .post("/upload/products", params)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return data;
//   }
// );

// export const createProduct = createAsyncThunk(
//   "products/createProduct",
//   async (params) =>
//     axios
//       .post("/auth/products", params)
//       .then((response) => {
//         console.log(response);
//         return response;
//       })
//       .catch((error) => {
//         console.log(error);
//       })
// );

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.items = [];
      state.products.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = "loaded";
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = "error";
    },
    [fetchOneProduct.pending]: (state) => {
      state.product = [];
      state.product.status = "loading";
    },
    [fetchOneProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.product.status = "loaded";
    },
    [fetchOneProduct.rejected]: (state) => {
      state.product = [];
      state.product.status = "error";
    },
    // [uploadProductImG.pending]: (state) => {},
    // [uploadProductImG.fulfilled]: (state, action) => {},
    // [uploadProductImG.rejected]: (state) => {},

    [fetchRemoveProduct.pending]: (state, action) => {
      state.products.items = state.products.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const productsReducer = productsSlice.reducer;
