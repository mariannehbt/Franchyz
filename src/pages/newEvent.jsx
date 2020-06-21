import React, { useState, useEffect } from "react";
import FormGame from "components/formGame.jsx";
import { Select } from "antd";
import FormPractice from "components/formPractice";
import PlayerList from "components/playerList";
import { useSelector, useDispatch } from 'react-redux';
import * as teamAPI from 'services/teamAPI'

function CreateEvents() {

  const clubId = useSelector(state => state.userReducer.club_id);
  const [eventType, setEventType] = useState("");
  const [teams, setTeams] = useState('')
  const { Option } = Select;

  useEffect(() => { setupTeams() }, [])

  async function setupTeams(){
    const ans = await teamAPI.getTeamsOfClub(clubId)
    console.log(ans)
    //setTeams(ans)
        //<PlayerList players={teams[0].players} />
  }

  function onChange(value) {
    setEventType(value);
  }

  return (
    <div>
      <br />
      <br />
      <hr className="my-4" style={{ width: "600px" }}></hr>
      <div className="bg-dark pb-3 p-2 mx-auto rounded select" style={{ width: "35%" }} >

        <h3 className="text-light text-center">Choisir le type d'événement?</h3>
        <div className="text-center">
          <Select className="text-center" showSearch style={{ width: 300 }} placeholder="Choisir le type d'evenement" optionFilterProp="children" onChange={onChange} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 } >
            <Option value="game">Competition</Option>
            <Option value="practice">Entrainement</Option>
          </Select>
        </div>
      </div>
      <hr className="my-4" style={{ width: "600px" }}></hr>

      {eventType === "game" ? (
        <FormGame style={{ marginTop: "25px" }} eventType={eventType} />
      ) : (
        <FormPractice style={{ marginTop: "25px" }} eventType={eventType} />
      )}
    </div>
  );
}

export default CreateEvents;
