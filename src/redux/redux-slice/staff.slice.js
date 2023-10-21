import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Staff: [],
};
//internally using immer lib (can create mutable state)
export const staffSlice = createSlice({
  name: "staffData",
  initialState,
  reducers: {
    updateAllStaff: (state, action) => {
      state.Staff = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllStaff } = staffSlice.actions;
// this is for configureStore
export default staffSlice.reducer;
