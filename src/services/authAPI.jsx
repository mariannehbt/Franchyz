import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

function signUp(email, password, type) {
  //const data = {[type]: {
  const data = {coach: 
  {
    email: email,
    password: password,
  }};

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}s.json`
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
  //const data = {[type]: 
  const data = {coach: 
    {
      email: email,
      password: password,
    }
  };

  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${type}s/sign_in.json`
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

export {signIn, signUp}
