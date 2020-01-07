//jshint esversion:6

import React from 'react';
import './index.css';

const audioData = [
  {display: "Dog", letter: "Q", type: "audio/wav", src: "assets/bark.wav"},
  {display: "F Minor", letter: "W", type: "audio/wav", src: "https://www.pacdv.com/sounds/fart-sounds/fart-2.wav"},
  {display: "F Major", letter: "E", type: "audio/mp3", src: "https://www.pacdv.com/sounds/fart-sounds/fart-7.mp3"},
  {display: "Clap", letter: "A", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  {display: "Heater 1", letter: "S", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {display: "Heater 2",letter: "D", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {display: "Chord 1", letter: "Z", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
  {display: "Chord 2", letter: "X", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
  {display: "Chord 3", letter: "C", type: "audio/mp3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}
];

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Click or type to get started",
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyDown(event) {
    let letter = event.key.toUpperCase();
    if (keys.includes(letter)) {
      //if key pressed has element - gets audio element and plays sound
      let currElem = document.getElementById(letter);
      currElem.play();
      //update displayText
      this.updateDisplay(letter);
      //add and remove pressed class
      this.pressedHelper(letter);
    }
  }

  handleClick(letter) {
    console.log(letter);
    let currElem = document.getElementById(letter);
    currElem.play();
    //update displayText
    this.updateDisplay(letter);
    //add and remove pressed class
    this.pressedHelper(letter);
  }

  pressedHelper(letter) {
    //add and remove pressed class
    document.getElementById("drum-pad-" + letter).classList.add("d-pressed");
    setTimeout(() => {
      document.getElementById("drum-pad-" + letter).classList.remove("d-pressed");
    }, 200);
  }

  updateDisplay(letter) {
    audioData.forEach((data) => {if (letter === data.letter) {
      this.setState({
        displayText: data.display,
      });
    }});
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="d-body">
        <div id="drum-machine">
          <h2 id="display" className="d-display">{this.state.displayText}</h2>
          <DrumPads handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

function DrumPads(props) {
  return (
    <div className="d-wrapper">
      {audioData.map((i) => (
        <div id={"drum-pad-" + i.letter} key={i.letter} className="d-drum-pad" onClick={() => props.handleClick(i.letter)}>
          {i.letter}
          <audio id={i.letter}  className="d-clip">
            <source src={i.src} type={i.type}/>
          </audio>
        </div>
      ))}
    </div>
  )
}

export default Drums;
