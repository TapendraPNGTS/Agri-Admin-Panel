import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Family: [],
};
//internally using immer lib (can create mutable state)
export const familySlice = createSlice({
  name: "familyList",
  initialState,
  reducers: {
    updateAllFamily: (state, action) => {
      state.Family = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFamily } = familySlice.actions;
// this is for configureStore
export default familySlice.reducer;
