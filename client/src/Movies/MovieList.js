import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { updateMovies } from "../actions";

class MovieList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.updateMovies();
    console.log(this.props.movies);
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies &&
          this.props.movies.map(movie => (
            <MovieDetails key={movie.id} movie={movie} />
          ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { updateMovies }
)(MovieList);
