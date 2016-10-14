import React from 'react'
import ReactDom from 'react-dom'
import Cart from './components/Cart.js'

import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


this.productList = [
  {name: 'Kindle paperwhite', price: 998},
  {name: 'Mi Note LTE', price: 899},
  {name: '《You don\'t know JS》', price: 60}
];

let store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <Cart />
  </Provider>,
  document.getElementById('container')
);