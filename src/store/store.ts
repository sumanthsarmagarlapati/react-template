import { configureStore } from "@reduxjs/toolkit";
import UserAsyncSlice, { AsyncThunkRedux } from "../pages/AsyncThunkRedux/async-thunk-redux";
import UserSlice from '../pages/redux/redux';


export const store = configureStore({
  reducer: {
    user: UserSlice,
    userAsync: UserAsyncSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


store.dispatch(AsyncThunkRedux())