import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUserSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    registerUserFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    loginlocal: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginLocalFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const {
  registerUserSuccess,
  registerUserFailure,
  loginlocal,
  loginLocalFailure,
} = userSlice.actions;

export default userSlice.reducer;
