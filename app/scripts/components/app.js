import React from 'react'
import Hello from './hello'
import MessageBox from './message-box'
import Message from './message'
import autobind from 'autobind-decorator'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



@autobind
class App extends React.Component {

    constructor() {
        super();

        this.state = {
            messages : {},
            bots : {}
        }
    }

    addMessageToState(message) {
        this.state.messages['message-' + message.timestamp] = message;
        this.setState({ messages : this.state.messages });

        if(message.user.type === "human"){
            this.translateMessage(message);
        }
    }

    translateMessage(humanMessage){
        var reverse = function (s) {
            return s.split('').reverse().join('');
        }

        var message = {
            user : {
                type : 'bot'
            },
            loading: true,
            timestamp : humanMessage.timestamp+2,
            message : reverse(humanMessage.message)
        }

        this.addMessageToState(message);
    }

    renderMessage(key){
        return <Message key={key} index={key} details={this.state.messages[key]} />
    }

    render() {
    	return(
            <div>
                <Hello />
                <div className="messages">
                    <div className="container">  
                        <ReactCSSTransitionGroup transitionName="messageIn" transitionEnterTimeout={500} transitionLeaveTimeout={300} component="ul">
                            {Object.keys(this.state.messages).map(this.renderMessage)}
                        </ReactCSSTransitionGroup>
                    </div>
                    <MessageBox addMessageToState={this.addMessageToState} />
                </div>
            </div>

    	)
    }
};

export default App;