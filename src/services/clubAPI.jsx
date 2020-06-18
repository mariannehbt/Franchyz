export const getAllClubs = () => {
	return fetch('http://localhost:3000/clubs.json', {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(response => {
		return response
	})
};