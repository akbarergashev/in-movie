import API from '../services/api-client';


export const FETCH_GENRES_REQUEST = "FETCH_GENRES_REQUEST";
export const FETCH_GENRES_FAILURE = "FETCH_GENRES_FAILURE";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";



const fetchRequest = () => {
  return {
    type: FETCH_GENRES_REQUEST,
    payload: null
  };
};

const fetchSuccess = (genres: any) => {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: {genres}
  };
};

const fetchFail = (error: any) => {
  return {
    type: FETCH_GENRES_FAILURE,
    payload: {error}
  };
};

export const loadGenres = () => async (dispatch: any) => {
  dispatch(fetchRequest());
  try {
    const {genres} = await API.call("/genre/movie/list");
    
    let genresAsObj = {};
    
    for(let genre of genres) {
      genresAsObj[genre.id] = {
        id: genre.id,
        name: genre.name
      }
    }

    dispatch(fetchSuccess(genresAsObj));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
