import productList from '../data'
import * as types from '../container/ActionTypes'

const initialState = {
  productList: productList.map(product => {
    product.quantity = 1;
    return product;
  }),
  subtotal: productList.reduce((accumulate, current) => (accumulate += current.price), 0),
  discount: 0
};

export default (state = initialState, action) => {
  let productList, subtotal;
  switch (action.type) {
    case types.INCREASE :
      productList = state.productList.map(product => {
        if (product.id === action.id) {
          product.quantity ++;
          subtotal = state.subtotal + product.price;
        }
        return product
      });
      return { ...state, productList, subtotal};
    case types.DECREASE :
      productList = state.productList.map(product => {
        if (product.id === action.id) {
          product.quantity --;
          subtotal = state.subtotal - product.price;
        }
        return product
      });
      return { ...state, productList, subtotal};
    case types.CHANGE_DISCOUNT :
      return {  ...state, discount: action.id == 1 ? 0.05 : 0};
    default:
      return state
  }
}