import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteMovie } from "../actions";
class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Button
          onClick={e => {
            e.preventDefault();
            this.props.history.push(`/update-movie/${this.state.movie.id}`);
          }}
        >
          Edit Movie Details
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            this.props.deleteMovie(this.state.movie.id);
            this.props.history.push("/");
          }}
        >
          Delete Movie
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteMovie }
)(Movie);
