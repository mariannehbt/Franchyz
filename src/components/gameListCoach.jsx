import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as gameAPI from 'services/gameAPI';

const GameListCoach = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const { teamId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {getData()}, [])

  const getData = async () => {
    let response = await gameAPI.getGames(clubId, teamId);
    let games = response.map((game, key) => (
      <tr key={key}>
        <td><Link to={`/clubs/${clubId}/teams/${teamId}/games/${game.id}/edit`}>{game.title}</Link></td>
        <td>{game.starting_date_time}</td>
      </tr>
    ));
    setData(games);
  };

  return (
    <div>
      <h2>Games</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
};

export default GameListCoach;
