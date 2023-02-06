import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthentication(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      return {
        ...state,
        isAuthenticated: action.payload.loggedIn,
        user: action.payload.data.data,
        token: action.payload.data.token,
      };
    },
    logout(state, action) {
      return {
        isAuthenticated: false,
      };
    },
  },
});

export const { userAuthentication, logout } = authSlice.actions;

export default authSlice.reducer;
