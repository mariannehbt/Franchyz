import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import * as eventsAPI from 'services/eventsAPI.jsx'
import moment from 'moment'
import "../styles/app.scss";
import localization from 'moment/locale/fr';

function GameShow() {
	let {game_id} = useParams();
	 const [game, setGame] = useState("");

	 useEffect(() => {  eventsAPI.getGame(game_id).then((response) => setGame(response));
	
	}, [])

	  console.log("response" + game.canceled);
	//   console.log("response" + practice.players);
	  moment.updateLocale('fr', localization);

	return <>
{/* <div className="card" style={{height:"350px", width:"400px", marginLeft:"100px", marginTop:"100px"}}>
  <div className="card-header">
  <div className="text-uppercase">{practice.title}</div> 
  </div>
  <div className="card-body">
	<h6>Location</h6>
	<p> {practice.address}</p>
	<p> {practice.city}</p>
	<p> {practice.zip_code} {practice.country}</p>
	<br/>
	<h6> Date and Time </h6>
	<p> {moment(practice.starting_date_time).format("LLLL")}</p>
	<h6> Duration in min: </h6>
	<p>{practice.duration}</p>
	{ practice.canceled !== "false" ? "" : <h6 className="redtext">The event is canceled.</h6>
	}
  </div>
</div> */}
	
	</>;
}

export default GameShow;
