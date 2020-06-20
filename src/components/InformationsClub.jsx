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
      <img src={club.logo_url}  style={{width: "100px"}}></img>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul>
              <li>
                {`adrress: ${club.address} ${club.city} ${club.zip}`}
              </li>
              <li>
                {`country: ${club.country }`}
              </li>
            </ul>
          </div>

          <div className='col'>
            <ul>
              <li>
                { club.league }
              </li>
              <li>
                { club.conference }
              </li>
              <li>
                { club.description }
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InformationsClub
