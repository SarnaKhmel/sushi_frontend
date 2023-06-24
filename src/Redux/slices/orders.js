import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

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

export const fetchRemoveOrder = createAsyncThunk(
  "products/fetchRemoveOrder",
  async (id) => {
    await axios.delete(`/order/${id}`);
    return id;
  }
);

export const createOrder = createAsyncThunk(
  "auth/createOrder",
  async (order) => {
    await axios.post("/order", order);

    return {
      newOrderList: {
        items: [],
        sum: 0,
        weight: 0,
        status: "loading",
      },
    };
  }
);

export const addOrderItem = createAsyncThunk(
  "order/addOrderItem",
  async (product, { getState }) => {
    const state = getState();

    const orderList = state.orders.order;
    const existingItem = orderList.items.find(
      (item) => item._id === product._id
    );

    if (existingItem) {
      const updatedItems = orderList.items.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const updatedSum = orderList.sum + parseFloat(product.price);
      const updatedWeight = orderList.weight + parseFloat(product.weight);

      const orderState = {
        items: updatedItems,
        sum: updatedSum,
        weight: updatedWeight,
      };
      const stateJSON = JSON.stringify(orderState);
      localStorage.setItem("orderState", stateJSON);

      return { items: updatedItems, sum: updatedSum, weight: updatedWeight };
    } else {
      const updatedItems = [...orderList.items, { ...product, quantity: 1 }];
      const updatedSum = orderList.sum + parseFloat(product.price);
      const updatedWeight = orderList.weight + parseFloat(product.weight);

      const orderState = {
        items: updatedItems,
        sum: updatedSum,
        weight: updatedWeight,
      };
      const stateJSON = JSON.stringify(orderState);
      localStorage.setItem("orderState", stateJSON);

      return { items: updatedItems, sum: updatedSum, weight: updatedWeight };
    }
  }
);

export const finOrder = createAsyncThunk(
  "products/finOrder",
  async ({ id, updatedItem }) => {
    const response = await axios.patch(`/order/${id}`, updatedItem);
    return response.data;
  }
);

export const fetchOrders = createAsyncThunk(
  "products/fetchOrders",
  async () => {
    const { data } = await axios.get("/order");
    return data;
  }
);

export const removeOrderItem = createAsyncThunk(
  "order/removeOrderItem",
  async (productId, { getState }) => {
    const state = getState();

    const orderList = state.orders.order;
    const existingItem = orderList.items.find((item) => item._id === productId);
    if (existingItem) {
      const updatedItems = orderList.items.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      const filteredItems = updatedItems.filter((item) => item.quantity > 0);

      const updatedSum = orderList.sum - parseFloat(existingItem.price);
      const updatedWeight = orderList.weight - parseFloat(existingItem.weight);

      const orderState = {
        items: filteredItems,
        sum: updatedSum,
        weight: updatedWeight,
      };
      const stateJSON = JSON.stringify(orderState);
      localStorage.setItem("orderState", stateJSON);

      return { items: filteredItems, sum: updatedSum, weight: updatedWeight };
    } else {
      return orderList;
    }
  }
);

export const setStateFromJSON = createAsyncThunk(
  "order/setStateFromJSON",
  async (orderState) => {
    const newOrderList = orderState;
    return { newOrderList };
  }
);

export const clearOrderState = createAsyncThunk(
  "order/clearOrderState",
  async () => {
    localStorage.removeItem("orderState");
    return {
      newOrderList: {
        items: [],
        sum: 0,
        weight: 0,
        status: "loading",
      },
    };
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrderItem,
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.orders.items = [];
      state.orders.status = "loading";
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.orders.items = action.payload;
      state.orders.status = "loaded";
    },
    [fetchOrders.rejected]: (state) => {
      state.orders.items = [];
      state.orders.status = "error";
    },
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
    [removeOrderItem.pending]: (state) => {
      state.order.status = "loading";
    },
    [removeOrderItem.fulfilled]: (state, action) => {
      state.order.status = "loaded";
      state.order.items = action.payload.items;
      state.order.sum = action.payload.sum;
      state.order.weight = action.payload.weight;
    },
    [removeOrderItem.rejected]: (state) => {
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
    [clearOrderState.pending]: (state) => {
      state.order.status = "loading";
    },
    [clearOrderState.fulfilled]: (state, action) => {
      state.order.status = "loaded";
      state.order = action.payload.newOrderList;
    },
    [clearOrderState.rejected]: (state) => {
      state.order.status = "error";
    },
    [createOrder.pending]: (state) => {
      state.status = "loading";
    },
    [createOrder.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.order = action.payload.newOrderList;
    },
    [createOrder.rejected]: (state) => {
      state.status = "error";
    },
    [finOrder.pending]: (state) => {
      state.order = [];
      state.order.status = "loading";
    },
    [finOrder.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.order.status = "loaded";
    },
    [finOrder.rejected]: (state) => {
      state.order = [];
      state.order.status = "error";
    },
    [fetchRemoveOrder.pending]: (state, action) => {
      state.orders.items = state.orders.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
    [fetchRemoveOrder.fulfilled]: (state, action) => {
      const id = action.payload;
      state.orders.items = state.orders.items.filter((obj) => obj._id !== id);
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
