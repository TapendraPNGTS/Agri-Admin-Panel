import { createSlice } from "@reduxjs/toolkit";
import {
  getTokenLocal,
  getUserLocal,
  setTokenLocal,
  setUserLocal,
  getPermissionLocal,
  setPermissionLocal,
} from "../../utils/localStorage.util";

const initialState = {
  v_user_info: getUserLocal(),
  x_auth_token: getTokenLocal(),
  permission: getPermissionLocal(),
  User: [],
};

//internally using immer lib (can create mutable state)
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      setUserLocal(action.payload);
      state.v_user_info = action.payload;
    },
    updateToken: (state, action) => {
      setTokenLocal(action.payload);
      state.x_auth_token = action.payload;
    },
    updatePermission: (state, action) => {
      setPermissionLocal(action.payload);
      state.permission = action.payload;
    },
    updateAllUser: (state, action) => {
      state.User = action.payload;
    },
  },
});

// this is for dispatch
export const { updateUser, updateToken, updateAllUser, updatePermission } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
