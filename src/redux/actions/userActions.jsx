import {INFO_USER_UP, INFO_USER_DOWN} from '../types/userTypes.jsx'

function infoUserUp(decodedToken){
  return {
    type: INFO_USER_UP,
    email: decodedToken['email'],
    firstName: decodedToken['first_name'],
    lastName: decodedToken['last_name'],
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken['club_id'],
    teamId: decodedToken['team_id'],
  }
}

function infoUserDown(decodedToken){
  return {
    type: INFO_USER_DOWN,
  }
}

export {infoUserUp, infoUserDown}
