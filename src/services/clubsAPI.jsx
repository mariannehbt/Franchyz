import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function createClub(
	CreationDate,
	ClubName,
	ClubDescription,
	ZipCode,
	City,
	Country,
	Address,
	League,
	Pool,
	Conference
) {
	const data = {
		date_of_creation: CreationDate,
		name: ClubName,
		description: ClubDescription,
		zip_code: ZipCode,
		city: City,
		country: Country,
		address: Address,
		league: League,
		pool: Pool,
		conference: Conference,
	};

	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/clubs.json`;
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

export { createClub };
