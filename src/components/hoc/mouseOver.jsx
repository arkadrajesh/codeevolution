import React, { Component } from 'react';
import EnhancedComponent from './hoc';

class MouseOver extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h5 onMouseOver={this.props.handleClick}>Mouseover {this.props.show} times</h5>
            </div>
        );
    }
}
 
export default EnhancedComponent(MouseOver);