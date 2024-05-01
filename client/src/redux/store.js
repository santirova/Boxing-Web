import { configureStore } from "@reduxjs/toolkit";
import paymentsReducer from "./paymentsSlice";
import userReducer from "./userLocalSlice";

const store = configureStore({
  reducer: {
    paymentsReducer,
    userReducer,
  },
});

export default store;
