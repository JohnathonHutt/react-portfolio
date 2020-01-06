//jshint esversion:6

import React from 'react';
import {
  Link
} from "react-router-dom";
import './index.css';

function Home(props) {
  return (
    <div>
      <h1 className="h-title">React Projects</h1>
      <p className="h-desc">A collection of my freeCodeCamp projects with a to-do-list thrown in for good measure.</p>
      <ul className="h-links">
        <li><Link to="/calculator">Calculator!</Link></li>
        <li><Link to="/markdownPreviewer">Markodown Previewer!</Link></li>
        <li><Link to="/pomodoro">Pomodoro!</Link></li>
        <li><Link to="/todo">A to-do list!</Link></li>
        <li><Link to="/drums">Drums!</Link></li>
        <li><Link to="/quotes">Quotes!</Link></li>
      </ul>
    </div>
  )
}

export default Home;
