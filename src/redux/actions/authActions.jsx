import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes.jsx'

function loginRequest(){
  return {
    type: LOGIN_REQUEST,
  }
}

function loginSuccess(id, typeUser){
  return {
    type: LOGIN_SUCCESS,
    id: id,
    typeUser: typeUser
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
