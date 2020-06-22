import React, {useEffect, useState} from "react";
import "../styles/form.scss";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import DashboardAdmin from "components/dashboardAdmin.jsx";
import * as clubAPI from "services/clubAPI.jsx";
import {Tabs} from "antd";
import TeamList from "components/teamList.jsx";

function AdminCoachDashboardPage() {
	const {TabPane} = Tabs;

	const myClubId = useSelector((state) => state.userReducer.club_id);

	useEffect(() => {
		loadClub();
	}, []);
	const [club, setClub] = useState("");

	async function loadClub() {
		const response = await clubAPI.getClub(myClubId);
		setClub(response);
	}

	function setupElements() {
		let ans;

		if (myClubId == null) {
			ans = (
				<Link to="/newClub">
					<button type="button" className="btn btn-primary">
						{" "}
						Create Club{" "}
					</button>{" "}
				</Link>
			);
		} else {
			ans = <DashboardAdmin club={club} />;
		}
		return ans;
	}

	return (
		<>
			<div className="text-center mt-5">
				<h1>Welcome to FRANCHYZ</h1>
				<h4>You just created an acccount for your sport club.</h4>
				<h4>Start planning training sessions and competitions for your teams.</h4>
				<Link to="/create-event">
					<button type="button" className="btn btn-primary">
						{" "}
						Create event{" "}
					</button>{" "}
				</Link>
				{myClubId !== "" ? (
					<Link to="/newClub">
						<button type="button" className="btn btn-primary">
							{" "}
							Create club{" "}
						</button>{" "}
					</Link>
				) : (
					""
				)}
			</div>
			{/* {setupElements()} */}
			<div className="container rounded mt-5" style={{backgroundColor: "#E8E7E7"}}>
				<br />
				<div className="card-container">
					<Tabs type="card">
						<TabPane tab="Your Club" key="1">
							<h6> Club details:</h6>
							<p>Club name:{club.name}</p>
							<p>{club.name}</p>
							<p> Club description: {club.description}</p>
							<p>Pool: {club.pool}</p>
							<p>Conference: {club.conference}</p>
							<br />
							<h6> Club address:</h6>
							<p>Address:{club.address}</p>
							<p>Zip code:{club.zip_code}</p>
							<p>City: {club.city}</p>
							<p>Country: {club.country}</p>
						</TabPane>
						<TabPane tab="Your teams" key="2">
							<TeamList teams={club.teams} />
							<Link to="/create-team">
								<button type="button" className="btn btn-primary ml-4">
									Add new Team
								</button>
							</Link>
						</TabPane>
					</Tabs>
				</div>
				<br></br>
			</div>

			<br />
		</>
	);
}

export default AdminCoachDashboardPage;
