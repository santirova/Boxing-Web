import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPayments: [],
  paymentsDetail: null,
};
console.log("Estado inicial => ", initialState.allPayments);
console.log("paymemtsDetail => ", initialState.paymentsDetail);
const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    getAllPayments: (state, action) => {
      const allPayments = action.payload;
      state.allPayments = allPayments;
    },
    getPaymentsDetail: (state, action) => {
      state.paymentsDetail = action.payload;
    },
  },
});

export const { getAllPayments, getPaymentsDetail } = paymentsSlice.actions;

export default paymentsSlice.reducer;
