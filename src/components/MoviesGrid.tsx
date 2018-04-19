import * as React from 'react';
import Movie from '../components/MovieCard';

interface IProps {
  style?: any;
  movies: any
}

const Movies = (props: IProps) => {
  return (
    <div style={{...styles.wrapper, ...props.style}}>
        {props.movies.map((movie: any, index: number) => {
          return (
              <div key={index}>
                <Movie style={styles.movie} {...movie} />
              </div>
          );
        })}
    </div>
  );  
};

const styles = {
  wrapper: {
    alignItems: 'top',
    display: 'flex',
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'space-between' as 'space-between'
  },
  movie: {
    marginBottom: 50,
    width: 200
  }
};

export default Movies;



