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
        <h2>About</h2>
        <p className="h-desc">This site is a collection of the projects I built for the freeCodeCamp front end libraries certificate. Each projects was built with React - then all of the projects were combined using create-react-app/React Router (with some code splitting) and the site was deployed with a Node/express backend. I also threw in a to-do list for good measure :).</p>
      </div>
      <RouteLinks />
    </div>
  )
}

class RouteLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkData: [
        {title: "Apple Flavored Calculator", to: "/calculator", img: "assets/calc.png"},
        {title: "Farnsworth's Pomodoro Clock", to: "/pomodoro", img: "assets/pom.png"},
        {title: "Gene's Keyboard", to: "/drums", img: "assets/drum.png"},
        {title: "Markdown Previewer", to: "/markdownPreviewer", img: "assets/markdown.png"},
        {title: "Random Quote Generator", to: "/quotes", img: "assets/quotes.png"},
        {title: "To-Do List", to: "/todo", img: "assets/todo.png"}
      ]
    };
  }
  render() {
    return (
      <div className="h-link-wrapper">
        {this.state.linkData.map((i) => (
          <Link className="h-link" to={i.to} key={"home" + i}>
            <div className="h-project-tile">
              <img className="h-image" src={i.img} alt="A calculator" />
              <h3 className="h-projectTitle">{i.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
