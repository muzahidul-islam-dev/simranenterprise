import { configureStore } from "@reduxjs/toolkit";
import customerAuthReducer from "./slices/customerAuthSlice";

export const store = configureStore({
  reducer: {
    customerAuth: customerAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
