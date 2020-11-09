import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root'));

// Enable concurrent mode: we allow Interruptible Rendering vs Blocking rendering
// We can now interrupt a component rendering to update it

ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
