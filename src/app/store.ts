import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsApi } from "../features/news/news-api-slice";
import counterReducer from "../features/counter/counter-slice";
import { messagesReducer } from "../features/messages/messages-slice";
import { messagesUsersReducer } from "../features/messages/messaging-users-slice";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["messagingusers", "messages"],
};

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  counter: counterReducer,
  messagingusers: messagesUsersReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(
    newsApi.middleware,
    createStateSyncMiddleware({
      blacklist: excludedActions,
    })
  );
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

setupListeners(store.dispatch);
initMessageListener(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
