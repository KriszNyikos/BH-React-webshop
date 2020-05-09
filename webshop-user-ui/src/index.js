import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
//import { Provider } from 'react-redux'
//import { createStore } from 'react-redux'

const defaultState = { 
  name: 'Teszt termék',
  price: 23123,
  quantity : 2,
  items: [1, 2]
}

/*function reducer(state = defaultState, action) {

  switch (action.type) {
    case 'get':
      return {
        ...state
      }
  
    default:
     return state
  }
}*/

//const store = createStore(reducer) 


ReactDOM.render(
 // <Provider store={store}>
    <App />,
//  </Provider>,
  document.getElementById('root')
);