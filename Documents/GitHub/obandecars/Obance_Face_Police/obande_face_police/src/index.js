import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import Logo from './Logo';
import ImageLink from './ImageLinks'
import Rank from './rank'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Logo/>
    <Rank/>
    <ImageLink/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
