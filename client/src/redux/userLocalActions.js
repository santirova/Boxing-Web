import axios from "axios";
import {
  registerUserFailure,
  registerUserSuccess,
  loginlocal,
  loginLocalFailure,
} from "./userLocalSlice";

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/register", {
      name,
      email,
      password,
    });
    console.log(response);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    dispatch(registerUserFailure(error.message));
  }
};

export const loginLocal = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });
    dispatch(loginlocal(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(loginLocalFailure(error.message));
  }
};
