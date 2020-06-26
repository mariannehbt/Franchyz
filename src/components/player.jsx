import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Player = ({player, handleCheckboxChange, checkbox}) => {
  const location = useLocation()
  const clubId = useSelector(state => state.userReducer.clubId);

  function test(e) {
    console.log(checkbox)
    handleCheckboxChange(e, checkbox)
  }

  function setupElements() {
    if (player !== undefined){ 
      {
        return (
          <tr>
            <td>
              {player.first_name} {player.last_name}
            </td>
            <td>{player.jersey_number}</td>
            <td>{player.position}</td>
            <td>{player.height}cm</td>
            <td>{player.weight}kg</td>
            <td>{player.email}</td>
            <td>{player.phone}</td>
          </tr>
        ) 
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

