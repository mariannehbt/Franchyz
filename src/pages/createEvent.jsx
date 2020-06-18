import FormGame from "components/formGame.jsx";
// import Date_picker from "images/date_picker.png";
import React, { useState, useEffect } from "react";
import { Col, Row, Select } from "antd";
import FormPractice from "components/formPractice";
import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";

function CreateEvents() {
	const [EventType, setEventType] = useState("");
	const { Option } = Select;

	function onChange(value) {
		console.log(`selected ${value}`);
		setEventType(value);
	}

	useEffect(() => {
		console.log("fetch_club_id");
	});

	return (
		<div>
			<br />
			<br />
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Choisir le type d'évenement?</h3>
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
				<FormGame style={{ marginTop: "25px" }} EventType={EventType} />
			) : (
				<FormPractice style={{ marginTop: "25px" }} EventType={EventType} />
			)}

			{/* <img
				src={Date_picker}
				alt="datepicker"
				style={{ height: "250px", marginLeft: "900px" }}
			/> */}
		</div>
	);
}

export default CreateEvents;
