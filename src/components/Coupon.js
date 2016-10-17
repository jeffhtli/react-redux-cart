import React from 'react';

export default class Coupon extends React.Component {

  render() {
    let { changeDiscount } = this.props;
    return (<div>
      <span>Discount: </span>
      <select onChange={e => changeDiscount(e.target.value) }>
        <option value="0">None</option>
        <option value="1">5% Discount</option>
      </select>
    </div>);
  }
}