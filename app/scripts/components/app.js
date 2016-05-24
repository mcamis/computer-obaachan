import React from 'react'
import Hello from './hello'
import MessageBox from './message-box'
import Message from './message'
import autobind from 'autobind-decorator'


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
                        <ul>
                            {Object.keys(this.state.messages).map(this.renderMessage)}
                        </ul>     
                    </div>
                    <MessageBox addMessageToState={this.addMessageToState} />
                </div>
            </div>

    	)
    }
};

export default App;