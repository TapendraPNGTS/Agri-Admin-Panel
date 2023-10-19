import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  District: [],
};
//internally using immer lib (can create mutable state)
export const districtSlice = createSlice({
  name: "districtData",
  initialState,
  reducers: {
    updateAllDistrict: (state, action) => {
      state.District = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllDistrict } = districtSlice.actions;
// this is for configureStore
export default districtSlice.reducer;
