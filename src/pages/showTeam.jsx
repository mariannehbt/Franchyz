import React, {useState, useEffect} from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import DashboardAdmin from 'components/dashboardAdmin.jsx'
import * as teamAPI from 'services/teamAPI'
//import PlayerList from 'components/player/playerList.jsx'
// <PlayerList players={`${team.players}`} />

function TeamShow () {

  let { clubId, teamId } = useParams()
  useEffect(() => { setupTeam() }, [])
  const [team, setTeam] = useState('')


  async function setupTeam(){
    const ans = await teamAPI.getTeam(clubId, teamId)
    setTeam(ans)
  }

  return(
    <div className='container'>
      <h1> {`${team.title}`} </h1>
    </div>
  )
}

export default TeamShow
