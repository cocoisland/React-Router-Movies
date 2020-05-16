import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <ul>
    {props.list.map(movie => (
      <li key={movie.id}>
      <NavLink to={`/Movie/${movie.id}`} activeStyle={{color:'red'}} >
      <span key={movie.id} className="saved-movie">{movie.title}</span>
      </NavLink>
      </li>
    ))}
    </ul>
    <div className="home-button">
      <Link to={'/'} >Home</Link>
    </div>
  </div>
);

export default SavedList;
