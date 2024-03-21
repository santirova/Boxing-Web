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
<<<<<<< HEAD
    try {
        console.log(id);
        const response = await axios.get(`/payments/${id}`);
        const detailPayments = response.data;
        console.log("detalle => ", detailPayments);
        dispatch(getPaymentsDetail(detailPayments));
    } catch (error) {
        console.log(error);
    }
};
=======
  try {
    const response = await axios.get(`/payments/${id}`);
    const detailPayments = response.data;
    dispatch(getPaymentsDetail(detailPayments));
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34
