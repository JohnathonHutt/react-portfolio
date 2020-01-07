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
        <p className="h-desc">This site is a collection the projects I built for the freeCodeCamp front end libraries certificate. Each of the projects were built with React and combined using create-react-app, React Router - the site was deployed with a Node/express backend. I also threw in a to-do list for good measure :).</p>
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
        {title: "Calculator: Apple Flavored", to: "/calculator", img: "assets/calc.png"},
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
          <Link className="h-link" to={i.to} key={i}>
            <div className="h-project-tile">
              <h3 className="h-projectTitle">{i.title}</h3>
              <img className="h-image" src={i.img} alt="A calculator" />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;


// <ul id="route-links">
//   <li><Link className="h-link" to="/calculator">Calculator!</Link></li>
//   <li><Link className="h-link" to="/markdownPreviewer">Markodown Previewer!</Link></li>
//   <li><Link className="h-link" to="/pomodoro">Pomodoro!</Link></li>
//   <li><Link className="h-link" to="/todo">A to-do list!</Link></li>
//   <li><Link className="h-link" to="/drums">Drums!</Link></li>
//   <li><Link className="h-link" to="/quotes">Quotes!</Link></li>
// </ul>
