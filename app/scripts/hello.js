import React from 'react';
import Messages from './messages'

class Hello extends React.Component {
	render() {
	   return (
		<div>
			<header>
		         <h1>Computer Obaachan<span>コンピューターおばあちゃん</span></h1>
		     </header>
	         <Messages />
		</div>
	   )
	}
 };

export default Hello;