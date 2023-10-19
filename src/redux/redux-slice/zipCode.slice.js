import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ZipCode: [],
};
//internally using immer lib (can create mutable state)
export const zipCodeSlice = createSlice({
  name: "zipCodeData",
  initialState,
  reducers: {
    updateAllZipCode: (state, action) => {
      state.ZipCode = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllZipCode } = zipCodeSlice.actions;
// this is for configureStore
export default zipCodeSlice.reducer;
