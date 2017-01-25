import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/store';
import { Provider } from 'react-redux';

console.log(store);
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.querySelector('.container'));
