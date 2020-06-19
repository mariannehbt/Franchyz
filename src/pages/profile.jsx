import React, { useEffect, useState } from 'react';
import * as UserAPI from '../services/userAPI.jsx';
import { useSelector } from 'react-redux';
import '../styles/form.scss';

const Profile = () => {
	const user_id = useSelector(state => state.userReducer.id);
	const user_type = useSelector(state => state.authReducer.typeUser);
	const [data, setData] = useState();
	useEffect(getData, []);

		async function getData() {
			const response = await UserAPI.profile(user_id, user_type);
			console.log(response);
			if (user_type === 'coach') {
				setData(
					<ul>
						<li>Email: {response.email}</li>
						<li>First Name: {response.first_name}</li>
						<li>Last Name: {response.last_name}</li>
						<li>Phone: {response.phone}</li>
						<li>Birthdate: {response.birthdate}</li>
						<li>Arrival: {response.arrival}</li>
						<li>Admin: {response.admin}</li>
						<li>Club_id: {response.club_id}</li>
					</ul>
				);
			} else if (user_type === 'player') {
				setData(
					<ul>
						<li>Email: {response.email}</li>
						<li>First Name: {response.first_name}</li>
						<li>Last Name: {response.last_name}</li>
						<li>Phone: {response.phone}</li>
						<li>Birthdate: {response.birthdate}</li>
						<li>Arrival: {response.arrival}</li>
						<li>Availability: {response.availability}</li>
						<li>Height: {response.height}</li>
						<li>Weight: {response.weight}</li>
						<li>Gender: {response.gender}</li>
						<li>Jersey Number: {response.jersey_number}</li>
						<li>Position: {response.position}</li>
						<li>Team_id: {response.team_id}</li>
					</ul>
				);		
			};
		};

	return (
		<div>
			<h1>My Profile...</h1>
			{data}
		</div>
	);
};

export default Profile;
