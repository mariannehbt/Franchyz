import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// import * as EventsAPI from 'services/Events';

import '../styles/calendar.scss' // webpack must be configured to do this

function Calendar() {
  const [events, setEvents] = useState([])
  let history = useHistory();

  const tmp_event = {title: "Event Now", start: new Date()}

  const addEventManually = arg => {
    setEvents([...events, {title: "Event Now", start: arg.date}])
  }

  const goToEventNew = () => {
    history.push('/register')
  }

  const getEvents = () => {
    // EventsAPI.GetEventsRequest
  }

  // useEffect(getEvents, [])


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
