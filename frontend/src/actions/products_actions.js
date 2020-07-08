import {
  GET_PRODUCTS,
  GET_PRODUCT,
  CREATE_PRODUCT,
  GET_PRODUCT_BY_TYPE,
  // CLEAR_PRODUCTS,
} from "./types";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
  // dispatch({ type: CLEAR_PRODUCTS });

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
  // dispatch({ type: CLEAR_PRODUCTS });
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
export const getProductsByType = (type) => async (dispatch) => {
  // dispatch({ type: CLEAR_PRODUCTS });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/collections/${type}`
    );
    dispatch({
      type: GET_PRODUCT_BY_TYPE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const createProduct = (data) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("colors", data.colors);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("discription", data.discription);
    formData.append("quantity", data.quantity);
    formData.append("sizes", data.sizes);
    formData.append("type", data.type);
    formData.append("image", data.image);

    for (const file of data.images) {
      formData.append("images", file);
    }

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/new`,
      formData
    );

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    if (error) {
      console.error(error.response.data);
    }
  }
};
