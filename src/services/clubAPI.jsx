function myClub(id) {

  let headers = {
    'Content-Type': 'application/json',
    Authorization: Cookies.get('token')
  }

  let request = {
    method: 'get',
    headers: headers,
  }
  
  let baseURL = process.env.REACT_APP_API_URL
  let endUrl = `/${id}.json`
  let url = baseURL + endUrl

  fetch(url, request)
    .then(response => response.json())
    .then(response => {return response})
}
  
