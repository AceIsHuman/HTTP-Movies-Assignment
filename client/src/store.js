import { createStore } from "redux";
import { moviesReducer } from './reducers/MoviesReducer';

export const store = createStore(moviesReducer);