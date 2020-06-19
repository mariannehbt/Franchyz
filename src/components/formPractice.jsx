import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import moment from "moment";
import localization from "moment/locale/fr";
import { InputNumber } from "antd";
import "../styles/app.scss";
import * as API from "services/eventsAPI";

const FormPractice = ({ EventType, ClubId, TeamId }) => {
	const [DateTime, setDateTime] = useState("");
	const [Duration, setDuration] = useState("");
	const [EventTitle, setEventTitle] = useState("");
	const [EventDescription, setEventDescription] = useState("");
	const [ZipCode, setZipCode] = useState("");
	const [City, setCity] = useState("");
	const [Country, setCountry] = useState("");
	const [Address, setAddress] = useState("");

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log(EventType);
		// console.log("Selected Time: ", value);
		setDateTime(dateString);
		console.log("Formatted Selected Time: ", dateString);
	}

	function onChangeDuration(valueMin) {
		console.log(valueMin);
		setDuration(valueMin);
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	function disabledDate(current) {
		return current && current < moment().endOf("day");
	}

	function onSubmit() {
		if (DateTime === "") {
			document.getElementById("notice_datetime").innerHTML =
				"Merci de choisir une date";
		}
		if (DateTime === "") {
			document.getElementById("notice_title").innerHTML =
				"Merci de saisir un titre";
		}
		const data = {
			title: EventTitle,
			long_description: EventDescription,
			address: Address,
			city: City,
			country: Country,
			zip_code: ZipCode,
			starting_date_time: DateTime,
			duration: Duration,
			canceled: false,
		};
		console.log(data);
	}
	// API.createPractice(
	// 	EventTitle,
	// 	EventDescription,
	// 	Address,
	// 	City,
	// 	Country,
	// 	ZipCode,
	// 	DateTime,
	// 	Duration
	// ).then((response) => console.log(response));

	return (
		<div>
			<Row>
				<Col span={6} offset={6}>
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
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Saisir un titre"
							id="title"
							onChange={(e) => setEventTitle(e.target.value)}
							value={EventTitle}
						/>
						<p id="notice_title" className="redtext"></p>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Saisir une description"
							id="description"
							onChange={(e) => setEventDescription(e.target.value)}
							value={EventDescription}
						/>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							type="text"
							className="form-control"
							placeholder="L'adresse"
							id="address"
							onChange={(e) => setAddress(e.target.value)}
							value={Address}
						/>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							type="text"
							className="form-control"
							placeholder="Code postal"
							id="zipcode"
							onChange={(e) => setZipCode(e.target.value)}
							value={ZipCode}
						/>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							type="text"
							className="form-control"
							placeholder="Ville"
							id="city"
							onChange={(e) => setCity(e.target.value)}
							value={City}
						/>
					</div>
				</Col>
			</Row>

			<Row>
				<Col span={8} offset={6}>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
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
				<Col span={3} offset={10}>
					<button
						type="submit"
						className="btn btn-outline-dark"
						style={{ marginTop: "25px" }}
						onClick={onSubmit}
					>
						submit
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default FormPractice;
