import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { productsReducer } from "./slices/products";
import { ordersReducer } from "./slices/orders";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export default store;
