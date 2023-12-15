import React from 'react';
import ReactDOM from 'react-dom/client';
// import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';
// import Homepage from './Homepage';
import Header from './Header';
// import Homepage from './Homepage';
// import { Fragment } from 'react';
import ProductPage from './ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
