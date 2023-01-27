import * as types from "./types";
import axios from "axios";

//login user
export const authLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    const res = await axios.post(
      "https://zany-gray-clam-gear.cyclic.app/patients/login",
      data
    );
    console.log(res);
    dispatch({
      type: types.LOGIN_USER_SUCCESS,
      payload: {
        message: res.data.message,
        user: res.data.user,
        token: res.data.token,
        report: res.data.report,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// logout user

export const authLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: types.AUTH_LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

//forgot password
export const forgotPassword = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://zany-gray-clam-gear.cyclic.app/admin/forgot`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
