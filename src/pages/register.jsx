import React, { useEffect, useState } from 'react';
import { logup } from 'redux/middlewares/authMiddlewares';
import { useSelector, useDispatch } from 'react-redux';
import * as api_club from '../services/clubAPI.jsx';
import * as api_team from '../services/teamAPI.jsx';
import '../styles/form.scss';

const Register = () => {
	const errors = useSelector(state => state.authReducer.error);
	const [dataClubs, setDataClubs] = useState([]);
	const [clubId, setClubId] = useState(1);
	const [dataTeams, setDataTeams] = useState([]);
	const dispatch = useDispatch();

	function setupAlert() {
		let ans;
		let messageErrors = '';

		if (errors !== undefined) {
			for (const error in errors) {
				messageErrors = messageErrors + `${error} ${errors[error]} \n`
			};
			ans = (
				<div class='alert alert-danger alert-dismissible' role='alert'>
					<button type="button" class="close" data-dismiss="alert">&times;</button>
					{messageErrors}
				</div>
			);
		} else {
			ans = null;
		};

		return ans
	};

	const getDataClubs = () => {
		api_club.getAllClubs()
		.then(response => {
			console.log(response);
			let clubs = response.map((club, key) => (
				<option key={key} value={club.id}>{club.name}</option>
			));
			setDataClubs(clubs);
		});
	};

	const getClubId = () => {
		setClubId(document.getElementById('club').value);
		console.log(clubId);
	};

	const getDataTeams = () => {
		api_team.getAllTeams(clubId)
		.then(response => {
			console.log(response);
			let teams = response.map((team, key) =>(
				<option key={key} value={team.id}>{team.title}</option>
			));
			setDataTeams(teams);
		});
	};

	useEffect(getDataClubs, []);
	useEffect(getDataTeams, [clubId]);

	const submit = (event) => {
		event.preventDefault();
		let type = document.getElementById('type').value;
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		let team = document.getElementById('team').value;
		dispatch(logup(email, password, type, team));
	};

	return (
		<div>
			{setupAlert()}
			
			<form className="form p-4 mt-3 mb-3 rounded" action="/action_page.php" onSubmit={submit}>

				<div className="form-group">
					<label htmlFor="email">You are:</label>
					<select type="email" className="form-control" placeholder="Enter email" id="type">
						<option value="coach">Coach</option>
						<option value="player">Player</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="email">If player, choose your club:</label>
					<select type="email" className="form-control" placeholder="Enter email" id="club" onChange={getClubId}>
						{dataClubs}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="email">Then, choose your team:</label>
					<select type="email" className="form-control" placeholder="Enter email" id="team">
						{dataTeams}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email address:</label>
					<input type="email" className="form-control" placeholder="Enter email" id="email" />
				</div>

				<div className="form-group">
					<label htmlFor="pwd">Password:</label>
					<input type="password" className="form-control" placeholder="Enter password" id="password" />
				</div>

				<div className="form-group form-check">
					<label className="form-check-label">
						<input className="form-check-input" type="checkbox" /> Remember me
					</label>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>

			</form>
		</div>
	);
};

export default Register;
