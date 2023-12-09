import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPayments: [],
    paymentsDetail: null,
};

export const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        getAllPayments: (state, action) => {
            state.allPayments = action.payload;
        },
        getPaymentsDetail: (state, action) => {
            state.paymentsDetail = action.payload;
        }
    }
});