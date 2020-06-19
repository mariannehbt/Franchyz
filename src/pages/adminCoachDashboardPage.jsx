import React, { useEffect, useState } from 'react';
import '../styles/form.scss'
import * as UserAPI from 'services/authAPI'
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
//import DashboardAdmin from ./dashboardAdmin.jsx

function AdminCoachDashboardPage () {

  const myId = useSelector(state => state.authReducer.id)
  const myType = useSelector(state => state.authReducer.typeUser)
  const [page, setPage] = useState('')
  useEffect(() => { setupElements () }, [])

  async function setupElements() {
    const profile = await UserAPI.profile(myId, myType)
    let club = profile.club_id
    let ans

    if (club == null ) {
      ans = (
        <Link to="/newClub"><button type="button" className="btn btn-primary"> Create Club </button> </Link>
      )
    } else {
      ans = (
        //<DashboardAdmin />
        'dede'
      )
    }
  }

  return(
    <>
      {page}
    </>
  )
}

export default AdminCoachDashboardPage
