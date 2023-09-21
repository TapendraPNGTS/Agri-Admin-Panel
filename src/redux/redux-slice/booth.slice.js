import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Booth: [],
};
//internally using immer lib (can create mutable state)
export const boothSlice = createSlice({
  name: "boothData",
  initialState,
  reducers: {
    updateAllBooth: (state, action) => {
      state.Booth = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllBooth } = boothSlice.actions;
// this is for configureStore
export default boothSlice.reducer;
