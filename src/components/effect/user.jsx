import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = (props) => {
	const [ id, setId ] = useState(1);
	const [ post, setPost ] = useState([]);

	useEffect(() => {
		getUser();
	},[id]);

	async function getUser() {
		const result = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
		console.log(result);
		setPost(result.data);
	}
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
			<h5>{post.title}</h5>
		</div>
	);
};

export default User;
