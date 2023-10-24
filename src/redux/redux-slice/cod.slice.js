import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Cod: [],
};
//internally using immer lib (can create mutable state)
export const codSlice = createSlice({
  name: "codData",
  initialState,
  reducers: {
    updateCod: (state, action) => {
      state.Cod = action.payload;
    },
  },
});
// this is for dispatch
export const { updateCod } = codSlice.actions;
// this is for configureStore
export default codSlice.reducer;
