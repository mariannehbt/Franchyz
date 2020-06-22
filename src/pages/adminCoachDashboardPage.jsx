import React, {useEffect, useState} from "react";
import "../styles/form.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import * as clubAPI from "services/clubAPI.jsx";
import DashboardAdminTabs from "components/dashboardAdminTabs.jsx";

function AdminCoachDashboardPage() {
	const myClubId = useSelector((state) => state.userReducer.club_id);
	const myTeamId = useSelector((state) => state.userReducer.team_id);

	console.log(myClubId);

	useEffect(() => {
		loadClub();
	}, []);
	const [club, setClub] = useState("");

	async function loadClub() {
		const response = await clubAPI.getClub(myClubId);
		setClub(response);
	}

	return (
		<>
			<div className="text-center mt-5">
				<h1>Welcome to FRANCHYZ</h1>
				{myTeamId !== null ? (
					<div>
						<h4>You just created an acccount for your sport club.</h4>
						<h4>Start creating a club and adding a team to create events.</h4>
					</div>
				) : (
					<Link to="/newEvent">
						<button type="button" className="btn btn-primary mt-4">
							Create event
						</button>
					</Link>
				)}

				{myClubId === null ? (
					<Link to="/newClub">
						<button type="button" className="btn btn-primary mt-4 ml-3">
							Create club
						</button>
					</Link>
				) : (
					""
				)}
			</div>

			<DashboardAdminTabs club={club} />

			<br />
		</>
	);
}

export default AdminCoachDashboardPage;
