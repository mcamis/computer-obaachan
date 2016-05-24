import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello'

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            messages : {},
            bots : {}
        }
    }

	loadSamples() {
		console.log("loading samples");
	    this.setState({
	      messages : require('../sample-messages.js')
	    });
	}

    render() {
    	return(
    		<div>
	        	<Hello name="Obaachan World!" loadSamples={this.loadSamples.bind(this)} />
	    	</div>
    	)
    }
};

export default App;