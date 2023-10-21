import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FranchiseVillage: [],
};
//internally using immer lib (can create mutable state)
export const franchiseVillageSlice = createSlice({
  name: "franchiseVillageData",
  initialState,
  reducers: {
    updateAllFranchiseVillage: (state, action) => {
      state.FranchiseVillage = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllFranchiseVillage } = franchiseVillageSlice.actions;
// this is for configureStore
export default franchiseVillageSlice.reducer;
