import React, { Component } from "react";
import axios from "axios";

class App extends Component {

	state = {
		title: "",
		name: "",
		content: ""
	}

	componentDidMount() {
		axios.get("http://localhost:3000")
		.then( json => {
			this.setState({
				title: json.data.title,
				name: `${json.data.name} ${json.data.lastName}`,
				content: json.data.hola
			})
		});
	}

	render() {

		return (
			<div>
				<h1>Hello, welcome to my {this.state.title}</h1>
				<p>My name is {this.state.name}</p>
			</div>
		);
	}
}

export default App;
