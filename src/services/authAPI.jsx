import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import {pluralyzeType} from 'helpers/misc.jsx'

function signUp(email, password, type) {

  type = pluralyzeType(type)
  const data = {[type]: 
  {
    email: email,
    password: password,
  }};

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}.json`
  let url = baseURL + endUrl
  console.log('url', url)
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response })

}

function signIn(email, password, type) {

  type = pluralyzeType(type)
  const data = {[type]: 
    {
      email: email,
      password: password,
    }
  };

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}/sign_in.json`
  let url = baseURL + endUrl
 
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => { return response })
}

function profile(id, type) {

  type = pluralyzeType(type)

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }
  
  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}/${id}.json`
  let url = baseURL + endUrl

  return fetch(url, request)
    .then(response => response.json())
    .then(response => {return response})
}

export {signIn, signUp}
