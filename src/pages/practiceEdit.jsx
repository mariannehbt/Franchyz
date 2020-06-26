import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as practiceAPI from 'services/practiceAPI';

const PracticeEdit = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const teamId = useSelector((state) => state.userReducer.teamId);
  const { practiceId } = useParams();
  const [data, setData] = useState([]);
  useEffect(getData, []);

  console.log(clubId);
  console.log(teamId);
  console.log(practiceId);

  async function getData() {
    const response = await practiceAPI.getPractice(practiceId);
    setData({
      title: response.title,
      long_description: response.long_description,
      starting_date_time: response.starting_date_time,
      duration: response.duration,
      address: response.address,
      zip_code: response.zip_code,
      city: response.city,
      country: response.country,
      canceled: response.canceled,
    });
  };

  console.log(data);

  const submit = (event) => {
    event.preventDefault();
    practiceAPI.editPractice({
      club_id: clubId,
      team_id: teamId,
      practice_id: practiceId,
      fields: {data},
    });
  };

  let test = '';
  test = JSON.stringify(data);

  return (
    <form onSubmit={submit}>
      <small>{test}</small>
      <div className='form-group'>
        <label>Title:</label>
        <input type='text' className='form-control' placeholder={(data.title === null) ? 'Practice title' : null } value={(data.title === null) ? '' : data.title} onChange={e => setData({...data, title: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Description:</label>
        <textarea className='form-control' rows='1' placeholder={(data.long_description === null) ? 'Practice description' : null } value={(data.long_description === null) ? '' : data.long_description} onChange={e => setData({...data, long_description: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Date:</label>
        <input className='form-control' type='date' placeholder={(data.starting_date_time === null) ? 'Practice date' : null } value={(data.starting_date_time === null) ? '' : data.starting_date_time} onChange={e => setData({...data, starting_date_time: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Duration:</label>
        <input className='form-control' type='time' placeholder={(data.duration === null) ? 'Practice duration' : null } value={(data.duration === null) ? '' : data.duration} onChange={e => setData({...data, duration: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Address:</label>
        <input type='text' className='form-control' placeholder={(data.address === null) ? 'Practice address' : null } value={(data.address === null) ? '' : data.address} onChange={e => setData({...data, address: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Zip Code:</label>
        <input type='text' className='form-control' placeholder={(data.zip_code === null) ? 'Practice zip_code' : null } value={(data.zip_code === null) ? '' : data.zip_code} onChange={e => setData({...data, zip_code: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>City:</label>
        <input type='text' className='form-control' placeholder={(data.city === null) ? 'Practice city' : null } value={(data.city === null) ? '' : data.city} onChange={e => setData({...data, city: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Country:</label>
        <input type='text' className='form-control' placeholder={(data.country === null) ? 'Practice country' : null } value={(data.country === null) ? '' : data.country} onChange={e => setData({...data, country: e.target.value })} />
      </div>
      <div className='form-group'>
        <label>Cancel:</label>
        <select className='form-control' onChange={e => setData({...data, 'canceled': e.target.value })}>
          <option value='false'>False</option>
          <option value='true'>True</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default PracticeEdit;
