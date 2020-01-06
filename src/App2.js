//jshint esversion:6

//App2 file using code splitting with React.lazy() and React.Suspense

import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home';

//Lazy Loading Routes
const Pom = React.lazy(() => import('./components/pomodoro'));
const MarkdownPreviewer = React.lazy(() => import('./components/markdownPreviewer'));
const Quotes = React.lazy(() => import('./components/quotes'));
const Drums = React.lazy(() => import('./components/drums'));
const Calculator = React.lazy(() => import('./components/calculator'));
const ToDoList = React.lazy(() => import('./components/todo'));


function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/markdownPreviewer" component={MarkdownPreviewer} />
          <Route path="/drums" component={Drums} />
          <Route path="/pomodoro" component={Pom} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/todo" component={ToDoList} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App;
