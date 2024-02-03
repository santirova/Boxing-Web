import axios from "axios";

import { getAllPayments, getPaymentsDetail } from "./paymentsSlice";

export const getPayments = () => async (dispatch) => {
  try {
    const response = await axios.get("/payments");
    const allPayments = response.data;
    console.log("la data => ", allPayments);
    dispatch(getAllPayments(allPayments));
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetailPayments = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/payments/${id}`);
    const detailPayments = response.data;
    dispatch(getPaymentsDetail(detailPayments));
  } catch (error) {
    console.log(error);
  }
};
