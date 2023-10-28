import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  OrderHistory: [],
};
//internally using immer lib (can create mutable state)
export const orderHistorySlice = createSlice({
  name: "orderHistoryData",
  initialState,
  reducers: {
    updateAllOrderHistory: (state, action) => {
      state.OrderHistory = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllOrderHistory } = orderHistorySlice.actions;
// this is for configureStore
export default orderHistorySlice.reducer;
