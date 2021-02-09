import { createStore, combineReducers } from 'redux';
// Enable the Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

import form from './form.js';

let reducers = combineReducers({ form });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
