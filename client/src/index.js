import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouteSwitch from './RouteSwitch';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title="Tweetalyzer"
root.render(
  <div className='index'>
    <RouteSwitch />
  </div>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
