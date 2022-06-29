import React, { Component } from 'react';
import Callback from './callback';


class ParentCallback extends Component {
    constructor(){
        super();
        this.state = { 
            name:"parent"
         }
    }

     greetParent=(childName)=>{
        alert(`hello ${this.state.name} from ${childName}`)
     }
    render() { 
        return (
            <div>
                <Callback greetHandler={this.greetParent}/>
            </div>
        );
    }
}
 
export default ParentCallback;