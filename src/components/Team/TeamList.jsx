import React, { useEffect, useState } from 'react';
import * as api from '../../services/teamAPI.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TeamList = () => {
  const [data, setData] = useState([]);
  const clubID = useSelector(state => state.userReducer.club_id)
  const isAdmin = useSelector(state => state.userReducer.isAdmin)

	const getData = () => {
		api.getAllTeams(clubID)
		.then(response => {
			let teams = response.map((team, key) => (
				<Link to={`/team/${team.id}`} key={key}><li className='list-group-item'>{team.title}</li></Link>
			));
			setData(teams);
		});
	};

  useEffect(getData, []);

  const createTeam = () => {
    if (isAdmin) {
      return <p><Link to={`/create-team`} className="btn btn-primary mt-3">Create New Team</Link></p>
    } 
  }

  if (data.length < 1) {
    return (
      <div className="container">
        <p>This club don't have team yet !</p>
          {createTeam()}
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul className='list-group list-group-flush'>
          {data}
        </ul>
        {createTeam()}
      </div>
    );
  }
};

export default TeamList;