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

const FormPractice = ({ EventType, ClubId, TeamId }) => {
	const [DateTimeP, setDateTimeP] = useState("");
	const [DurationP, setDurationP] = useState("");
	const [EventTitleP, setEventTitleP] = useState("");
	const [EventDescriptionP, setEventDescriptionP] = useState("");
	const [ZipCodeP, setZipCodeP] = useState("");
	const [CityP, setCityP] = useState("");
	const [CountryP, setCountryP] = useState("");
	const [AddressP, setAddressP] = useState("");

	const Club_id = useSelector((state) => state.userReducer.coach_id);
	const Team_id = useSelector((state) => state.userReducer.team_id);

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log(EventType);
		// console.log("Selected Time: ", value);
		setDateTimeP(dateString);
		console.log("Formatted Selected Time: ", dateString);
	}

	function onChangeDuration(valueMin) {
		console.log(valueMin);
		setDurationP(valueMin);
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	function disabledDate(current) {
		return current && current < moment().endOf("day");
	}

	function onSubmit() {
		if (DateTimeP === "") {
			document.getElementById("notice_datetime").innerHTML =
				"Merci de choisir une date";
		}
		if (EventTitleP === "") {
			document.getElementById("notice_title").innerHTML =
				"Merci de saisir un titre";
		}

		console.log(
			EventTitleP,
			EventDescriptionP,
			AddressP,
			CityP,
			CountryP,
			ZipCodeP,
			DateTimeP,
			DurationP,
			Club_id,
			Team_id
		);

		API.createPractice(
			EventTitleP,
			EventDescriptionP,
			AddressP,
			CityP,
			CountryP,
			ZipCodeP,
			DateTimeP,
			DurationP,
			Club_id,
			Team_id
		).then((response) => console.log(response));
	}

	return (
		<ConfigProvider locale={frFR}>
			<div>
				<Row>
					<Col span={10} offset={8}>
						<h3>L'entrainement:</h3>
						<label>Date et heure de l'entrainement:</label>
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

						{DateTimeP !== "" && (
							<h6 style={{ marginTop: "25px" }}> Date choisie: {DateTimeP}</h6>
						)}
						<label>Durée de l'entrainement:</label>
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
								onChange={(e) => setEventTitleP(e.target.value)}
								value={EventTitleP}
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
								onChange={(e) => setEventDescriptionP(e.target.value)}
								value={EventDescriptionP}
							/>
						</div>
						<h3>L'adresse de l'entrainement:</h3>
						<div className="form-group row col-12 ">
							<label style={{ marginLeft: "10px", color: "grey" }}>Adresse:</label>
							<input
								type="text"
								className="form-control"
								placeholder="L'adresse"
								id="address"
								onChange={(e) => setAddressP(e.target.value)}
								value={AddressP}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Code Postal:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Code postal"
								id="zipcode"
								onChange={(e) => setZipCodeP(e.target.value)}
								value={ZipCodeP}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Ville:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ville"
								id="city"
								onChange={(e) => setCityP(e.target.value)}
								value={CityP}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Pays:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Pays"
								id="country"
								onChange={(e) => setCountryP(e.target.value)}
								value={CountryP}
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
							sauvegarder
						</button>
					</Col>
				</Row>
			</div>
		</ConfigProvider>
	);
};

export default FormPractice;
