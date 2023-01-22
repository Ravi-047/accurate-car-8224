import {
  GET_CART_ITEMS,
  ADD_ITEM_TO_CART,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEMS,
} from "./cart.types";

const cartInitalState = {
  data: [],
  price:0
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS: {
      let price=0;
      for(let i=0;i<payload.data.length;i++){
        // console.log(payload.data[i].dprice)
        price+=+payload.data[i].dprice;
      }
      return {
        ...state,
        data:payload,price:price
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
