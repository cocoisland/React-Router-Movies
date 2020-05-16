import React from 'react';
import MovieCard from './MovieCard';


const MovieList = props => {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} a={props.sfunc} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {

  return (
    <MovieCard movie ={movie} />
  );
}

export default MovieList;
