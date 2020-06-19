import React, { useEffect, useState } from 'react';
import * as api from '../../services/teamAPI.jsx';
import { Link } from 'react-router-dom';

const TeamList = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getAllTeams(1)
		.then(response => {
			let teams = response.map((team, key) => (
				<Link to={`/team/${team.id}`} key={key}><li className='list-group-item'>{team.title}</li></Link>
			));
			setData(teams);
		});
	};

	useEffect(getData, []);

  if (data.length < 1) {
    return (
      <div className="container">
        <p>You don't have team yet !</p>
        <a href="#" className="btn btn-primary">Create Team</a>
      </div>
    );
  } else {
    return (
      <ul className='list-group list-group-flush'>
        {data}
      </ul>
    );
  }
};

export default TeamList;