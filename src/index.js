import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './index.css';

window.onload = () => {
  ReactDOM.render(
  	<Provider store={store}>
	<App />
	</Provider>,
	 document.getElementById('root')
  );
};
