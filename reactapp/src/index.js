import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Content/Js Files/Body/CarItems/Main';
import MyNav from './Content/Js Files/Navigation/MyNav';
import LoginPage from './Authentication/loginpage';
import App from './Authentication/router'

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>

<App/>



</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();