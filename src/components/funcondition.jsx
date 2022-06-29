import React, { useState } from 'react';
import Condition from './condition';

const FunCondition = (props) => {
    const [logIn,setLogIn]=useState(false);

    //  if(logIn){

    //      return <Condition/>
    //  }else{
    //     return <h1>check your login</h1>
    //  }

    return( logIn ? <Condition/>:<h1>check</h1>)
}
 
export default FunCondition;