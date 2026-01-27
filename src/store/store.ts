import { configureStore } from "@reduxjs/toolkit";
import User from '../pages/redux/redux';


export const store = configureStore({
  reducer: {
    user: User
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
