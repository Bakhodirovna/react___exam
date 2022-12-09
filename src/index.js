import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer from './features/prductsSlice';
import cartReducer, { getTotals } from './features/cartSlice';

const store = configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer,
  },
})
 store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);


