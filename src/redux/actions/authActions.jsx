import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes.jsx'

function loginRequest(){
  return {
    type: LOGIN_REQUEST,
  }
}

function loginSuccess(decodedToken){
  return {
    type: LOGIN_SUCCESS,
    typeUser: decodedToken['scp'],
  }
}

function loginFailure(error){
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}

function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS,
  }

}

export {loginRequest, loginSuccess , loginFailure, logoutSuccess}
