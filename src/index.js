import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';

ReactDOM.render (
  <React.StrictMode>
    <div className="principal">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById ('root')
);
