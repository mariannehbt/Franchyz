import React, { useEffect } from 'react';
import { withPlayerEvent } from 'context/playerEventContext';

const EventsList = ({ ctxt }) => {
	const ctxt_event = ctxt.playerEvents.events;

	const setList = () => {
		return ctxt_event.map((event, key) => <li key={key}>{event.title}</li>);
	};

	useEffect( () => {
		setList()
	}, []);

	return(
		<div className='d-flex flex-wrap mb-3'>
			<p>{ctxt_event.length} pending events</p>
			<ul>
				{setList()}
			</ul>
		</div>
	);
};

export default withPlayerEvent(EventsList);
