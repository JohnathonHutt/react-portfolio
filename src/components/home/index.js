//jshint esversion:6

import React from 'react';
import {
  Link
} from "react-router-dom";
import './index.css';

function Home(props) {
  return (
    <div>
      <h1>React Projects</h1>
      <p>freeCodeCamp projects and a to-do-list for good measure.</p>
      <Link to="/calculator">Calculator!</Link>
      <Link to="/drums">Drums!</Link>
      <Link to="/pomodoro">Pomodoro!</Link>
      <Link to="/quotes">Quotes!</Link>
      <Link to="/todo">A to-do list!</Link>
    </div>
  )
}

export default Home;
