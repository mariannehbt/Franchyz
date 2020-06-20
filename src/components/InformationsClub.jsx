import React, { useEffect, useState } from 'react';
import * as clubApi from 'services/clubAPI';
import {useSelector } from 'react-redux'

function InformationsClub() {
  
  const myClubId = useSelector(state => state.userReducer.club_id)
  useEffect(() => { setupInfo() }, [])
  const [club, setClub] = useState('')


  async function setupInfo() {
    const response = await clubApi.getClub(myClubId)
    setClub( response )
  }


  return(
    <div className='container'>
      <h1 className='text-center'>
        { club.name }
      </h1>
        <div className='row'>
          <div className='col'>
          <img src={club.logo_url}  style={{width: "100px", margin: "auto"}}></img>
            <ul>
              <li>
                {`Adress: ${club.address} ${club.city} ${club.zip}`}
              </li>
              <li>
                {`Country: ${club.country }`}
              </li>
              <li>
                {`League: ${club.league} `}
              </li>
              <li>
              {`Conference: ${club.conference} `}
              </li>
            </ul>
          </div>

          <div className='col'>
            <ul>
   
              <li>
                { club.description }
              </li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default InformationsClub
