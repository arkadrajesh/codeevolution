import React, { Component } from 'react';

class Form extends Component {
	state = {
		username: '',
		password: '',
        comments:"",
        topic:"React"
	};

	handleUsernameChange = (e) => {
		this.setState({ username: e.target.value });
	};
	// handlePasswordChange = (e) => {
	// 	this.setState({ password: e.target.value });
	// };

    handleCommentsChange = (e) => {
		this.setState({ comments: e.target.value });
	};

    handleTopicChange = (e) => {
		this.setState({ topic: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username</label>
					<input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
				</div>
				{/* <div>
					<label>Password</label>
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
				</div> */}
				<div>
					<label>Comments</label>
					<textarea type="password" value={this.state.comments} onChange={this.handleCommentsChange} />
				</div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="node">Node</option>
                    </select>
                </div>
				<button type="submit">submit</button>
			</form>
		);
	}
}

export default Form;
