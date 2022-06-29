import React from 'react';

const EnhancedComponent= (OriginalComponent) =>{
    class NewComponent extends React.Component{
        state={
            count:0
        }

        increment=()=>{
            this.setState({count:this.state.count+1});
        }

        render(){
            return(
                <OriginalComponent 
                handleClick={this.increment}
                show={this.state.count}/>
            )
        }
    }
    return NewComponent;
}

export default EnhancedComponent;