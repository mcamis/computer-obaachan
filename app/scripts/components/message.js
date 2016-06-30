import React from 'react'


class Message extends React.Component {

    componentDidMount() {
        this.scrollView();
    }
    scrollView(){
    	var elements = document.getElementsByTagName("LI");
    	var element = elements[elements.length - 1];
		element.scrollIntoView({block: "end", behavior: "smooth"});
    }
    render() {
    	console.log(this.props.details.loading);
    	var messageClass = this.props.details.user.type;
    	if(this.props.details.loading){
    		messageClass += ' loading';
    	}
	   
		    	return (
			    		<li className={messageClass} > { this.props.details.message }<span></span> < /li>
				)	
    }
}

export default Message;
