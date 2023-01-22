import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { cartReducer } from "./cart/cart.reducer";

let rootElement = combineReducers({
  cartManager: cartReducer,
});


export const store = legacy_createStore(
  rootElement,
  compose(applyMiddleware(thunk))
);
