import React from 'react';
import { Link } from 'react-router-dom';

const GameListCoach = ({club, games}) => {
  const setList = () => {
    return games.map((game, key) =>(
      <tr key={key}>
        <td><Link to={`/games/${game.id}/edit`}>{game.title}</Link></td>
        <td>{game.starting_date_time}</td>
      </tr>
    ));
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {setList()}
        </tbody>
      </table>
    </div>
  );
};

export default GameListCoach;
