import React, { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const FormPractice = () => {
	const [DateTime, setDateTime] = useState("");

	function onChange(value, dateString) {
		console.log("Selected Time: ", value);
		console.log("Formatted Selected Time: ", dateString);
		setDateTime(dateString);
		console.log(DateTime);
	}

	function onOk(value) {
		console.log("onOk: ", value);
	}

	return (
		<div>
			<div className="container text-center">
				{/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
				<br></br>
				<p>{DateTime}</p>
			</div>
		</div>
	);
};

export default FormPractice;
