import React from 'react';
import { useState } from 'react';

const CounterState = (props) => {
    const [count,setCount]=useState(0);

   

return (
        <button onClick={()=>setCount(count+1)}>count {count}</button>
      );
}
 
export default CounterState;