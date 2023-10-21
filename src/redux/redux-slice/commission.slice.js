import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Commission: [],
};
//internally using immer lib (can create mutable state)
export const commissionSlice = createSlice({
  name: "commissionData",
  initialState,
  reducers: {
    updateAllCommission: (state, action) => {
      state.Commission = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllCommission } = commissionSlice.actions;
// this is for configureStore
export default commissionSlice.reducer;
