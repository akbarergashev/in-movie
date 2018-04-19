import Paper from 'material-ui/Paper';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  style?: any;
  id: string;
  poster: string
  title: string
  genres: string
}

const Movie = (props: IProps) => {
  return (
    <div style={{...styles.movieWrapper, ...props.style}}>
      <Link to={`/movie/${props.id}`}>
        <Paper style={styles.paper} zDepth={3}>
          <img src={props.poster} style={styles.image}/>
        </Paper>
        <div style={styles.textArea}>
          <div>{props.title}</div>
          <div style={styles.genreText}>{props.genres}</div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  genreText: {
    color: '#999',
    fontSize: '0.8em',
    marginTop: 5, 
  },
  image: {
    width: 200,
    height: 300
  },
  paper: {
    cursor: 'pointer',
    display: 'inline-block',
    height: 300,
    textAlign: 'center',
    width: 200,
  },
  textArea: {
    alignItems: 'center', 
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    marginTop: 15,
    textAlign: 'center' as 'center'
  },
  movieWrapper: {
    width: 200
  }
};

export default Movie;



