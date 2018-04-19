import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/ContentContainer';
import Spinner from '../components/Spinner';
import MoviesCarousel from '../components/MoviesCarousel';
import MovieDetails from '../components/MovieDetails'; 


// action craetors
import {loadMovie} from '../actions/movies.action';


interface IProps {
  style?: any;
  movie: any;
  isFetching: any;
  error: any;
  match: any;
  loadMovie: any;
}
export class Movie extends React.Component <IProps, {}> {
  
  constructor (props: IProps) {
    super(props);
  }

  public componentWillMount () {
    this.props.loadMovie(this.props.match.params.movieId);
  }

  public componentWillReceiveProps (nextProps: any) {
    if ( this.props.match.params.movieId !== nextProps.match.params.movieId ) {
      this.props.loadMovie(nextProps.match.params.movieId);
    }
  }

  public render () {

    if (this.props.isFetching || !this.props.movie) {
      return (<Spinner/>)
    }

    return (
      <Container style={styles.wrapper}>
        <MovieDetails movie={this.props.movie} style={styles.movieDetailsBlock}/>

        <h1>Рекомендуемые фильмы</h1>
        <MoviesCarousel movies={this.props.movie.recommendations} />

        <h1>Похожие фильмы</h1>
        <MoviesCarousel movies={this.props.movie.similar} />

      </Container>
    );
  }
}
  
const styles = {
  wrapper: {
    marginTop: 50,
    marginBottom: 100,
  },
  movieDetailsBlock: {
    marginBottom: 50
  }
};


function mapStateToProps(state: any) {
  return {
    movie: state.movies.selected.item,
    isFetching: state.movies.selected.isFetching,
    error: state.movies.selected.error
  }
}
export default connect(mapStateToProps, {loadMovie})(Movie)