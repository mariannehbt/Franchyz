import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import "../styles/app.scss";
import * as API from "services/clubsAPI";

const FormClub = () => {
	const [CreationDate, setCreationDate] = useState("");
	const [ClubName, setClubName] = useState("");
	const [ClubDescription, setClubDescription] = useState("");
	const [ZipCode, setZipCode] = useState("");
	const [City, setCity] = useState("");
	const [Country, setCountry] = useState("");
	const [Address, setAddress] = useState("");
	const [League, setLeague] = useState("");
	const [Pool, setPool] = useState("");
	const [Conference, setConference] = useState("");

	function onSubmit() {
		if (ClubName === "") {
			document.getElementById("notice_clubname").innerHTML =
				"Merci de saisir un nom du club";
		}
		console.log(
			CreationDate,
			ClubName,
			ClubDescription,
			ZipCode,
			City,
			Country,
			Address,
			League,
			Pool,
			Conference
		);

		API.createClub(
			CreationDate,
			ClubName,
			ClubDescription,
			ZipCode,
			City,
			Country,
			Address,
			League,
			Pool,
			Conference
		).then((response) => console.log(response));
	}
	function onChange2(date, dateString) {
		console.log("test " + date, dateString);
		setCreationDate(dateString);
	}

	return (
		<div>
			<Row>
				<Col span={6} offset={6}>
					<DatePicker onChange={onChange2} />
					{CreationDate !== "" && (
						<p style={{ marginTop: "25px" }}>Date de création club: {CreationDate}</p>
					)}
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
							placeholder="Nom du club"
							id="title"
							onChange={(e) => setClubName(e.target.value)}
							value={ClubName}
						/>
						<p id="notice_clubname" className="redtext"></p>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Déscription du club"
							id="description"
							onChange={(e) => setClubDescription(e.target.value)}
							value={ClubDescription}
						/>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="League du club"
							id="league"
							onChange={(e) => setLeague(e.target.value)}
							value={League}
						/>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Conference du club"
							id="conference"
							onChange={(e) => setConference(e.target.value)}
							value={Conference}
						/>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Pool du club"
							id="pool"
							onChange={(e) => setPool(e.target.value)}
							value={Pool}
						/>
					</div>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="L'adresse"
							id="adresse"
							onChange={(e) => setAddress(e.target.value)}
							value={Address}
						/>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Code postal"
							id="zipcode"
							onChange={(e) => setZipCode(e.target.value)}
							value={ZipCode}
						/>
					</div>

					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
							type="text"
							className="form-control"
							placeholder="Ville"
							id="city"
							onChange={(e) => setCity(e.target.value)}
							value={City}
						/>
					</div>
					<div className="form-group row col-12">
						<label htmlFor="email"></label>
						<input
							style={{ marginTop: "25px" }}
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

export default FormClub;
