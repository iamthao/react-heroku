import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './src/App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
module.hot.accept();

ReactDOM.render("test", document.getElementById('root'));



