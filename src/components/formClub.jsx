import React, { useState } from "react";
import { DatePicker, Col, Row } from "antd";
import "../styles/app.scss";
import * as API from "services/clubsAPI";
import { ConfigProvider } from "antd";
import frFR from "antd/es/locale/fr_FR";
import { useSelector } from "react-redux";

const FormClub = () => {
	const Creator_id = useSelector((state) => state.userReducer.id);
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
			Conference,
			Creator_id
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
			Conference,
			Creator_id
		).then((response) => {
			console.log(response);
		});
	}
	function onChange2(date, dateString) {
		console.log("test " + date, dateString);
		setCreationDate(dateString);
	}

	return (
		<ConfigProvider locale={frFR}>
			<div>
				<Row>
					<Col span={10} offset={8}>
						<h3>Le club:</h3>
						<label>Date de création du club:</label>
						<br />
						<DatePicker onChange={onChange2} />
						{CreationDate !== "" && (
							<h6 style={{ marginTop: "25px" }}>Date création club: {CreationDate}</h6>
						)}
					</Col>
				</Row>
				<br />

				<Row>
					<Col span={8} offset={8}>
						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Nom du club:</label>
							<input
								type="text"
								className="form-control"
								placeholder="Nom"
								id="title"
								onChange={(e) => setClubName(e.target.value)}
								value={ClubName}
							/>
							<p id="notice_clubname" className="redtext"></p>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>
								Déscription du club
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Déscription"
								id="description"
								onChange={(e) => setClubDescription(e.target.value)}
								value={ClubDescription}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>
								League du club
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="League"
								id="league"
								onChange={(e) => setLeague(e.target.value)}
								value={League}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>
								Conference du club
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Conference"
								id="conference"
								onChange={(e) => setConference(e.target.value)}
								value={Conference}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Pool</label>
							<input
								type="text"
								className="form-control"
								placeholder="Pool"
								id="pool"
								onChange={(e) => setPool(e.target.value)}
								value={Pool}
							/>
						</div>
						<h3>L'adresse du club:</h3>
						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>
								L'adresse du club
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="L'adresse"
								id="adresse"
								onChange={(e) => setAddress(e.target.value)}
								value={Address}
							/>
						</div>

						<div className="form-group row col-12">
							<label style={{ marginLeft: "10px", color: "grey" }}>Code postal</label>
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
							<label style={{ marginLeft: "10px", color: "grey" }}>Ville</label>
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
							<label style={{ marginLeft: "10px", color: "grey" }}>Pays</label>
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
							sauvegarder
						</button>
					</Col>
				</Row>
			</div>
		</ConfigProvider>
	);
};

export default FormClub;
