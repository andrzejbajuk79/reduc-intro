import { GET_USERS, MOVIES_LIST, MOVIE_DATA } from "../constants/constants";
import axios from "axios";
export const moviesList = () => {
	return {
		type: MOVIES_LIST,
		payload: [
			{ id: 1, name: "Pulp fiction" },
			{ id: 2, name: "Pacific Rim" },
			{ id: 3, name: "Rambo" },
		],
	};
};

export const movieData = () => {
	return {
		type: MOVIE_DATA,
		payload: {
			id: 1, //
			name: "PULP FICTION",
			actors: ["Travolta", "Thurman"],
			year: 1999,
			director: "Tarantino",
		},
	};
};

export const getUser = () => {
	const request = axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((response) => {
			return response.data;
		});

	return {
		type: GET_USERS,
		payload: request,
	};
};
