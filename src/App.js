//jshint esversion:6

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Pom from './components/pomodoro';
import Quotes from './components/quotes';
// import Drums from './components/drums';
import Calculator from './components/calculator';
import ToDoList from './components/todo';
// import MarkdownPreviewer from './components/markdownPreviewer';

// <Pom />
// <Quotes />
// <Drums />

function App() {
  return (
    <div>
      <h1>React Projects</h1>
      <p>A paragraph</p>
      <ToDoList />
      <Calculator />
    </div>
  )
}

export default App;
