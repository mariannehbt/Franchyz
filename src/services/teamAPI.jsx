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