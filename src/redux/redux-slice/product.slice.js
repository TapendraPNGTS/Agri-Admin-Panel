import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Product: [],
};
//internally using immer lib (can create mutable state)
export const ProductSlice = createSlice({
  name: "ProductData",
  initialState,
  reducers: {
    updateAllProduct: (state, action) => {
      state.Product = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllProduct } = ProductSlice.actions;
// this is for configureStore
export default ProductSlice.reducer;
