import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT } from "./types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
    );
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const createProduct = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/new`,
      data
    );
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
