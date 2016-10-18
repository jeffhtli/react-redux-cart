import React from 'react';
import numeral from 'numeral';

export default class ItemList extends React.Component {

  render() {
    let { product, decrease, increase} = this.props;
    return (
      <div className="product">
        <div className="name">{product.name}</div>
        <div className="price">￥{numeral(product.price).format('0.00')}</div>
        <div className="quantity">
          <input type="button" value="-" onClick={() => {
          if (product.quantity > 1) {
          decrease(product.id)
          }
          }} />
          <span className="quantity-num">{product.quantity}</span>
          <input type="button" value="+" onClick={() => increase(product.id)} />
        </div>
        <div className="price">￥{numeral(product.price * product.quantity).format('0.00')}</div>
      </div>
    );
  }
}