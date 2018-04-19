import * as React from 'react';
import Paper from 'material-ui/Paper';
import InfoLine from '../components/InfoLine';


interface IProps {
  style?: any;
  movie: any;
}
const MovieDetails = (props: IProps) => {
  const {movie} = props;
  const country = movie.production_countries.map((count: any) => count.name).join(', ');
  return (
    <div style={{...styles.wrapper, ...props.style}}>
      <Paper src={movie.poster} zDepth={3} style={styles.poster}>
        <img src={movie.poster}/>
      </Paper>
      <div>
        <h1>{movie.title} ({movie.release_date.substr(0, 4)})</h1>
        <h3>{movie.original_title}</h3>
        <InfoLine label="Год выпуска" value={movie.release_date.substr(0, 4)}/>
        <InfoLine label="Длительность" value={`${movie.runtime} мин`}/>
        <InfoLine label="Страна" value={country}/>
        <InfoLine label="Жанр" value={movie.genres}/>
        <InfoLine label="Бюджет" value={movie.budget.toLocaleString()}/>
        <InfoLine label="Cредняя оценка" value={movie.vote_average}/>
        <p>
          <strong>Актеры:</strong>
          <br /> 
          {movie.cast}
        </p>
        <p>
          <strong>Описание:</strong>
          <br />  
          {movie.overview}
        </p>
      </div>
    </div>
  );
} 

const styles = {
  wrapper: {
    display: 'flex',
  },
  poster: {
    width: 300,
    height: 450,
    marginRight: 50
  },
};

export default MovieDetails;