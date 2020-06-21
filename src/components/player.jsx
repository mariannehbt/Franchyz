import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Player = ({player, setChoices}) => {
  const location = useLocation()
  const clubId = useSelector(state => state.userReducer.club_id);

  function handleChange() {

  }
  function setupElements() {
    if (player !== undefined){ 
      if (location.pathname === '/newEvent')
      {
        return (
          <li className='list-group-item'> 
            <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link> 
            <input type="checkbox" className="form-check-input" id={`checkbox${player.id}`} name="example1" onChange={handleChange} />
          </li>
        ) 
      }
      else
      {
        return <li className='list-group-item'> <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link>  </li>
      }
    }
  }
  return (
    <>
      {setupElements()}
    </>
  );
}

export default Player;

