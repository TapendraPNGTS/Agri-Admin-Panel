import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Frencise: [],
};
//internally using immer lib (can create mutable state)
export const frenciseSlice = createSlice({
  name: "frenciseData",
  initialState,
  reducers: {
    updateAllFrencise: (state, action) => {
      state.Frencise = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFrencise } = frenciseSlice.actions;
// this is for configureStore
export default frenciseSlice.reducer;
