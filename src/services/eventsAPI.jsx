import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function createGame(
	EventTitle,
	EventDescription,
	Address,
	City,
	Country,
	ZipCode,
	DateTime,
	Duration,
	Club_id,
	Team_id
) {
	const data = {
		title: EventTitle,
		long_description: EventDescription,
		address: Address,
		city: City,
		country: Country,
		zip_code: ZipCode,
		starting_date_time: DateTime,
		duration: Duration,
		canceled: false,
	};

	let club_id = Club_id;
	let team_id = Team_id;
	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/clubs/${club_id}/teams/${team_id}/games.json`;
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

function createPractice(
	EventTitleP,
	EventDescriptionP,
	AddressP,
	CityP,
	CountryP,
	ZipCodeP,
	DateTimeP,
	DurationP,
	Club_id,
	Team_id
) {
	const data = {
		title: EventTitleP,
		long_description: EventDescriptionP,
		address: AddressP,
		city: CityP,
		country: CountryP,
		zip_code: ZipCodeP,
		starting_date_time: DateTimeP,
		duration: DurationP,
		canceled: false,
	};

	let club_id = Club_id;
	let team_id = Team_id;
	let baseURL = process.env.REACT_APP_API_URL;
	let endUrl = `/clubs/${club_id}/teams/${team_id}/practices.json`;
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

export { createPractice, createGame };
