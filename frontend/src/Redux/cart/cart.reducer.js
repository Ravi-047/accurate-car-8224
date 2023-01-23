import {
  GET_CART_ITEMS,
  ADD_ITEM_TO_CART,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEMS,
  UPDATE_QUANTITY,
} from "./cart.types";

const cartInitalState = {
  data: [],
  price:0,
  qty:{}
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS: {
      let price=0;
      for(let i=0;i<payload.length;i++){
        // console.log(payload.data[i].dprice)
        price+=+payload[i].dprice;
      }
      return {
        ...state,
        data:payload,price:price
      };
    }
    case ADD_ITEM_TO_CART: {
      return {
        ...state,data:[...state.data,payload]
      };
    }
    case UPDATE_CART_ITEMS: {
      return {
        ...state,
      };
    }
    case REMOVE_CART_ITEMS: {
      return {
        ...state
      };
    }
    case UPDATE_QUANTITY: {
      
      return {
        ...state,qty:{...state.qty,[payload.id]:payload.qty},price:state.price+payload.dprice*(payload.qty-1)
      };
    }
  }
  return state;
};
