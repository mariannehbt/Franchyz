import React, { useEffect, useState } from 'react';
import ProfileEdit from 'components/profileEdit';
import * as playerAPI from 'services/playerAPI'
import { useParams } from 'react-router-dom'

const [player, setPlayer] = useState('')

let { clubId, teamId, playerId } = useParams();


  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer = async () => {
    const response = await playerAPI.getPlayer(clubId, teamId, playerId);
    setPlayer(response);
  }

const Profile = () => {
  return (
    <div className='text-center mt-5'>
      <ProfileEdit player={player} />
    </div>
  );
};

export default Profile;
