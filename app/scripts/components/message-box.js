import React from 'react';
import autobind from 'autobind-decorator';
import { findDOMNode } from 'react-dom';

@autobind
class MessageBox extends React.Component {
  addMessage(e) {
    e.preventDefault();
    var text = this.refs.message.value;

    if (text.length > 0) {
      var message = {
        user: {
          type: 'human',
        },
        loading: false,
        timestamp: Date.now(),
        message: this.refs.message.value,
      };
      this.props.addMessageToState(message);
      this.refs.messageForm.reset();
    }
  }

  componentDidMount() {
    findDOMNode(this.refs.message).focus();
  }

  render() {
    return (
      <div className="text-box">
        <form onSubmit={this.addMessage} ref="messageForm">
          <input type="text" placeholder="Type here" ref="message" />
        </form>
      </div>
    );
  }
}

MessageBox.propTypes = {
  addMessageToState: React.PropTypes.func.isRequired,
};

export default MessageBox;
