import React, { useState } from "react";
import "../styles/app.scss";
import * as teamAPI from "services/teamAPI";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { message} from 'antd';

const FormTeam = () => {
	const creatorId = useSelector((state) => state.userReducer.id);
	const clubId = useSelector((state) => state.userReducer.club_id);
	const coachId = useSelector((state) => state.userReducer.id);
	const [team, setTeam] = useState("");
	const history = useHistory();

	function onSubmit() {
		if (team === "") {
			document.getElementById("notice_teamname").innerHTML =
				"Merci de saisir un nom pour la team";
		} else {
			teamAPI.createTeam(team, creatorId, coachId, clubId).then((response) => {
				console.log(response);
				console.log(response.status);
				 history.push("/dashboardAdmin");
			})
			.then(() => message.success('You added a new team', 2.5))
		}
	}

	return (
		<div>
			<div className="text-center">
				<div className="container">
					<div className="row d-flex align-items-center">
						<div className=" form-group col-4 text-center pb-3 p-2 mx-auto">
							<label style={{ marginLeft: "10px", color: "grey" }}>
								Nom de la Team:
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Nom"
								id="title"
								onChange={(e) => setTeam(e.target.value)}
								value={team}
							/>
							<p id="notice_teamname" className="redtext"></p>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-outline-danger"
					style={{ marginTop: "25px", marginBottom: "25px" }}
					onClick={onSubmit}
				>
					sauvegarder
				</button>
			</div>
		</div>
	);
};

export default FormTeam;
