import React, { Component } from "react";
import axios from "axios";

import Navbar from './Navbar/Navbar';
class App extends Component {

	state = {
		title: "",
		name: "",
		content: ""
	}

	componentDidMount() {
		console.log(process);
		axios.get(`${process.env.REACT_APP_BACKEND_URL}`)
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
				<Navbar />
				<h1>Hello, welcome to my {this.state.title}</h1>
				<p>My name is {this.state.name}</p>
			</div>
		);
	}
}

export default App;
