import React,{Component} from 'react';


class Callback extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={()=>this.props.greetHandler("child")}>Greet</button>
        );
    }
}
 
export default Callback;