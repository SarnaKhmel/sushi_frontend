import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { productsReducer } from "./slices/products";
import { ordersReducer } from "./slices/orders";
import positionReducer from "./slices/position";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    products: productsReducer,
    orders: ordersReducer,
    position: positionReducer,
  },
});

export default store;
