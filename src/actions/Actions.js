import * as types from '../container/ActionTypes'

export const changeDiscount = (id) => ({type: types.CHANGE_DISCOUNT, id});
export const increase = (id) => ({type: types.INCREASE, id});
export const decrease = (id) => ({type: types.DECREASE, id});
