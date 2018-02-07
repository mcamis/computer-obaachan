import React from 'react';

class Message extends React.Component {
  // componentDidMount() {
  //     this.scrollView();
  // }
  // scrollView(){
  // 	const elements = document.getElementsByTagName("li");
  // 	const element = elements[elements.length - 1];
  // 	element.scrollIntoView({block: "end", behavior: "smooth"});
  // }
  render() {
    let messageClass = this.props.details.user.type;
    if (this.props.details.loading) {
      messageClass += ' loading';
    }
    return (
      <li className={messageClass}>
        {this.props.details.message}
        <span />
      </li>
    );
  }
}

export default Message;
