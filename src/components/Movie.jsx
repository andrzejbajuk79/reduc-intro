import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../redux/actions";

const Movie = (props) => {
	const movies = useSelector((state) => state.filmy);
	const dispatch = useDispatch();
	const getMovie = () => {
		dispatch(movieData());
	};

	console.log(movies);
	return (
		<>
			{movies && movies.movieData ? (
				<div>
					name:{movies.movieData.name}
					<br />
					director:{movies.movieData.director}
					<br />
				</div>
			) : null}
			<button onClick={() => getMovie()}>Get movie</button>
		</>
	);
};

export default Movie;
