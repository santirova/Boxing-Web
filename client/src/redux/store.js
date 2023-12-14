import { configureStore } from "@reduxjs/toolkit";
import paymentsReducer from "./paymentsSlice";

const store = configureStore({
    reducer: {
        paymentsReducer,
    },
});
console.log("Initial State => ", store.getState());

export default store;