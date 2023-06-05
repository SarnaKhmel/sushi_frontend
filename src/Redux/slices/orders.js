import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

export const fetchPosts = createAsyncThunk("orders/fetchPosts", async () => {
  const { data } = await axios.get("/orders");
  return data;
});

export const fetchRemovePost = createAsyncThunk(
  "orders/fetchRemovePost",
  async (id) => axios.delete(`/orders/${id}`)
);

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },

    [fetchRemovePost.pending]: (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
