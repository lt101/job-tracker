import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/auth/authSlice";
import jobReducer from "../src/features/jobs/jobSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
  },
});
