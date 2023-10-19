import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FranchiseState: [],
};
//internally using immer lib (can create mutable state)
export const franchiseStateSlice = createSlice({
  name: "franchiseStateData",
  initialState,
  reducers: {
    updateAllFranchiseState: (state, action) => {
      state.FranchiseState = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFranchiseState } = franchiseStateSlice.actions;
// this is for configureStore
export default franchiseStateSlice.reducer;
