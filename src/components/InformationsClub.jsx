import React, { useEffect, useState } from 'react';
import * as clubApi from 'services/clubAPI';
import {useSelector } from 'react-redux'

function InformationsClub() {
  
  const myClubId = useSelector(state => state.userReducer.club_id)
  useEffect(() => { 
    async function setupInfo() {
      const club = await clubApi.getClub(myClubId)
      console.log(club)
    }
    console.log(setupInfo(), 'dededede')
  }, [])
  const [club, setClub] = useState('')




  return(
    <div>
      <ul>
        { club }
      </ul>
    </div>
  )
}

export default InformationsClub
