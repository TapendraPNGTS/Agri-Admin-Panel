import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cluster: [],
};
//internally using immer lib (can create mutable state)
export const clusterSlice = createSlice({
  name: "clusterData",
  initialState,
  reducers: {
    updateAllCluster: (state, action) => {
      state.Cluster = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllCluster } = clusterSlice.actions;
// this is for configureStore
export default clusterSlice.reducer;
