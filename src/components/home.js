import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList, getUser } from "../redux/actions";

class Home extends Component {
	getMoviesHandler() {
		this.props.dispatch(moviesList());
	}
	getUserHandler() {
		this.props.dispatch(getUser());
	}

	render() {
		console.log(this.props);

		const { movies } = this.props;
		return (
			<>
				{movies && movies.moviesList
					? movies.moviesList.map((item) => (
							<div key={item.name}>name : {item.name}</div>
					  ))
					: null}
				<button onClick={() => this.getMoviesHandler()}>Get movies</button>
				<button onClick={() => this.getUserHandler()}>Get USER</button>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return { movies: state.filmy };
};

export default connect(mapStateToProps)(Home);
