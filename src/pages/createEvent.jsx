// import React from "react";
import FormGame from "components/formGame.jsx";
import FormPractice from "components/formPractice.jsx";
import { Radio } from "antd";
import Date_picker from "images/date_picker.png";
import { Select } from "antd";
import React, { useState } from "react";

function CreateEvents() {
	const [EventType, setEventType] = useState("");
	const { Option } = Select;

	function onChange(value) {
		console.log(`selected ${value}`);
		setEventType(value);
	}

	function onBlur() {
		console.log("blur");
	}

	function onFocus() {
		console.log("focus");
	}

	function onSearch(val) {
		console.log("search:", val);
	}
	return (
		<div>
			{/* <Radio.Group defaultValue="a" size="large">
				<Radio.Button value="a">Competition</Radio.Button>
				<Radio.Button value="b">Entrainement</Radio.Button>
			</Radio.Group> */}
			<br />
			<br />
			<hr className="my-4" style={{ width: "600px" }}></hr>
			<div
				className="bg-dark pb-3 p-2 mx-auto rounded select"
				style={{ width: "35%" }}
			>
				<h3 className="text-light text-center">Creation d'évenement</h3>
				<div className="text-center">
					<Select
						className="text-center"
						showSearch
						style={{ width: 300 }}
						placeholder="Choisir le type d'evenement"
						optionFilterProp="children"
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						onSearch={onSearch}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="competition">Competition</Option>
						<Option value="entrainement">Entrainement</Option>
					</Select>
				</div>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>

			<br />

			<br></br>
			<br></br>
			{EventType === "competition" ? <FormGame /> : <FormPractice />}
			{/* <img
				src={Date_picker}
				alt="datepicker"
				style={{ height: "250px", marginLeft: "900px" }}
			/> */}
		</div>
	);
}

export default CreateEvents;
