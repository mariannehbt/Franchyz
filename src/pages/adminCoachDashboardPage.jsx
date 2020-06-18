import React, { useEffect, useState } from 'react';
import '../styles/form.scss'
import * as UserAPI from 'services/authAPI'
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function AdminCoachDashboardPage () {

  const myId = useSelector(state => state.authReducer.id)
  const myType = useSelector(state => state.authReducer.typeUser)
  const [page, setPage] = useState('')
  useEffect(setupElements, [])

  async function setupElements() {
    let club = await UserAPI.myClub(myId, myType)
    let ans 
    if (club == null ) {
      ans = (
        <Link to="/newClub"><button type="button" className="btn btn-primary"> Create Club </button> </Link>
      )
    } else {
      ans = (
        //<Dashboard />
        test
      )
    }
   setPage(ans)
  }

  return(
    <>
      {page}
    </>
  )
}

export default AdminCoachDashboardPage
