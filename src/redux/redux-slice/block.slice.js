import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Block: [],
};
//internally using immer lib (can create mutable state)
export const blockSlice = createSlice({
  name: "blockData",
  initialState,
  reducers: {
    updateAllBlock: (state, action) => {
      state.Block = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllBlock } = blockSlice.actions;
// this is for configureStore
export default blockSlice.reducer;
