import React, { useEffect, useState } from 'react';
import ProfileEdit from 'components/profileEdit';
import ProfileShow from 'components/profileShow';
import * as userAPI from 'services/userAPI'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Profile = () => {

  console.log('deded')
  const [profile, setProfile] = useState('')
  const userId = useSelector(state => state.userReducer.userId);

  let { clubId, teamId, playerId } = useParams();


  useEffect(() => {
    setupElements()
  }, []);

  const setupElements = async () => {
    const response = await userAPI.getPlayer(clubId, teamId, playerId);
    if (userId === playerId) {
      setProfile(<ProfileEdit player={response} />);
    } else {
      setProfile(<ProfileShow player={response} />);
    }
  }
  return (
    <div className='text-center mt-5'>
      {profile}
    </div>
  );
};

export default Profile;
