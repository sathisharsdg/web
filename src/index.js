import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/remixicon.css";
import "./assets/css/vendor/eduvibe-font.css";
import "./assets/css/vendor/magnifypopup.css";
import "./assets/css/vendor/slick.css";
import "./assets/css/vendor/odometer.css";
import "./assets/css/vendor/lightbox.css";
import "./assets/css/vendor/animation.css";
import "./assets/css/vendor/jqueru-ui-min.css";
import "./assets/css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
