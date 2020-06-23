import React, { createContext } from 'react';

const PlayerEventContext = createContext('');

export const withPlayerEvent = Component => props => (
	<PlayerEventContext.Consumer>
		{value => <Component {...props} ctxt={value} />}
	</PlayerEventContext.Consumer>
);

export default PlayerEventContext;
