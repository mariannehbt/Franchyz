import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PlayerList = (props) => {
  const [players, setPlayers] = useState(props.players);

  if (props.players.length < 1) {
    return (
      <div className="container">
        <p>It seems you don't have players yet, let's add some of them now</p>
        <Link to='/' className='btn btn-primary'>Add Players</Link>
      </div>
    );
  } else {
    return (
      <ul className='list-group list-group-flush'>
        {players}
      </ul>
    );
  }
}

export default PlayerList;
