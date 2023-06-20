import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

// export const fetchOrders = createAsyncThunk("orders/fetchPosts", async () => {
//   const { data } = await axios.get("/orders");
//   return data;
// });

// export const fetchRemovePost = createAsyncThunk(
//   "orders/fetchRemovePost",
//   async (id) => axios.delete(`/orders/${id}`)
// );

const initialState = {
  orders: {
    items: [],
    status: "loading",
  },
  order: {
    items: [],
    sum: 0,
    weight: 0,
    status: "loading",
  },
};

export const addOrderItem = createAsyncThunk(
  "order/addOrderItem",
  async (product, { getState }) => {
    const state = getState();

    const orderList = state.orders.order;
    console.log(state.orders.order);
    const updatedItems = [...orderList.items, product];
    const updatedSum = parseFloat(orderList.sum) + parseFloat(product.price);
    const updatedWeight =
      parseFloat(orderList.weight) + parseFloat(product.weight);
    const orderState = {
      items: updatedItems,
      sum: updatedSum,
      weight: updatedWeight,
    };
    const stateJSON = JSON.stringify(orderState);
    localStorage.setItem("orderState", stateJSON);
    return { items: updatedItems, sum: updatedSum, weight: updatedWeight };
  }
);

export const setStateFromJSON = createAsyncThunk(
  "order/setStateFromJSON",
  async (orderState) => {
    const newOrderList = orderState; // замість [...orderList, orderState]
    return { newOrderList };
  }
);
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrderItem,
  },
  extraReducers: {
    [addOrderItem.pending]: (state) => {
      state.order.status = "loading";
    },
    [addOrderItem.fulfilled]: (state, action) => {
      state.order.status = "loaded";
      state.order.items = action.payload.items;
      state.order.sum = action.payload.sum;
      state.order.weight = action.payload.weight;
    },
    [addOrderItem.rejected]: (state) => {
      state.order.status = "error";
    },
    [setStateFromJSON.pending]: (state) => {
      state.order.status = "loading";
    },
    [setStateFromJSON.fulfilled]: (state, action) => {
      state.order.status = "loaded";
      state.order = action.payload.newOrderList;
    },
    [setStateFromJSON.rejected]: (state) => {
      state.order.status = "error";
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
