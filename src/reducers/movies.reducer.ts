import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_FAILURE, 
  FETCH_MOVIES_SUCCESS, 
  
  FETCH_ONE_MOVIE_REQUEST,
  FETCH_ONE_MOVIE_FAILURE,
  FETCH_ONE_MOVIE_SUCCESS
} from '../actions/movies.action';



const initialState = {
  popular: {
    items: [],
    isFetching: false,
    error: null,
    total_pages: null,
    page: 0
  },
  selected: {
    item: null,
    isFetching: false,
    error: null
  }
};

function MoviesReducer (state = initialState, action: any) {
  
  const { type, payload } = action;

  switch (type) {

    // popular movies
    case FETCH_MOVIES_REQUEST:
      return { ...state, popular: {...initialState.popular, isFetching: true} };
    case FETCH_MOVIES_FAILURE:
      return { ...state, popular: {...initialState.popular, error: payload.error}  };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, popular: {...initialState.popular, items: payload.movies, total_pages: payload.total_pages, page: payload.page}  };


    // single movie
    case FETCH_ONE_MOVIE_REQUEST:
      return { ...state, selected: {...initialState.selected, isFetching: true} };
    case FETCH_ONE_MOVIE_FAILURE:
        return { ...state, selected: {...initialState.selected, error: payload.error}  };
    case FETCH_ONE_MOVIE_SUCCESS:
    return { ...state, selected: {...initialState.selected, item: payload.movie}  };


    default:
      return state;
  }
}

export default MoviesReducer;
