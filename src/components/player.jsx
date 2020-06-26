import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Player = ({player, handleCheckboxChange, checkbox}) => {
  const clubId = useSelector(state => state.userReducer.clubId);
  

  const setupElements = () => {
    if (player !== undefined){ 
      return <li className='list-group-item'> <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link>  </li>
    }
  }
  return (
    <>
      {setupElements()}
    </>
  );
}

export default Player;

