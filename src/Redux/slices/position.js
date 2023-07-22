// slices/position.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollX: 0,
  scrollY: 0,
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    saveScrollPosition: (state, action) => {
      state.scrollX = action.payload.scrollX;
      state.scrollY = action.payload.scrollY;
    },
  },
});

export const { saveScrollPosition } = positionSlice.actions;

export default positionSlice.reducer;
