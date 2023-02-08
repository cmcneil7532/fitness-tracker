import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    //Check my state you will find my initial state
    auth: authReducer,
  },
});
