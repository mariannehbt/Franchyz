import React from 'react';
import InformationsClub from './InformationsClub.jsx'
import TeamList from './Team/TeamList.jsx'

function DashboardAdmin() {

  return(
    <>
      <InformationsClub />
      <h2>Teams</h2>
      <TeamList />
    </>
  )
}

export default DashboardAdmin
