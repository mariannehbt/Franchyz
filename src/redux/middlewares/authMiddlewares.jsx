import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as authAPI from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions';
import { infoUserUp } from 'redux/actions/userActions';

const logup = (email, password, type, team) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    let response = await authAPI.signUp(email, password, type, team);

    if (response.body.errors !== undefined) {
      dispatch(loginFailure(response.body.errors))
    } else {
      Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
      let decoded_token = jwt_decode(response.headers.get('Authorization'))
      dispatch(loginSuccess(decoded_token))
      dispatch(infoUserUp(decoded_token))
    };
  };
};

const login = (email, password, type) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    let response = await authAPI.signIn(email, password, type);

      if (response.body.error !== undefined) {
        dispatch(loginFailure(response.body.error))
      } else {
        Cookies.set('token', response.headers.get('Authorization'), {sameSite: 'lax'})
        let decoded_token = jwt_decode(response.headers.get('Authorization'))
        dispatch(loginSuccess(decoded_token))
        dispatch(infoUserUp(decoded_token))
      };
  };
};

export {login, logup};
