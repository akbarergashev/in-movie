import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './components/Appbar';
import Discover from './containers/Discover';
import Movie from './containers/Movie';
import {loadGenres} from './actions/genres.action';
import {connect} from 'react-redux';


interface IProps {
  loadGenres: any;
}
class App extends React.Component <IProps, {}> {

  public componentWillMount () {
    this.props.loadGenres()
    document.title = 'inMovie - Библиотека фильмов'
  }
  public render () {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <AppBar />
            <Route exact={true} path="/" component={Discover}/>
            <Route path="/movie/:movieId" component={Movie}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default connect(null, {loadGenres})(App)