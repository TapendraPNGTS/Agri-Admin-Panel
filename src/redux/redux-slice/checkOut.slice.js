import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CheckOut: [],
};
//internally using immer lib (can create mutable state)
export const checkOutSlice = createSlice({
  name: "checkOutData",
  initialState,
  reducers: {
    updateCheckOut: (state, action) => {
      state.CheckOut = action.payload;
    },
  },
});
// this is for dispatch
export const { updateCheckOut } = checkOutSlice.actions;
// this is for configureStore
export default checkOutSlice.reducer;
