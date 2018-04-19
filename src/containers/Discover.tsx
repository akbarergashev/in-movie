
import * as React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import {loadPopularMovies, searchMovies} from '../actions/movies.action';
import SearchBar from '../components/SearchBar';
import MoviesGrid from '../components/MoviesGrid';
import logo from '../film.svg';
import Spinner from '../components/Spinner';
import '../App.css';
import Container from '../components/ContentContainer'


interface IProps {
  loadPopularMovies: any; 
  searchMovies: any;
  movies: any
  isFetching: any
  error: any
  total_pages: any;
  page: number;
}

interface IState {
  movies: any;
  hasMoreMovies: boolean;
  searchQuery: string;
  total_pages?: any;
  page?: number
}

class App extends React.Component <IProps, IState> {

  private timeoutId: any;
  private debounceInMs = 300;
  
  constructor (props: IProps) {
    super(props);

    this.state = {
      movies: [],
      hasMoreMovies: true,
      searchQuery: ''
    };
  }

  public componentWillReceiveProps (nextProps: any) {
    this.state.movies.push(...nextProps.movies);
    if (nextProps.total_pages && nextProps.page >= nextProps.total_pages) {
      this.setState({hasMoreMovies: false})
    }
  }
  
  public render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <SearchBar style={styles.searchBar} onChange={this.onSearchQueryChange.bind(this)}/>
          </header>
        </div>
        <Container style={{minHeight: 800}}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMovies.bind(this)} // tslint:disable-line
            hasMore={this.state.hasMoreMovies}
            loader={<Spinner />}
            threshold={1000}
          >
            <MoviesGrid style={styles.movies} movies={this.state.movies}/>
          </InfiniteScroll>
        </Container>
      </div>
    );
  }

  private onSearchQueryChange (searchQuery: string) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.setState({searchQuery, movies: [], hasMoreMovies: true})
      if (searchQuery.replace(/ /g,'') === '') {
        this.props.loadPopularMovies(1)
        return; 
      }
      this.props.searchMovies(searchQuery, )
    }, this.debounceInMs);
  }

  private loadMovies(page: number) {
    if (this.state.searchQuery.replace(/ /g,'') === '') {
      this.props.loadPopularMovies(page)
    } else {
      this.props.searchMovies(this.state.searchQuery, page)
    }
  }
}


const styles = {
  searchBar: {
    marginTop: 30
  },
  movies: {
    marginTop: 50
  }
}

function mapStateToProps (state: any) {
  return {
    error:        state.movies.popular.error,
    isFetching:   state.movies.popular.isFetching,
    movies:       state.movies.popular.items,
    total_pages:  state.movies.popular.total_pages,
    page:         state.movies.popular.page
  }
}
export default connect(
  mapStateToProps, 
  {
    loadPopularMovies, 
    searchMovies
  }
)(App);
