import React from 'react';
import ReactDOM from 'react-dom';

// BrowserRouter enables client version of location, forward, back etc
import {BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router> ,
    document.getElementById('root')

);
