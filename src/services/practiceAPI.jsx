function createPractice(clubId, teamId, eventTitle, eventDescription, address, city, country, zipCode, dateTime, duration) {
  const data = {
    title: eventTitle,
    long_description: eventDescription,
    address: address,
    city: city,
    country: country,
    zip_code: zipCode,
    starting_date_time: dateTime,
    duration: duration,
    canceled: false,
  };

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${clubId}/teams/${teamId}/practices.json`;
  let url = baseURL + endUrl;

  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then( response => response.json())
  .then((response) => {
    console.log(response)
    return response 
  })
}

const getPractice = (id) => {
  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/practices/${id}.json`;
  let url = baseURL + endUrl;

  let headers = {
    'Content-Type': 'application/json'
  };

  let request = {
    headers: headers
  };

  return fetch(url, request)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    return response});
};

const editPractice = ({club_id, team_id, practice_id, fields}) => {
  console.log(club_id);
  console.log(team_id);
  console.log(practice_id);
  console.log(fields);

  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${club_id}/teams/${team_id}/practices/${practice_id}.json`;
  let url = baseUrl + endUrl;

  let headers = {
    'Content-Type': 'application/json',
    // Authorization: Cookies.get('token')
  };

  let data = {
    title: fields.data.title,
    long_description: fields.data.long_description,
    starting_date_time: fields.data.starting_date_time,
    duration: fields.data.duration,
    address: fields.data.address,
    zip_code: fields.data.zip_code,
    city: fields.data.city,
    country: fields.data.country,
    canceled: fields.data.canceled,
  };

  let request = {
    method: 'put',
    headers: headers,
    body: JSON.stringify(data),
  };

  console.log(data);

  return fetch(url, request)
  .then((response) => {return response});
};

export { createPractice, getPractice, editPractice }
