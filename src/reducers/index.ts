import MoviesReducer from './movies.reducer';
import GenresReducer from './genres.reducer';
import {combineReducers} from 'redux';


const reducers = combineReducers({
  movies: MoviesReducer,
  genres: GenresReducer
});

export default reducers;