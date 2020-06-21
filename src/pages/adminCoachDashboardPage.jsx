import React, { useEffect, useState } from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import DashboardAdmin from 'components/dashboardAdmin.jsx'
import * as clubAPI from 'services/clubAPI.jsx'

function AdminCoachDashboardPage () {

  const myClubId = useSelector(state => state.userReducer.club_id)

  useEffect(() => { loadClub() }, [])
  const [club, setClub] = useState('')


  async function loadClub() {
    const response = await clubAPI.getClub(myClubId)
    setClub( response )
  }

   function setupElements() {
    let ans 

    if (myClubId == null ) {
      ans = (
        <Link to="/newClub"><button type="button" className="btn btn-primary"> Create Club </button> </Link>
      )
    } else {
      ans = (
        <DashboardAdmin club={club} />
      )
    }
    return ans
  }

  return(
    <>
      {setupElements()}
    </>
  )
}

export default AdminCoachDashboardPage
