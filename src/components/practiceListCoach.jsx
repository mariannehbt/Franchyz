import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as practiceAPI from 'services/practiceAPI';

const PracticeListCoach = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const { teamId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {getData()}, [])

  const getData = async () => {
    let response = await practiceAPI.getPractices(clubId, teamId);
    let practices = response.map((practice, key) => (
      <tr key={key}>
        <td><Link to={`/clubs/${clubId}/teams/${teamId}/practices/${practice.id}/edit`}>{practice.title}</Link></td>
        <td>{practice.starting_date_time}</td>
      </tr>
    ));
    setData(practices);
  };

  return (
    <div>
      <h2>Practices</h2>
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

export default PracticeListCoach;
