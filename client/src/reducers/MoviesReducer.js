const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type){
    case ("UPDATE_MOVIES_LIST"):
      return {
        movies: action.payload
      }
    default:
      return state;
  }
}