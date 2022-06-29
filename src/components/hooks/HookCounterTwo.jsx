import React,{useState} from 'react';


const HookCounterTwo = (props) => {

    const initialCount=0;
    const[count,setCount]=useState(initialCount);

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }   
    }
    return ( 
        <div>
            <h3>count {count}</h3>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
     );
}
 
export default HookCounterTwo;