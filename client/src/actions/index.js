import axios from 'axios';

export const UPDATE_MOVIES = "UPDATE_MOVIES";

export const updateMovies = () => dispatch => {
  axios
  .get("http://localhost:5000/api/movies")
  .then(res => {
    console.log('actions/index.js: updateMovies(): res:', res);
    dispatch({ type: UPDATE_MOVIES, payload: res.data })})
  .catch(err => console.log(err.response));
}