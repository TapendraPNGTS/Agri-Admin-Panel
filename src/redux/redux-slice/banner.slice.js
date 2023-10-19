import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Banner: [],
};
//internally using immer lib (can create mutable state)
export const bannerSlice = createSlice({
  name: "bannerData",
  initialState,
  reducers: {
    updateAllBanner: (state, action) => {
      state.Banner = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllBanner } = bannerSlice.actions;
// this is for configureStore
export default bannerSlice.reducer;
