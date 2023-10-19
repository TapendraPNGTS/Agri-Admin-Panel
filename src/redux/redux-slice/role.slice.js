import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Role: [],
};
//internally using immer lib (can create mutable state)
export const roleSlice = createSlice({
  name: "roleData",
  initialState,
  reducers: {
    updateAllRole: (state, action) => {
      state.Role = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllRole } = roleSlice.actions;
// this is for configureStore
export default roleSlice.reducer;
