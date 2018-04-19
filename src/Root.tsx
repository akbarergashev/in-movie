import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore'


class Root extends React.Component {
  
  public render () {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

export default Root;
