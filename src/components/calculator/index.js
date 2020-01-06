//jshint esversion:6

import React from 'react';
import './index.css';

const buttonData = [
  {text: "AC", id: "clear", output: null, type: "main"},
  {text: "+/-", id: "changeSign", output: null, type: "main"},
  {text: "%", id: "getPercentage", output: null, type: "main"},
  {text: "÷", id: "divide", output: "/", type: "operator"},
  {text: "7", id: "seven", output: 7, type: "num"},
  {text: "8", id: "eight", output: 8, type: "num"},
  {text: "9", id: "nine", output: 9, type: "num"},
  {text: "x", id: "multiply", output: "*", type: "operator"},
  {text: "4", id: "four", output: 4, type: "num"},
  {text: "5", id: "five", output: 5, type: "num"},
  {text: "6", id: "six", output: 6, type: "num"},
  {text: "-", id: "subtract", output: "-", type: "operator"},
  {text: "1", id: "one", output: 1, type: "num"},
  {text: "2", id: "two", output: 2, type: "num"},
  {text: "3", id: "three", output: 3, type: "num"},
  {text: "+", id: "add", output: "+", type: "operator"},
  {text: "0", id: "zero", output: 0, type: "zero"},
  {text: ".", id: "decimal", output: ".", type: "num"},
  {text: "=", id: "equals", output: null, type: "operator"}
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "0",
      firstVal: null,
      secondVal: null,
      currOperator: null,
      waitingForOperator: true,
      extraSubtract: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handleNums = this.handleNums.bind(this);
    this.decimalUpdate = this.decimalUpdate.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleMain = this.handleMain.bind(this);
    this.changeSign = this.changeSign.bind(this);
  }

  handleClick(event) {
    let id = event.target.id;
    console.log(id);
    let type;
    let text;
    buttonData.forEach((i) => {
      if (i.id === id) {
        type = i.type;
        text = i.text;
      }
    });
    if (type === "num" || type === "zero") {
      //handleNums
      this.handleNums(text);
    } else if (type === "operator") {
      //handle operators
      this.handleOperators(text);
    } else if (type === "main") {
      //handle main
      this.handleMain(text);
    }
  }

  handleNums(text) {
    let newVal;
    if ((this.state.firstVal && this.state.secondVal) || (this.state.firstVal && !this.state.waitingForOperator)) {
      //block leading zeros - check if secondVal is not empty or text is not zero
      if (this.state.secondVal || text !== "0") {
        //update secondVal
        if (text === ".") {
          newVal = this.decimalUpdate(this.state.secondVal);
        } else {
          (this.state.secondVal) ? newVal = this.state.secondVal + text : newVal = text;
        }
        this.setState({
          secondVal: newVal,
          displayText: newVal
        });
      }
      console.log(this.state.secondVal);
    } else {
      //block leading zeros - check if secondVal is not empty or text is not zero
      if (this.state.firstVal || text !== "0") {
        //update firstVal
        if (text === ".") {
          newVal = this.decimalUpdate(this.state.firstVal);
        } else {
          (this.state.firstVal) ? newVal = this.state.firstVal + text : newVal = text;
        }
        this.setState({
          firstVal: newVal,
          displayText: newVal
        });
      }
      console.log(this.state.firstVal);
    }
  }

  handleOperators(text) {
    //requires evaluate method
    console.log("extraSubtract:" + this.state.extraSubtract);
    if (text === "=") {
      //use evaluate
      //handle extra subtract
      if (this.state.extraSubtract) {
        let result = String(this.evaluate()*-1);
        this.setState({
          displayText: result,
          firstVal: result,
          secondVal: null,
          currOperator: null,
          waitingForOperator: true,
        });
      } else {
        let result = String(this.evaluate());
        this.setState({
          displayText: result,
          firstVal: result,
          secondVal: null,
          currOperator: null,
          waitingForOperator: true,
        });
      }
    } else if (this.state.firstVal && this.state.secondVal) {
      //evaluate if operator entered after first two values
      if (this.state.extraSubtract) {
        let result = String(this.evaluate()*-1);
        this.setState({
          displayText: result,
          firstVal: result,
          secondVal: null,
          currOperator: text,
          waitingForOperator: false,
        });
      } else {
        let result = String(this.evaluate());
        this.setState({
          displayText: result,
          firstVal: result,
          secondVal: null,
          currOperator: text,
          waitingForOperator: false,
        });
      }
    } else if (!this.state.waitingForOperator && text === "-") {
      //set flag to indicate "-" after other operator
      console.log("extraSubtract set to true");
      this.setState({
        extraSubtract: true
      });
    } else {
      //set operator
      this.setState({
        currOperator: text,
        waitingForOperator: false,
      });
      //if operator added after "-" remove flag
      if (this.state.extraSubtract) {
        this.setState({
          extraSubtract: false
        });
      }
    }
  }

  evaluate() {
    let operator = this.state.currOperator;
    let a = Number(this.state.firstVal);
    let b = Number(this.state.secondVal);
    switch (operator) {
      case "+":
          return a + b;
      break;
      case "-":
          return a - b;
      break;
      case "x":
            return a * b;
      break;
      case "÷":
            return a / b;
      break;
      default: console.log("firstVal: " + this.state.firstVal + ", secondVal: " + this.state.secondVal + " operator: " + this.state.currOperator);
    }
  }

  decimalUpdate(value) {
    //input: value to add decimal
    //output: update value
    if (!value) {return "0.";}
    value = String(value);
    if (!value.includes(".")) {
      return value + ".";
    }
    return value;
  }

  handleMain(text) {
    switch (text) {
      case "AC":
        this.clear();
        break;
      case "+/-":
        this.changeSign();
        break;
      case "%":
        this.calculatePercentage();
        break;
      default: console.log("See handleMain()");
    }
  }

  clear() {
    //handleMain helper method
    this.setState({
      displayText: "0",
      firstVal: null,
      secondVal: null,
      currOperator: null,
      waitingForOperator: true,
    });
  }

  changeSign() {
    //handleMain helper method
    console.log("ChangeSign was fired");
    if (this.state.secondVal) {
      this.setState({
        displayText: this.state.secondVal * -1,
        secondVal: this.state.secondVal * -1
      });
    } else if (this.state.firstVal) {
      this.setState({
        displayText: this.state.firstVal * -1,
        firstVal: this.state.firstVal * -1
      });
    }
  }

  calculatePercentage() {
    //handleMain helper method
    if (this.state.secondVal && this.state.firstVal) {
      let result = String(this.evaluate() / 100);
      this.setState({
        displayText: result,
        firstVal: result,
        secondVal: null,
        currOperator: null,
        waitingForOperator: true,
      });
    } else if (this.state.firstVal) {
      let result = this.state.firstVal / 100;
      this.setState({
        displayText: result,
        firstVal: result,
      });
    }
  }

  updateDisplay() {
    let currDisplayVal;
    if (this.state.firstVal && this.state.secondVal) {
      currDisplayVal = this.state.secondVal;
    } else if (this.state.firstVal) {
      currDisplayVal = this.state.firstVal;
    } else {
      currDisplayVal = "0";
    }
    //if 2nd value is set and 1st is null sets 0 (should never happen)
    this.setState({
      displayText: currDisplayVal,
    });
  }

  render() {
    return (
      <div className="c-body">
        <div className="c-wrapper">
          <Display displayText={this.state.displayText}/>
          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

function Display(props) {
  return (
    <div className="c-display-wrapper">
      <div id="display" className="c-display">{props.displayText}</div>
    </div>
  );
}

function Buttons(props) {
  return (
    <div className="c-buttons-wrapper">
      {buttonData.map((btn, index) => (
        <button className={"c-button c-" + btn.type} id={btn.id} key={index} onClick={props.handleClick}>{btn.text}</button>
      ))}
    </div>
  );
}

export default Calculator;
