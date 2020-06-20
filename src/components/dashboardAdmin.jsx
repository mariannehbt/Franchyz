import React from 'react';
import InformationsClub from './informationsClub.jsx'
import TeamList from './teamList.jsx'

function DashboardAdmin({club}) {

  return(
    <div className="container">
      <InformationsClub club={club} />
      <h2>Teams</h2>
      <TeamList teams={club.teams} />
    </div>
  )
}

export default DashboardAdmin
