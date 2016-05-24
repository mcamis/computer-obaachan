import React from 'react'


class Message extends React.Component {
	render() {
		return(
			<li className={this.props.details.user.type}>{this.props.details.message}</li>
		)
	}
}

export default Message;