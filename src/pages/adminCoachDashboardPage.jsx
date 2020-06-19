import React from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import DashboardAdmin from 'components/dashboardAdmin.jsx'

function AdminCoachDashboardPage () {

  const myClubId = useSelector(state => state.userReducer.club_id)

   function setupElements() {
    let ans 

    if (myClubId == null ) {
      ans = (
        <Link to="/newClub"><button type="button" className="btn btn-primary"> Create Club </button> </Link>
      )
    } else {
      ans = (
        <DashboardAdmin />
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
