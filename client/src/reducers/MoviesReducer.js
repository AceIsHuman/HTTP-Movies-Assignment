import { UPDATE_MOVIES, DELETE_MOVIE } from '../actions';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_MOVIES:
      return {
        movies: action.payload
      }
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter(movie => {
          if (movie.id !== action.payload) {
            return true
          } return false
        })
      }
    default:
      return state;
  }
}