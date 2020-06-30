import axios from "axios";
import { addAlert } from "../components/utils/Alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  
} from "./types";

import setAuthToken from "../components/utils/setAuthToken";

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/users/getUser");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response.data);

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = (token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/users/auth/activate", { token }, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // get the data back
    });
    dispatch(loadUser());
  } catch (error) {
    addAlert("Error", error.response.data.error, "danger");
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/users/signin", data, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // get the data back
    });
    dispatch(loadUser());
  } catch (error) {
    addAlert("Error", error.response.data.error, "danger");
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
