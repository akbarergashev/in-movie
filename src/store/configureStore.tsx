import { 
  applyMiddleware, 
  createStore 
} from "redux";
import thunk from 'redux-thunk';
import reducers from "../reducers";


export let store: any;

function configureStore() {
  store = createStore(reducers, applyMiddleware(thunk));
  return store
}

export default configureStore;
