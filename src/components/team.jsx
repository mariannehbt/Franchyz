import React, { useEffect, useState } from 'react';
import * as teamAPI from '../services/teamAPI.jsx';
import { Link } from 'react-router-dom';

const Team = ({team}) => {

  return (
    <li className='list-group-item'> <Link to={`/clubs/team.club_id${team.id}`}> {team.title} </Link> </li>
  );
}

export default Team;

