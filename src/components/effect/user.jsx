import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = (props) => {
	const [ id, setId ] = useState(1);
	const [ post, setPost ] = useState([]);
    const [idFromButtonClick,setIdFromButtonClick]=useState(id)

	useEffect(() => {
		getUser();
	},[idFromButtonClick]);

    const handleClick=()=>{
        setIdFromButtonClick(id);
    }

	async function getUser() {
		const result = await axios(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
		console.log(result);
		setPost(result.data);
	}
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <button type='button' onClick={handleClick}>fetch</button>
			<h5>{post.title}</h5>
		</div>
	);
};

export default User;
