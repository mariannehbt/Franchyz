import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Player = ({player}) => {
  console.log(player)

  const clubId = useSelector(state => state.userReducer.club_id);
  function setupElements() {
    if (player !== undefined){ 
      return <li className='list-group-item'> <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link> </li>
    }
  }
  return (
    <>
      {setupElements()}
    </>
  );
}

export default Player;

