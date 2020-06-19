import React, { useEffect, useState } from 'react';
import * as api from '../../services/teamAPI.jsx';
import { Link } from 'react-router-dom';

const TeamList = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getAllTeams(1)
		.then(response => {
			let teams = response.map((team, key) => (
				<Link to={`/team/${team.id}`}><li classname='list-group-item' key={key}>{team.title}</li></Link>
			));
			setData(teams);
		});
	};

	useEffect(getData, []);

	return (
		<ul classname='list-group list-group-flush'>
			{data}
		</ul>
	);
};

export default TeamList;