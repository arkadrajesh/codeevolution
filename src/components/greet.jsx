import React, { Component } from 'react';

class Greet extends Component {
    state = { 
        name:"hello Rajesh"
     } 

     changeGreet=()=>{
        this.setState({name:"hello arkad"})
     }
    render() { 
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeGreet}>change</button>
            </div>
        );
    }
}
 
export default Greet;