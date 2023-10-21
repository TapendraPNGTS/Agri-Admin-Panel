import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FranchiseBlock: [],
};
//internally using immer lib (can create mutable state)
export const franchiseBlockSlice = createSlice({
  name: "franchiseBlockData",
  initialState,
  reducers: {
    updateAllFranchiseBlock: (state, action) => {
      state.FranchiseBlock = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFranchiseBlock } = franchiseBlockSlice.actions;
// this is for configureStore
export default franchiseBlockSlice.reducer;
