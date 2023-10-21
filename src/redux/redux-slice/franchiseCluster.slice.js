import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FranchiseCluster: [],
};
//internally using immer lib (can create mutable state)
export const franchiseClusterSlice = createSlice({
  name: "franchiseClusterData",
  initialState,
  reducers: {
    updateAllFranchiseCluster: (state, action) => {
      state.FranchiseCluster = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFranchiseCluster } = franchiseClusterSlice.actions;
// this is for configureStore
export default franchiseClusterSlice.reducer;
