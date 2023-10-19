import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Attendence: [],
};
//internally using immer lib (can create mutable state)
export const attendenceSlice = createSlice({
  name: "attendenceData",
  initialState,
  reducers: {
    updateAllAttendence: (state, action) => {
      state.Attendence = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllAttendence } = attendenceSlice.actions;
// this is for configureStore
export default attendenceSlice.reducer;
