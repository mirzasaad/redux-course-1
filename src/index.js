import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider }  from 'react-redux';
import reducers from './reducers'
import middleware from './/middleware';
import { createStore } from 'redux';

const store = createStore(reducers,[], middleware);
window.store = store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)