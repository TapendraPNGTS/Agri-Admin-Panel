import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  State: [],
};
//internally using immer lib (can create mutable state)
export const stateSlice = createSlice({
  name: "stateData",
  initialState,
  reducers: {
    updateAllState: (state, action) => {
      state.State = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllState } = stateSlice.actions;
// this is for configureStore
export default stateSlice.reducer;
