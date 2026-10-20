import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  surname: null,
  age: 0,
  subrscribed: "FREE",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {},
    deleteUser: (state, aciton) => {},
  },
});

export const { updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
