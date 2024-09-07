import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.ts";

export const store = configureStore({
  devTools: true,
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
