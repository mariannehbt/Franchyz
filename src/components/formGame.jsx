import React, { useState } from "react";
import { DatePicker, Col, Row, Button } from "antd";
import moment from "moment";
import { Input } from "antd";
import localization from "moment/locale/fr";
import { InputNumber } from "antd";

const FormGame = ({ EventType }) => {
	const [DateTime, setDateTime] = useState("");
	const [Duration, setDuration] = useState("");
	const [EventTitle, setEventTitle] = useState("");

	const [EventDescription, setEventDescription] = useState("");
	const [ZipCode, setZipCode] = useState("");
	const [City, setCity] = useState("");
	const [Country, setCountry] = useState("");
	const [Address, setAddress] = useState("");
	const { TextArea } = Input;

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log(EventType);
		// console.log("Selected Time: ", value);
		setDateTime(dateString);
		// let title = document.getElementById("title").value;
		// setEventTitle(title);
		let description = document.getElementById("description").value;
		setEventDescription(description);
		let zipcode = document.getElementById("zipcode").value;
		setZipCode(zipcode);
		let city = document.getElementById("city").value;
		setCity(city);
		let country = document.getElementById("country").value;
		setCountry(country);

		console.log("Formatted Selected Time: ", dateString);
		console.log("changed", value);
		console.log(Duration);

		console.log(EventDescription);
		console.log(ZipCode);
		console.log(Address);
		console.log(Country);
		console.log(City);
	}

	function onChangeDuration(valueMin) {
		console.log(valueMin);
		setDuration(valueMin);
	}

	function onChangeTitle() {
		let title = document.getElementById("title").value;
		setEventTitle(title);
		console.log(EventTitle);
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	function disabledDate(current) {
		// Can not select days before today and today
		return current && current < moment().endOf("day");
	}

	// function onSubmit() {
	// 	const data = {
	// 		title: values.username,
	// 		long_description: values.username,
	// 		address: values.username,
	// 		city: values.email,
	// 		country: values.password,
	// 		zip_code: values.password,
	// 		starting_date_time: DateTime,
	// 		duration: Duration,
	// 		canceled: false,
	// 	};

	// 	if (EventType == "game") {
	// 		let club_id = 1;
	// 		let team_id = 1;
	// 		let urlCreateGame =
	// 			"https://localhost/3000/clubs/" + club_id + "/teams/" + team_id + "games";

	// 		console.log(urlCreateGame);
	// 		console.log(urlCreatePractice);

	// 		fetch(urlCreateGame, {
	// 			method: "post",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(data),
	// 		})
	// 			.then((res) => res.json())
	// 			.then((post) => console.log(post));
	// 	} if (EventType == "practice")
	// 		let club_id = 1;
	// 		let team_id = 1;
	// 		let urlCreatePractice =
	// 			"https://localhost/3000/clubs/" +
	// 			club_id +
	// 			"/teams/" +
	// 			team_id +
	// 			"practices";

	// 		fetch(urlCreatePractice, {
	// 			method: "post",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(data),
	// 		})
	// 			.then((res) => res.json())
	// 			.then((post) => console.log(post));
	// 	}
	// }

	return (
		<div>
			<Row>
				<Col span={6} offset={6}>
					<DatePicker
						format="DD-MM-YY HH:mm"
						disabledDate={disabledDate}
						onChange={onChange}
						onOk={onOk}
						showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
					/>
					{DateTime !== "" && (
						<p style={{ marginTop: "25px" }}> Date choisie: {DateTime}</p>
					)}
					<InputNumber
						style={{ marginTop: "25px" }}
						defaultValue={120}
						step={5}
						min={0}
						max={100000}
						formatter={(valueMin) => `${valueMin} min`}
						parser={(valueMin) => valueMin.replace(" min", "")}
						onChange={onChangeDuration}
					/>
				</Col>
			</Row>

			<Row>
				<Col span={6} offset={6}>
					<Input
						placeholder="Titre de l'évenement"
						style={{ marginTop: "25px" }}
						id="title"
						onChange={onChangeTitle}
					/>
				</Col>
			</Row>

			<Row>
				<Col span={12} offset={6}>
					<TextArea
						style={{ width: "250", marginTop: "25px" }}
						placeholder="Ajouter une description pour votre evenement."
						id="description"
						onChange={onChange}
						autoSize={{ minRows: 2, maxRows: 6 }}
					/>
					<div style={{ margin: "24px 0" }} />
				</Col>
			</Row>
			<Row>
				<Col span={6} offset={6}>
					<Input.Group size="medium">
						<Row gutter={8}>
							<Col span={8}>
								<Input
									placeholder="Code postal"
									id="zipcode"
									onChange={(e) => setZipCode(e.target.value)}
								/>
							</Col>
							<Col span={10}>
								<Input
									placeholder="Adresse"
									id="address"
									onChange={(e) => setAddress(e.target.value)}
								/>
							</Col>
						</Row>
						<Row style={{ marginTop: "25px" }} gutter={8}>
							<Col span={8}>
								<Input
									placeholder="Ville"
									id="city"
									onChange={(e) => setCity(e.target.value)}
								/>
							</Col>
							<Col span={10}>
								<Input
									placeholder="Pays"
									id="country"
									onChange={(e) => setCountry(e.target.value)}
								/>
							</Col>
						</Row>
					</Input.Group>
				</Col>
			</Row>
			<Row>
				<Col span={3} offset={10}>
					<button
						type="submit"
						className="btn btn-outline-dark"
						style={{ marginTop: "25px" }}
						// onSubmit={onSubmit}
					>
						submit
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default FormGame;
