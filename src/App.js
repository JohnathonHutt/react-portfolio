//jshint esversion:6

//Does not use code splitting

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Home from './components/home';
import Pom from './components/pomodoro';
import Quotes from './components/quotes';
import Drums from './components/drums';
import Calculator from './components/calculator';
import ToDoList from './components/todo';

import MarkdownPreviewer from './components/markdownPreviewer';

// <Pom />
// <Quotes />
// <Drums />

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/drums">
          <Drums />
        </Route>
        <Route path="/pomodoro">
          <Pom />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/todo">
          <ToDoList />
        </Route>
        <Route path="/markdownPreviewer">
          <MarkdownPreviewer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
