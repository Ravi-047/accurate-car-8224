
import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEMS,
  UPDATE_CART_ITEMS,
} from "./cart.types";
const token=localStorage.getItem("token");

export const getcartitems = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "https://harlequin-deer-kilt.cyclic.app/cart",{
        headers:{"Authorization": `${token}`}
      }
    );
    dispatch({ type: GET_CART_ITEMS, payload: response.data });
  } catch (e) {

  }
};

export const addcartitems = (data) => async (dispatch) => {
  // console.log(data);
  try {
    let response = await axios.post(
      "https://harlequin-deer-kilt.cyclic.app/cart/create ",data,{ headers:{"Authorization": `${token}`}}
    );
    dispatch({ type: ADD_ITEM_TO_CART });
  } catch (e) {}
};

export const updatecartitems = () => async (dispatch) => {
  try {
    axios.patch("");
    dispatch({ type: UPDATE_CART_ITEMS });
  } catch (e) {}
};

export const deletecartitems = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://harlequin-deer-kilt.cyclic.app/cart/delete/${id} `,
      { headers: { Authorization: `${token}` } }
    );
    dispatch({ type: REMOVE_CART_ITEMS });
  } catch (e) {}
};
