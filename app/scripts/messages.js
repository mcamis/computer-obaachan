import React from "react";

class Messages extends React.Component {
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
			<div>
	            <input type="text"></input>
	            </div>
	        </div>

	     </div>
		)
	}
 };

export default Messages;