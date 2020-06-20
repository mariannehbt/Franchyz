import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as API from 'services/authAPI';
import {loginRequest, loginSuccess , loginFailure} from 'redux/actions/authActions';
import { infoUserUp } from 'redux/actions/userActions';
import { resourcesCalls } from 'helpers/reducersHelpers'

function callAPI(callName, args) {
  return async (dispatch) => {
    console.log(args)
    let response = await resourcesCalls[callName](args);
    console.log(response, 'caaaaaaa')
  };
};

export { callAPI };
