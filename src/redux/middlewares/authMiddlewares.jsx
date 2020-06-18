import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import * as API from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions'

const logup = (email, password, type, team) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signUp(email, password, type, team)
    
    promise.then((response) => {
      if (response.error !== undefined) {
        dispatch(loginFailure(response.message))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.get('Authorization'))
        dispatch(loginSuccess(decoded_token['sub'], decoded_token['scp']))
        window.location.pathname = '/'
      }
    })
  }
}

const login = (email, password, type) => {
  return (dispatch) => {
    dispatch(loginRequest());
    let promise = API.signIn(email, password, type)
    
    promise.then((response) => {
      console.log(response)
      if (response.error !== undefined) {
        dispatch(loginFailure(response.message))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.get('Authorization'))
        dispatch(loginSuccess(decoded_token['sub'], decoded_token['scp']))
        window.location.pathname = '/'
      }
    })
  }
}

export {login, logup}


