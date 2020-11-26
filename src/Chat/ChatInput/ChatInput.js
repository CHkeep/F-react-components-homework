import React, { Component } from 'react';
import './ChatInput.scss';
import { concat } from 'lodash';
import answersData from '../../data/answers.json';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleClick = () => {
    const answers = {
      text: this.state.answer,
      role: 'CUSTOMER',
    };
    const defaultMessage = answersData.find((answer) => answer.tags.includes(answers.text));
    const messages = defaultMessage
      ? concat(this.props.messages, answers, defaultMessage)
      : this.props.messages;
    this.props.answerClick(messages);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
