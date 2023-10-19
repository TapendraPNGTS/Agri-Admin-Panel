import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  SubCategory: [],
};
//internally using immer lib (can create mutable state)
export const subCategorySlice = createSlice({
  name: "subCategoryData",
  initialState,
  reducers: {
    updateAllSubCategory: (state, action) => {
      state.SubCategory = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllSubCategory } = subCategorySlice.actions;
// this is for configureStore
export default subCategorySlice.reducer;
