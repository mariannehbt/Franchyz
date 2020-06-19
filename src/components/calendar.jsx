import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import '../styles/calendar.scss' // webpack must be configured to do this

function Calendar() {
  const [events, setEvents] = useState([])

  const tmp_event = {title: "Event Now", start: new Date()}

  const handleDateClick = arg => {
    setEvents([...events, {title: "New Event", start: arg.date}])
  }


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
      dateClick={handleDateClick}
    />
  )
}

export default Calendar
