import React from 'react';
import ItemList from './ItemList';
import Coupon from './Coupon';
import numeral from 'numeral';

export default class Cart extends React.Component {

  render() {
    let { discount, subtotal, changeDiscount} = this.props;
    return (
      <div>
        <ItemList {...this.props} /><br/>
        <Coupon changeDiscount={changeDiscount} /><br/>
        <div className="total-container">
          <div>Subtotal: ￥{numeral(subtotal).format('0.00')}</div><br/>
          <div>Discount: ￥{numeral(subtotal * discount).format('0.00')}</div><br/>
          <div>Total: ￥{numeral(subtotal - subtotal * discount).format('0.00')}</div>
        </div>
      </div>
    );
  }
}