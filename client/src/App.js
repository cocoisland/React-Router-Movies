import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    // spread operator "..." spreading out all items in savedList and appending movie in the list
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
  
      
      <Route exact path='/' >
        <MovieList movies={movieList} /> 
      </Route>
      {/*}
      <Route path='/Movie/:id' component={Movie}  />
    */}
      <Route path='/Movie/:id' >
        <Movie addToSavedList={addToSavedList} />
      </Route>

    </div>
  );
};

export default App;
