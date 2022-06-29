import React, { Component } from 'react';

class Condition extends Component {
    state = { 
        isLoggedin:true 
     } 
    render() {
        if(this.state.isLoggedin){
            return <div>Welcome Rajesh</div>
        } 
        else{

            return <div>Welcome Arkad</div>
        }
    }
}
 
export default Condition;