import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import moment from "moment";
import localization from "moment/locale/fr";
import { InputNumber } from "antd";
import "../styles/app.scss";
import * as API from "services/eventsAPI";
import { ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";
import { useSelector } from "react-redux";

const FormGame = ({ EventType, ClubId, TeamId }) => {
	const [DateTime, setDateTime] = useState("");
	const [Duration, setDuration] = useState("");
	const [EventTitle, setEventTitle] = useState("");
	const [EventDescription, setEventDescription] = useState("");
	const [ZipCode, setZipCode] = useState("");
	const [City, setCity] = useState("");
	const [Country, setCountry] = useState("");
	const [Address, setAddress] = useState("");

	const Club_id = useSelector((state) => state.userReducer.coach_id);
	const Team_id = useSelector((state) => state.userReducer.team_id);

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log(EventType);
		setDateTime(dateString);
		console.log("Formatted Selected Time: ", dateString);
	}

	function onChangeDuration(valueMin) {
		console.log(valueMin);
		setDuration(valueMin);
	}

	function onOk(value) {
		console.log("onOk: ", value);
		setDuration(value);
	}

	function disabledDate(current) {
		return current && current < moment().endOf("day");
	}

	function onSubmit() {
		if (DateTime === "") {
			document.getElementById("notice_datetime").innerHTML =
				"Merci de choisir une date";
		}
		if (EventTitle === "") {
			document.getElementById("notice_title").innerHTML =
				"Merci de saisir un titre";
		}
		console.log(
			EventTitle,
			EventDescription,
			Address,
			City,
			Country,
			ZipCode,
			DateTime,
			Duration,
			Club_id,
			Team_id
		);

		API.createGame(
			EventTitle,
			EventDescription,
			Address,
			City,
			Country,
			ZipCode,
			DateTime,
			Duration,
			Club_id,
			Team_id
		).then((response) => console.log(response));
	}
	return (
		<ConfigProvider locale={frFR}>
			<div>
				<Row>
					<Col span={10} offset={8}>
						<h3>Competition:</h3>
						<label>Date et heure de la competition:</label>
						<br />
						<DatePicker
							id="datetime"
							format="DD-MM-YY HH:mm"
							disabledDate={disabledDate}
							onChange={onChange}
							onOk={onOk}
							showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
						/>
						<p id="notice_datetime" className="redtext"></p>

						{DateTime !== "" && (
							<h6 style={{ marginTop: "25px" }}> Date choisie: {DateTime}</h6>
						)}
						<label>Durée de la competition:</label>
						<br />
						<InputNumber
							style={{ marginBottom: "15px" }}
							defaultValue={0}
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
					<Col span={8} offset={8}>
						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Titre:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Saisir un titre"
								id="title"
								onChange={(e) => setEventTitle(e.target.value)}
								value={EventTitle}
							/>
							<p id="notice_title" className="redtext"></p>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Déscription:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Saisir une description"
								id="description"
								onChange={(e) => setEventDescription(e.target.value)}
								value={EventDescription}
							/>
						</div>
						<h3>L'adresse de la competition:</h3>
						<div className="form-group row col-12 ">
							<label style={{ marginLeft: "10px", color: "grey" }}>Adresse:</label>
							<input
								type="text"
								className="form-control"
								placeholder="L'adresse"
								id="address"
								onChange={(e) => setAddress(e.target.value)}
								value={Address}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Code Postal:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Code postal"
								id="zipcode"
								onChange={(e) => setZipCode(e.target.value)}
								value={ZipCode}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Ville:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ville"
								id="city"
								onChange={(e) => setCity(e.target.value)}
								value={City}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Pays:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Pays"
								id="country"
								onChange={(e) => setCountry(e.target.value)}
								value={Country}
							/>
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
							Sauvegarder
						</button>
					</Col>
				</Row>
			</div>
		</ConfigProvider>
	);
};

export default FormGame;
