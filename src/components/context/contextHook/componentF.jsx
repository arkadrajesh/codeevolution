import React,{useContext} from 'react';
// import ComponentG from './componentG';
import { UserContext,ChannelContext } from './Pesron';


const ComponentF = (props) => {

    const user=useContext(UserContext);
    const channel =useContext(ChannelContext);
    return ( 
        <div>

            {user} - {channel}
        </div>
     );
}
 
export default ComponentF;