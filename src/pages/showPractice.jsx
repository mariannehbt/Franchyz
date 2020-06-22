import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import * as eventsAPI from 'services/eventsAPI.jsx'
import moment from 'moment'
import "../styles/app.scss";
import localization from 'moment/locale/fr';


function PracticeShow() {
	let {practice_id} = useParams();
	 const [practice, setPractice] = useState("");

	 useEffect(() => {  eventsAPI.getPractice(practice_id).then((response) => setPractice(response));
	
	}, [])

	  console.log("response" + practice.canceled);
	  moment.updateLocale('fr', localization);

	return <>
<div className="container mt-5"> 
	<h3> {practice.title}</h3>
	<p> Event description: {practice.description}</p>
	<br/>
	<br/>
	<h6>Location</h6>
	<p> {practice.address}</p>
	<p> {practice.city}</p>
	<p> {practice.zip_code} {practice.country}</p>

	<br/>
	<h6> Date and Time </h6>
	<p> {moment(practice.starting_date_time).format("LLLL")}</p>
	<h6> Duration in min: </h6>
	<p>{practice.duration}</p>
	{ practice.canceled !== "false" ? "" : <p>The event is canceled.</p>

	}
	</div>


	</>;
}

export default PracticeShow;
