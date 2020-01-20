//jshint esversion:6

import React from 'react';
import './index.css';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://quotes.stormconsultancy.co.uk/random.json')
      .then(response => response.json())
      .then(data => {
      this.setState({
        author: data.author,
        quote: data.quote
      });
    });
  }

  updateQuote() {
    fetch('https://quotes.stormconsultancy.co.uk/random.json')
      .then(response => response.json())
      .then(data => {
      this.setState({
        author: data.author,
        quote: data.quote,
      });
    });
  }

  render() {
    let encodeQuote = encodeURI(this.state.quote);
    let encodeAuthor = encodeURI(this.state.author);
    let href = "https://twitter.com/intent/tweet?text=" + encodeQuote + " -" + encodeAuthor;
    return (
      <div className="q-body">
        <div id="quote-box">
          <h1>Quotes</h1>
          <br />
          <div className="q-quote-and-author">
            <p id="text">{this.state.quote}</p>
            <br />
            <p id="author"> - {this.state.author}</p>
          </div>
          <button id="new-quote" className="q-btn q-quote-button" onClick={this.updateQuote}>Quote</button>
          <a className="q-btn q-tweet" href={href} data-size="large">
            Tweet
          </a>
        </div>
      </div>
    );
  }
}

export default Quotes;
