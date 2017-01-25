// Setting the initial state of the reducer to null for testing purposes.

export default function ActiveUserReducer(state=null, action){
	switch(action.type){
		case 'USER_SELECTED':
			return action.payload;
			break;
	}
	return state;
}