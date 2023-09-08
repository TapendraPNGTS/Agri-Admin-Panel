import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Maps: [],
};

//internally using immer lib (can create mutable state)
export const mapSlice = createSlice({
  name: "mapData",
  initialState,
  reducers: {
    updateMap: (state, action) => {
      state.Maps = action.payload;
    },
  },
});

// this is for dispatch
export const { updateMap } = mapSlice.actions;

// this is for configureStore
export default mapSlice.reducer;
