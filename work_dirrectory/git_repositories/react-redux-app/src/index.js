import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = {
  index: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, index: state.index + action.payload };
    case 'GET':
      return { ...state, index: state.index - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
