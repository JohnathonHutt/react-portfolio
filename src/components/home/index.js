//jshint esversion:6

import React from 'react';
import {
  Link
} from "react-router-dom";
import './index.css';

function Home(props) {
  return (
    <div>
      <h1 className="h-title">React Portfolio</h1>
      <div className="h-about-wrapper">
        <h2 className="h-sub-title">About</h2>
        <p className="h-desc">This portfolio is a collection the projects I built for the freeCodeCamp front end libraries certificate. Each of the projects were built with React and combined using create-react-app, React Router - the site was deployed with a Node/express backend. I also threw in a to-do list for good measure :).</p>
      </div>
      <ul id="route-links">
        <li><Link className="h-link" to="/calculator">Calculator!</Link></li>
        <li><Link className="h-link" to="/markdownPreviewer">Markodown Previewer!</Link></li>
        <li><Link className="h-link" to="/pomodoro">Pomodoro!</Link></li>
        <li><Link className="h-link" to="/todo">A to-do list!</Link></li>
        <li><Link className="h-link" to="/drums">Drums!</Link></li>
        <li><Link className="h-link" to="/quotes">Quotes!</Link></li>
      </ul>
    </div>
  )
}

export default Home;
