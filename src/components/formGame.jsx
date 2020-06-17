import React, { useState } from "react";
// import { DatePicker } from "antd";
import { DatePicker, Col, Row } from "antd";
import moment from "moment";
import { Input } from "antd";
import localization from "moment/locale/fr";

const FormGame = () => {
	const [DateTime, setDateTime] = useState("");
	const { TextArea } = Input;

	moment.updateLocale("fr", localization);
	const { RangePicker } = DatePicker;

	function onChange(value, dateString) {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
		setDateTime(value.format("MMMM Do YYYY, h:mm"));
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	function disabledDate(current) {
		// Can not select days before today and today
		return current && current < moment().endOf("day");
	}

	return (
		<div>
			<Row>
				<Col span={6} offset={6}>
					<DatePicker
						format="DD-MM-YYYY HH:mm"
						disabledDate={disabledDate}
						onChange={onChange}
						onOk={onOk}
						showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
					/>
					<RangePicker picker="month" />
					{DateTime !== "" && (
						<p style={{ marginTop: "25px" }}> Date choisie: {DateTime}</p>
					)}
				</Col>
			</Row>
			<div className="ml-5">
				<h5>Ajouter des détails:</h5>
			</div>
			<Row>
				<Col span={6} offset={6}>
					<Input placeholder="Titre de l'évenement" />
				</Col>
			</Row>

			<Row>
				<Col span={12} offset={6}>
					<TextArea
						style={{ width: "250", marginTop: "25px" }}
						placeholder="Ajouter une description pour votre evenement."
						autoSize={{ minRows: 2, maxRows: 6 }}
					/>
					<div style={{ margin: "24px 0" }} />
				</Col>
			</Row>
			<div className="ml-5">
				<h5>L'addresse:</h5>
			</div>
			<Row>
				<Col span={6} offset={6}>
					<Input.Group size="medium">
						<Row gutter={8}>
							<Col span={8}>
								<Input placeholder="Code postal" />
							</Col>
							<Col span={10}>
								<Input placeholder="Adresse" />
							</Col>
						</Row>
						<Row style={{ marginTop: "25px" }} gutter={8}>
							<Col span={8}>
								<Input placeholder="Ville" />
							</Col>
							<Col span={10}>
								<Input placeholder="Pays" />
							</Col>
						</Row>
					</Input.Group>
				</Col>
			</Row>
		</div>
	);
};

export default FormGame;
