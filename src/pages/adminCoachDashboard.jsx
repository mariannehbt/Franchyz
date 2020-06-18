import React from 'react';
import '../styles/form.scss'

function AdminCoachDashboard () {

  function submit(e) {
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    dispatch(login(email, password, 'coach'))   
  }

  return(
  )
}

export default Login
