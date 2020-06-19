import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { useSelector } from 'react-redux';

import * as EventsAPI from 'services/eventsAPI';

import '../styles/calendar.scss' // webpack must be configured to do this

function Calendar() {
  const [events, setEvents] = useState([])
  const user_id = 2
  const club_id = 1
  const team_id = 1
  const history = useHistory();

  const tmp_event = {title: "Event Now", start: new Date()}

  const addEventManually = arg => {
    setEvents([...events, {title: "Event Now", start: arg.date}])
  }

  const goToEventNew = () => {
    history.push('/register')
  }

  const getEvents =() => {
    EventsAPI.getAttendedGames(user_id, club_id, team_id)
    .then(response => {
      response.map(game => setEvents([...events, {title: game.title, start: game.starting_date_time}]));
    })
  }

  useEffect(() => { getEvents () }, [])


  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      defaultView="dayGridMonth"
      themeSystem="bootstrap"
      header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
      allDaySlot="false"
      firstDay="1"
      locale= "fr"
      timeZone="UTC"
      minTime='09:00:00'
      maxTime='23:00:00'
      buttonText= {{
        today:"Aujourd'hui",
        day: 'Jour',
        month: 'Mois',
        week: 'Semaine',
      }}
      events={events}
      dateClick={goToEventNew}
    />
  )
}

export default Calendar
