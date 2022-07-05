import React from 'react';
import { UserContext, ChannelContext } from './Pesron';

const ComponentG = (props) => {
	return (
		<UserContext.Consumer>
			{(user) => {
				return (
					<ChannelContext.Consumer>
						{(channel) => {
							return (
								<h1>
									usercontext {user},channelcontext {channel}
								</h1>
							);
						}}
					</ChannelContext.Consumer>
				);
			}}
		</UserContext.Consumer>
	);
};

export default ComponentG;
