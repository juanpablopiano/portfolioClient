import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Aux from "../hoc/Auxiliar";

const navbar = () => {
	return (
		<Aux>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						src="/piano.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</Aux>
	);
};

export default navbar;
