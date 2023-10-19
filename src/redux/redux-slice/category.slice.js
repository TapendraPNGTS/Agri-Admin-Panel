import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Category: [],
};
//internally using immer lib (can create mutable state)
export const categorySlice = createSlice({
  name: "categoryData",
  initialState,
  reducers: {
    updateAllCategory: (state, action) => {
      state.Category = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllCategory } = categorySlice.actions;
// this is for configureStore
export default categorySlice.reducer;
