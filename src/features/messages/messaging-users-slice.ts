import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const messagesUsersReducer = usersSlice.reducer;