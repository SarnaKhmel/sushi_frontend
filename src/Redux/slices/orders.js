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

// export const addOrderItem = createAsyncThunk(
//   "order/addOrderItem",
//   async (product, { getState }) => {
//     const state = getState();

//     const orderList = state.orders.order;
//     // console.log(state.orders.order);
//     console.log(orderList);
//     const updatedItems = [...orderList.items, product];
//     const updatedSum = parseFloat(orderList.sum) + parseFloat(product.price);
//     const updatedWeight =
//       parseFloat(orderList.weight) + parseFloat(product.weight);
//     const orderState = {
//       items: updatedItems,
//       sum: updatedSum,
//       weight: updatedWeight,
//     };
//     const stateJSON = JSON.stringify(orderState);
//     localStorage.setItem("orderState", stateJSON);
//     return { items: updatedItems, sum: updatedSum, weight: updatedWeight };
//   }
// );

export const addOrderItem = createAsyncThunk(
  "order/addOrderItem",
  async (product, { getState }) => {
    const state = getState();

    const orderList = state.orders.order;
    const existingItem = orderList.items.find(
      (item) => item._id === product._id
    );

    if (existingItem) {
      // If the item already exists, update its quantity
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
      // If the item doesn't exist, add it to the order
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

// export const removeOrderItem = createAsyncThunk(
//   "order/removeOrderItem",
//   async (productId, { getState }) => {
//     const state = getState();

//     const orderList = state.orders.order;
//     const existingItem = orderList.items.find((item) => item._id === productId);

//     if (existingItem) {
//       const updatedItems = orderList.items.filter(
//         (item) => item._id !== productId
//       );
//       const updatedSum = orderList.sum - parseFloat(existingItem.price);
//       const updatedWeight = orderList.weight - parseFloat(existingItem.weight);

//       const orderState = {
//         items: updatedItems,
//         sum: updatedSum,
//         weight: updatedWeight,
//       };
//       const stateJSON = JSON.stringify(orderState);
//       localStorage.setItem("orderState", stateJSON);

//       return { items: updatedItems, sum: updatedSum, weight: updatedWeight };
//     } else {
//       return orderList;
//     }
//   }
// );

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
  },
});

export const ordersReducer = ordersSlice.reducer;
