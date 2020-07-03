import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT } from "./types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products`
    );
    console.log("get data from server", res.data);

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
console.log('data before save',data);

  try {
    const formData = new FormData();
    formData.append("colors", data.colors);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("sizes", data.sizes);
    formData.append("type", data.type);
    formData.append("images", data.images[0].response.images);

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/new`,
      formData
    );
    console.log("data after  save", res.data);

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.error('error',error);
  }
};
