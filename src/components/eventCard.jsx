import React, { useEffect } from 'react';
import { withPlayerEvent } from 'context/playerEventContext';
import * as EventsAPI from 'services/eventsAPI';

const EventCard = ({ ctxt }) => {
	const ctxt_event = ctxt.playerEvents.events;
	const ctxt_player = ctxt.playerEvents.player;

	const validate_attendance = (event_id) => {
		EventsAPI.confirmAttendance(ctxt_player.player_id, ctxt_player.club_id, ctxt_player.team_id, event_id)
		.then(response => ctxt.upd(response));
	};

	const setCards = () => {
		return ctxt_event.map((event, key) => (
			<div className='card rounded mx-2 my-2' key={key}>
				<div className='card-body d-flex flex-column align-items-center'>
					<h5 className='card-title'>{event.title}</h5>
					<p className='card-text'>{event.start}</p>
					<button className='btn btn-primary w-75' onClick={ () => validate_attendance(event.id) }>Validate Participation</button>
				</div>
			</div>
		));
	};

	useEffect( () => {
		setCards()
	}, []);

	return(
		<div className='d-flex flex-wrap mb-3'>
			{ setCards() }
		</div>
	);
};

export default withPlayerEvent(EventCard);
