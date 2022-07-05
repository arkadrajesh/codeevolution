import React, { Component } from 'react';
import ComponentB from './componentB';
import { UserProvider } from './userContext';


class ComponentA extends Component {
    state = {  } 
    render() { 
        return (
            <UserProvider value="Rajesh">

                <ComponentB/>
            </UserProvider>
        );
    }
}
 
export default ComponentA;