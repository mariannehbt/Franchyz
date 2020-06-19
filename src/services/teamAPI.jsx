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

function createTeam(TeamName) {
	// let headers = {
	// 	"Content-Type": "application/json",
	// 	Authorization: Cookies.get("token"),
	// };
	// let request = {
	// 	method: "post",
	// 	headers: headers,
	// };
	// let baseURL = process.env.REACT_APP_API_URL;
	// let endUrl = `/${type}/${id}.json`;
	// let url = baseURL + endUrl;
	// return fetch(url, request)
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		return response;
	// 	});
}

export { createTeam, getAllTeams };
