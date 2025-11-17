import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authPending: (state) => {
      state.status = "loading";
      state.error = null;
    },
    authSuccess: (state, action) => {
      state.status = "succeeded";
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    authFailed: (state, action) => {
      state.status = "failed";
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { authPending, authSuccess, authFailed, authLogout } =
  authSlice.actions;

export default authSlice.reducer;
