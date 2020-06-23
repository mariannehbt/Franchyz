import React, { useState, useEffect } from 'react';
import PlayerEventContext from 'context/playerEventContext';
import { useSelector } from 'react-redux';
import * as EventsAPI from 'services/eventsAPI';
import Calendar from 'components/calendar';
import EventsList from 'components/eventsList';
import EventCard from 'components/eventCard';

function PlayerDashboardPage () {
	const club_id = useSelector(state => state.userReducer.club_id);
	const team_id = useSelector(state => state.userReducer.team_id);
	const player_id = useSelector(state => state.userReducer.id);
	
	const [playerEvents, setPlayerEvents] = useState(
		{
			player: {
				club_id: club_id,
				team_id: team_id,
				player_id: player_id,
			},
			events: null,
			last_validation: null,
		}
	);

	const unconfirmed_events = () => {
		EventsAPI.getUnconfirmedEvents(player_id, club_id, team_id)
		.then(response => setPlayerEvents(
			{...playerEvents, events: response}
		));
	};

	useEffect( () => {
		unconfirmed_events()
	}, [playerEvents.last_validation]);

	// console.log(playerEvents);
	
	// let test = (playerEvents.events === null) ? 'none' : playerEvents.events.length;
	// console.log(test);

	const show_events = () => {
		if (playerEvents.events === null) {
			return null;
		} else if (playerEvents.events.length === 0) {
			return (
				<div>
					<p>No pending events</p>
					<Calendar />
				</div>
			);
		} else {
			return (
				<div>
					<EventsList />
					<EventCard />
					<Calendar />
				</div>
			);
		};
	};

	return (
		<PlayerEventContext.Provider value= {{ 
			playerEvents,
			upd: (event_id) => setPlayerEvents({...playerEvents, last_validation: event_id}),
		}}>
			<div className='my-3 mx-3'>
				{show_events()}
			</div>
		</PlayerEventContext.Provider>
	);
};

export default PlayerDashboardPage;
