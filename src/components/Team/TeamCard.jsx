import React, { useEffect, useState } from 'react';
import * as api from '../../services/teamAPI.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const TeamCard = () => {
  const clubID = useSelector(state => state.userReducer.club_id);
  const { teamID } = useParams();
  const isAdmin = useSelector(state => state.userReducer.isAdmin);
  
  console.log(teamID + "|" + clubID)

	const getData = () => {
		api.getTeam(clubID, teamID)
		.then(response => {
      console.log(response)
			// let teams = response.map((team, key) => (
			// 	<Link to={`/team/${team.id}`} key={key}><li className='list-group-item'>{team.title}</li></Link>
			// ));
			// setData(teams);
		});
	};

  useEffect(getData, []);

  return (<div>
    ok
  </div>)
};

export default TeamCard;