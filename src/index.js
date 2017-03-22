import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/store';
import { Provider } from 'react-redux';

import env_config from 'env_config';

console.log(store);
console.log(env_config.server_url);

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.querySelector('.container'));
