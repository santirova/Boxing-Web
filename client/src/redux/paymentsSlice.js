import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
    allPayments: [],
    paymentsDetail: [],
=======
  allPayments: [],
  paymentsDetail: null,
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34
};
console.log("Estado inicial => ", initialState.allPayments);
console.log("paymemtsDetail => ", initialState.paymentsDetail);
const paymentsSlice = createSlice({
<<<<<<< HEAD
    name: "payments",
    initialState,
    reducers: {
        getAllPayments: (state, action) => {

            const allPayments = action.payload;
            state.allPayments = allPayments
        },
        getPaymentsDetail: (state, action) => {
            state.paymentsDetail = action.payload;
            console.log(state);
        },
=======
  name: "payments",
  initialState,
  reducers: {
    getAllPayments: (state, action) => {
      const allPayments = action.payload;
      state.allPayments = allPayments;
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34
    },
    getPaymentsDetail: (state, action) => {
      state.paymentsDetail = action.payload;
    },
  },
});

export const { getAllPayments, getPaymentsDetail } = paymentsSlice.actions;

export default paymentsSlice.reducer;
