import React from 'react';
import numeral from 'numeral';

export default class ItemList extends React.Component {

  render() {
    let { product, sub, add, quantity} = this.props;
    return (
      <div style={styleProduct}>
        <div style={styleName}>{product.name}</div>
        <div style={stylePrice}>￥{numeral(product.price).format('0.00')}</div>
        <div style={styleQuantity}>
          <input type="button" value="-" onClick={sub.bind(this)} />
          <span style={styleQuantityNum}>{quantity}</span>
          <input type="button" value="+" onClick={add.bind(this)} />
        </div>
        <div style={stylePrice}>￥{numeral(product.price * quantity).format('0.00')}</div>
      </div>
    );
  }
}

var styleProduct = {
  height: 50,
  width: 800,
  borderBottom: '1px solid grey'
};

var styleName = {
  display: 'table-cell',
  width: 400,
  height: '50px',
  textAlign: 'center',
  verticalAlign: 'middle'
};

var styleQuantity = {
  display: 'table-cell',
  height: '50px',
  width: 200,
  textAlign: 'center',
  verticalAlign: 'middle'
};

var styleQuantityNum = {
  marginLeft: 10,
  marginRight: 10
};

var stylePrice = {
  display: 'table-cell',
  height: '50px',
  width: '100px',
  verticalAlign: 'middle'
};