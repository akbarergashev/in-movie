
import { 
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_FAILURE,
  FETCH_GENRES_SUCCESS
} from '../actions/genres.action';



const initialState = {
  items: null,
  isFetching: false,
  error: null
};

function GenresReducer (state = initialState, action: any) {
  
  const { type, payload } = action;

  switch (type) {

    // popular movies
    case FETCH_GENRES_REQUEST:
      return { ...initialState, isFetching: true };

    case FETCH_GENRES_FAILURE:
      return { ...state, error: payload.error  };
      
    case FETCH_GENRES_SUCCESS:
      return { ...state, genres: payload.genres};


    default:
      return state;
  }
}

export default GenresReducer;
