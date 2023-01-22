import {
  GET_CART_ITEMS,
  ADD_ITEM_TO_CART,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEMS,
} from "./cart.types";

const cartInitalState = {
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS: {
      return {
        ...state,
        data:payload
      };
    }
    case ADD_ITEM_TO_CART: {
      return {
        ...state,
      };
    }
    case UPDATE_CART_ITEMS: {
      return {
        ...state,
      };
    }
    case REMOVE_CART_ITEMS: {
      return {
        ...state,
      };
    }
  }
  return state;
};
