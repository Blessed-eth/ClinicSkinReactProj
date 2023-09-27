import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'; // Make sure the path to App.js is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // Use 'app' as the target element ID
);
