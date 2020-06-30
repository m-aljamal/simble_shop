import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth_reducer from "./reducers/auth_reducer";
import product_reucer from "./reducers/products_reducer";
import thunk from "redux-thunk";
const middleware = [thunk];
const reducer = combineReducers({
  auth_reducer,
  product_reucer,
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
