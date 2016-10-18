import React from 'react';
import Item from './Item'

export default class ItemList extends React.Component {
  render() {
    let { productList, increase, decrease } = this.props;
    let node = productList.map((product) => {
      return (<Item product={product} key={product.id} increase={increase} decrease={decrease} />);
    });
    return (<div>{node}</div>);
  }
}