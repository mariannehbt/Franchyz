import React, { useEffect, useState } from 'react';
import * as userAPI from '../services/userAPI.jsx';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/form.scss';

const Profile = () => {
	const dispatch = useDispatch();
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

		console.log(data)

		const submit = (event) => {
			event.preventDefault();
			let email = document.getElementById('email').value;
			let first_name = document.getElementById('first_name').value
			dispatch(userAPI.profileUpdate(first_name));
		};

		return (
		<div>
			<h1>My Profile...</h1>

			<form className='form p-4 mt-3 mb-3 rounded' onSubmit={submit}>

				<div className='form-group'>
					<label htmlFor='email'>Email :</label>
					<input id='email' type='email' className='form-control' placeholder={(data.email != null) ? data.email : 'john.doe@gmail.com'} />
				</div>

				<div className='form-group'>
					<label htmlFor='first_name'>First Name :</label>
					<input id='first_name' type='first_name' className='form-control' placeholder={(data.first_name != null) ? data.first_name : 'John'} />
				</div>

				<button type='submit' className='btn btn-primary'>Submit</button>

			</form>
		</div>
	);
};

export default Profile;
