import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Holiday: [],
};
//internally using immer lib (can create mutable state)
export const holidaySlice = createSlice({
  name: "holidayData",
  initialState,
  reducers: {
    updateAllHoliday: (state, action) => {
      state.Holiday = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllHoliday } = holidaySlice.actions;
// this is for configureStore
export default holidaySlice.reducer;
