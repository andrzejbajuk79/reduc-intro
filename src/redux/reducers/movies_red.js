import { GET_USERS, MOVIES_LIST, MOVIE_DATA } from "../constants/constants";

/* eslint-disable import/no-anonymous-default-export */
const DEFAULT_STORE = {
	userName: "Francis",
	userId: 1234,
};

export default function (state = DEFAULT_STORE, { type, payload }) {
	switch (type) {
		case MOVIES_LIST:
			return { ...state, moviesList: payload };
		case MOVIE_DATA:
			return { ...state, movieData: payload };
		case GET_USERS:
			return { ...state, users: payload };
		default:
			return state;
	}
}
