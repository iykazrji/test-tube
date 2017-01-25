import React, { Component } from 'react';

// Import Redux Stuff.

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectUser from '../actions/select_user_action';

class UsersListContainer extends Component {
	render() {
		return(
			<div>
			{
				this.props.users.map(function(user){
					return(<p key={user.id}
							  onClick={function(){
							  			
							  			//The props.selectUser gets the function
							  			//From the select user action binded by the bindActionCreator

							  			this.props.selectUser(user)}.bind(this)}>
							  {user.firstname}
							 </p>);
				}.bind(this))	
			}		
			</div>
		
			
		);
	}
}

function mapStateToProps(state){
	return {
		users: state.users
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectUser: selectUser}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
