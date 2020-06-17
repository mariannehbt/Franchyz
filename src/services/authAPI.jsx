import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

function signUp(email, password, type) {
  const data = {[type]: {
  //const data = {coach: 
  //{
    email: email,
    password: password,
  }};

  let baseURL = process.env.REACT_APP_API_URL

  const endUrl = (type) => {
  	if (type === 'coach') {
  		return `/${type}es.json`
  	} else if (type === 'player') {
  		return `/${type}s/sign_in.json`
  	}
  }

  let url = baseURL + endUrl(type)
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
  const data = {[type]: 
  // const data = {coach: 
    {
      email: email,
      password: password,
    }
  };

  let baseURL = process.env.REACT_APP_API_URL

  const endUrl = (type) => {
  	if (type === 'coach') {
  		return `/${type}es/sign_in.json`
  	} else if (type === 'player') {
  		return `/${type}e/sign_in.json`
  	}
  }

  let url = baseURL + endUrl(type)
 
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
