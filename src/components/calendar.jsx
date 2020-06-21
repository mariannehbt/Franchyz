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
  const [games, setGames] = useState([])
  const [practices, setPractices] = useState([])
  const user_id = 2
  const club_id = 1
  const team_id = 1
  const history = useHistory();

  const tmp_event = {title: "Event Now", start: new Date()}

  const addEventManually = arg => {
    setGames([...games, {title: "Event Now", start: arg.date}])
  }

  const goToEventNew = () => {
    history.push('/register')
  }

  const getAllEvents = () => {
    getGames()
    getPractices()
  }

  const getGames =() => {
    EventsAPI.getAttendedGames(user_id, club_id, team_id)
    .then(response => {
      response.map(game => setGames([...games, {title: game.title, start: game.starting_date_time}]));
    })
  }

  const getPractices =() => {
    EventsAPI.getAttendedGames(user_id, club_id, team_id)
    .then(response => {
      response.map(practice => setGames([...games, {title: practice.title, start: practice.starting_date_time}]));
    })
  }

  useEffect(() => {
    getAllEvents()
  }, [])


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
      allDaySlot={false}
      firstDay="1"
      locale= "fr"
      timeZone="UTC"
      buttonText= {{
        today:"Aujourd'hui",
        day: 'Jour',
        month: 'Mois',
        week: 'Semaine',
      }}
      events={{
        games,
        practices
      }}
      dateClick={goToEventNew}
    />
  )
}

export default Calendar
