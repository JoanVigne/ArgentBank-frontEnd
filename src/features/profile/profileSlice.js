import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createdAt: null,
  email: null,
  firstName: null,
  id: null,
  lastName: null,
  updatedAt: null,
  userName: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetProfile: (state) => {
      return { ...initialState };
    },
  },
});

export const { setProfile, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
