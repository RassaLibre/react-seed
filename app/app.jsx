import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ItemsReducer from './reducers/ItemsReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
	<Provider store={ItemsReducer}>
		<App />
	</Provider>,
  document.getElementById('app')
);
