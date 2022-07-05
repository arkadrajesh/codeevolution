import React from 'react';
import ComponentE from './componentE';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const Person = (props) => {
	return (
		<UserContext.Provider value={'Rajesh'}>
			<ChannelContext.Provider value={"codeevolution"}>
				<ComponentE />
			</ChannelContext.Provider>
		</UserContext.Provider>
	);
};

export default Person;
