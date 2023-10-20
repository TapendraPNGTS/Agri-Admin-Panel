import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FranchiseDistrict: [],
};
//internally using immer lib (can create mutable state)
export const franchiseDistrictSlice = createSlice({
  name: "franchiseDistrictData",
  initialState,
  reducers: {
    updateAllFranchiseDistrict: (state, action) => {
      state.FranchiseDistrict = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFranchiseDistrict } = franchiseDistrictSlice.actions;
// this is for configureStore
export default franchiseDistrictSlice.reducer;
