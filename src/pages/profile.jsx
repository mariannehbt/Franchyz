import React, { useEffect, useState } from 'react';
import * as userAPI from '../services/userAPI.jsx';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/form.scss';

const Profile = () => {
	const user_id = useSelector(state => state.userReducer.id);
	const user_type = useSelector(state => state.authReducer.typeUser);
	const [data, setData] = useState([]);
	useEffect(getData, []);

	async function getData() {
		const response = await userAPI.profile(user_id, user_type);
		if (user_type === 'coach') {
			setData({
				email: response.email,
				first_name: response.first_name,
				last_name: response.last_name,
				phone: response.phone,
				birthdate: response.birthdate,
				arrival: response.arrival,
				admin: response.admin,
				club_id: response.club_id,
			});
		} else if (user_type === 'player') {
			setData({
				email: response.email,
				first_name: response.first_name,
				last_name: response.last_name,
				phone: response.phone,
				birthdate: response.birthdate,
				arrival: response.arrival,
				availability: response.availability,
				height: response.height,
				weight: response.weight,
				gender: response.gender,
				jersey_number: response.jersey_number,
				position: response.position,
				team_id: response.team_id,
			});		
		};
	};

	const submit = (event) => {
		event.preventDefault();
		userAPI.profileUpdate({
			id: user_id,
			type: user_type,
			fields: {data},
		});
	};

	return (
		<div>
			<h1>My Profile...</h1>
			<small>{JSON.stringify(data)}</small>

			<form className='form p-4 mt-3 mb-3 rounded' onSubmit={submit}>

				<div className='form-group'>
					<label>Email :</label>
					<input
						className='form-control'
						type='email'
						placeholder={(data.email != null) ? null : 'john.doe@gmail.com'}
						value={(data.email != null) ? data.email : null}
					/>
				</div>

				<div className='form-group'>
					<label>First Name :</label>
					<input
						className='form-control'
						type='text'
						placeholder={(data.first_name === null) ? 'John' : null }
						value={(data.first_name === null) ? null : data.first_name}
						onChange={e => setData({...data, first_name: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Last Name :</label>
					<input
						className='form-control'
						type='text'
						placeholder={(data.last_name === null) ? 'Doe' : null }
						value={(data.last_name === null) ? null : data.last_name}
						onChange={e => setData({...data, last_name: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Phone :</label>
					<input
						className='form-control'
						type='tel'
						placeholder={(data.phone === null) ? '0623451789' : null }
						value={(data.phone === null) ? null : data.phone}
						onChange={e => setData({...data, phone: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Birthdate :</label>
					<input
						className='form-control'
						type='date'
						placeholder={(data.birthdate === null) ? '2018-07-22' : null }
						value={(data.birthdate === null) ? null : data.birthdate}
						onChange={e => setData({...data, birthdate: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Arrival :</label>
					<input
						className='form-control'
						type='date'
						placeholder={(data.arrival === null) ? '2018-07-22' : null }
						value={(data.arrival === null) ? null : data.arrival}
						onChange={e => setData({...data, arrival: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Availability :</label>
					<select
						className='form-control'
						onChange={e => setData({...data, availability: e.target.value })}
					>
						<option value='false'>Not available</option>
						<option value='true'>Available</option>
					</select>
				</div>

				<div className='form-group'>
					<label>Height (cm) :</label>
					<input
						className='form-control'
						type='number'
						min='0'
						placeholder={(data.height === null) ? '170' : null }
						value={(data.height === null) ? null : data.height}
						onChange={e => setData({...data, height: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Weight (kg) :</label>
					<input
						className='form-control'
						type='number'
						min='0'
						placeholder={(data.weight === null) ? '85' : null }
						value={(data.weight === null) ? null : data.weight}
						onChange={e => setData({...data, weight: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Gender :</label>
					<select
						className='form-control'
						onChange={e => setData({...data, gender: e.target.value })}
					>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
				</div>

				<div className='form-group'>
					<label>Jersey Number :</label>
					<input
						className='form-control'
						type='number'
						min='0'
						placeholder={(data.jersey_number === null) ? '9' : null }
						value={(data.jersey_number === null) ? null : data.jersey_number}
						onChange={e => setData({...data, jersey_number: e.target.value })}
					/>
				</div>

				<div className='form-group'>
					<label>Position :</label>
					<input
						className='form-control'
						type='text'
						placeholder={(data.position === null) ? 'Quarterback' : null }
						value={(data.position === null) ? null : data.position}
						onChange={e => setData({...data, position: e.target.value })}
					/>
				</div>

				<p>Team id ? </p>

				<button type='submit' className='btn btn-primary'>Submit</button>

			</form>
		</div>
	);
};

export default Profile;
