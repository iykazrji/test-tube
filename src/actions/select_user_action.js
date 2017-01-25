const selectUser = function(user){
	console.log("You Clicked on "+user.firstname);
	return{
		type: 'USER_SELECTED',
		payload: user
	}
}

export default selectUser;