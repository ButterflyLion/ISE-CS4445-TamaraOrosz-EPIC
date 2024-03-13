import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.push(action.payload);
    },
    removeMessages(state, action) {
      return state.filter((message) => message.id !== action.payload);
    },
    removeAllMessages() {
      return [];
    },
  },
});

export const { addMessage, removeMessages, removeAllMessages } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
