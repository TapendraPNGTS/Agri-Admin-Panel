import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Voters: [],
};
//internally using immer lib (can create mutable state)
export const memberSlice = createSlice({
  name: "memberList",
  initialState,
  reducers: {
    updateAllMember: (state, action) => {
      state.Voters = action.payload;
    },
  },
});
// this is for dispatch
export const { updateAllMember } = memberSlice.actions;
// this is for configureStore
export default memberSlice.reducer;
