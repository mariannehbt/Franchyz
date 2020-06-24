import {INFO_USER_UP, INFO_USER_DOWN} from '../types/userTypes.jsx'

function infoUserUp(decoded_token){
  return {
    type: INFO_USER_UP,
    email: decoded_token['email'],
    firstName: decoded_token['first_name'],
    lastName: decoded_token['last_name'],
    isAdmin: decoded_token['admin?'],
    clubId: decoded_token['club_id'],
    teamId: decoded_token['team_id'],
  }
}

function infoUserDown(decoded_token){
  return {
    type: INFO_USER_DOWN,
  }
}

export {infoUserUp, infoUserDown}
