import React from "react";
import autobind from 'autobind-decorator';

// @autobind
class Messages extends React.Component {

	addMessage(e){
		e.preventDefault();

		var message = {
			user : {
				type : 'human'
			},
			timestamp : Date.now(),
			message : this.refs.message.value
		}

		console.log(message);
		// this.props.addToMessages();
		this.refs.messageForm.reset();
	}

	render() {
	   return (
	     <div className="messages">
		     <div className="container">
			     <p className="usr">What's a Computer Obaachan?</p>
 			     <p className="bot">She is the grandmother of the computer.</p>
 			     <p className="usr">Sort of like Grace Hopper?</p>
 			     <p className="bot">As Grace Hopper art.</p> 			   
			</div>
			<div className="text-box">
				<form onSubmit={this.addMessage.bind(this)} ref="messageForm">
		            <input type="text" placeholder="Type message" ref="message" ></input>
	            </form>
	        </div>

	     </div>
		)
	}
 };

export default Messages;