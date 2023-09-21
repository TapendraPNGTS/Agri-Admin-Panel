import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Product: [],
};
//internally using immer lib (can create mutable state)
export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    updateAllProduct: (state, action) => {
      state.Product = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllProduct } = productSlice.actions;
// this is for configureStore
export default productSlice.reducer;
