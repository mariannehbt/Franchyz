import React from 'react';
import InformationsClub from './informationsClub.jsx'
import TeamList from './teamList.jsx'
import { Link } from 'react-router-dom';

function DashboardAdmin({club}) {

  return(
    <div className="container">
      <InformationsClub club={club} />
      <h2>Teams</h2>
      <TeamList teams={club.teams} />
      <Link to='/newEvent'> createEvent </Link>
    </div>
  )
}

export default DashboardAdmin
