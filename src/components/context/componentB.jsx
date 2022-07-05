import React, { Component } from 'react';
import ComponentC from './componentC';
import UserContext from './userContext';


class ComponentB extends Component {
    state = {  } 

    static contextType=UserContext;
    render() { 
        return (
            <div>
                <h3>{this.context}</h3>
                <ComponentC></ComponentC>

            </div>
        );
    }
}
 
export default ComponentB;