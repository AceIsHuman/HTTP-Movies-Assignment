import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "./reducers/MoviesReducer";
import thunk from 'redux-thunk';
import logger from "redux-logger";

export const store = createStore(moviesReducer, applyMiddleware(thunk, logger));
