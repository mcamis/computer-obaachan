import React from 'react';
import Messages from './messages'
import autobind from 'autobind-decorator';

// @autobind
class Hello extends React.Component {
	render() {
	   return (
		<div>
			<header>
		         <h1>Computer Obaachan<span>コンピューターおばあちゃん</span></h1>
		         <button onClick={this.props.loadSamples}>Load Messages</button>
		     </header>
	         <Messages />
		</div>
	   )
	}
 };

export default Hello;