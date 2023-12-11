import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export default authSlice.reducer;
