import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const index = state.findIndex(user => user.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export const messagesUsersReducer = usersSlice.reducer;