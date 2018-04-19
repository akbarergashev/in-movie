import * as React from 'react';
import Slider from "react-slick";
import MovieCard from '../components/MovieCard';

interface IProps {
  style?: any;
  movies: any
}
const MoviesCarousel = (props: IProps) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <Slider {...settings}>
      {props.movies.map((mov: any, i: number) => {
        return <div style={{width: 200}} key={i}>
          <MovieCard {...mov}/>
        </div>
      })}
    </Slider>
  );
}

export default MoviesCarousel;
