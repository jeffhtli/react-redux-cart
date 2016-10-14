import React from 'react';
import Item from './Item.js'

export default class ItemList extends React.Component {
  render() {
    let { productList, changeTotal} = this.props;
    let node = productList.map((product, index) => {
      return (<Item product={product} changeTotal = {changeTotal} key={index} />);
    });
    return (<div>{node}</div>);
  }
}