import API from '../services/api-client';
import {store} from '../store/configureStore';


/**
 * FETCH MANY MOVIES
 */
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
    payload: null
  };
};

const fetchMoviesSuccess = (payload: any) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: {
      movies: payload.movies,
      total_pages: payload.total_pages,
      page: payload.page
    }
  };
};

const fetchMoviesFail = (error: any) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: {error}
  };
};

export const loadPopularMovies = (page: number) => async (dispatch: any) => {
  try {
    dispatch(fetchMoviesRequest());
    const response = await requestPopularMovies(page);
    const movies = prepareMovies(response.results)
    dispatch(fetchMoviesSuccess({movies, page: response.page, total_pages: response.total_pages}))
  } catch (error) {
    dispatch(fetchMoviesFail(error));
  }
};

export const searchMovies = (serchQuery: string, page: number) => async (dispatch: any) => {
  try {
    dispatch(fetchMoviesRequest());
    const response = await requestMoviesByNames(serchQuery, page);
    const movies = prepareMovies(response.results)
    dispatch(fetchMoviesSuccess({movies, page: response.page, total_pages: response.total_pages}))
  } catch (error) {
    dispatch(fetchMoviesFail(error));
  }
};

async function requestPopularMovies (page: number) {
  const response = await API.call(`/discover/movie?page=${page}&sort_by=popularity.desc`);
  return response;
}

async function requestMoviesByNames (serchQuery: string, page: number) {
  const response = await API.call(`/search/movie?query=${serchQuery}&page=${page}&sort_by=popularity.desc`);
  return response;
}



/**
 * FETCHING ONE MOVIE DETAILS
 */

export const FETCH_ONE_MOVIE_REQUEST = "FETCH_ONE_MOVIE_REQUEST";
export const FETCH_ONE_MOVIE_SUCCESS = "FETCH_ONE_MOVIE_SUCCESS";
export const FETCH_ONE_MOVIE_FAILURE = "FETCH_ONE_MOVIE_FAILURE";

const fetchMovieRequest = () => {
  return {
    type: FETCH_ONE_MOVIE_REQUEST,
    payload: null
  };
};

const fetchMovieSuccess = (movie: any) => {
  return {
    type: FETCH_ONE_MOVIE_SUCCESS,
    payload: {movie}
  };
};

const fetchMovieFail = (error: any) => {
  return {
    type: FETCH_ONE_MOVIE_FAILURE,
    payload: {error}
  };
};

export const loadMovie = (movieId: number) => async (dispatch: any) => {
  try {
    dispatch(fetchMovieRequest());
    const response = await API.call(`/movie/${movieId}?append_to_response=credits,recommendations,similar`);
    const movie = prepareMovie(response, {posterWidth: 300})
    movie.cast = response.credits.cast.map((cast: any) => cast.name).slice(0, 10).join(', ')
    movie.recommendations = movie.recommendations.results.map((item: any) => prepareMovie(item));
    movie.similar = movie.similar.results.map((item: any) => prepareMovie(item));
    dispatch(fetchMovieSuccess(movie))
  } catch (error) {
    dispatch(fetchMovieFail(error));
  }
};




function prepareMovies (movies: any) {
  for (let movie of movies) {
    movie = prepareMovie(movie);
  }
  return movies;
}
function prepareMovie (movie: any, options: any = {}) {
  movie.genres = prepareGenre(movie);
  movie.poster = preparePoster(movie, options.posterWidth);
  return movie;
}
function prepareGenre (movie: any) {
  const {genres} = store.getState().genres;
  const movieGenres: any = [];
  
  if (movie.genre_ids) {
    movie.genre_ids.map((id: number) => {
      movieGenres.push(genres[id].name);
    });
  } else if (movie.genres) {
    movie.genres.map((genre: any) => {
      movieGenres.push(genre.name);
    });
  }
  return movieGenres.slice(0, 2).join(', ');
}
function preparePoster (movie: any, posterWidth = 200) {
  return 'https://image.tmdb.org/t/p/w' + posterWidth + movie.poster_path;
}


