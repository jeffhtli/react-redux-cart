import React from 'react';
import ItemList from './ItemList.js';
import Coupon from './Coupon.js';
import numeral from 'numeral';

export default class Cart extends React.Component {

  render() {
    let { discount, changeDiscount} = this.props;
    let subtotal = Cart.calcSubtotal(this.props.productList);
    return (
      <div>
        <ItemList {...this.props} /><br/>
        <Coupon changeDiscount={changeDiscount} /><br/>
        <div style={styleTotal}>Subtotal: ￥{numeral(subtotal).format('0.00')}</div><br/>
        <div style={styleTotal}>Discount: ￥{numeral(subtotal * discount).format('0.00')}</div><br/>
        <div style={styleTotal}>Total: ￥{numeral(subtotal - subtotal * discount).format('0.00')}</div>
      </div>
    );
  }

  static calcSubtotal(productList) {
    return productList.reduce((accumulate, current) => (accumulate += current.price), 0);
  }
}

var styleTotal = {
  width: 800,
  display: 'table-cell',
  textAlign: 'right',
  verticalAlign: 'middle'
};