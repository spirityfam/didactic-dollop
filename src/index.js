import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Suppress ResizeObserver loop error in development (works for most browsers)
const realConsoleError = window.console.error;
window.console.error = function (msg, ...args) {
  if (
    typeof msg === 'string' &&
    msg.includes('ResizeObserver loop completed with undelivered notifications')
  ) {
    return;
  }
  realConsoleError.apply(window.console, [msg, ...args]);
};

AOS.init({ once: true, duration: 800 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
