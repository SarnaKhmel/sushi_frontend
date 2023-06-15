import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchOnePosts = createAsyncThunk(
  "products/fetchOnePosts",
  async (id) => {
    const response = await axios.get(`/posts/${id}`);
    const data = response.data;
    return data;
  }
);

// export const fetchRemovePost = createAsyncThunk(
//   "posts/fetchRemovePost",
//   async (id) => axios.delete(`/posts/${id}`)
// );

export const fetchRemovePost = createAsyncThunk(
  "products/fetchRemovePost",
  async (id) => {
    await axios.delete(`/auth/posts/${id}`);
    return id;
  }
);

export const fetchRemovePostImage = createAsyncThunk(
  "products/fetchRemovePostImage",
  async (name) => {
    await axios.delete(`/upload/posts/${name}`);
  }
);

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  post: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
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
    [fetchOnePosts.pending]: (state) => {
      state.post = [];
      state.post.status = "loading";
    },
    [fetchOnePosts.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.post.status = "loaded";
    },
    [fetchOnePosts.rejected]: (state) => {
      state.post = [];
      state.post.status = "error";
    },

    [fetchRemovePost.pending]: (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    },
    [fetchRemovePost.fulfilled]: (state, action) => {
      const id = action.payload;
      state.posts.items = state.posts.items.filter((obj) => obj._id !== id);
    },
  },
});

export const postsReducer = postsSlice.reducer;
