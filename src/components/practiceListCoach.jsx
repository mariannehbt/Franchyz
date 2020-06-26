import React from 'react';
import { Link } from 'react-router-dom';

const PracticeListCoach = ({club, practices}) => {
  const setList = () => {
    return practices.map((practice, key) =>(
      <tr key={key}>
        <td><Link to={`/practices/${practice.id}/edit`}>{practice.title}</Link></td>
        <td>{practice.starting_date_time}</td>
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

export default PracticeListCoach;
