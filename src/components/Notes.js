import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "./Notes.css";

class Note extends Component {
  render() {
    return (
      <div className="Notes-Note">
        <span className="Notes-Note-Delete" onClick={this.props.onDelete}>
          &times;
        </span>
        <ReactMarkdown source={this.props.text} />
      </div>
    );
  }
}

class СreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.inputRef = React.createRef();
  }

  onTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  onReset = event => {
    this.setState(
      {
        text: ""
      },
      () => {
        this.inputRef.current.focus();
      }
    );
  };

  onSave = () => {
    this.props.onCreate(this.state.text);
    this.onReset();
  };

  onTextKeyDown = event => {
    console.log(event.keyCode);
    if (event.keyCode === 13 || event.key === "Enter") {
      event.preventDefault();
      this.onSave();
    } else if (event.keyCode === 27) {
      this.onReset();
    }
  };

  render() {
    return (
      <div className="Notes-Create Notes-Note">
        <textarea
          ref={this.inputRef}
          className="Notes-Create-Input"
          value={this.state.text}
          onChange={this.onTextChange}
          onKeyDown={this.onTextKeyDown}
        />
        <div className="Notes-Create-Buttons">
          <button className="Notes-Create-Button" onClick={this.onSave}>
            Сохранить
          </button>
          <button
            className="Notes-Create-Button Notes-Create-Button_Reset"
            onClick={this.onReset}
          >
            Сброс
          </button>
        </div>
      </div>
    );
  }
}

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <СreateNote onCreate={this.props.onCreate} />
        {this.props.notes.map((text, index) => {
          return (
            <Note
              text={text}
              key={index}
              onDelete={() => this.props.onDelete(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default Notes;
