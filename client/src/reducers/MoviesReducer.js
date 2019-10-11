import { UPDATE_MOVIES } from '../actions';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_MOVIES:
      return {
        movies: action.payload
      }
    default:
      return state;
  }
}