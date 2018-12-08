import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
   <App />
   </BrowserRouter>
  </Provider>,
   document.getElementById('root'));
// registerServiceWorker();
