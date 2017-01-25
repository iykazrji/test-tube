// Conbines all the reducers so they can be used in the store.

import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user';

// Remember the keys in the 'combineReducers' function argument object
// is represents the names of the various application states.

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;