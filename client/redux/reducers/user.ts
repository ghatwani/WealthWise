import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface UserState {
  user: string | null;  // Replace `string` with the correct type for `user`, if needed
}

// Set the initial state with the correct type
const initialState: UserState = {
  user: null,
};

// Create the slice with TypeScript
const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
