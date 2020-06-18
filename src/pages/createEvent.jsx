import FormGame from "components/formGame.jsx";
import React, { useState, useEffect } from "react";
import { Select } from "antd";
import FormPractice from "components/formPractice";
import * as API from "services/coachesAPI";

function CreateEvents() {
	const [EventType, setEventType] = useState("");
	const [ClubId, setClubId] = useState("");
	const [TeamId, setTeamId] = useState("");
	const { Option } = Select;

	function onChange(value) {
		console.log(`selected ${value}`);
		setEventType(value);
	}

	//Attentio nà activer!
	// useEffect(
	// 	API.getClubId().then((response) => setClubId),
	// 	[ClubId]
	// );

	return (
		<div>
			<br />
			<br />
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Choisir le type d'événement?</h3>
				<div className="text-center">
					<Select
						className="text-center"
						showSearch
						style={{ width: 300 }}
						placeholder="Choisir le type d'evenement"
						optionFilterProp="children"
						onChange={onChange}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="game">Competition</Option>
						<Option value="practice">Entrainement</Option>
					</Select>
				</div>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>

			{EventType === "game" ? (
				<FormGame
					style={{ marginTop: "25px" }}
					EventType={EventType}
					ClubId={ClubId}
					TeamId={TeamId}
				/>
			) : (
				<FormPractice
					style={{ marginTop: "25px" }}
					EventType={EventType}
					TeamId={TeamId}
					ClubId={ClubId}
				/>
			)}
		</div>
	);
}

export default CreateEvents;
