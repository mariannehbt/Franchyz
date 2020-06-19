import React, { useState } from "react";
import { Col, Row } from "antd";
// import "../styles/app.scss";
import * as API from "services/teamAPI";
import { useSelector } from "react-redux";

const FormTeam = () => {
	//const Creator_id = useSelector((state) => state.userReducer.id);
	const [TeamName, setTeamName] = useState("");

	function onSubmit() {
		if (TeamName === "") {
			document.getElementById("notice_teamname").innerHTML =
				"Merci de saisir un nom pour la team";
		}
		console.log(TeamName);

		// API.createTeam(
		// 	CreationDate,
		// ).then((response) => {
		// 	console.log(response);
		// });
	}

	return (
		<div>
			<Row>
				<Col span={8} offset={8}>
					<div className="form-group row col-12">
						<label style={{ marginLeft: "10px", color: "grey" }}>
							Nom de la Team:
						</label>
						<input
							type="text"
							className="form-control"
							placeholder="Nom"
							id="title"
							onChange={(e) => setTeamName(e.target.value)}
							value={TeamName}
						/>
						<p id="notice_teamname" className="redtext"></p>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={5} offset={11}>
					<button
						type="submit"
						className="btn btn-outline-danger"
						style={{ marginTop: "25px", marginBottom: "25px" }}
						onClick={onSubmit}
					>
						sauvegarder
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default FormTeam;
