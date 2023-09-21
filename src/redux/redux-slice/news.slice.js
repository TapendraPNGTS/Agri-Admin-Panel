import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  News: [],
};

//internally using immer lib (can create mutable state)
export const newsSlice = createSlice({
  name: "newsData",
  initialState,
  reducers: {
    updateAllNews: (state, action) => {
      state.News = action.payload;
    },
  },
});

// this is for dispatch
export const { updateAllNews } = newsSlice.actions;

// this is for configureStore
export default newsSlice.reducer;
