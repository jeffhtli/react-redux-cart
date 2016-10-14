import React from 'react';
import { connect } from 'react-redux'

import ItemList from './ItemList.js';
import Coupon from './Coupon.js';
import numeral from 'numeral';

class Cart extends React.Component {

  render() {
    let {discount, subtotal, changeTotal, changeDiscount} = this.props;
    return (
      <div>
        <ItemList productList={this.productList} changeTotal={changeTotal.bind(this)} /><br/>
        <Coupon changeDiscount={changeDiscount.bind(this)} /><br/>
        <div style={styleTotal}>Subtotal: ￥{numeral(subtotal).format('0.00')}</div><br/>
        <div style={styleTotal}>Discount: ￥{numeral(subtotal * discount).format('0.00')}</div><br/>
        <div style={styleTotal}>Total: ￥{numeral(subtotal - subtotal * discount).format('0.00')}</div>
      </div>
    );
  }
}

var styleTotal = {
  width: 800,
  display: 'table-cell',
  textAlign: 'right',
  verticalAlign: 'middle'
};

export default connect()(Cart)