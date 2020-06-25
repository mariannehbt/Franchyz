import React, {useEffect, useState} from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import * as EventsAPI from 'services/eventsAPI';
import Calendar from 'components/calendar'
import EventsList from 'components/eventsList'

function PlayerDashboardPage () {
  const [events, setEvents] = useState([])
  const [data, setData] = useState()
  const [trigger, setTrigger] = useState(0)
  const clubId = useSelector(state => state.userReducer.clubId)
  const teamId = useSelector(state => state.userReducer.teamId)
  const playerId = useSelector(state => state.userReducer.id)
  const player = {clubId, teamId, playerId}

  const unconfirmed_events = () => {
    EventsAPI.getUnconfirmedEvents(playerId, clubId, teamId)
    .then((response) => {setEvents(response)})
  }

  useEffect(() => {
    unconfirmed_events()
  }, [])

  
  useEffect(() => {
    unconfirmed_events()
  }, [trigger])

  if (events !== null) {
    return(
      <>
        <div className='my-3 mx-3'>
          <EventsList events={events} player={player} setTrigger={setTrigger} trigger={trigger}/>
          <Calendar player={player}/>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div className='my-3 mx-3'>
        <Calendar player={player}/>
      </div>
      </>
    )
  }
}

export default PlayerDashboardPage
