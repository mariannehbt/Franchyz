import React, { useState } from "react";
// import { DatePicker } from "antd";
import { DatePicker, message, Alert } from "antd";
import moment from "moment";
import { Input } from "antd";
import localization from "moment/locale/fr";

const FormGame = () => {
	const [DateTime, setDateTime] = useState("");
	const { TextArea } = Input;

	moment.updateLocale("fr", localization);

	function onChange(value, dateString) {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
		setDateTime(dateString);
		console.log(DateTime);
		// message.info(`Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`);
		setDateTime(value.format("MMMM Do YYYY, h:mm"));
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	return (
		<div>
			<div className="container text-center">
				<DatePicker showTime onChange={onChange} onOk={onOk} />
				<br></br>
				{DateTime !== "" && (
					<p style={{ marginTop: "25px" }}> Date choisie: {DateTime}</p>
				)}
			</div>
			<div className="ml-5">
				<h5>Ajouter des détails:</h5>
			</div>
			<TextArea
				style={{ width: "250" }}
				placeholder="Autosize height with minimum and maximum number of lines"
				autoSize={{ minRows: 2, maxRows: 6 }}
			/>
			<div style={{ margin: "24px 0" }} />
		</div>
	);
};

export default FormGame;
