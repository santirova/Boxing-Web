import { configureStore } from "@reduxjs/toolkit"
import paymentsSlice from "./paymentsSlice"

const store = configureStore({
    reducer:
    {
        paymentsSlice,
    },
});

export default store;