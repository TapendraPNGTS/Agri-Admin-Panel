import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Post: [],
};

//internally using immer lib (can create mutable state)
export const postSlice = createSlice({
  name: "newsData",
  initialState,
  reducers: {
    updateAllPost: (state, action) => {
      state.Post = action.payload;
    },
  },
});

// this is for dispatch
export const { updateAllPost } = postSlice.actions;

// this is for configureStore
export default postSlice.reducer;
