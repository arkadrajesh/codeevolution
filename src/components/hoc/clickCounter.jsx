import React, { Component } from 'react';
import EnhancedComponent from './hoc';

class ClickCounter extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h5>clicked {this.props.show} times</h5>
                <button onClick={this.props.handleClick}>click</button>
            </div>
        );
    }
}
 
export default EnhancedComponent(ClickCounter);