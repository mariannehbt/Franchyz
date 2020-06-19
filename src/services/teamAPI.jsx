function getAllTeams(id) {
	const data = {
		id: id,
	};

	return fetch(`http://localhost:3000/clubs/${data.id}/teams.json`, {
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			return response;
		});
}

function createTeam(TeamName, Creator_id, Coach_id, Club_id) {
	Club_id = 9;
	Creator_id = 13;
	Coach_id = 13;
	const data = {
		title: TeamName,
		creator_id: Creator_id,
		club_id: Club_id,
		coach_id: Coach_id,
	};

	console.log(data);

	//clubs/:club_id/teams(.:format)
	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/clubs/${Club_id}/teams.json`;
	let url = baseURL + endUrl;

	return fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((response) => {
		return response;
	});
}

export { createTeam, getAllTeams };
