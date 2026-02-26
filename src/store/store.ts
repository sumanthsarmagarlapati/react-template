import { configureStore } from "@reduxjs/toolkit";
import UserAsyncSlice, { AsyncThunkRedux } from "../pages/AsyncThunkRedux/async-thunk-redux";
import UserSlice from '../pages/redux/redux';

// Dependecies
// "@reduxjs/toolkit": "^2.9.0",  // further redux usage

export const store = configureStore({
  reducer: {
    user: UserSlice,
    userAsync: UserAsyncSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


store.dispatch(AsyncThunkRedux())