import {
  GET_PRODUCTS,
  GET_PRODUCT,
  // CREATE_PRODUCT,
  GET_PRODUCT_BY_TYPE,
  CLEAR_PRODUCTS,
} from "../actions/types";

const initialStat = {
  loading: true,
  products: [],
  product: {},
  productsByType: [],
};

const product_reucer = (state = initialStat, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    // case CREATE_PRODUCT:
    //   return {
    //     ...state,
    //     loading: false,
    //     products: [...state.products, payload],
    //   };
    case GET_PRODUCT_BY_TYPE:
      return {
        ...state,
        loading: false,
        productsByType: payload,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: [],
        product: {},
        productsByType: [],
      };
    default:
      return state;
  }
};

export default product_reucer;
