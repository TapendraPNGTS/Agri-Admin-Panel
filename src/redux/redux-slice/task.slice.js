import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Task: [],
};

//internally using immer lib (can create mutable state)
export const taskSlice = createSlice({
  name: "taskData",
  initialState,
  reducers: {
    updateAllTask: (state, action) => {
      state.Task = action.payload;
    },
  },
});

// this is for dispatch
export const { updateAllTask } = taskSlice.actions;

// this is for configureStore
export default taskSlice.reducer;
