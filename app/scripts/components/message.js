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
    	console.log(this.props.loading);
	    return ( < li className = { this.props.details.user.type } > { this.props.details.message } < /li>)
    }
}

export default Message;
