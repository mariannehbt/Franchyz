export const getAllClubs = () => {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = 'clubs.json'
  let url = baseURL + endUrl
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
};

function getClub(id) {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `clubs${id}.json`
  let url = baseURL + endUrl

  let headers = {
    'Content-Type': 'application/json'
  }

  let request = {
    headers: headers
  }

  fetch(url, request)
    .then()

}
