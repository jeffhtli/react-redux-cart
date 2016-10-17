import React from 'react'
import ReactDom from 'react-dom'
import CartApp from './container/CartApp'

import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//const store = createStore(reducers);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(
  <Provider store={store}>
    <CartApp />
  </Provider>,
  document.getElementById('root')
);