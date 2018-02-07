import React from 'react';
import Hello from './hello';
import MessageBox from './message-box';
import Message from './message';
import autobind from 'autobind-decorator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

@autobind
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      bots: {},
    };
  }

  addMessageToState(message) {
    this.setState((prevState, props) => {
      return { messages: [...prevState.messages, message] };
    });

    if (message.user.type === 'human') {
      this.translateMessage(message);
    }
  }

  translateMessage(humanMessage) {
    const originalMessage = humanMessage.message;
    const messageTimestamp = humanMessage.timestamp + 50000;

    const message = {
      user: {
        type: 'bot',
      },
      loading: true,
      timestamp: messageTimestamp,
      message: '',
    };

    // Lol this is so bad, I'm just doing it to mock some UI interactions
    setTimeout(() => {
      this.addMessageToState(message);
      setTimeout(() => {
        this.setState((prevState, props) => {
          let newState = prevState.messages.map(stateMessage => {
            if (stateMessage.timestamp === messageTimestamp) {
              return {
                ...stateMessage,
                loading: false,
                message: humanMessage.message
                  .split('')
                  .reverse()
                  .join(''),
                timestamp: Date.now(),
              };
            }
            return stateMessage;
          });
          return { messages: newState };
        });
      }, 3000);
    }, 350);
  }

  renderMessage(message) {
    return <Message key={message.timestamp} details={message} />;
  }

  render() {
    return (
      <div>
        <Hello />
        <div className="messages">
          <div className="container">
            <ReactCSSTransitionGroup
              transitionName="messageIn"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              component="ul"
            >
              {this.state.messages
                .sort((a, b) => a.timestamp - b.timestamp)
                .map(message => {
                  return this.renderMessage(message);
                })}
            </ReactCSSTransitionGroup>
          </div>
          <MessageBox addMessageToState={this.addMessageToState} />
        </div>
      </div>
    );
  }
}

export default App;
