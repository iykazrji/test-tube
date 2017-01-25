import React, { Component } from 'react';
import UsersListContainer from '../containers/users_list_container';
import ActiveUserContainer from '../containers/active_user_container';
export default class App extends Component {
  render() {
    return (
      <div>
      	<div>
      		<h2>List of Users:</h2>
      		<UsersListContainer />
      	</div>
      	<div>
      		<h3>Details:</h3>
          <ActiveUserContainer />
      	</div>
      </div>
    );
  }
}
