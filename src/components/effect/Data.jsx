import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = (props) => {
	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	async function getPosts() {
		const result = await axios('https://jsonplaceholder.typicode.com/posts');
		setPosts(result.data);
	}
	return (
		<div>
			{posts.map((post) => {
				return <ul key={post.id}>{post.title}</ul>;
			})}
		</div>
	);
};

export default Data;
