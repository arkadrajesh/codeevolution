import React, { Component } from 'react';


class Users extends Component {
    state = {  } 
    render() { 
        return (
            <div>{this.props.render(false)}</div>
        );
    }
}
 
export default Users;