import React, { Component } from 'react';

// Import Redux Stuff 

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class activeUserContainer extends Component {
	render() {
			if(!this.props.activeUser){
				return (
					<div>
						<h2>No User Selected</h2>
					</div>
				);
			}else{
				return (
					<div>
						<div className="firstname">
							<h4>firstname:</h4>
							<span>{this.props.activeUser.firstname}</span>
						</div>
						<div className="lastname">
							<h4>lastname:</h4>
							<span>{this.props.activeUser.lastname}</span>
						</div>

						<div className="email">
							<h4>email:</h4>
							<span>{this.props.activeUser.email}</span>
						</div>
						<div className="description">
							<h4>description:</h4>
							<span>{this.props.activeUser.desc}</span>
						</div>
					</div>
				);	
			}	
	}

}

function mapStateToProps(state){
	return{
		activeUser: state.activeUser	
	}
	
}

export default connect(mapStateToProps)(activeUserContainer);