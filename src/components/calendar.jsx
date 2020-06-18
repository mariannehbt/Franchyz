import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../styles/calendar.scss' // webpack must be configured to do this

function Calendar() {
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[ dayGridPlugin ]}
    />
  )
}

export default Calendar
