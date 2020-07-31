// packages
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Amplify } from 'aws-amplify';
// misc imports
import awsconfig from './aws-exports';
import rootReducer from './reducers/rootReducer.js';
import { register } from './serviceWorker';
// pages
import App from './App.js';

const store = createStore(rootReducer);

Amplify.configure(awsconfig);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

register();
