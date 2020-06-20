import React from 'react';

function InformationsClub({club}) {

  return(
    <div className='container'>
      <h1 className='text-center my-4'>
        { club.name }
      </h1>
      <div className='row'>
        <div className='col'>
          <img src={club.logo_url}  style={{width: "100px", margin: "auto"}} alt='logo'></img>
          <ul>
            <li>
              {`Adress: ${club.address} ${club.city} ${club.zip_code}`}
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
