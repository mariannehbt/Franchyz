function createEvent(gameId, playerId) {

  const data = {event: {
    game_id: gameId,
    player_id: playerId
  }};

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/4/teams/7/players/7/events`
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
      return response 
    });
}

export { createEvent }
