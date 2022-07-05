import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentC extends Component {
	state = {};
	render() {
		return (
			<UserConsumer>
				{(username) => {
					return <h3>{username}</h3>;
				}}
			</UserConsumer>
		);
	}
}

export default ComponentC;
