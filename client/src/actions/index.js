import axios from "axios";

export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const updateMovies = () => dispatch => {
  axios
    .get("http://localhost:5000/api/movies")
    .then(res => {
      console.log("actions/index.js: updateMovies(): res:", res);
      dispatch({ type: UPDATE_MOVIES, payload: res.data });
    })
    .catch(err => console.log(err.response));
};

export const deleteMovie = id => dispatch => {
  axios
    .delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
      console.log("actions: deleteMovie(): res: ", res);
      dispatch({ type: DELETE_MOVIE, payload: res.data });
    })
    .catch(err => console.error(err.response));
};
