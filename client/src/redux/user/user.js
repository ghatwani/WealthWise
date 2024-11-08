import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: { _id: "6713c04babeaa4ee59931d38" },
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    signInFailure: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
