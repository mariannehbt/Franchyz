export const getAllTeams = (id) => {
	const data = {
		id: id
	};

	return fetch(`http://localhost:3000/clubs/${data.id}/teams.json`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};

export const getTeam = (clubID, teamID) => {
	const data = {
		clubID: clubID,
		teamID: teamID
	};

	return fetch(`http://localhost:3000/clubs/${data.clubID}/teams/${data.teamID}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};