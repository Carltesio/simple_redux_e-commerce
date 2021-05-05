import { ActionTypes } from "../contants/action-types";
import initialState from "../store/initialState";

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload};
      default:
        return state;
  }
};