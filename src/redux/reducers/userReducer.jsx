import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { INFO_USER_UP, INFO_USER_DOWN } from '../types/userTypes'

let tempo
let decodedToken 
if (Cookies.get('token') === undefined){
  tempo = {
    email: '',
    firstName: '',
    lastName: '',
    isAdmin: null,
    clubId: null,
    teamId: null,
  }
}
else{
  decodedToken =jwt_decode(Cookies.get('token'))
  tempo = {
    id: decodedToken['sub'],
    email: decodedToken['email'],
    firstName: decodedToken['first_name'],
    lastName: decodedToken['last_name'],
    isAdmin: decodedToken['admin?'],
    clubId: decodedToken['club_id'],
    teamId: decodedToken['team_id'],
  } 
}

const initialState = tempo

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case INFO_USER_UP:
      return {
        ...state,
        id: action.id,
        email: action.email,
        firstName: action.first_name,
        lastName: action.last_name,
        isAdmin: action.isAdmin,
        teamId: action.teamId,
        clubId: action.clubId,
      }
    case INFO_USER_DOWN:
      return {
        ...state,
        email: '',
        firstName: '',
        lastName: '',
        isAdmin: null,
        clubId: null,
      }
    default:
      return {
        ...state
      }
  }
}

export default userReducer
