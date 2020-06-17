// import React from "react";
import FormGame from "components/formGame.jsx";
import { Radio } from "antd";
import Date_picker from "images/date_picker.png";
import React, { useState } from "react";
import {
	Input,
	Col,
	Row,
	Select,
	Button,
	InputNumber,
	DatePicker,
	AutoComplete,
	Cascader,
} from "antd";

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
						// defaultValue="competition"
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
						<Option value="game">Competition</Option>
						<Option value="practice">Entrainement</Option>
					</Select>
				</div>
			</div>
			<hr className="my-4" style={{ width: "600px" }}></hr>

			{/* {EventType === "competition" ? (
				<FormGame style={{ marginTop: "25px" }} />
			) : (
				<FormPractice style={{ marginTop: "25px" }} />
			)} */}
			<FormGame style={{ marginTop: "25px" }} />
			<Row>
				<Col span={3} offset={10}>
					<Button className="mt-5" block>
						Submit
					</Button>
				</Col>
			</Row>

			{/* <img
				src={Date_picker}
				alt="datepicker"
				style={{ height: "250px", marginLeft: "900px" }}
			/> */}
		</div>
	);
}

export default CreateEvents;
