//jshint esversion:6

import React from 'react';
import './index.css';

const marked = require("marked");

//issues with marked library
//also might have issues with global variables - not encapsulated in export...

const options = {breaks: true};
const defaultText = "# Header\n## Sub-Header\n\n> Block Quotes\n\n``<h2>code</h2>``\n\n\n```\n//multi-line code\nconst sum = (x, y) => x + y;\nsum(3,2);   //5\n```\n\nFor **BOLD**\n\nOr _italics_\n\n~~Crossing text out~~\n\nOr [links](https://twitter.com/johnathon_hutt)\n\nTables:\n\n Header | 2nd Header | 3rd Header\n---------|---------|---------\n Content | 2nd Content | 3rd Content\n Another row | yup | It's a row...\n\nLists:\n-Buy groceries\n-Make food with aforementioned groceries\n-Proceed through the day...\n\n Numbered list:\n1. First item\n1. Another item\n1. Last item\n\n\n\nGood news everyone!\nYou can even add images:\n\n![Hubert Farnsworth Futurama: Good news!](https://vignette.wikia.nocookie.net/en.futurama/images/a/ad/GoodNewsEveryone.jpg/revision/latest/scale-to-width-down/250?cb=20090731021518)";

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultText,
      markup: {__html: marked(defaultText, options)},
      editorSize: "standard",
      previewSize: "standard",
    };
    this.handleChange = this.handleChange.bind(this);
    this.shrinkEditor = this.shrinkEditor.bind(this);
    this.enlargeEditor = this.enlargeEditor.bind(this);
    this.shrinkPreview = this.shrinkPreview.bind(this);
    this.enlargePreview = this.enlargePreview.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      markup: {__html: marked(event.target.value, options)}
    });
  }

  enlargeEditor() {
    this.setState({
        editorSize: "standard"
      });
  }

  shrinkEditor() {
    this.setState({
      editorSize: "hidden",
    });
  }

  shrinkPreview() {
    this.setState({
      previewSize: "hidden",
    });
  }

  enlargePreview() {
    this.setState({
      previewSize: "standard",
    });
  }

  render() {
      return (
          <div className="m-body">
            <div className="m-outer-wrapper">
              <Editor shrinkEditor={this.shrinkEditor} editorSize={this.state.editorSize} previewSize={this.state.previewSize} value={this.state.value} handleChange={this.handleChange} enlargeEditor={this.enlargeEditor} />
              <br/>
              <Preview shrinkPreview={this.shrinkPreview} enlargePreview={this.enlargePreview} previewSize={this.state.previewSize} markup={this.state.markup} />
            </div>
          </div>
      );
    }
  }


function Editor(props) {
  if (props.editorSize === "standard") {
    return (
      <div className={"m-wrapper " + ((props.previewSize === "standard") ? "m-ed-margin" : "m-ed-margin-hide")}>
        <div className="m-header">
          Editor
          <button className="m-button m-btn m-plus" onClick={props.enlargeEditor}></button>
          <button className="m-button m-btn m-minus" onClick={props.shrinkEditor}></button>
        </div>
        <div className="m-editor-content">
          <textarea id="editor" className="m-editor" value={props.value} onChange={props.handleChange}></textarea>
        </div>
      </div>
    );
  }

  if (props.editorSize === "hidden") {
    return (
      <div className="m-wrapper m-ed-margin-hide">
        <div className="m-header">
          Editor
          <button className="m-button m-btn m-plus" onClick={props.enlargeEditor}></button>
          <button className="m-button m-btn m-minus" onClick={props.shrinkEditor}></button>
        </div>
        <div className="m-hide-content">
        </div>
      </div>
    );
  }

}

function Preview(props) {
  if (props.previewSize === "standard") {
    return (
          <div className="m-wrapper">
            <div className="m-header">
              Preview
              <button className="m-button m-btn m-plus" onClick={props.enlargePreview}></button>
              <button className="m-button m-btn m-minus" onClick={props.shrinkPreview}></button>
            </div>
            <div className="m-preview-content">
              <div id="preview" className="m-preview" dangerouslySetInnerHTML={props.markup}>
              </div>
            </div>
          </div>
        );
    }
    if (props.previewSize === "hidden") {
      return (
        <div className="m-wrapper">
            <div className="m-header">
              Preview
              <button className="m-button m-btn m-plus" onClick={props.enlargePreview}></button>
              <button className="m-button m-btn m-minus" onClick={props.shrinkPreview}></button>
            </div>
            <div className="m-hide-content">
            </div>
        </div>
      );
    }
 }

 export default MarkdownPreviewer;
