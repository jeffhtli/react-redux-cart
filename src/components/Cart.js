import React from 'react';
import ItemList from './ItemList.js';
import Coupon from './Coupon.js';
import numeral from 'numeral';

export default class Cart extends React.Component {

  render() {
    let { discount, subtotal, changeDiscount} = this.props;
    return (
      <div>
        <ItemList {...this.props} /><br/>
        <Coupon changeDiscount={changeDiscount} /><br/>
        <div className="total">Subtotal: ￥{numeral(subtotal).format('0.00')}</div><br/>
        <div className="total">Discount: ￥{numeral(subtotal * discount).format('0.00')}</div><br/>
        <div className="total">Total: ￥{numeral(subtotal - subtotal * discount).format('0.00')}</div>
      </div>
    );
  }
}