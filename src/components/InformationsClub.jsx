import React, { useEffect, useState } from 'react';
import * as clubApi from 'services/clubAPI';
import {useSelector } from 'react-redux'

function InformationsClub() {
  
  const myClubId = useSelector(state => state.userReducer.club_id)
  useEffect(() => { setupInfo() }, [])
  const [club, setClub] = useState('')


  async function setupInfo() {
    const club = await clubApi.getClub(myClubId)
    console.log(club)
    let ans = (
      <p>
        {club.id}
      </p>
    )
    setClub(ans)
  }


  return(
    <div>
      <ul>
        { club }
      </ul>
    </div>
  )
}

export default InformationsClub
